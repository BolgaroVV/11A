<template>
  <div class="container-plan">
      <p class="plan-title">План работы</p>
      <ul>
        <li>30-05.10 Кл.час «Приучи себя к порядку»</li>
        <li>07-11.10 Кл.час, «Гимн, герб, флаг моего Отечества»</li>
        <li>14-18.10 Кл.час, посвященный Дню белой трости</li>
        <li>21-25.10 Кл.час «Папа – мой надежный тыл»</li>
        <li>28-1.11 Кл.час «Территория безопасного интернета»</li>
        <li>4.10 акция «Осенняя почта» - поздравительные открытки учителям </li>
        <li>5.10 видеопоздравление учителям для оф.странички в ВК</li>
        <li>04.10 Праздничная программа для учителей «Звездная вечеринка»</li>
        <li>10.10 акция «Подарок лохматому другу»</li>
        <li>17.10 Конференция отцов</li>
        <li>до 18.10 фотоакция «Один в Один»</li>
        <li>21.10 Торжественное открытие Спортивного зала</li>
        <li>30.10 Шахматно-шашечный турнир «Умный дебют»</li>
        <li>31.10 Конкурс «Чистота – залог здоровья», уборка кабинетов перед уходом на каникулы.</li>
      </ul>
      <router-link class="plan-btn" to="about">Вернуться</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.plan-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
}

li {
    margin-bottom: 15px;
}

.plan-btn {
    border: 3px solid var(--second-color);
    line-height: 1;
    padding: 6px 100px;
    border-radius: 10px;
    background-color: var(--dark-color);
    margin-bottom: 10px;
}

.container-plan {
    min-width: var(--container-width);
    max-width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00242C;
    padding: var(--container-padding);
    padding-top: 0px;
}
</style>