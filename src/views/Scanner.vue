<template>
  <div class="scanner">
    <i 
      class="icon-left-open"
      v-on:click="navigateTo('/news')"></i>
    <ScannerComp />
  </div>
</template>

<script>
import ScannerComp from '@/components/ScannerComp.vue'

export default {
  name: 'Scanner',
  components: {
      ScannerComp
  },
  methods: {
    navigateTo: function(subpage) {
      if(this.$route.path != subpage) 
        this.$router.push(subpage)
    }
  }
}
</script>

<style scoped>
  div.scanner i {
    position: fixed;
    top: 30px;
    left: 30px;
    font-size: 30px;
    color: #fff;
    z-index: 999;
  }
</style>
