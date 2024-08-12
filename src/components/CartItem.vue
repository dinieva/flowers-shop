<template>
  <div class="item">
    <img :src="product.imgPath" :alt="product.title" class="item-info__image" />
    <div class="item-info">
      <div class="item-info__title">
        <p class="word">
          {{ product.title }}
        </p>
      </div>
      <div class="item-info-bottom">
        <div class="item-info__amount">
          <button
            type="button"
            class="counter-btn"
            @click="amountFunc('subtraction'), cartItemsStore.changeAmount(product.id, amount)"
          >
            -
          </button>
          <div class="counter-wrapper">
            <input
              type="text"
              inputmode="numeric"
              v-model="amount"
              class="counter-input"
              @input="validate(), cartItemsStore.changeAmount(product.id, amount)"
            />
          </div>
          <!--@change="cartItemsStore.changeAmount(product.id, amount)" -->
          <button
            type="button"
            class="counter-btn"
            @click="amountFunc('addition'), cartItemsStore.changeAmount(product.id, amount)"
          >
            +
          </button>
        </div>
        <div class="item-info__price">
          <p>{{ product.itemTotalPrice }} ₽</p>
        </div>
      </div>
    </div>
    <span @click="cartItemsStore.deleteItemFromCart(product.id)"
      ><img src="/public/svg/delete.svg" alt="delete" class="item-info__delete-btn"
    /></span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartItemsStore } from '@/stores/cartItems'

const cartItemsStore = useCartItemsStore()
const amount = ref()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
amount.value = props.product.amount

const validate = () => {
  const reg = /[^0-9]/
  amount.value = amount.value.replace(reg, '')

  /*  if (isNaN(amount.value) || amount.value === '' || amount.value <= 0) {
    amount.value = 1
  } */
}
const amountFunc = (operation) => {
  console.log('amountFunc', operation)
  operation === 'addition' ? amount.value++ : amount.value--
  if (amount.value <= 0) {
    amount.value = 0
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1px solid #cecdcd;
  border-radius: 30px;
  margin-top: 1rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  @media screen and (max-width: 401px) {
    flex-direction: column;
  }
}
.item-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  /* display: grid;
  grid-template-columns: 35% 35% 30%; */
  align-items: center;
  &-bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  &__image {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin: 1rem;
  }
  &__title p {
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
  }
  &__price {
    text-align: right;
    font-weight: 700;
  }
  &__amount {
    max-width: 100px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__delete-btn {
    position: absolute;
    bottom: 0.7rem;
    right: 1rem;
    width: 15px;
    height: 15px;
    margin: 10px;
    cursor: pointer;
    opacity: 0.4;
    transition: all 1s;
    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }
    @media screen and (max-width: 401px) {
      top: 1rem;
    }
  }
}
.counter {
  &-btn {
    font-size: 1.1rem;
    font-weight: 400;
    cursor: pointer;
    padding: 0.5rem;
    background: transparent;
    &:hover {
      transform: scale(1.1);
    }
  }
  &-input {
    width: 100%;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;
    text-align: center;
    background: transparent;
  }
}
/* .word {
  width: 100%;
  background: #f0f0f0;
  border: 1px solid #333;
  padding: 10px;

  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
} */
</style>