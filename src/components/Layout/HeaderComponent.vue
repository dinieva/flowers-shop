<template>
  <div class="header">
    <div class="container">
      <nav class="header__menu">
        <router-link to="/about">О нас</router-link>
        <router-link to="/catalog">Каталог</router-link
        ><!-- router-link to="/" -->
        <li class="topmenu">
          Другие услуги
          <div class="submenu">
            <router-link to="/subscribe">Цветочная подписка</router-link>
            <router-link to="/about">Анонимная доставка</router-link>
            <router-link to="/about">Сюрприз доставка</router-link>
          </div>
        </li>

        <router-link to="/" class="header__logo"
          ><span class="header__logo-text">Inspiration</span>
        </router-link>
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/delivery">Доставка</router-link>
      </nav>

      <div class="header__icons">
        <router-link to="/favorites">
          <img src="/public/svg/favorite.svg" alt="favorite" class="header__icon" />
        </router-link>
        <router-link to="/cart"
          ><img src="/public/svg/basket.svg" alt="cart" class="header__icon"
        /></router-link>
        <router-link to=""
          ><img src="/public/svg/avatar.svg" alt="avatar" class="header__icon"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.topmenu {
  position: relative;
  list-style: none;
  cursor: pointer;
}
.topmenu::after {
  content: '';
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-left: 8px;
  background: url('/public/svg/arrow-down.svg') no-repeat 0 0;
  background-size: 15px 15px;
}
.topmenu:hover .submenu {
  visibility: visible;
  opacity: 1;
  transform: perspective(600px) rotateX(0deg);
}

.submenu {
  display: flex;
  flex-direction: column;
  color: var(--color-text);
  background: var(--color-background-light);
  position: absolute;
  left: 0;
  visibility: hidden;
  opacity: 0;
  z-index: 5;
  width: 200px;
  transform: perspective(600px) rotateX(-90deg);
  transform-origin: 0% 0%;
  transition: 0.6s ease-in-out;
}
.submenu a {
  border-bottom: 1px solid #efefef;
  font-size: 0.9rem;
  padding: 1rem;
}
.submenu a:hover {
  color: #fff;
}
.header {
  height: 70px;
  color: var(--color-text);
  background: var(--color-background-light);
}
.container {
  height: 70px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
}
.header__menu {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__icons {
  width: 10%;
  display: flex;
  justify-content: space-between;
}
.header__icon {
  height: 25px;
}
.header__logo-text {
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: var(--lighthaus);
  color: var(--color-text);
}
</style>