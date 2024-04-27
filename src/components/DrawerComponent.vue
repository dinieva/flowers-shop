<template>
  <div class="drawer-wrapper" v-if="isOpenCart">
    <div class="drawer"></div>
    <div class="drawer-cart">
      <div class="drawer-header">
        <span @click="$emit('closeCart', false)"
          ><img src="/public/svg/arrow-left-drawer.svg" alt="arrow"
        /></span>
        <h2>Корзина</h2>
      </div>
      <div
        class="drawer-cart-empty"
        v-if="!cartItemsStore.allCartItems || cartItemsStore.allCartItems.length <= 0"
      >
        <img src="/public/svg/flower-empty.svg" alt="flower-empty" class="empty-cart-img" />
        <h2>Ваша корзина пуста.</h2>
        <p>Выберите понравившийся букет из каталога и добавьте его в корзину</p>
      </div>
      <div class="drawer-cart-conent" v-else>
        <div class="cart-items">
          <CartItem v-for="item in cartItemsStore.allCartItems" :key="item" :product="item" />
        </div>
        <div class="cart-amount">
          <div class="cart-amount__summ">
            <span>Итого:</span>
            <span>₽ {{ cartItemsStore.totalPrice }}</span>
          </div>

          <button-component><router-link to="/order">Оформить</router-link></button-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from './CartItem.vue'
import ButtonComponent from './Layout/ButtonComponent.vue'
import { useCartItemsStore } from '@/stores/cartItems'

const cartItemsStore = useCartItemsStore()
/* const cartItems = ref([])
cartItems.value = cartItemsStore.allCartItems */

defineProps({
  isOpenCart: {
    type: Boolean,
    required: true
  }
})

defineEmits(['closeCart'])
</script>

<style lang="scss" scoped>
.drawer-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  background: rgba($color: #000, $alpha: 0.5);
}

.drawer-cart {
  background: rgba($color: #fff, $alpha: 1);
  // width: 37%;
  // max-height: 100vh;
  z-index: 100;
  padding: 1rem 2rem;
  &-empty {
    text-align: center;
    padding-top: 15%;
  }
  &-empty p {
    color: #b6b4b4;
    font-size: 0.8rem;
    line-height: 1.1rem;
  }
}
.drawer-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.drawer-header h2 {
  font-weight: 600;
  font-size: 2rem;
  z-index: 100;
}
span img {
  width: 25px;
  height: 25px;
  cursor: pointer;
  opacity: 0.4;
  filter: alpha(opacity=40);
  transition: all 1s;
  &:hover {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translateX(-10px);
  }
}
.cart-amount {
  margin-top: 1rem;

  &__summ {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.empty-cart-img {
  width: 5rem;
}
</style>