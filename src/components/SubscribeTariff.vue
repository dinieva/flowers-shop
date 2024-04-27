<template>
  <article class="slide">
    <img :src="tariff.imgPath" class="tariff-item__img" />
    <div class="slide-content">
      <div class="slide-item">
        <h3>{{ tariff.title }}</h3>
        <p>{{ tariff.description }}</p>
        <h3 class="slide-item__price">{{ tariff.price }} ₽</h3>
        <button class="btn border-btn color-one" @click="cartItemsStore.addToCart(tariff)">
          Выбрать
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useCartItemsStore } from '@/stores/cartItems'
const cartItemsStore = useCartItemsStore()
defineProps({
  tariff: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
// style tariff
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

.slide {
  display: block;
  text-align: center;
  //
  width: calc(1200px / 3.5);
  margin: 30px auto 0;
  position: relative;
}
.slide img {
  position: relative;
  max-width: 100%;
  height: 300px;
}
.slide-content {
  margin: -10px 20px 0;
  position: relative;
  z-index: 3;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.4s ease-in-out;
}
.slide-content:before,
.slide-content:after {
  content: '';
  position: absolute;
  bottom: 0;
  margin: 0 0 2px;
  height: 1px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6);
  transition: 0.4s ease-in-out;
}
.slide-content:before {
  left: 0;
  right: 50%;
  transform: rotate(1deg);
}
.slide-content:after {
  right: 0;
  left: 50%;
  transform: rotate(-1deg);
}
.slide-item {
  background: #fbfaf1;
  padding: 20px 20px 18px;
  position: relative;
  z-index: 5;
  border-radius: 0;
  transition: 0.4s ease-in-out;
}
.slide-item h3 {
  font-family: var(--marckScript), serif;
  color: #b4111a;
  font-size: 1.5rem;
  margin-bottom: 15px;
}
.slide-item p {
  font-family: var(--cormorantGaramond), sans-serif;
  font-size: 1.1rem;
  line-height: 1.5em;
  color: #1e2630;
}
.slide:hover .slide-content {
  transform: translateY(-10%);
}
.slide:hover .slide-item {
  border-radius: 0 0 200px 200px/0 0 10px 10px;
}
.slide:hover .slide-content:before {
  left: 10px;
}
.slide:hover .slide-content:after {
  right: 10px;
}
.slide:hover .slide-content:before,
.slide:hover .slide-content:after {
  box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.6);
  margin: 0 0 6px;
}
.slide:hover .slide-content:before {
  right: 50.4%;
}
.slide:hover .slide-content:after {
  left: 50.4%;
}
// end style tariff
</style>