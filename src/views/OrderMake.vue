<template>
  <div class="container">
    <h1>Оформление заказа</h1>
    <div class="content" v-if="cartItemsStore.allCartItems.length !== 0">
      <div class="left">
        <h3>Выберите способ получения заказа</h3>
        <div class="checkbox-group">
          <input
            type="radio"
            id="delivery"
            class="form_radio"
            name="get-oder"
            value="delivery"
            v-model="typeOfGetOrder"
            checked
          /><label for="delivery">Доставка курьером </label>

          <input
            type="radio"
            id="pickup"
            class="form_radio"
            name="get-oder"
            value="pickup"
            v-model="typeOfGetOrder"
          /><label for="pickup">Самовывоз из салона </label>
        </div>

        <div class="" v-if="typeOfGetOrder === 'delivery'">
          <h3>Информация о получателе</h3>
          <form class="receiver-info-form">
            <label for="name">Имя получателя</label>
            <input type="text" id="name" v-model="orderInfo.name" />
            <label for="address">Адрес доставки</label>
            <input type="text" id="address" v-model="orderInfo.address" />
            <label for="phone">Телефон для связи</label>
            <input type="phone" id="phone" v-model="orderInfo.phone" />
            <select
              name="deliveryTime"
              id="deliveryTime"
              @click="nearestDeliveryTime"
              v-model="orderInfo.deliveryTime"
            >
              <option disabled value="">Время доставки</option>
              <option :value="time" v-for="(time, i) in timeInterval" :key="i">
                {{ time }}
              </option>
            </select>
          </form>
          <h3>Дополнительные опции</h3>
          <form class="checkbox-group">
            <div class="option">
              <input type="checkbox" name="" id="surprise" v-model="orderInfo.surprise" />
              <label for="surprise">Сюрприз</label>
              <span class="clue">
                <p title="Курьер доставит букет ко времени без предварительного звонка">?</p>
              </span>
            </div>
            <div class="option">
              <input type="checkbox" name="" id="anonymous" v-model="orderInfo.anonymous" /><label
                for="anonymous"
              >
                Анонимный</label
              ><span class="clue"><p title="Получателю не будет известно о заказчике">?</p></span>
            </div>
            <div class="option">
              <input type="checkbox" name="" id="sending-pic" v-model="orderInfo.sendPhoto" /><label
                for="sending-pic"
                >Предварительное фото</label
              >
            </div>
            <div class="option">
              <input type="checkbox" name="" id="postcard" v-model="orderInfo.card" /><label
                for="postcard"
                >Подписать открытку</label
              >
            </div>
          </form>
          <h3>Способ оплаты {{ payment }}</h3>

          <div class="checkbox-group payment">
            <input
              type="radio"
              id="online"
              class="form_radio"
              name="payment"
              value="online"
              v-model="payment"
            /><label for="online">Онлайн</label>
            <input
              type="radio"
              id="after-delivery"
              class="form_radio"
              name="payment"
              value="after-delivery"
              v-model="payment"
            /><label for="after-delivery">Курьеру при получении</label>
          </div>
        </div>
        <div class="" v-if="typeOfGetOrder === 'pickup'">
          <h3>Информация о покупателе</h3>

          <form class="receiver-info-form">
            <label for="name">Имя</label>
            <input type="text" id="name" v-model="orderInfo.name" />
            <label for="phone">Телефон для связи</label>
            <input type="phone" id="phone" v-model="orderInfo.phone" />
          </form>

          <h3>Способ оплаты {{ payment }}</h3>
          <div class="checkbox-group payment">
            <input
              type="radio"
              id="online"
              class="form_radio"
              name="payment"
              value="online"
              v-model="payment"
            /><label for="online">Онлайн</label>
            <input
              type="radio"
              id="shop"
              class="form_radio"
              name="payment"
              value="shop"
              v-model="payment"
            /><label for="shop">В магазине</label>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="cart-items">
          <CartItem v-for="item in cartItemsStore.allCartItems" :key="item" :product="item" />
        </div>
        <div class="total-price flex">
          <div class="left-side">Товары:</div>
          <div class="right-side">{{ cartItemsStore.totalPrice }}</div>
        </div>
        <div class="delivery-price flex" v-if="typeOfGetOrder === 'delivery'">
          <div class="left-side">Доставка:</div>
          <div class="right-side">{{ deliveryPrice }}</div>
        </div>
        <div class="bonus-counter-current flex">
          <div v-if="!bonus">Списать бонусы: {{ bonusCounter }}</div>
          <div v-if="bonus === true">
            Использовать бонусы:
            <input
              type="text"
              :placeholder="bonusCounter"
              v-model="amount"
              class="bonus-value-use"
            />
            из {{ bonusCounter }}
          </div>

          <div class="checkbox-wrapper-3">
            <input type="checkbox" id="cbx-3" v-model="bonus" />
            <label for="cbx-3" class="toggle"><span></span></label>
          </div>
        </div>

        <div class="total-price flex">
          <div class="left-side">Сумма к оплате:</div>
          <div class="right-side">{{ totalPrice }}</div>
        </div>

        <div class="bonus-counter-add flex">
          <div class="left-side">Начислим бонусами:</div>
          <div class="right-side">{{ addBonus }}</div>
        </div>

        <button type="btn" class="btn border-btn color-one" v-if="payment === 'online'">
          Оплатить
        </button>
        <button type="btn" class="btn border-btn color-one" v-else @click="checkout">
          Оформить
        </button>
      </div>
    </div>
    <div class="empty-content" v-else>
      <h4>Нет товаров для оформления</h4>
      <ButtonComponent :path="'catalog'">Перейти в каталог</ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CartItem from '@/components/CartItem.vue'
