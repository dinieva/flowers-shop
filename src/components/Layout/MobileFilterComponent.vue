<template>
  <div class="filter-container">
    <button type="button" class="filter-btn" @click="$emit('openMobileFilter')">
      Фильтры
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 4V10M19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14M19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14M19 14V20M12 4V16M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16ZM5 8V20M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <select
      type="button"
      class="filter-btn select"
      @change="$emit('sortedCatalog', $event.target.value)"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        class="menu__btn-icon"
        :aria-hidden="toggleSubmenu"
        :class="{ 'svg-active': toggleSubmenu == true }"
        :active="toggleSubmenu"
      >
        <path
          fill="currentColor"
          d="M5.64645 8.64645c.19526-.19527.51184-.19527.7071 0L12 14.2929l5.6464-5.64645c.1953-.19527.5119-.19527.7072 0 .1952.19526.1952.51184 0 .7071L12 15.7071 5.64645 9.35355c-.19527-.19526-.19527-.51184 0-.7071Z"
        ></path>
      </svg>
      <option value="noOption">Сортировать по</option>
      <option value="bests">Бестселлеры</option>
      <option value="decrease">Цена по убыванию</option>
      <option value="increase">Цена по возрастанию</option>
    </select>
  </div>
</template>

<script setup>
defineEmits(['sortedCatalog' /* , 'param' */, 'openMobileFilter'])
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
.filter-container {
  display: none;

  @include tablet {
    display: block;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  @include smallmobile {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
.filter-btn {
  text-align: center;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
}
</style>