<template>
  <div class="container">
    <Title/>
    <About/>
    <Squad/>
    <Footer/>
  </div>
</template>

<script setup>
import Title from "./Title.vue"
import About from "./About.vue"
import Squad from "./Squad.vue"
import Footer from "./Footer.vue"
</script>

<style>
body {
    overflow: auto;
}
</style>