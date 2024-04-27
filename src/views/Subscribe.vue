<template>
  <div class="container">
    <div class="subscribe">
      <div class="subscribe__title">Цветочная подписка</div>
      <div class="subscribe__descr">
        <p>
          У нас в наличие всегда входит большой ассортимент сезонных цветов. И мы с радостью
          предлагаем вам оформить цветочную подписку на доставку цветов в дом или офис. Подписка
          действует 1 месяц, в неё входят <span>4 доставки</span>.
        </p>

        <p>При первом заказе в подарок ваза и инструкция по уходу, флористический нож.</p>
        <p>При каждой доставке в подарок инструкция по уходу и подкормка для срезанных цветов.</p>
      </div>

      <div class="subscribe-tariff">
        <h2 class="subscribe-tariff__header">Виды подписок:</h2>
        <div class="subscribe-tariff__items">
          <SubscribeTariff
            v-for="tariff in subscribeTariffsStore.tariffs"
            :key="tariff"
            :tariff="tariff"
          />
        </div>
      </div>

      <div class="subscribe-steps">
        <h2 class="subscribe-steps__header">Этапы:</h2>
        <div class="subscribe-steps__items">
          <div class="subscribe-steps__step-descr div1">Выбираете пакет</div>
          <div class="subscribe-steps__arrow div2"></div>
          <div class="subscribe-steps__step-descr div3">
            Дизайнерское оформление букета раз в неделю в течение 4 недель
          </div>
          <div class="subscribe-steps__arrow div4"></div>
          <div class="subscribe-steps__step-descr div5">Отправка курьером</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubscribeTariff from '@/components/SubscribeTariff.vue'
import { useSubscribeTariffsStore } from '@/stores/subscribeTarifs'
const subscribeTariffsStore = useSubscribeTariffsStore()
</script>
<style lang="scss" scoped>
.subscribe-tariff {
  background: url(/public/images/steps-bg.png) center center/cover no-repeat;
  &__header {
    text-align: center;
    font-family: var(--cormorantGaramond), serif;
    font-size: 2rem;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.subscribe__title {
  font-family: var(--cormorantGaramond), serif;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  padding-top: 2rem;
}
.subscribe__descr {
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
  font-size: 1.2em;
  line-height: 2.5rem;
  & p:first-letter {
    padding: 5px 10px;
    background: #e5bebe;
    border-radius: 50% 0;
    font-weight: bold;
    margin-left: 1rem;
  }
}

.flowers-img {
  margin: 20% 20% 0 0;
  float: right;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: rgba(235, 107, 171, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(223, 142, 142, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(235, 83, 83, 0.09) 0px -3px 5px;
}

.tariff-item {
  list-style: none;
  width: 300px;
  background: url(/public/images/bg-item.png) center center no-repeat;
  padding: 2rem;
  border-radius: 30px;
}

// style steps

.subscribe-steps {
  text-align: center;
  //   background: url(/public/images/steps-bg.png) center center/cover no-repeat;
  &__header {
    text-align: center;
    font-family: var(--cormorantGaramond), serif;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
    justify-content: center;
  }
  &__step-descr {
    font-weight: 600;
  }
  &__arrow {
    width: 80px;
    height: 40px;
    background: url('/public/svg/swirly-arrow.svg') center center/contain no-repeat;
  }
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
    justify-self: right;
  }
  .div2 {
    grid-area: 2 / 2 / 3 / 3;
    justify-self: center;
  }
  .div3 {
    grid-area: 3 / 3 / 4 / 4;
    justify-self: left;
  }
  .div4 {
    grid-area: 4 / 4 / 5 / 5;
    justify-self: center;
  }
  .div5 {
    grid-area: 5 / 5 / 6 / 6;
    justify-self: left;
  }
}
// end style steps

span,
.slide-item__price {
  font-family: var(--marckScript), serif;
  color: #b4111a;
  font-size: 1.5rem;
  margin-bottom: 0;
}
</style>