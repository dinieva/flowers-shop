// покупки ползователя после оформления(доставки)
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePurchasesStore = defineStore('purchases', () => {
  // const purchases = JSON.parse(localStorage.getItem('purchases'))
  const purchases = ref([])
  let res = JSON.parse(localStorage.getItem('purchases'))
  if (res) {
    purchases.value = JSON.parse(localStorage.getItem('purchases'))
  }

  /* watchEffect(() => {
    // const arr = purchases.value
    purchases.value = JSON.parse(localStorage.getItem('purchases'))
    console.log('watchEffect', JSON.parse(localStorage.getItem('purchases')))
  }) */
  return { purchases }
})
