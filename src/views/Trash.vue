<template>
  <div
    class="trash">
    <div id="top">
        <div id="trashUp"></div>
    </div>
    <div id="bottom">
        <div id="trashDown"></div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'Trash',
    }
</script>

<style scoped>
    div.trash {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
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
        width: 75%; 
        height: 60%;
        border-radius: 90px 90px 0 0;
        background-color: #f1c40f;
    }

    div.trash div#bottom div#trashDown {
        width: 80%; 
        height: 30px;
        border-radius: 10px;
        background-color: #f39c12;
    }
</style>
