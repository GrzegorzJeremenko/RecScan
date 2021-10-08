<template>
  <div class="additem">
    <div id="logo">
        <i class="icon-recycle"></i>
        <h1>RecScan</h1>
    </div>

    <form action="javascript:void(0);">
        <div>
            <label for="name">Nazwa</label>
        </div>
        <input
            type="text"
            id="name"
            ref="name"
            placeholder="np. Opakowanie po mleku"/>
        <div>
            <label for="material">Materiał</label>
        </div>
        <select name="material" id="material" ref="material">
            <option value="plastic">Plastik lub metal</option>
            <option value="paper">Papier</option>
            <option value="bio">Bio</option>
            <option value="glass">Szkło</option>
            <option value="other">Inne</option>
        </select>
        
        <h1>{{ error }}</h1>

        <i 
            class="icon-right-open"
            v-on:click="addNewItem()"></i>
    </form>
  </div>
</template>

<script>
    import { addItem, getWasteType } from '@/api.js'

  export default {
    name: 'AddItem',
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
        addNewItem: function() {
            let name = this.$refs.name.value
            let materialType = this.$refs.material.value
            let nameRegex = /^[a-zA-Z ]+$/g
            let barcode = localStorage.getItem('lastScanCode')

            if(name != "") {
                if(nameRegex.test(name, materialType)) {
                    addItem(name, barcode, materialType)
                    .then(() => {
                        localStorage.removeItem('lastScanCode')

                        getWasteType(barcode)
                        .then((res) => {
                            localStorage.setItem('typeOfWaste', res.data.type)
                            localStorage.setItem('points', parseInt(localStorage.getItem('points')) + 1)

                            this.$router.push('/trash')
                        })
                        .catch((err) => {
                            console.error(err)
                        })
                    })
                    .catch((err) => {
                        console.error(err)

                        this.error = "Spróbuj ponownie później."
                    })
                } else this.error = "Pole zawiera znaki specjalne."
            } else this.error = "Pole nie może być puste."
        }
    },
    mounted: function () {
        if(localStorage.getItem('lastScanCode') == null) 
            this.navigateTo('/news')
    }
  }
</script>

<style scoped>
    div.additem {
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

    div.additem div#logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0 30px 0;
    }

    div.additem div#logo i.icon-recycle {
        color: #fff;
        font-size: 70px; 
    }

    div.additem div#logo h1 {
        color: #fff;
        font-size: 30px;
    }

    div.additem form {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div.additem form div {
        width: 100%;
        margin: 0 0 10px 0;
    }

    div.additem form div label {
        font-size: 20px;
        color: #fff;
        margin: 0 0 0 10px;
    }

    div.additem form input {
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

    div.additem form select {
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

    div.additem form h1 {
        font-size: 16px;
        min-height: 16px;
        color: #e74c3c;
        margin: 0 0 20px 0;
    }

    div.additem form i {
        color: #fff;
        font-size: 30px;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    }
</style>
