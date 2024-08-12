<template>
  <div class="mobile-footer">
    <button
      class="accordion accordion-btn"
      :class="{ 'accordion-btn-close': panel === 'menu' }"
      id="menu"
      @click="openMenu($event)"
    >
      Меню
    </button>

    <div class="panel" v-if="panel === 'menu'">
      <span></span>
      <router-link to="/about">О нас</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <router-link to="/subscribe">Подписка</router-link>
    </div>

    <button
      class="accordion accordion-btn"
      :class="{ 'accordion-btn-close': panel === 'help' }"
      id="help"
      @click="openMenu($event)"
    >
      Помощь
    </button>
    <div class="panel" v-if="panel === 'help'">
      <span></span>
      <p><router-link to="/about">Оплата</router-link></p>
      <p><router-link to="/helps">Гарантия</router-link></p>
      <p><router-link to="/subscribe">Доставка</router-link></p>
    </div>

    <button
      class="accordion accordion-btn"
      :class="{ 'accordion-btn-close': panel === 'contacts' }"
      id="contacts"
      @click="openMenu($event)"
    >
      Контакты
    </button>

    <div class="panel" v-if="panel === 'contacts'">
      <span></span>
      <p><router-link to="/about">Адрес: г.Казань ул.Петербургская</router-link></p>
      <a href="tel:8(843)543-2-100">8(843)543-2-100</a>
      <a href="mailto:">inspiration.help@gmail.com</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const panel = ref('')
// const minus = ref(false)

const openMenu = (e) => {
  if (panel.value === e.target.id) {
    // minus.value = !minus.value
    panel.value = ''
  } else {
    panel.value = e.target.id
    // minus.value = !minus.value
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
.mobile-footer {
  border-bottom: 1px solid #ccc;
  display: none;
  @include tablet {
    display: block;
  }
}
.accordion {
  position: relative;
  background-color: transparent;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.accordion:hover {
  background-color: rgb(229, 190, 190);
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  transition: max-height 0.2s ease-out;
}
button {
  font-size: 1.5rem;
  font-weight: 600;
}
.accordion-btn::after {
  position: absolute;
  right: 10px;
  content: '';
  background-size: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center center;
  width: 1.71429rem;
  height: 1.71429rem;
  background-image: url(/public/svg/plus.svg);
}
.accordion-btn-close::after {
  position: absolute;
  right: 10px;
  content: '';
  background-size: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center center;
  width: 1.71429rem;
  height: 1.71429rem;
  background-image: url(/public/svg/minus.svg);
}
</style>