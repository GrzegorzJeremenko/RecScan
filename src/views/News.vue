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

  import { getNews } from '@/api.js'

  export default {
    name: 'News',
    components: {
      Article
    },
    data() {
      return {
        articles: []
      }
    },
    mounted: function () {
      getNews()
      .then((res) => {
        this.articles = res.data;
      })
      .catch((err) => {
          console.error(err)
        })
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
