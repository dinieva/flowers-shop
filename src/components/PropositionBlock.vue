<template>
  <div class="proposition-block">
    <div class="proposition-block__content">
      <h4 class="proposition-block__title">500 бонусных рублей при первом заказе</h4>
      <ButtonComponent :path="'catalog'">Заказать</ButtonComponent>
      <!-- <button class="btn btn-form border-btn color-one">
        <router-link to="/catalog">Заказать</router-link>
      </button> -->
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from './Layout/ButtonComponent.vue'
</script>

<style lang="scss" scoped>
.proposition-block {
  position: relative;
  height: 40vh;
  margin: 4rem 0 0;
  background: url(/public/images/blossoming-delicate-peony.jpg) center center/cover no-repeat;
  text-align: center;
  &__content {
    position: absolute;
    padding: 2rem;
    background-color: rgba(229, 190, 190, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-size: 2rem;
    line-height: 2rem;
  }
}
.btn {
  margin-top: 2rem;
}
</style>