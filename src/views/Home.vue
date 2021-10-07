<template>
  <div class="home">
    <TopBar />
    <router-view/>
    <NavBar />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import TopBar from '@/components/TopBar.vue'

  export default {
    name: 'Home',
    components: {
      NavBar,
      TopBar
    }
  }
</script>

<style scoped>

</style>
