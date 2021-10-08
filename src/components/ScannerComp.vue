<template>
  <div class="scannerComp">
    <div id="interactive" class="viewport"></div>
  </div>
</template>

<script>
  import Quagga from 'quagga';

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

        localStorage.setItem('BarCode', result.codeResult.code)
        localStorage.setItem('TypeOfWaste', 'paper')

        this.$router.push('/trash')
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
