<template>
  <div>
    <InfoComponent :info="info" />
  </div>
</template>

<script setup>
import InfoComponent from '@/components/InfoComponent.vue'
const info = {
  title: 'Доставка',
  description: {
    subtitle: 'Условия доставки',
    content: [
      'Доставка осуществляется курьером через два часа после оформления заказа.',
      'Промежуток времени доставки 2 часа.',
      'При заказе на сумму более 1800 р в пределах г.Казань — Бесплатно',
      'При заказе на сумму менее 1800 р  — 400 р',
      'Удаленные территории — 400 р.'
    ]
  },
  other: {
    subtitle: 'Самовывоз',
    content: [
      'Готовность букета уже через час после оформления заказа ',
      'Адрес для самовывоза: г.Казань ул.Петербургская',
      'Время работы круглосуточно каждый день.'
    ]
  }
}
</script>

<style lang="scss" scoped>
</style>