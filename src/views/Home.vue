<template>
  <div class="home">
    <TopBar :points="points" :lastPoints="lastPoints" />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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
    data() {
      return {
        points: "",
        lastPoints: ""
      }
    },
    methods: {
      navigateTo: function(subpage) {
        if(this.$route.path != subpage) 
        {
          if(localStorage.getItem('lastPoints') != null)
            localStorage.removeItem('lastPoints')

          this.$router.push(subpage)
        }
      }
    },
    beforeMount: function () {
      if(localStorage.getItem('login') != null) 
        this.navigateTo('/news')
      else
        this.navigateTo('/register')

      if(localStorage.getItem('points') != null)
        this.points = localStorage.getItem('points')

      if(localStorage.getItem('lastPoints') != null)
        this.lastPoints = localStorage.getItem('lastPoints')
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
