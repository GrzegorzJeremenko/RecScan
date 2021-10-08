<template>
  <div
    class="userRank"
    :style="{ width: width + '%', backgroundColor: backgroundColor}">
      <h1>{{ userData.username }}</h1>
      <div>
          <h2>
              <number
                ref="numberOfPoints"
                :from="0"
                :to="userData.points"
                :duration="2"
                easing="Sine.easeOut"/>
          </h2>
          <i class="icon-diamond"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'UsersRanking',
  props: {
    userData: Object,
    id: Number
  },
  data() {
      return {
        width: '',
        backgroundColor: ''
      }
  },
  mounted: function () {
    this.$refs.numberOfPoints.play();

    switch(this.id) {
        case 0:
            this.width = "80"; 
            this.backgroundColor = "#f1c40f"
            break;

        case 1:
            this.width = "75"; 
            this.backgroundColor = "#95a5a6"
            break;

        default: 
            this.width = "70"; 
            this.backgroundColor = "#2ecc71"
            break;
    }
  }
}
</script>

<style scoped>
    div.userRank {
        height: 40px; 
        margin: 0 0 20px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius: 5px;
    }

    div.userRank h1 {
        font-size: 18px;
        color: white;
    }

    div.userRank div {
        display: flex;
        flex-direction: row;
    }

    div.userRank div h2 {
        font-size: 18px;
        color: white;
    }

    div.userRank div i {
        font-size: 18px;
        color: white;
    }
</style>
