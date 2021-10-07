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
          easing="Sine.easeOut"/>
      </h1>
      <i
        class="icon-diamond"></i>
    </div>
    <div
      id="settings"
      v-on:click="$router.push('/settings')">
      <i
        class="icon-cog"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Points',
  data() {
    return {
      points: 512,
      lastPoints: 0
    }
  },
  mounted: function () {
    this.$refs.numberOfPoints.play();
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
    width: calc(100% - 50px);
    height: 100%;
    margin: 0 -10px 0 0;
    border-radius: 10px;
    background-color: #2ecc71;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 10px 0 10px;
  }

  section#topBar div#points h1 {
    color: #fff;
    margin: 0 3px 0 0;
  }

  section#topBar div#points i.icon-diamond {
    color: #fff;
  }

  section#topBar div#settings {
    width: 60px;
    height: 100%;
    background-color: #27ae60;
    z-index: 999;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  section#topBar div#settings i.icon-cog {
    color: #fff;
    font-size: 24px;
    margin: 0 0 0 8px;
  }
</style>
