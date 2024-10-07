<template>
  <div class="card">
    <img :src="student.img" alt="UNKNOWN" v-if="mainPage" />
    <div class="card-content">
      <p v-if="mainPage">
        {{ student.name }}
        {{ student.nickname ? `"${student.nickname}"` : "" }}
        {{ student.surname }}
      </p>
      <div class="card-dsc" v-if="!mainPage">
        <div class="card-dsc-content">
          <div class="card-dsc-el"><span class="left-column">ФИ:</span><span>{{ student.name }} {{ student.surname }}</span></div>
          <div class="card-dsc-el"><span class="left-column">Прозвище:</span><span>{{ student.nickname ? `"${student.nickname}"` : "unknown" }}</span></div>
          <div class="card-dsc-el"><span class="left-column">Должность:</span><span>{{ student.role }}</span></div>
          <div class="card-dsc-el">
            <span class="left-column">ДР:</span><span>{{ student.birthdate }}</span>
          </div>
          <div class="card-dsc-el"><span class="left-column">Гендер:</span><span>{{ student.gender }}</span></div>
          <div class="card-dsc-el"><span class="left-column">Страна:</span><span>{{ student.birthplace }}</span></div>
          <div class="card-dsc-el"><span class="left-column">Транспорт:</span><span>{{ student.transport }}</span></div>
          <div class="card-dsc-el">
            <span class="left-column">Импланты:</span><span>{{ student.implants }}</span>
          </div>
          <div class="card-dsc-el"><span class="left-column">Оружие:</span><span>{{ student.weapon }}</span></div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          class="card-button arrow arrow-left"
          @click="swiper.slidePrev()"
        >
          <img src="../../public/arrow-chevron.svg" alt="" />
        </button>
        <button class="card-button" id="btn" @click="moreClick">
          More Info
        </button>
        <button class="card-button arrow" @click="swiper.slideNext()">
          <img src="../../public/arrow-chevron.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
import { useSwiper } from "swiper/vue";

const swiper = useSwiper(); 
let mainPage = ref(true);
function moreClick() {
  mainPage.value = !mainPage.value;
}

defineProps({
  student: Object,
});

</script>

<style lang="scss">
@import "../assets/main.css";

.non-active {
  display: none;
}

.active {
  display: relative;
}

.card {
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;
  background-color: rgb(0, 192, 234);
  border-radius: 17px;
  height: 400px;
  padding: 14px 14px;
  box-shadow: 0px 0px 10px 0px rgba(0, 255, 255, 0.5);
  width: 315px;
  height: 400px;
  img {
    border-radius: 15px;
  }
  p {
    line-height: 1;
    color: var(--dark-color);
    font-family: Jura;
    font-weight: 700;
    font-size: 18px;
  }
}

.card-content {
  display: grid;
  flex-grow: 1;
  align-items: center;
}

.card-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-button {
  background-color: var(--dark-color);
  border-radius: 10px;
  padding: 6px 25px;
  line-height: 1;
  font-size: 18px;
  font-family: Jura;
}

.arrow {
  padding: 0;
  width: 30px;
  border-radius: 0;
  box-sizing: content-box;
  background: none;
  &-left {
    transform: rotate(180deg);
  }
}

.card-dsc-content {
    span {
        color: var(--dark-color);
        font-weight: 700;
        font-size: 16px;
        text-align: left;
        flex-wrap: nowrap;
        text-wrap: wrap;
    }
    .left-column {
        margin-right: 8px;
        text-align: right;
    }
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.card-dsc-el {
    display: grid;
    grid-template-columns: 40% 60%;
}
</style>
