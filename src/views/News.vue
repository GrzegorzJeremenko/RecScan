<template>
  <div class="news">
    <h1>Aktualności</h1>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      news: [
        {
          type: 'video',
          source: 'https://www.youtube.com/watch?v=CwAP97KJTIg',
          title: 'Jak segreguje się śmieci',
          description: 'Ilość surowców odzyskiwanych z odpadów komunalnych w Polsce stopniowo wzrasta. Coraz więcej z nich zamiast na składowiska trafia do ponownej przeróbki.',
          date: '25.01.2021'
        }
      ]
    }
  }
}
</script>

<style scoped>
  div.news h1 {
    position: fixed;
    left: 30px;
    top: 30px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    color: #444;
  }
</style>
