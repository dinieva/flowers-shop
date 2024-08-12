<template>
  <DrawerComponent :isOpenCart="isOpenCart" @closeCart="closeCart" />

  <FilterModalComponent
    :filterBlockTitles="filterBlockTitles"
    :openModal="openModal"
    :openMobileFilter="openMobileFilter"
    :filteredParams="filteredParams"
    @filterCatalog="openModal = true"
    @closeMobileFilter="openMobileFilter = false"
    @filterFlowers="modalFilterFlowers"
    @createFilteredObj="createFilteredObj"
    @resetFunc="resetFunc"
  />
  <div class="catalog">
    <Loader v-if="loader" />

    <div v-else>
      <div class="catalog-header">
        <h1>Выберите свой букет</h1>
      </div>

      <MobileFilterComponent
        @sortedCatalog="sortedCatalog"
        @openMobileFilter="openMobileFilter = true"
      />

      <div class="catalog-content">
        <aside class="filter">
          <div class="filter-block" v-for="category in filterBlockTitles" :key="category.id">
            <div class="filter-block__title">
              <h3>{{ category.rus }}</h3>
            </div>

            <FilterComponent
              :links="category.links"
              :category="category.rus"
              v-model:filterParams="filterCategories"
              @filterFlowers="filterFlowers($event, category.eng)"
            />
          </div>
          <button class="btn border-btn" @click="resetFunc">Сбросить</button>
        </aside>

        <div class="items-wrapper">
          <div class="items-wrapper__content" v-if="allFlowersData.length > 0">
            <div v-for="item in allFlowers" :key="item" class="item">
              <CardComponent :card="item" @closeCart="closeCart" />
            </div>
          </div>
          <div class="items-wrapper__nothing" v-else>
            <h3>Ничего не найдено</h3>
          </div>
        </div>
      </div>
      <div class="pagination-wrapper">
        <button
          type="button"
          v-for="page in totalPages"
          class="btn-page"
          :class="{ 'current-page': activePage === page }"
          :key="page"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Loader from '@/components/Layout/Loader.vue'
import DrawerComponent from '@/components/DrawerComponent.vue'
import FilterModalComponent from '@/components/FilterModalComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import MobileFilterComponent from '@/components/Layout/MobileFilterComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue'
import { useCatalogStore } from '../stores/catalog'
import { useFavoritesStore } from '../stores/favorites'
import { useTrendStore } from '../stores/trends'
/* import { useCartItemsStore } from '@/stores/cartItems'
import { useFavoritesStore } from '@/stores/favorites' */

const loader = ref(false)
const openModal = ref(false)
const openMobileFilter = ref(false)
const flowersStore = useCatalogStore()
const trendStore = useTrendStore()
const allFlowersData = ref([])

const favoritesStore = useFavoritesStore()
const allFavoritesItems = favoritesStore.allFavoritesItems

const filteredParams = ref({
  decoration: '',
  type: '',
  size: '',
  composition: ''
})

// проверка элементов из каталога на наличие в избранном
const checkFavorites = (arr) => {
  arr.forEach((elem) => {
    let isFavElem = allFavoritesItems.find((item) => item.title === elem.title)
    if (isFavElem) {
      elem.isFavorite = true
    }
  })
}

const filterCategories = ref([]) //выбранные параметры для фильтрации
const filterBlockTitles = [
  {
    id: 'f1',
    rus: 'Оформление',
    eng: 'decoration',
    links: ['В упаковке', 'Шляпная коробка', 'Корзина с цветами', 'Композиция в ящике']
  },
  { id: 'f2', rus: 'Вид', eng: 'type', links: ['Монобукет', 'Сборный', 'Сухоцветы'] },
  { id: 'f3', rus: 'Размер', eng: 'size', links: ['S', 'M', 'L', 'XL'] },
  {
    id: 'f4',
    rus: 'Цветы',
    eng: 'composition',
    links: [
      'Розы',
      'Гортензии',
      'Тюльпаны',
      'Ранункулюсы',
      'Лилии',
      'Хризантемы',
      'Герберы',
      'Эустома',
      'Орхидеи',
      'Пионы',
      'Лаванда',
      'Каллы',
      'Ромашки',
      'Гиацинты',
      'Гипсофила',
      'Мимоза',
      'Диантус'
    ]
  }
]