import { useToast } from 'vue-toastification'
import { useCartItemsStore } from '@/stores/cartItems'
import ButtonComponent from '@/components/Layout/ButtonComponent.vue'
const toast = useToast()
const cartItemsStore = useCartItemsStore()

const typeOfGetOrder = ref('delivery')
const bonusCounter = ref(500)
const bonus = ref(false)
const payment = ref('')
const amount = ref(0)
const percentForAddBonus = 0.05
const deliveryPrice = computed(() => {
  if (cartItemsStore.totalPrice < 1800) {
    return 400
  } else {
    return 0
  }
})
const totalPrice = computed(() => {
  // return cartItemsStore.totalPrice + deliveryPrice.value
  if (bonus.value) {
    return cartItemsStore.totalPrice + deliveryPrice.value - amount.value
  } else {
    return cartItemsStore.totalPrice + deliveryPrice.value
  }
})
const addBonus = computed(() => {
  return Math.ceil(totalPrice.value * percentForAddBonus)
})
const useBonus = () => {
  if (bonus.value === true) {
    bonusCounter.value = bonusCounter.value - amount.value
  } else if (bonus.value === false) {
    bonusCounter.value = 500
  }
}

const timeInterval = ref([])

const nearestDeliveryTime = () => {
  timeInterval.value.length = 0
  let date = new Date()
  let ms
  for (let i = 0; i <= 5; i++) {
    ms = date.setHours(date.getHours() + 2)
    let delTime = new Date(ms).toLocaleString()
    timeInterval.value.push(delTime.slice(0, -3))
  }
}
const orderInfo = ref({
  typeOfGetOrder: typeOfGetOrder.value,
  items: cartItemsStore.allCartItems
})

