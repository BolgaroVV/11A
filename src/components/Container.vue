<template>
  <div class="container">
    <Title/>
    <About/>
    <Squad/>
    <Shedule/>
    <router-link class="plan-btn slide-btn" to="/plan">План работы</router-link>
    <Footer/>
  </div>
</template>

<script setup>
import Title from "./Title.vue"
import About from "./About.vue"
import Squad from "./Squad.vue"
import Shedule from "./Shedule.vue"
import Footer from "./Footer.vue"
</script>

<style>
body {
    overflow: auto;
}

.plan-btn {
  padding: 10px;
}
</style>