<template>
  <article>
    <iframe
        v-if="articleData.type == 'video'"
        :src="videoLink(articleData.source)"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <img
        v-else-if="articleData.type == 'image'"
        :src="articleData.source"/>

    <h1>{{ articleData.title }}</h1>

    <div class="line"></div>
    
    <h2
        v-on:click="shortDescription = !shortDescription">
        {{ descripton(articleData.description) + descriptionShow }}
    </h2>
    
    <h3>{{ articleData.date }}</h3>
  </article>
</template>

<script>
export default {
  name: 'Article',
  props: {
    articleData: Object
  },
  data() {
      return {
          shortDescription: true
      }
  },
  computed: {
      descriptionShow: function() {
            if(this.shortDescription)
                return ' Czytaj dalej'
            else
                return ' Zwiń'
      }
  },
  methods: {
    videoLink: function(videoId) {
        return 'https://www.youtube.com/embed/' + videoId
    },
    descripton: function(description) {
        if(this.shortDescription)
            return description.substr(0, 45) + "..."
        else
            return description
    }
  }
}
</script>

<style scoped>
    article {
        width: 80%;
        background-color: #2ecc71;
        margin: 0 0 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0 0 5px 5px;
    }

    article iframe {
        width: 100%;
        height: auto;
    }

    article img {
        width: 100%;
        height: auto;
    }

    article h1 {
        width: 90%;
        margin: 10px 0 10px 0;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
    }

    article div.line {
        width: 80%;
        border-bottom: 1px solid #fff;
    }

    article h2 {
        width: 90%;
        margin: 10px 0 5px 0;
        color: #fff;
        font-size: 16px;
        line-height: 17px;
        text-align: justify;
    }

    article h3 {
        width: 90%;
        margin: 10px 0 10px 0;
        color: #fff;
        font-size: 15px;
    }
</style>
