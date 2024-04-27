<template>
  <InfoComponent :info="info" />
</template>

<script setup>
import InfoComponent from '@/components/InfoComponent.vue'
const info = {
  title: 'Контакты',
  description: {
    subtitle: 'Мы всегда на связи',
    content: [
      'Тел: 8(843)543-2-100',
      'Адрес: г.Казань ул.Петербургская',
      'Эл.почта: inspiration.help@gmail.com'
    ]
  }
}
</script>

<style lang="scss" scoped>
</style>