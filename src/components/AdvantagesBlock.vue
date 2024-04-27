<template>
  <div class="advantages-block">
    <h2 class="advantages-block__title">Почему мы</h2>
    <div class="advantages">
      <AdvantageComponent
        v-for="(advantage, i) in advantages"
        :key="i"
        :advantage="advantage"
        :num="i + 1"
      />
      <div class="image-decor">
        <img src="/public/images/why-cycle.jpg" alt="why-cycle" class="why-cycle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AdvantageComponent from './AdvantageComponent.vue'
const advantages = [
  {
    title: 'Быстрая и бесплатная доставка цветов',
    descr: 'C любовью доставим ваш заказ в течение 2 часов после оформления.'
  },
  {
    title: 'Свежие цветы',
    descr:
      'Мы организовали работу магазина и службы доставки так, чтобы Вы всегда получали от нас только свежие цветы и никогда не были разочарованы нашей работой.'
  },
  {
    title: 'Работаем 24/7',
    descr:
      'Мы принимаем и доставляем заказы круглосуточно, потому что понимаем, насколько важна может быть своевременность вашего заказа для Вас и ваших близких.'
  },
  {
    title: 'Фото букета',
    descr: 'По вашему желанию можем согласовать формирование букета с вами в мессенджерах'
  },
  {
    title: 'Система скидок',
    descr: 'Прогрессивная система скидок уже после первой покупки.'
  }
]
</script>



<style lang="scss" scoped >
.advantages-block {
  /* height: 100vh; */
  background-color: var(--color-background-light);
  padding: 2rem 1rem 4rem 1rem;

  &__title {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    /* top: -10px; */
    text-align: center;
    font-family: var(--lighthaus);
  }
}
.advantages {
  /* display: grid;
  grid-template-columns: repeat(3, auto); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
}

h3 {
  font-size: 1.2rem;
}

.why-cycle {
  width: 300px;
}
.image-decor {
  position: relative;
  display: table;
  /* margin: 0px auto; */
  border: 5px solid #fff;
  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.1);
}
.image-decor:before,
.image-decor:after {
  content: '';
  position: absolute;
  z-index: 2;
  width: 150px;
  height: 55px;
  background: #fff;
  box-shadow: 0 -10px 10px -5px rgba(0, 0, 0, 0.1);
}
.image-decor:before {
  left: -50px;
  bottom: -30px;
  transform: rotate(30deg);
}
.image-decor:after {
  right: -50px;
  bottom: -30px;
  transform: rotate(-30deg);
}
.image-decor img {
  display: block;
}
</style>
