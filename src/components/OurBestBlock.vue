<template>
  <DrawerComponent :isOpenCart="isOpenCart" @closeCart="closeCart" />
  <div class="our-best">
    <div class="our-best__header">
      <div class="our-best__title-wrapper">
        <h2 class="our-best__title">Бестселлеры</h2>
      </div>

      <div class="arrow-btn">
        <!--  <Navigation class="arrow-btn__left swiper-button-prev" /> -->
        <div class="arrow-btn__left swiper-button-prev" @click.stop="slider.slidePrev()"></div>
        <div class="arrow-btn__right swiper-button-next" @click.stop="slider.slideNext()"></div>
      </div>
    </div>

    <Swiper
      :modules="modules"
      :loop="false"
      class="all-cards snaps-inline"
      :scrollbar="{
        draggable: true
      }"
      :slides-per-view="3.1"
      :space-between="50"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :grabCursor="true"
      @swiper="onSwiper"
      :style="{
        '--swiper-scrollbar-size': '8px',
        '--swiper-scrollbar-bg-color': 'rgb(229, 190, 190, 0.3)',
        '--swiper-scrollbar-drag-bg-color': 'rgba(229, 190, 190, 0.6)'
      }"
    >
      <SwiperSlide v-for="trend in trendsStore.trends" :key="trend" data-swiper-autoplay="2000">
        <TrendCardComponent :trend="trend" @closeCart="closeCart" />
      </SwiperSlide>
    </Swiper>

    <div class="btn-wrapper">
      <ButtonComponent :path="'catalog'">Перейти в каталог</ButtonComponent>
    </div>
  </div>
</template>

<script setup >
import { ref } from 'vue'
import DrawerComponent from '@/components/DrawerComponent.vue'
import TrendCardComponent from './TrendCardComponent.vue'
import ButtonComponent from './Layout/ButtonComponent.vue'
import { useTrendStore } from '../stores/trends'
const trendsStore = useTrendStore()

// импорт Swiper Slider
import { Autoplay, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
const modules = [Autoplay, Scrollbar]

import 'swiper/css'
import 'swiper/css/scrollbar'

const slider = ref(null)
const onSwiper = (swiper) => {
  slider.value = swiper
}

//  открыть/закрыть корзину
const isOpenCart = ref(false) //  ref(true)  ref(false)
const closeCart = () => {
  isOpenCart.value = !isOpenCart.value
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/* :slides-per-view="3"
    :space-between="50"
    :modules="modules"
    :effect="coverflow"  
    :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange" */
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 2em;
}
::-webkit-scrollbar-track {
  background: rgb(229, 190, 190, 0.3); /* #dda3b6 */
}
::-webkit-scrollbar-thumb {
  background: rgb(229, 190, 190, 0.6);
}
.our-best {
  padding: 2rem;
  &__title-wrapper {
    text-align: center;
    margin: 0 auto;
  }
  &__title {
    font-weight: 500;
    font-size: 2.6rem;
    font-family: var(--lighthaus);
    text-align: center;
  }
}
.all-cards {
  display: grid;
  grid-auto-flow: column;
  //grid-gap: 16px;
  // grid-auto-columns: 21%;
  // overflow-x: auto;
  overscroll-behavior-inline: contain;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  cursor: grab;
}
.btn-wrapper {
  margin: 0 auto;
  text-align: center;
  margin: 2rem 0 1rem;
}
/* .snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem 1rem;
}
.snaps-inline > * {
  scroll-snap-align: start;
} */
.our-best__header {
  position: relative;
  padding: 1rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.arrow-btn {
  position: absolute;
  right: 0;
  width: 70px;
  display: flex;
  cursor: pointer;
}
.arrow-btn__left {
  width: 30px;
  height: 30px;
  background: url('/public/svg/arrow-left.svg') center center/cover no-repeat;
}
.arrow-btn__right {
  width: 30px;
  height: 30px;
  background: url('/public/svg/arrow-right.svg') center center/cover no-repeat;
}

.swiper-button-prev,
.swiper-button-next {
  color: transparent;
}
.drawer-cart {
  max-height: 100vh;
}

/* MEDIA QUERIES */
/* @media (max-width: 1200px) {
  .swiper {
    width: 80%;
  }
}

@media (max-width: 900px) {
  .swiper {
    width: 50%;
  }
}

@media (max-width: 765px) {
  .swiper {
    width: 70%;
  }
}

@media (max-width: 550px) {
  .swiper {
    width: 80%;
  }
} */
</style>