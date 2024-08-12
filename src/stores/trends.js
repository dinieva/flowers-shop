import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTrendStore = defineStore('trend', () => {
  const trends = [
    {
      title: 'Ажурные розы ',
      price: 6500,
      imgPath: '/flowers-shop/images/trends/7f106c299e4a8f9ace07ad21e1fb0f70.jpg'
    },

    {
      title: 'Солнечное трио',
      price: 7900,
      imgPath: '/flowers-shop//images/trends/697a328c4db50372272f217e3b09b64d.jpg'
    },
    {
      title: 'Букет Нежность из 15 роз',
      price: 4000,
      imgPath: '/flowers-shop/images/trends/15sweets.jpg'
    },
    {
      title: 'Дыхание весны',
      price: 3700,
      imgPath: '/flowers-shop/images/trends/ccd7426551d53fd47cb762f183ae172f.jpg'
    },
    {
      title: 'Белые хризантемы ',
      price: 3600,
      imgPath: '/flowers-shop//images/trends/composition.jpg'
    },

    {
      title: 'Фантазия',
      price: 7900,
      imgPath: '/flowers-shop//images/trends/bouqettt.jpg'
    },
    {
      title: 'Очарование',
      price: 4000,
      imgPath: '/flowers-shop//images/trends/18f9bfc48df16debd8081c857e5cfe13.jpg'
    },
    {
      title: 'Букет из 25 белых роз',
      price: 6500,
      imgPath: '/flowers-shop//images/trends/25roses.jpg'
    }
  ]
  /* const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } */

  return { trends /* count, doubleCount, increment */ }
})
