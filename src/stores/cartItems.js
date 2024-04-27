// товары,которые попадают в корзину
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartItemsStore = defineStore('cartItems', () => {
  const allCartItems = ref([])
  //   const itemTotalPrice = ref() // общая стоимость всех товаров в корзине
  const cartItemsInLocalStorage = localStorage.getItem('cartItems')
  if (cartItemsInLocalStorage) {
    allCartItems.value = JSON.parse(cartItemsInLocalStorage)
  }
  // добавляем в корзину
  const addToCart = (object) => {
    //ищем есть ли данный товар уже в корзине
    let inCart = allCartItems.value.findIndex((item) => item.title === object.title)

    if (inCart < 0) {
      allCartItems.value.push({
        ...object,
        id: Date.now(),
        amount: 1,
        itemTotalPrice: object.price
      })
      localStorage.setItem('cartItems', JSON.stringify(allCartItems.value))
    } else {
      allCartItems.value[inCart].amount = +allCartItems.value[inCart].amount + 1
      allCartItems.value[inCart].itemTotalPrice =
        +allCartItems.value[inCart].price * +allCartItems.value[inCart].amount
      localStorage.setItem('cartItems', JSON.stringify(allCartItems.value))
    }
  }
  // стоимость всех товаров
  const totalPrice = computed(() => {
    return allCartItems.value.reduce(
      (accumulator, currentValue) => accumulator + currentValue.itemTotalPrice,
      0
    )
  })

  // изменение количества товара в корзине при клике на  +/-
  const changeAmount = (id, amount) => {
    if (amount === 0) {
      setTimeout(() => {
        deleteItemFromCart(id)
      }, 1000)
    } else {
      let index = allCartItems.value.findIndex((item) => item.id === id)
      allCartItems.value[index].amount = amount
      allCartItems.value[index].itemTotalPrice = +allCartItems.value[index].price * amount
      localStorage.setItem('cartItems', JSON.stringify(allCartItems.value))
    }
  }

  // удалить товар из корзины
  const deleteItemFromCart = (id) => {
    allCartItems.value = allCartItems.value.filter((item) => item.id !== id)
    localStorage.setItem('cartItems', JSON.stringify(allCartItems.value))
  }
  return { allCartItems, totalPrice, addToCart, changeAmount, deleteItemFromCart }
})
