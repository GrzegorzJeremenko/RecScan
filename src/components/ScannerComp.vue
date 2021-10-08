<template>
  <div class="scannerComp">
    <div id="interactive" class="viewport"></div>
  </div>
</template>

<script>
  import Quagga from 'quagga';

  import { getWasteType } from '@/api.js';

  export default {
    name: 'ScannerComp',
    data() {
      return {
        scanCode: ''
      }
    },
    methods: {
      detect: function(result) {
        Quagga.stop()
        
        if (this.scanCode !== result.codeResult.code) {
          this.scanCode = result.codeResult.code

          getWasteType(result.codeResult.code)
          .then((res) => {
            localStorage.setItem('typeOfWaste', res.data.type)
            console.log(localStorage.getItem('points'))
            localStorage.setItem('points', parseInt(localStorage.getItem('points')) + 1)
            console.log(localStorage.getItem('points'))

            this.$router.push('/trash')
          })
          .catch((err) => {
            console.error(err)
          })
        }
      }
    },
    mounted: function () {
      Quagga.init({
        inputStream : {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector('#interactive.viewport')
        },
        decoder: {
          readers: ["ean_reader"]
        }
      }, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Initialization finished. Ready to start")
          Quagga.start()
        }
      })

      Quagga.onDetected(this.detect)
    },
    destroy: function() {
      Quagga.stop()
    }
  }
</script>

<style scoped>
  div.scannerComp {
    width: 100%;
    height: 100vh;
    background-color: #000;
  }

  div.scannerComp div#interactive {
    width: 100%;
    height: 100%;
  }
</style>