//отправка данных о заказе оформление заказа
const checkout = () => {
  orderInfo.value.payment = payment.value
  orderInfo.value.typeOfGetOrder = typeOfGetOrder.value
  toast.success('Ваш заказ принят!')
  console.log('оформлено', orderInfo.value, payment.value)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
.container {
  min-height: 830px;
  color: #808080;
}
h1 {
  text-align: center;
  @include largemobile {
    font-size: 2rem;
  }
  @include smallmobile {
    font-size: 1.75rem;
  }
}
h3 {
  margin: 1.5rem 0 1rem 0;
  color: #808080;
}
h3::before {
  content: '*';
  margin-right: 5px;
  // left: 0;
}
.empty-content {
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  justify-content: space-around;
}
.left {
  border-radius: 24px;
  box-shadow: 0 8px 24px 0 #08090a14;
  padding: 1rem;
}
// стили радио кнопки form_radio
.checkbox-group {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.checkbox-group input[type='radio'],
.checkbox-group input[type='checkbox'] {
  display: none;
}
.checkbox-group label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
}
.checkbox-group label:before {
  content: '';
  display: inline-block;
  width: 17px;
  height: 18px;
  position: absolute;
  left: 0;
  bottom: 1px;
  background: #fff;
  border: 2px solid #e5bebe;
  border-radius: 50%;
}

/* Checked */
.checkbox-group input[type='radio']:checked + label:before,
.checkbox-group input[type='checkbox']:checked + label:before {
  content: '✔';
  color: #e5bebe;
  font-size: 1.5rem;
}

/* Hover */
.checkbox-group label:hover:before {
  filter: brightness(120%);
}

/* Disabled */
.checkbox-group input[type='radio']:disabled + label:before {
  filter: grayscale(100%);
}
// конец
// стили switch оплатить юонусами
.checkbox-wrapper-3 input[type='checkbox'] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper-3 .toggle {
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper-3 .toggle:before {
  content: '';
  position: relative;
  top: 3px;
  left: 3px;
  width: 34px;
  height: 14px;
  display: block;
  background: #9a9999;
  border-radius: 8px;
  transition: background 0.2s ease;
}
.checkbox-wrapper-3 .toggle span {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  display: block;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
  transition: all 0.2s ease;
}
.checkbox-wrapper-3 .toggle span:before {
  content: '';
  position: absolute;
  display: block;
  margin: -18px;
  width: 56px;
  height: 56px;
  background: rgba(79, 46, 220, 0.5);
  border-radius: 50%;
  transform: scale(0);
  opacity: 1;
  pointer-events: none;
}

.checkbox-wrapper-3 #cbx-3:checked + .toggle:before {
  background: #947ada;
}
.checkbox-wrapper-3 #cbx-3:checked + .toggle span {
  background: #4f2edc;
  transform: translateX(20px);
  transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
  box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
}
.checkbox-wrapper-3 #cbx-3:checked + .toggle span:before {
  transform: scale(1);
  opacity: 0;
  transition: all 0.4s ease;
}

// конец
// стили формы
.receiver-info-form {
  display: flex;
  flex-direction: column;
}
.receiver-info-form label,
.receiver-info-form select {
  font-family: var(--marckScript), cursive;
  font-size: 22px;
  color: #898989;
  font-weight: normal;
}
.receiver-info-form input,
.receiver-info-form select {
  height: 38px;
  line-height: 38px;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #dddddd;
  font-size: 1.25rem;
  font-family: var(--cormorantGaramond), serif;
  color: #808080;
  outline: none;
}
.receiver-info-form input {
  width: 100%;
}
.receiver-info-form select {
  margin: 1rem 0;
  width: 100%;
}
.receiver-info-form input:focus,
.receiver-info-form select:focus {
  border-color: #c44d58;
}
.checkbox-group {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;
}
.option {
  position: relative;
  padding-right: 1rem;
}
.clue {
  position: absolute;
  width: 15px;
  height: 15px;
  font-weight: 600;
  font-size: 1rem;
  right: 0;
  padding-left: 0.5rem;
  color: #e5bebe;
  cursor: pointer;
}
.payment {
  display: flex;
  flex-direction: column;
}

.bonus-value-use {
  font-size: 1rem;
  width: 50px;
  color: #898989;
  text-align: center;
}
.cart-items {
  margin-bottom: 1rem;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.right {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-right: 0;
}
</style>