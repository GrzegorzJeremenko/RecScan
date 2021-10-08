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
    },
    methods: {
      navigateTo: function(subpage) {
        if(this.$route.path != subpage) 
          this.$router.push(subpage)
      }
    },
    mounted: function () {
      if(localStorage.getItem('login') != null)
        this.navigateTo('/news')
      else
        this.navigateTo('/register')
    }
  }
</script>

<style scoped>

</style>
