<template>
  <DrawerComponent :isOpenCart="isOpenCart" @closeCart="closeCart" />
  <div class="container">
    <h1>Избранные</h1>
    <div class="items-wrapper">
      <div class="items-wrapper__content" v-if="favoritesStore.allFavoritesItems.length > 0">
        <div v-for="item in favoritesStore.allFavoritesItems" :key="item" class="item">
          <CardComponent
            :card="item"
            @closeCart="closeCart"
            @addToFavorites="favoritesStore.addToFavorites"
          />
        </div>
      </div>
      <div class="items-wrapper__nothing" v-else>
        <h3>У вас нет избранных товаров</h3>
      </div>
      <!--@navigate="navigate" :product="flowerItem" <div v-for="i in item" :key="i">{{ i }}</div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DrawerComponent from '@/components/DrawerComponent.vue'
import { useFavoritesStore } from '@/stores/favorites'
import CardComponent from '@/components/CardComponent.vue'
const favoritesStore = useFavoritesStore()

//  открыть/закрыть корзину
const isOpenCart = ref(false) //  ref(true)  ref(false)
const closeCart = () => {
  isOpenCart.value = !isOpenCart.value
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
<style lang="scss" scoped>
h1,
h3 {
  text-align: center;
}
.items-wrapper {
  padding: 0 2rem;

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  &__nothing {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.item {
  width: 200px;
}
</style>
