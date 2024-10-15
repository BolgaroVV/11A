<template>
  <div class="schedule">
    <h3>Наше расписание</h3>
    <div class="week">
      <div class="day" :id="1" @click="changeDay">ПН</div>
      <div class="day" :id="2" @click="changeDay">ВТ</div>
      <div class="day" :id="3" @click="changeDay">СР</div>
      <div class="day" :id="4" @click="changeDay">ЧТ</div>
      <div class="day" :id="5" @click="changeDay">ПТ</div>
      <div class="day" :id="6" @click="changeDay">СБ</div>
    </div>
    <div class="schedule-content">
      <div class="lesson-content">        
        <table class="lesson-grid">
            <tr>
                <th class="time-date">Время</th>
                <th>Уроки</th>
            </tr>
            <tr v-for="(item, index) in schedule[activeDay]" :key="index">
                <template v-if="schedule[activeDay][index] != 'none'">
                  <td class="time-date">
                      <p>{{schedule[0][index][0]}}</p>
                      <p class="opacity-60">{{schedule[activeDay][index+1] == 'none' ? schedule[0][index + 1][1] : schedule[0][index][1]}}</p>
                  </td>
                  <td>
                      <div class="lesson-tab">
                          <span class="tab-title">{{schedule[activeDay][index+1] == 'none' ? lessons[item][0] + ' x2' : lessons[item][0]}}</span>
                          <div class="tab-cab flex"><img src="../../public/cab.svg" alt="Cab:">{{lessons[item][1]}}</div>
                          <div class="tab-teacher flex"><img src="../../public/user.png" alt="Учитель:" class="w-4 h-4">{{lessons[item][2]}}</div>
                      </div>
                  </td>
                </template>
            </tr>                                                                                    
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue'

  let schedule = ref([]);
  let lessons = ref([])
  let activeDay = ref(1)

  async function fetchData() {
      const response = await axios.get('https://00ea794c0d4cb2bd.mokky.dev/schedule');
      schedule.value = response.data;
      const response1 = await axios.get('https://00ea794c0d4cb2bd.mokky.dev/lessons');
      lessons.value = response1.data[0];
  }
  onMounted(fetchData);

  function changeDay(event) {
    activeDay.value = event.target.id
  }
</script>

<style>
h3 {
  text-shadow: 0px 0px 5px var(--main-color);
}

.schedule {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}

.week {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
}

.day {
  background: var(--second-color);
  border-radius: 10px;
  width: 40px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lesson-grid {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 16px;
    width: 100%;
}

.lesson-tab {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: var(--second-color);
    border-radius: 16px;
    padding: 12px 16px 16px;
    gap: 4px;
}

thead, tbody, tr {
    display:contents
}

th {
    text-align: left;
}

.time-date {
    text-align: center;
}
.tab-title {
    font-size: 16px;
    font-weight: 600;
}

.tab-cab, .tab-teacher {
    font-size: 13px;
    gap: 6px;
}
</style>
