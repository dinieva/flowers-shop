<template>
  <DrawerComponent :isOpenCart="isOpenCart" @closeCart="closeCart" />
  <div class="item">
    <div class="item-header">
      <h3>
        {{ $route.params.title }}
      </h3>
    </div>
    <div class="item-content">
      <div class="item-image">
        <img :src="productItem.imgPath" :alt="productItem.title" />
      </div>
      <div class="item-meta">
        <div class="item-meta__price">
          <span class="price-item price"> {{ productItem.price }} ₽</span>
        </div>
        <div class="item-meta__about">
          <span class="item-meta__composition">Состав: </span>
          <span
            class="composition-item"
            v-for="composition in productItem.composition"
            :key="composition"
            >{{ composition }}</span
          >
        </div>
        <div class="item-meta__about">
          <span class="item-meta__descr">Размер: </span>
          <span>{{ productItem.size }}</span>
        </div>
        <div class="item-meta__about">
          <span class="item-meta__descr">Тип: </span>
          <span>{{ productItem.type }}</span>
        </div>
        <div class="item-meta__about">
          <span class="item-meta__descr">Оформление: </span>
          <span>{{ productItem.decoration }}</span>
        </div>
        <div class="item-meta__description">
          <p>{{ productItem.description }} .</p>

          <p>
            Каждый букет от <span class="logo">Inspiration</span> мы собираем для Вас с любовью и
            заботой!
          </p>
        </div>
        <button
          class="btn btn-form border-btn color-one"
          @click="cartItemsStore.addToCart(productItem), closeCart()"
          :path="path"
        >
          В корзину
        </button>
        <button @click="favoritesStore.addToFavorites(productItem)" class="btn-favorite">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                stroke="#dda3b6"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="other-supply">
    <h4>Похожие товары</h4>
    <swiper
      :modules="modules"
      :slides-per-view="3.5"
      :space-between="2"
      navigation
      class="other-supply__items"
      :style="{
        '--swiper-navigation-size': '44px',
        '--swiper-navigation-top-offset': '50%',
        '--swiper-navigation-sides-offset': '0px',
        '--swiper-navigation-color': 'var(--color-text)'
      }"
      :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 10
        },
        '520': {
          slidesPerView: 1,
          spaceBetween: 10
        },
        '640': {
          slidesPerView: 1,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40
        },
        '1024': {
          slidesPerView: 3.1,
          spaceBetween: 50
        }
      }"
    >
      <swiper-slide class="item-wrapper" v-for="(similarProduct, i) in similarProducts" :key="i">
        <CardComponent
          :card="similarProduct"
          @closeCart="closeCart"
          @addToFavorites="favoritesStore.addToFavorites(similarProduct)"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import DrawerComponent from '@/components/DrawerComponent.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCatalogStore } from '../stores/catalog'
import CardComponent from '@/components/CardComponent.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useCartItemsStore } from '@/stores/cartItems'
// swiper-wrapper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
const modules = [Navigation]

const cartItemsStore = useCartItemsStore()
const favoritesStore = useFavoritesStore()

const route = useRoute()
const allFlowersStore = useCatalogStore()
const allFlowers = computed(() => {
  return allFlowersStore.allFlowers
})

// console.log(route.params.title)
const productItem = computed(() => {
  const obj = allFlowers.value.find((item) => item.title === route.params.title)
  return obj
})

const similarProducts = computed(() =>
  allFlowers.value.filter((item) => item.composition[0] === productItem.value.composition[0])
)

//  открыть/закрыть корзину
const isOpenCart = ref(false)
const closeCart = () => {
  isOpenCart.value = !isOpenCart.value
}
</script> 

<style lang="scss" scoped>
@import '@/assets/styles/media';
.container {
  position: relative;
}
.item {
  padding: 2rem;
}
.item-image {
  overflow: hidden;
}
.item-image img {
  max-height: 500px;
  // width: 30%;
  //  margin: 0 0 20px 0;
  transition: transform 0.25s ease;
  &:hover {
    transform: scale(2.5);
  }
  /* @media (min-width: 768px) {
    float: left;
    width: 300px;
    // margin: 0 30px 20px 45px;
    border: 10px solid #dddddf;
    border-left-width: 0;
  } */
}
.item h3 {
  font-family: var(--lighthaus);
  font-size: 2.5rem;
  color: #222;
  font-weight: 500;
  margin-bottom: 30px;
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  @include smallmobile {
    font-size: 1rem;
  }
}
.item-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.item-meta {
  text-align: left;
  margin-bottom: 30px;
  // display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-size: 0.8em;
  &__about {
    margin: 15px 0;
  }
  &__composition {
    font-size: 1rem;
    margin-right: 1rem;
  }
  &__description {
    // padding: 2rem;
  }
}

.item-meta :first-child :before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: #222;
}
.price {
  font-weight: bold;
  font-size: 2rem;
  color: #bca480;
}

.composition-item {
  padding-right: 26px;
  position: relative;
}

.composition-item:after {
  content: '/';
  color: #dddddf;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
p {
  line-height: 1.5;
  margin-bottom: 1em;
  text-align: justify;
}

.product-wrap {
  width: 150px;
}
.other-supply {
  margin-top: 3rem;
  text-align: center;
  padding: 2rem 2rem;
  background-color: #dddddf;
  & h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  &__items {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow: hidden;
    max-width: 90%;
    margin: 0 auto;
  }
}
.item-wrapper {
  width: 300px;
  text-align: center;
}
.logo {
  font-family: var(--lighthaus);
  font-size: 1rem;
}
.swiper-wrapper {
  text-align: center;
  padding: 2rem;
}

//стили кнопки в корзину
.border-btn {
  display: inline-block;
  position: relative;
  padding: 10px 25px;
  margin-right: 20px;
  /* background: #fff9f1;
  background: #e5bebe; */
  background: #f3e4e4;
  text-decoration: none;
  font-family: 'Marck Script', cursive;
  letter-spacing: 1px;
  border-width: 6px;
  border-style: double;
  transition: 0.5s;
}
.btn {
  border-color: var(--color-background-light);
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  color: #898989;
  transition: all 1s ease-out;
}
.btn-favorite {
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    transform: scale(1.2);
    background: url('/public/svg/favorite-fill.svg') center center/cover no-repeat;
  }
}
</style>