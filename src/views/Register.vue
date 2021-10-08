<template>
  <div class="register">
    <div id="logo">
        <i class="icon-recycle"></i>
        <h1>RecScan</h1>
    </div>

    <form action="javascript:void(0);">
        <div>
            <label for="name">Jak masz na imię?</label>
        </div>
        <input
            type="text"
            id="name"
            ref="name"
            placeholder="np. Adam"/>
        
        <h1>{{ error }}</h1>

        <i 
            class="icon-right-open"
            v-on:click="register()"></i>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
        return {
            error: ''
        }
    },
    methods: {
        navigateTo: function(subpage) {
            if(this.$route.path != subpage) 
            this.$router.push(subpage)
        },
        register: function() {
            let name = this.$refs.name.value;
            let nameRegex = /^[a-zA-Z ]+$/g;

            if(name != "") {
                if(nameRegex.test(name)) {
                    localStorage.setItem('login', name);
                    this.navigateTo('/news')
                } else this.error = "Pole zawiera znaki specjalne."
            } else this.error = "Pole nie może być puste."
        }
    }
  }
</script>

<style scoped>
    div.register {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(45deg, #2ecc71, #27ae60);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div.register div#logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0 30px 0;
    }

    div.register div#logo i.icon-recycle {
        color: #fff;
        font-size: 70px; 
    }

    div.register div#logo h1 {
        color: #fff;
        font-size: 30px;
    }

    div.register form {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div.register form div {
        width: 100%;
        margin: 0 0 10px 0;
    }

    div.register form div label {
        font-size: 20px;
        color: #fff;
        margin: 0 0 0 10px;
    }

    div.register form input {
        width: 100%;
        background-color: #fff;
        display: block;
        border-radius: 5px;
        padding: 8px 10px 8px 10px;
        appearance: none;
        color: #000;
        box-sizing: border-box;
        border: none;
        font-size: 18px;
        outline: none;
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);
        margin: 0 0 10px 0;
    }

    div.register form h1 {
        font-size: 16px;
        min-height: 16px;
        color: #e74c3c;
        margin: 0 0 20px 0;
    }

    div.register form i {
        color: #fff;
        font-size: 30px;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    }
</style>
