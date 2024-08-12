<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/Layout/HeaderComponent.vue'
import FooterComponent from './components/Layout/FooterComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped>
main {
  min-height: 100vh;
  padding-top: 70px;
}
.container {
  min-height: 100vh;
}
</style>
