<template>
  <div class="burger-menu" :class="{ 'burger-menu_active': openMenu }">
    <button class="burger-menu_button" @click="openMenu = !openMenu">
      <span class="burger-menu_lines"></span>
    </button>
    <nav class="burger-menu_nav enhanced" v-if="openMenu">
      <ul class="menu">
        <li class="burger-menu_link">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="burger-menu_link">
          <router-link to="/about">О нас</router-link>
        </li>
        <li class="burger-menu_link">
          <router-link to="/catalog">Каталог</router-link>
        </li>
        <li class="burger-menu_link menu__item">
          <button
            class="menu__btn"
            @click="toggleSubmenu = !toggleSubmenu"
            :aria-expanded="toggleSubmenu"
          >
            Другие услуги

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
          </button>

          <ul class="menu menu-submenu" id="submenu" v-if="toggleSubmenu">
            <li class="burger-menu_link submenu-link">
              <router-link to="/subscribe">Цветочная подписка</router-link>
            </li>

            <li class="burger-menu_link submenu-link">
              <router-link to="/about">Анонимная доставка</router-link>
            </li>
            <li class="burger-menu_link submenu-link">
              <router-link to="/about">Сюрприз доставка</router-link>
            </li>
          </ul>
        </li>

        <li class="burger-menu_link">
          <router-link to="/contacts">Контакты</router-link>
        </li>
        <li class="burger-menu_link">
          <router-link to="/delivery">Доставка</router-link>
        </li>
      </ul>
    </nav>
    <div class="burger-menu_overlay"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
const route = useRoute()

const openMenu = ref(false)
const toggleSubmenu = ref(false)
// Чтобы бургер меню закрывался при переходе по ссылке меню
watch(route, () => (openMenu.value = false))
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: start;
}

.burger-menu {
  display: none;
  @include tablet {
    display: block;
  }
}
.burger-menu_button {
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 30;
  width: 80px;
  height: 80px;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
.burger-menu_button:hover .burger-menu_lines {
  filter: brightness(0.7);
}

.burger-menu_lines,
.burger-menu_lines::before,
.burger-menu_lines::after {
  position: absolute;
  width: 50px;
  height: 3px;
  background-color: #5a5458;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
.burger-menu_lines {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.burger-menu_lines::before {
  content: '';
  top: -12px;
  left: 0;
}
.burger-menu_lines::after {
  content: '';
  top: 12px;
  left: 0;
}

.burger-menu_active .burger-menu_lines {
  background-color: transparent;
}
.burger-menu_active .burger-menu_lines::before {
  top: 0;
  transform: rotate(45deg);
}
.burger-menu_active .burger-menu_lines::after {
  top: 0;
  transform: rotate(-45deg);
}

.burger-menu_nav {
  padding-top: 120px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-flow: column;
  height: 100%;
  // background-color: #f9afe9;
  background-color: var(--color-background-light);
  overflow-y: auto;
  -webkit-transition: 0.8s;
  -moz-transition: 0.8s;
  -o-transition: 0.8s;
  transition: 0.8s;
}
.burger-menu_active .burger-menu_nav {
  left: 0;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
.burger-menu_link {
  width: 100%;
  padding: 18px 35px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 400;
  color: #5a5458;
  border-bottom: 1px solid #fff;
}
.burger-menu_link:first-child {
  border-top: 1px solid #fff;
}
#submenu .burger-menu_link {
  border-top: none;
}
.burger-menu_link:hover {
  filter: brightness(0.9);
}
.burger-menu_overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
.burger-menu_active .burger-menu_overlay {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}
/* .menu {
  min-width: max-content;
} */
.menu__item {
  position: relative;
}
.submenu-link {
  border: none;
}

/* Первый уровень вложенности */
.enhanced .menu .menu {
  position: relative;
  top: 0;
  left: 0;
  padding-inline-start: 1em;
  padding-inline-end: 1em;
}

.menu__btn {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 400;
  color: #5a5458;
  background: none;
  transition: background-color 0.2s linear;
}
/* .menu-submenu .menu__btn-icon {
  transform: initial;
} */
/* .menu__btn-icon {
  transition: transform 0.1s linear;
}
.menu__btn-icon:active {
  transform: rotate(180deg);
} */
.svg-active {
  transform: rotate(180deg);
}
/* .menu-submenu .menu__btn[aria-expanded='true'] .menu__btn-icon {
  transform: rotate(180deg);
} */
</style>