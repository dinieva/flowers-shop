<template>
  <div class="filter-block__category">
    <div class="checkbox" v-for="(link, i) in links" :key="i">
      <input
        type="radio"
        :id="link"
        :value="link"
        :name="category"
        :checked="filterParams.includes(link)"
        class="custom-checkbox"
        @click="$emit('filterFlowers', $event, prop)"
      />
      <label :for="link">{{ link }}</label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  links: {
    type: Array
  },
  category: {
    type: String
  },
  filterParams: {
    type: Array,
    required: true
  }
})

defineEmits(['filterFlowers', 'update:value'])
</script>

<style lang="scss" scoped>
label {
  width: 100%;
  display: block;
  text-align: left;
  font-size: 0.7rem;
  padding: 4px 0px 4px 12px;
  border-bottom: 1px solid #eaeaea;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: var(--color-background-light);
    opacity: 0.7;
  }
}
.custom-checkbox {
  cursor: pointer;
  position: absolute;
  z-index: -1;
  opacity: 0;
}
[type='radio']:checked + label {
  background: var(--color-background-light);
}
.checked + label {
  background: var(--color-background-light);
}
[type='checkbox']:checked + label {
  background: var(--color-background-light);
}
</style>