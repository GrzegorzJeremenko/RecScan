<template>
  <div class="settings">
    <h1>Ustawienia</h1>

    <div id="bottom"></div>
  </div>
</template>

<script>
  export default {
    name: 'Settings',
  }
</script>

<style scoped>
  div.settings {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.settings h1 {
    width: 80%;
    height: 80px;
    line-height: 100px;
    font-size: 24px;
    color: #444;
    background-color: #fff;
  }

  div.settings div#bottom {
    width: 100%;
    height: 80px;
  }
</style>
