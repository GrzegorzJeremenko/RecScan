<template>
  <div class="hello">
    <div id="interactive" class="viewport">
    </div>
  </div>
</template>

<script>
  import Quagga from 'quagga';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        scanCode: ''
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
        if (err) console.log(err)
        else {
          console.log("Initialization finished. Ready to start")
          Quagga.start()
        }
      })

      Quagga.onDetected(function(result) {
        var code = result.codeResult.code

        console.log(result)
        console.log(code)
      })
    },
    destroy: function() {
      Quagga.stop()
    }
  }
</script>

<style scoped>
  
</style>
