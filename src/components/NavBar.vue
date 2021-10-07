<template>
  <nav>
    <li>
      <ol
        v-on:click="$router.push('/news')">
        <i
          class="icon-home"></i>
      </ol>
      <ol
        class="circle"
        v-on:click="$router.push('/scanner')">
        <i
          class="icon-qrcode"></i>
      </ol>
      <ol
        v-on:click="$router.push('/award')">
        <i
          class="icon-award"></i>
      </ol>
    </li>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
  nav {
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0;
    background-color: #2ecc71;
    z-index: 9999;
    border-radius: 10px 10px 0 0;
  }

  nav li {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  nav li ol {
    width: 20%;
    height: 100%;
    text-align: center;
    line-height: 60px;
  }

  nav li ol.circle {
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 90px;
    background-color: #27ae60;
    margin: -20px 0 0 0;
  }

  nav li ol.circle i {
    font-size: 32px;
  }

  nav li ol i {
    color: #fff;
    font-size: 28px;
  }
</style>
