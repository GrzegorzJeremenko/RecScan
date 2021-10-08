<template>
  <div class="award">
    <h1>Ranking</h1>
    <UsersRanking
      v-for="(user, index) in users"
      :userData="user"
      :id="index"
      :key="index"/>
    <div id="bottom"></div>
  </div>
</template>

<script>
  import UsersRanking from '@/components/UsersRanking.vue'

  export default {
    name: 'Award',
    components: {
      UsersRanking
    },
    data() {
      return {
        users: [
          {
            username: 'Grzegorz',
            points: 512
          },
          {
            username: 'Konrad',
            points: 200
          },
          {
            username: 'Adam',
            points: 187
          },
          {
            username: 'Jan',
            points: 147
          }
        ]
      }
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
