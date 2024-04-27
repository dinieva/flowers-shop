<template>
  <DrawerComponent :isOpenCart="isOpenCart" @closeCart="closeCart" />
  <div class="catalog">
    <Loader v-if="loader" />

    <div v-else>
      <div class="catalog-header">
        <h1>Выберите свой букет</h1>
      </div>

      <div class="catalog-content">
        <aside class="filter">
          <div class="filter-block" v-for="category in filterBlockTitles" :key="category.id">
            <div class="filter-block__title">
              <h2>{{ category.rus }}</h2>
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
import CardComponent from '@/components/CardComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue'
import { useCatalogStore } from '../stores/catalog'
import { useFavoritesStore } from '../stores/favorites'
/* import { useCartItemsStore } from '@/stores/cartItems'
import { useFavoritesStore } from '@/stores/favorites' */

const loader = ref(false)
const checked = ref(false)
const flowersStore = useCatalogStore()
const allFlowersData = ref([])

const favoritesStore = useFavoritesStore()
const allFavoritesItems = favoritesStore.allFavoritesItems

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
//отображение массива цветов по пагинации
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
    console.log('filterObj.value', filterObj.value)
    console.log('filterCategories.value', filterCategories.value)
  } else {
    delete filterObj[key]
    console.log(filterObj)
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
}

/*
  function myCallback({ price }) {
    return price > 5000 ? 'Дороже' : 'Дешевле'
  }
  const result = Object.groupBy(obj, ({ group }) => group === 'Розы')
  const result2 = Object.groupBy(obj, myCallback)
  // console.log('1', obj, Object.hasOwn(obj, 'group'))
  console.log('Группировка объектов по группе розы', result)
  console.log('Группировка объектов по стоимости больше 5000', result2) */

onMounted(() => {
  loader.value = true
  allFlowersData.value = flowersStore.allFlowers
  loader.value = false
  checkFavorites(allFlowersData.value)
})
</script>

<style lang="scss" scoped>
.catalog {
  min-height: 100vh;
  text-align: center;
}
.catalog-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
}
.filter {
  margin-bottom: 2rem;
  width: 20%;
  background: var(--color-background-light);
  &-block {
    margin: 0 auto;
    width: 90%;
    border: 0.1px solid #e8e8e8;
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 2rem;
    &__title {
      border-bottom: 1px solid #eaeaea;
    }
  }
}
.items-wrapper {
  width: 80%;
  padding: 0 2rem;
  // justify-content: space-between;
  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
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
</style>