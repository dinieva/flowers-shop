<!-- кнопка перейти в каталог -->
<template>
  <button class="btn btn-form border-btn color-one">
    <router-link :to="`/${path}`"><slot></slot></router-link>
  </button>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String
  }
})
// console.log(props.path)
</script>

<style lang="scss" scoped>
</style>