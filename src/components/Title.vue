<template>
  <div class="title">
    <h1 class="logo">WE ARE ARAGORN</h1>
    <span class="logo-dsc">Multinational Corporation | Techology Company</span>
    <div class="arrow-block">
        <span class="uppercase">scroll down</span>
        <img src="../../public/arrow.png" alt="" class="arrow">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Iceland:regular);
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
@import "../assets/main.css";

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    position: relative;
}

.logo {
    font-family: var(--rubik-font);
    font-size: 60px;
    text-align: center;
    line-height: 1;
    text-shadow: 0px 0px 5px var(--main-color);
}

.arrow {
    width: 20px;
}

.logo-dsc {
    font-size: 16px;
    font-family: var(--iceland-font);
    color: var(--second-color);  
    text-shadow: none;
}

.arrow-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(10vh);
    span{
        color: var(--second-color);
        // font-family: var(--rubik-font);
        font-size: 15px;
    }
}
</style>