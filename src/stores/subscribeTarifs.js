import { defineStore } from 'pinia'

export const useSubscribeTariffsStore = defineStore('subscribeTariffs', () => {
  const tariffs = [
    {
      title: 'Пакет "Мини"',
      price: 8000,
      imgPath: '/public/images/tariff-mini.jpg',
      description: 'Состав: сезонные цветы или моно букет'
    },
    {
      title: 'Пакет "Стандарт"',
      price: 13000,
      imgPath: '/public/images/subscribe.png',
      description: 'Состав: сезонные цветы, травы, злаки'
    },
    {
      title: 'Пакет "VIP"',
      price: 16000,
      imgPath: '/public/images/tariff-vip.jpg',
      description: 'Состав: дизайнерская композиция, премиальные сорта цветов, травы, злаки'
    }
  ]

  return {
    tariffs
  }
})
