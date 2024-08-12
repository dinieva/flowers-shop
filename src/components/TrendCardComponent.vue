<template>
  <div class="product-wrap">
    <div class="product-item triangle-caption">
      <img :src="trend.imgPath" />
      <div class="caption">
        <p>ХИТ</p>
      </div>
      <button
        class="button product-buttons"
        @click="$emit('closeCart'), cartItemsStore.addToCart(trend)"
      >
        <span class="button-svg"></span>
        <span class="button-text">В корзину</span>
      </button>
    </div>
    <div class="product-title">
      <a href="">{{ trend.title }}</a>
      <span class="product-price">₽ {{ trend.price }}</span>
    </div>
  </div>
</template>

<script setup>
import { useCartItemsStore } from '@/stores/cartItems'
const cartItemsStore = useCartItemsStore()
defineProps({
  trend: {
    type: Object,
    required: true
  }
})
defineEmits(['closeCart'])
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
.product-wrap {
  // width: 300px;
  border-radius: 5px;
  margin: 0 auto;
  background: white;
  padding: 0 0 20px;
  text-align: center;
  font-size: 14px;
  font-family: Lora;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  @include tablet {
    width: 100%;
  }
  @include largemobile {
    // width: 300px;
  }
}
.product-item {
  position: relative;
  overflow: hidden;
}
.product-wrap img {
  display: block;
  inline-size: 100%;
  aspect-ratio: 10/9;
  object-fit: cover;
  /* width: 100%;
  height: 300px; */
  border-radius: 5px;
}
.product-buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 40px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #c0a97a;
  color: #c0a97a;
  opacity: 1;
  transform: translate(-50%, -50%) scale(0);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  line-height: 40px;
}
.product-item:hover .product-buttons {
  opacity: 1;
}
.product-item:hover .button {
  transform: translate(-50%, -50%) scale(1);
}
.button:hover {
  background: black;
}
.product-title {
  color: #5e5e5e;
}
.product-title a {
  text-decoration: none;
  color: #2e2e2e;
  font-weight: 600;
  margin: 15px 0 5px;
  padding-bottom: 7px;
  display: block;
  position: relative;
  transition: 0.3s ease-in-out;
}
.product-title a:after {
  content: '';
  position: absolute;
  width: 40px;
  height: 2px;
  background: #2e2e2e;
  left: 50%;
  margin-left: -20px;
  bottom: 0;
  transition: 0.3s ease-in-out;
}
.product-title a:hover {
  color: #c0a97a;
}
.product-title:hover a:after {
  background: #c0a97a;
}
.product-price {
  font-size: 20px;
  color: #c0a97a;
  font-weight: 700;
}
.caption {
  text-align: right;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  color: white;
  line-height: 1;
  padding: 13px 13px 13px 0;
}
.triangle-caption:after {
  background: #a90a0a;
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  top: -50px;
  right: -50px;
  transform: rotate(45deg);
}
.button-text {
  margin-left: 10px;
}
.button-svg {
  display: inline-block;
  height: 22px;
  width: 22px;
  background: url('/public/svg/basket-shopping.svg') center center/cover no-repeat;
}
</style>