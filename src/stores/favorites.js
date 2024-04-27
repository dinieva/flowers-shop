import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const allFavoritesItems = ref([])
  const favoritesFlowersInLocalStorage = localStorage.getItem('favoritesFlowers')
  if (favoritesFlowersInLocalStorage) {
    allFavoritesItems.value = JSON.parse(favoritesFlowersInLocalStorage)
  }
  const addToFavorites = (object) => {
    //опциональные цепочки (optional chaining)
    if (!object.isFavorite) {
      object.isFavorite = true
      allFavoritesItems.value.push({ ...object, isFavorite: true, id: Date.now() })
      localStorage.setItem('favoritesFlowers', JSON.stringify(allFavoritesItems.value))
    } else {
      object.isFavorite = false
      console.log('удален из избранных ', object)
      allFavoritesItems.value = allFavoritesItems.value.filter(
        (item) => item.title !== object.title
      )
      localStorage.setItem('favoritesFlowers', JSON.stringify(allFavoritesItems.value))
    }
  }
  /* watchEffect(
    () => allFavoritesItems,
    (state) => {
      localStorage.setItem('favoritesFlowers', JSON.stringify(state))
    },
    { deep: true }
  ) */
  /* watchEffect(() => {
  itemsOnPage.value = computed(() => allFlowers.value.slice(start.value, limitOnPage))
}) */
  return { allFavoritesItems, addToFavorites }
})
