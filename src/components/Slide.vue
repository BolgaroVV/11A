<template>
  <div class="slide">
    <div class="slide-img" @click="isSkipActive=true"></div>
    <button class="skip slide-btn" v-if="isSkipActive" @click="skipIntro">Пропустить</button>
    <div class="slide-content">
        <div class="reveal-text" :data-text="data[activeSlide].text"></div>
        <button class="slide-btn" v-if="isBtnActive" @click="changeSlide">Дальше</button>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, defineProps} from 'vue'
import { RouterLink } from 'vue-router'
import router from '../router'

let isBtnActive = ref(false)
let isSkipActive = ref(false)
let data = [
  {
    img: "url(../../public/com/slide-0.webp)",
    smallImg: "url(../../public/com/slide-0-cut.webp)",
    text: "2081. Мир разделен на 6 государств: СССР, Новая Австралия, Азиатская Народная Республика, Федеративная Республика Америка, Европейский Союз и Южно-Американская Империя",
  },
  {
    img: "url(../../public/com/slide-1.jpg)",
    smallImg: "url(../../public/com/slide-1-cut.jpg)",
    text: "Вы находитесь в центре одного из крупнейших городов мира. Перед вами довольно необычное по архитектуре здание.",
  },
  {
    img: "url(../../public/com/slide-2.jpg)",
    smallImg: "url(../../public/com/slide-2-cut.jpg)",
    text: "Вы смотрите на свою руку. Спустя милисекунды поиска ваш искуственный помощник показывает вам информацию об этом здании.",
  },
  {
    img: "url(../../public/com/slide-3.webp)",
    smallImg: "url(../../public/com/slide-3-cut.webp)",
    text: "Это Арагорн. Крупнейшная компания в ******** на рынке программных продуктов. Образовалась в 2043 путем слияния Microsoft и Xiaomi. Для более подробной информации нажмите 'Дальше'.",
  }
]
let activeSlide = ref(0)
onMounted(()=> {
  input1(document.querySelector('.reveal-text'), 1000, isBtnActive)
  checkWidth()}
)

function changeSlide() {
  if (activeSlide.value == 3) {
    router.push({path: "/about"})
    return
  }
  activeSlide.value += 1
  isBtnActive.value = false
  let text = document.querySelector('.reveal-text')
  text.innerHTML = ""
  checkWidth()
  input1(document.querySelector('.reveal-text'), 1000, isBtnActive)
}

function skipIntro() {
  activeSlide.value = 3
  changeSlide()
}

function checkWidth() {
  if (document.documentElement.clientWidth < 751) {
    document.querySelector('.slide-img').style.backgroundImage = data[activeSlide.value].smallImg
  }
  else {
    document.querySelector('.slide-img').style.backgroundImage = data[activeSlide.value].img
  }
}
window.addEventListener('resize' , () => {
  checkWidth()
})

function input1(div, delay, btnBoolean) {
    setTimeout(() => {
        for (let i = 0; i < data[activeSlide.value].text.length; i++) {
            setTimeout(() => {
                div.textContent += data[activeSlide.value].text[i]
            }, 40*i)
        }
    }, delay)
    setTimeout(() => btnBoolean.value = true, data[activeSlide.value].text.length * 40 + delay)
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}

.slide-btn {
    border: 3px solid var(--second-color);
    line-height: 1;
    padding: 6px 100px;
    border-radius: 10px;
    background-color: var(--dark-color);
    margin-bottom: 10px;
}
.slide {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide-img {
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat; 
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    animation: zoom 20s linear infinite;
}
@keyframes zoom {
  50% {
    transform: scale(1.1);
  }
}

.slide-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.6);
    line-height: 2;
    text-align: center;
    font-size: 18px;
}

.skip {
  position: absolute;
  left: 3%;
  top: 3%;
  padding: 10px;
  opacity: 1;
}
</style>