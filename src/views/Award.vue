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
          },
          {
            username: 'Bartek',
            points: 137
          },
          {
            username: 'Kacper',
            points: 121
          },
          {
            username: 'Szymon',
            points: 111
          },
          {
            username: 'Mateusz',
            points: 102
          },
          {
            username: 'Martyna',
            points: 98
          },
          {
            username: 'Daniel',
            points: 87
          },
          {
            username: 'Patrycja',
            points: 64
          },
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