// пагинация
const limitOnPage = 12
const activePage = ref(1)
const start = computed(() => limitOnPage * (activePage.value - 1))
// const totalPages = computed(() => Math.ceil(flowersStore.allFlowers.length / limitOnPage))
const totalPages = computed(() => Math.ceil(allFlowersData.value.length / limitOnPage))
const changePage = (page) => {
  activePage.value = page
  console.log(' allFlowers.value pagination', allFlowers.value)
  // return allFlowers.value.slice(start.value, limitOnPage + start.value) // метод slice(startIndex,lastIndex)
}
//отображение массива букетов по пагинации
const allFlowers = computed(() =>
  allFlowersData.value.slice(start.value, limitOnPage + start.value)
)
// фильтрация
const filterObj = ref({})
const findItems = (obj) => {
  for (let key in obj) {
    if (key === 'composition') {
      activePage.value = 1
      allFlowersData.value = allFlowersData.value.filter((item) =>
        item[key].find((elem) => elem == filterObj.value[key])
      )
    } else {
      activePage.value = 1
      allFlowersData.value = allFlowersData.value.filter(
        (item) => item[key] === filterObj.value[key]
      )
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const filterFlowers = (event, key) => {
  allFlowersData.value = flowersStore.allFlowers
  if (event.target.checked) {
    filterCategories.value.push(event.target.value)
    if (key === 'decoration') {
      filterObj.value.decoration = event.target.value
    } else if (key === 'type') {
      filterObj.value.type = event.target.value
    } else if (key === 'size') {
      filterObj.value.size = event.target.value
    } else if (key === 'composition') {
      filterObj.value.composition = event.target.value
    }
    findItems(filterObj.value)
  } else {
    delete filterObj[key]
  }
}
//создается объект по выбранным параметрам
const createFilteredObj = (key, val) => {
  if (key === 'decoration') {
    filteredParams.value.decoration = val
  } else if (key === 'type') {
    filteredParams.value.type = val
  } else if (key === 'size') {
    filteredParams.value.size = val
  } else if (key === 'composition') {
    filteredParams.value.composition = val
  }
}
// фильтрация модальное окно
const modalFilterFlowers = (obj) => {
  allFlowersData.value = flowersStore.allFlowers
  for (let key in obj) {
    if (obj[key] !== '') {
      if (key === 'composition') {
        activePage.value = 1
        allFlowersData.value = allFlowersData.value.filter((item) =>
          item[key].find((elem) => elem == obj[key])
        )
      } else {
        activePage.value = 1
        allFlowersData.value = allFlowersData.value.filter((item) => item[key] === obj[key])
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
// сортировка по выбранным опциям
const sortedCatalog = (option) => {
  // const copyOriginalFlowersArray = [...flowersStore.allFlowers]
  const copyOriginalFlowersArray = [...allFlowersData.value]
  allFlowersData.value = flowersStore.allFlowers
  activePage.value = 1
  if (option === 'bests') {
    allFlowersData.value = [...trendStore.trends]
  }
  if (option === 'decrease') {
    // const sortedAllFlowersData= Object.keys ( flowersStore.allFlowers ) .sort ( ( a , b ) = > a - b )
    allFlowersData.value = copyOriginalFlowersArray.sort((a, b) => b.price - a.price)
  }
  if (option === 'increase') {
    allFlowersData.value = copyOriginalFlowersArray.sort((a, b) => a.price - b.price)
  }
}
//  открыть/закрыть корзину
const isOpenCart = ref(false) //  ref(true)  ref(false)
const closeCart = () => {
  isOpenCart.value = !isOpenCart.value
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const resetFunc = () => {
  activePage.value = 1
  allFlowersData.value = flowersStore.allFlowers
  // checked.value = false
  filterObj.value = {}
  filterCategories.value = []
  console.log(filterCategories.value)
  filteredParams.value = {
    decoration: '',
    type: '',
    size: '',
    composition: ''
  }
}
onMounted(() => {
  loader.value = true
  allFlowersData.value = flowersStore.allFlowers
  loader.value = false
  checkFavorites(allFlowersData.value)
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
.catalog {
  min-height: 100vh;
  text-align: center;
}
.catalog-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  @include tablet {
    justify-content: center;
  }
  @include largemobile {
    justify-content: center;
  }
}
.filter {
  margin-bottom: 2rem;
  // width: 20%;
  background: var(--color-background-light);
  @include tablet {
    display: none;
  }
  @include largemobile {
    display: none;
  }
  &-block {
    margin: 0 auto;
    width: 90%;
    border: 0.1px solid #e8e8e8;
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 2rem;

    &__title {
      border-bottom: 1px solid #eaeaea;
      // word-wrap: break-word;
    }
  }
}
.items-wrapper {
  width: 100%;
  // padding: 0 2rem;
  @include tablet {
    width: 100%;
  }
  // justify-content: space-between;
  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: stretch;
    justify-content: space-around;
  }
  &__nothing {
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.item {
  width: 200px;
  display: flex;
}
.pagination-wrapper {
  padding-bottom: 2rem;
}
.btn-page {
  background: var(--color-background-light);
  padding: 1rem;
  color: #fff;
  margin: 0.2rem;
  cursor: pointer;
}
.current-page {
  background: #dda3b6;
  font-size: 1rem;
}
.checked {
  background: var(--color-background-light);
}
.btn {
  margin-bottom: 2rem;
}
.catalog-header {
  max-width: 100vw;
}
h1 {
  @include largemobile {
    font-size: 3rem;
    text-align: center;
  }
  @include smallmobile {
    font-size: 2rem;
    text-align: center;
  }
}
</style>