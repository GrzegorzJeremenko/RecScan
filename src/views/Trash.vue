<template>
  <div class="trash">
    <i 
    class="icon-left-open"
    v-on:click="navigateTo('/news')"></i>
    <h1>
        +1 
        <i class="icon-diamond"></i>
    </h1>
    <h2>{{ wasteName }}</h2>
    <div id="top">
        <div id="trashUp">
            <div id="hole"></div>
            <i class="icon-recycle"></i>
        </div>
    </div>
    <div id="bottom">
        <div id="trashDown"></div>
    </div>
    <h3>Wyrzuć do {{ binColor }} pojemnika</h3>
  </div>
</template>

<script>
    export default {
        name: 'Trash',
        mounted: function () {
            if(localStorage.getItem('typeOfWaste') != null) {
                switch(localStorage.getItem('typeOfWaste')) {
                    case 'plastic':
                        this.trashColor = '#fbc531';
                        this.wasteName = 'Plastik i metal'
                        this.binColor = 'żółtego'
                    break;
                    case 'glass':
                        this.trashColor = '#4cd137';
                        this.wasteName = 'Szkło'
                        this.binColor = 'zielonego'
                    break;
                    case 'bio':
                        this.trashColor = '#795548';
                        this.wasteName = 'Bio'
                        this.binColor = 'brązowego'
                    break;
                    case 'paper':
                        this.trashColor = '#00a8ff';
                        this.wasteName = 'Papier'
                        this.binColor = 'niebieskiego'
                    break;
                    case 'other':
                        this.trashColor = '#353b48';
                        this.wasteName = 'Inne'
                        this.binColor = 'czarnego'
                    break;
                }

                document.querySelector('#trashUp').style.backgroundColor = this.trashColor;
                document.querySelector('#trashDown').style.backgroundColor = this.trashColor;

                localStorage.removeItem('typeOfWaste')
            } else this.navigateTo('/news');
        },
        data() {
            return {
                trashColor: '',
                wasteName: '',
                binColor: ''
            }
        },
        methods: {
            navigateTo: function(subpage) {
                if(this.$route.path != subpage) 
                    this.$router.push(subpage)
            }
        }
    }
</script>

<style scoped>
    @keyframes point {
        0% {
            top: 15%;
            opacity: 1;
        }

        100% {
            top: 5%;
            opacity: 0;
        }
    }

    @keyframes binText {
        0% {
            transform: rotateZ(5deg)
        }

        50% {
            transform: rotateZ(-5deg)
        }

        100% {
            transform: rotateZ(5deg)
        }
    }

    div.trash i.icon-left-open {
    position: fixed;
    top: 30px;
    left: 20px;
    font-size: 30px;
    color: #fff;
    z-index: 999;
  }

    div.trash {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    div.trash h1 {
        position: fixed;
        top: 5%;
        opacity: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 26px;
        animation: point 3s;
    }

    div.trash h2 {
        position: fixed;
        bottom: 50%;
        width: 100%;
        text-align: center;
        font-size: 26px;
    }

    div.trash h3 {
        position: fixed;
        bottom: 10%;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 26px;
        animation: binText 3s infinite;
    }

    div.trash div#top {
        width: 100%;
        height: 70%;
        background-image: linear-gradient(45deg, #3498db, #2980b9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    div.trash div#bottom {
        width: 100%;
        height: 30%;
        background-image: linear-gradient(45deg, #2ecc71, #27ae60);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div.trash div#top div#trashUp {
        width: 70%; 
        height: 60%;
        border-radius: 90px 90px 0 0;
        background-color: #f1c40f;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-left: 2px solid #000;
        border-right: 2px solid #000;
        border-top: 2px solid #000;
    }

    div.trash div#top div#trashUp div#hole {
        width: 30%; 
        height: 12%;
        border-radius: 90px;
        background-color: #000;
        opacity: .9;
    }

    div.trash div#top div#trashUp i.icon-recycle {
        font-size: 60px;
        opacity: .7;
    }

    div.trash div#bottom div#trashDown {
        width: 75%; 
        height: 30px;
        border-radius: 10px 10px 5px 5px;
        background-color: #f1c40f;
        border: 2px solid #000;
    }

</style>
