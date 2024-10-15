<template>
  <div class="squad">
    <h3>Наш пероснал</h3>
    <div class="squad-content">
        <img src="../../public/com/squad.jpg" alt="" class="paragraph-image">
        <p>В компании работают самые высококвалифицированные сотрудники из разных уголков мира.
        </p>
        <p>Наш персонал разделен на 4 рабочих сектора</p>
        <div class="squad-sector">
          <div class="squad-sector-el">
            <h4>Управляющий сектор</h4>
            <Swiper :data="Tdata('Г')"/>
          </div>
          <div class="squad-sector-el">
            <h4>Технический сектор</h4>
            <Swiper :data="Tdata('Т')"/>
          </div>
          <div class="squad-sector-el">
            <h4>Пищевой сектор</h4>
            <Swiper :data="Tdata('П')"/>
          </div>
          <div>
            <h4>Разноплановый сектор</h4>
            <Swiper :data="Tdata('Х')"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from "./Swiper.vue"
import axios from 'axios';
import {ref, onMounted} from 'vue'

  let data = ref();

  async function fetchData() {
      const response = await axios.get('https://00ea794c0d4cb2bd.mokky.dev/classmates');
      data.value = response.data[0];
  }

  function Tdata(letter) {
    let clone = {}
    for (let i in data.value) {
      if (i.startsWith(letter)) {
        clone[i] = data.value[i]
      }
    }
    return clone
  }
  onMounted(fetchData);
</script>

<style>
@import "../assets/main.css";

.squad {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.squad-content {
    text-align: center;
    display: grid;
    gap: 20px;
}

.squad-sector {
  margin-top: 30PX;
  min-width: 0;
}

.squad-sector-el {
  margin-bottom: 30px;
}
</style>
