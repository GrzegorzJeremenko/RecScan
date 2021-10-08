<template>
  <div class="award">
    <h1>Ranking</h1>
    <div id="bottom"></div>
  </div>
</template>

<script>
  export default {
    name: 'Award',
    components: {

    }
  }
</script>

<style scoped>
  div.award {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.award h1 {
    width: 80%;
    height: 80px;
    line-height: 100px;
    font-size: 24px;
    color: #444;
    background-color: #fff;
  }

  div.award div#bottom {
    width: 100%;
    height: 80px;
  }
</style>
