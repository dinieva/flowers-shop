<template>
  <div class="container">
    <div
      class="cart__empty"
      v-if="!cartItemsStore.allCartItems || cartItemsStore.allCartItems.length <= 0"
    >
      <img src="/public/images/cart-empty.svg" alt="" class="cart__empty-img" />
      <div>Ваша корзина пуста !</div>
      <div>Вы можете найти интересующие вас товары в каталоге</div>
      <button-component :path="'catalog'" class="empty-cart-btn"
        >Перейти к покупкам</button-component
      >
    </div>
    <div class="cart__fill cart" v-else>
      <div class="cart__title">
        <h1>КОРЗИНА</h1>
      </div>
      <div class="cart-list flex">
        <div class="cart-list__items column">
          <CartItem v-for="item in cartItemsStore.allCartItems" :key="item" :product="item" />
        </div>
        <div class="cart-summary column">
          <div class="cart-summary__info">
            <button class="btn btn-form border-btn color-one">
              <router-link to="order">Перейти к оформлению</router-link>
            </button>
            <span class="warning-text"
              >Доступные способы и время доставки можно выбрать при оформлении заказа</span
            >

            <div class="cart-summary__info-total-price">
              <span class="cart-summary__info-total-price-title"> Ваш заказ на сумму</span>
              <span class="cart-summary__info-total-price-value">
                {{ cartItemsStore.totalPrice }} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '../components/Layout/ButtonComponent.vue'
import CartItem from '../components/CartItem.vue'
import { useCartItemsStore } from '@/stores/cartItems'

const cartItemsStore = useCartItemsStore()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
.container {
  min-height: 830px;
}

.cart__empty {
  padding-top: 20vh;
  text-align: center;

  &-img {
    color: #f1e9e9;
  }
}
.cart {
  padding: 24px;
  &__title {
    margin: 0;
    padding-bottom: 16px;
  }
  &-list {
    font-size: 14px;
    line-height: 20px;
    margin-top: 32px;
    border-radius: 24px;
    box-shadow: 0 8px 24px 0 #08090a14;
  }
}

.flex {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 2rem;
  gap: 1rem;
  @media screen and (max-width: 691px) {
    grid-template-columns: 1fr;
  }
}
.column {
  display: flex;
  flex-direction: column;
}
.cart-summary {
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-total-price {
      display: flex;
      justify-content: space-between;
      // width: 85%;
      margin-top: 3rem;
      &-title {
        font-size: 1.1rem;
        letter-spacing: normal;
        line-height: 1.4rem;
        @include tablet {
          font-size: 0.8rem;
        }
      }
      &-value {
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: normal;
        line-height: 26px;
        margin-left: 8px;
        @include tablet {
          font-size: 0.8rem;
        }
      }
    }
  }
}
// buton style
.btn {
  margin: 1rem 0 0 0;
  width: 85%;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
}

.warning-text {
  color: #b6b4b4;
  font-size: 0.8rem;
  line-height: 1.1rem;
  width: 85%;
}
.empty-cart-btn {
  width: auto;
}
</style>