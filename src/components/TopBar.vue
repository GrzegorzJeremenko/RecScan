<template>
  <section
    id="topBar">
    <div
      id="points">
      <h1>
        <number
          ref="numberOfPoints"
          :from="lastPoints"
          :to="points"
          :duration="3"
          @complete="completed"
          easing="Sine.easeOut"/>
      </h1>
    </div>
    <div id="settings">
      <i class="icon-diamond"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Points',
  props: ['points', 'lastPoints'],
  methods: {
    navigateTo: function(subpage) {
      if(this.$route.path != subpage) 
        this.$router.push(subpage)
    },
    completed: function() {
      localStorage.setItem('lastPoints', this.points)
    }
  }
}
</script>

<style scoped>
  section#topBar {
      position: fixed;
      min-width: 60px;
      height: 40px;
      top: 30px;
      right: 30px;
      display: flex;
      flex-direction: row;
      z-index: 9999;
  }

  section#topBar div#points {
    width: calc(100% - 45px);
    height: 100%;
    margin: 0 -10px 0 0;
    border-radius: 10px;
    background-color: #2ecc71;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 7px;
  }

  section#topBar div#points h1 {
    color: #fff;
    margin: 0 3px 0 0;
  }

  section#topBar div#settings {
    width: 55px;
    height: 100%;
    background-color: #27ae60;
    z-index: 999;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  section#topBar div#settings i.icon-diamond {
    color: #fff;
    font-size: 18px;
    margin: 0 0 0 5px;
  }
</style>
