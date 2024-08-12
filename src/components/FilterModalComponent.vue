<!-- блок филтрации при мобильной версии -->
<template>
  <div class="filter-wrapper" v-if="openMobileFilter">
    <div class="filter-container">
      <div class="filter-header">
        <button type="button" class="filter-btn">
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

        <button class="close-modal" @click="$emit('closeMobileFilter')"></button>
      </div>

      <div class="filter-accordion">
        <div class="filter-accordion__item" v-for="filter in filterBlockTitles" :key="filter.id">
          <button class="accordion accordion-btn" @click="toogleAccordion(filter.rus)">
            {{ filter.rus }}
            <img
              src="/public/svg/plus.svg"
              alt="plus"
              class="btn-plus"
              v-if="openAccordionTitle !== filter.rus"
            />
            <img
              src="/public/svg/minus.svg"
              alt="plus"
              class="btn-minus"
              v-if="openAccordionTitle === filter.rus"
            />
          </button>
          <transition name="no-mode-fade">
            <div class="accordion-content" v-if="openAccordionTitle === filter.rus">
              <div class="checkbox" v-for="(filterType, i) in filter.links" :key="i">
                <input
                  type="radio"
                  :id="filterType"
                  :value="filterType"
                  :name="filter.rus"
                  class="custom-checkbox"
                  v-model="filteredParams[filter.eng]"
                  @click="$emit('createFilteredObj', (filter.eng, filterType))"
                /><!-- @click="createFilteredObj(filter.eng, filterType)" -->
                <label :for="filterType">{{ filter.links[i] }}</label>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="filter-btn__reset">
        <button @click="$emit('filterFlowers', filteredParams), $emit('closeMobileFilter')">
          Применить
        </button>
        <button @click="$emit('resetFunc'), $emit('closeMobileFilter')">Сбросить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const openAccordionTitle = ref('')

const props = defineProps({
  filterBlockTitles: {
    type: Array,
    required: true
  },
  openMobileFilter: {
    type: Boolean,
    required: true,
    default: false
  },
  filteredParams: {
    type: Object,
    required: true
  }
})

const toogleAccordion = (param) => {
  if (openAccordionTitle.value === param) {
    openAccordionTitle.value = ''
  } else {
    openAccordionTitle.value = param
  }
}

defineEmits(['closeMobileFilter', 'filterFlowers', 'resetFunc', 'createFilteredObj'])
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
button {
  background-color: transparent;
}
.filter-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba($color: #000, $alpha: 0.9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 70px;
}
.filter-container {
  background-color: #fff;
}
.filter-btn {
  text-align: center;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: transparent;
}
.filter-btn__reset {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1.7rem 1.4rem 1.7rem 1.1rem;
  border-bottom: 1px solid #f2eded;
}
.filter-btn__reset button {
  background-color: #f0f0f0;
  border-bottom: 1px solid #f2eded;
  padding: 10px;
}
.filter-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border: 1px solid rgb(182, 177, 177);
  background-color: #e5bebe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}
.close-modal {
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: transparent;
}
.close-modal::before,
.close-modal::after {
  content: '';
  display: block;
  width: 30px;
  height: 3px;
  background: #000;
}

.close-modal::before {
  transform: rotate(45deg);
}

.close-modal::after {
  transform: rotate(-45deg);
}

.accordion-btn {
  font-size: 16px;
  font-weight: 500;
}
.filter-accordion__item {
  width: 100%;
  min-height: 20px;
  padding: 1.7rem 1.4rem 1.7rem 1.1rem;
  border-bottom: 1px solid #f2eded;
}
.accordion-content {
  padding: 20px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.btn-plus,
.btn-minus {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 20px;
}
input[type='radio'] {
  // visibility: hidden;
  display: none;
}
input[type='radio']:checked + label:after,
input[type='radio']:not(:checked) + label:after {
  content: '';
  position: absolute;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

input[type='radio']:checked + label,
input[type='radio']:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 20px;
  line-height: 20px;
  cursor: pointer;
}
input[type='radio']:checked + label:after,
input[type='radio']:not(:checked) + label:after {
  left: 0px;
  top: 0px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid #e145a3;
}
input[type='radio']:checked + label:after {
  background-color: #e145a3;
}
.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity 0.3s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}
</style>