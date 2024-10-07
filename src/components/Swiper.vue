<template>
    <swiper
        :slides-per-view="1"
        :space-between="50"
        :loop="isLoopActive"
        >
        <swiper-slide v-for="(item, index) in data" :key="index">
          <Card :student="item"/>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import Card from './Card.vue'
import { onMounted, ref } from 'vue';

defineProps({
  data: Object
})
let isLoopActive = false
onMounted(() => isLoopActive=true)
</script>

<style>
@import 'swiper/css';
.swiper-slide {
  padding: 10px;
}
</style>