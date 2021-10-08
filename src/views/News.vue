<template>
  <div class="news">
    <h1>Aktualności</h1>
    <Article 
      v-for="(article, index) in articles"
      :articleData="article"
      :key="index" />
    <div id="bottom"></div>
  </div>
</template>

<script>
  import Article from '@/components/Article.vue'

  export default {
    name: 'News',
    components: {
      Article
    },
    data() {
      return {
        articles: [
          {
            type: 'video',
            source: 'CwAP97KJTIg',
            title: 'Recykling odpadów w Polsce',
            description: 'Ilość surowców odzyskiwanych z odpadów komunalnych w Polsce stopniowo wzrasta. Coraz więcej z nich zamiast na składowiska trafia do ponownej przeróbki.',
            date: '25.01.2021'
          },
          {
            type: 'image',
            source: 'https://lh3.googleusercontent.com/proxy/vFHz4EtEFru3_lwIoQquAL5nfVL3ogxVZnprQqkApiWfRzHwVJLOka5Hs-iQlYT18BlUi3xJiFAqrhXT5KnsEjAYesRcG2zJEvKQvdQEzKdeAfHejCOxEUfbNl6nuWAPz7IYiCGHh9uYZAIDhQ4v_A',
            title: 'Jak segregować?',
            description: 'Główna zasada Jednolitego Systemu Segregacji Odpadów (JSSO) jest jedna – należy oddzielać surowce od odpadów, które nie nadają się do powtórnego przetworzenia. Jakie surowce oddzielamy? Są to: metale i tworzywa sztuczne, papier, a także opakowania szklane i odpady biodegradowalne.',
            date: '22.01.2021'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  div.news {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.news h1 {
    width: 80%;
    height: 80px;
    line-height: 100px;
    font-size: 24px;
    color: #444;
    background-color: #fff;
  }

  div.news div#bottom {
    width: 100%;
    height: 80px;
  }
</style>
