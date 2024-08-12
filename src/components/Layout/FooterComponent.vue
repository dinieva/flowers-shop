<template>
  <div class="footer">
    <div class="container">
      <div class="footer-columns">
        <div class="footer__logo column">
          <router-link to="/" class="footer__logo"
            ><span class="footer__logo-text">Inspiration</span>
          </router-link>
        </div>
        <MobileFooterMenu />
        <div class="footer-menu-columns">
          <nav class="footer__menu column">
            <h3 class="footer__columт-title">Меню</h3>
            <router-link to="/about">О нас</router-link>
            <router-link to="/catalog">Каталог</router-link>
            <router-link to="/subscribe">Подписка</router-link>
          </nav>
          <div class="footer__helps column">
            <h3 class="footer__columт-title">Помощь</h3>
            <router-link to="/helps">Оплата</router-link>
            <router-link to="/helps">Гарантия</router-link>
            <router-link to="/delivery">Доставка</router-link>
          </div>
          <div class="footer__contacts column">
            <h3 class="footer__columт-title">Контакты</h3>
            <div>Адрес: г.Казань ул.Петербургская</div>
            <a href="tel:8(843)543-2-100">8(843)543-2-100</a>
            <a href="mailto:">inspiration.help@gmail.com</a>
          </div>
        </div>
        <div class="footer__links">
          <a aria-label="Chat on WhatsApp" href="https://wa.me/79047694737"
            ><img alt="Chat on WhatsApp" src="/public/svg/whatsapp.svg" class="footer__link"
          /></a>
          <a href="https://t.me/RezeDi"
            ><img src="/public/svg/telegram.svg" alt="Telegram" class="footer__link"
          /></a>
        </div>
      </div>
      <p class="copyright">Copyright © 2024</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MobileFooterMenu from './MobileFooterMenu.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';

.footer {
  color: var(--color-text);
  &-columns {
    max-width: 920px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* display: grid;
    grid-template-columns: 1fr 3fr 1fr; */
    margin: 0 auto;
    @include tablet {
      flex-direction: column;
    }
  }
  &-menu-columns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 2rem;
    @include tablet {
      display: none;
    }
  }
  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    &-text {
      font-family: var(--montserrat), sans-serif;
      font-size: 1rem;

      font-weight: 800;
      font-family: var(--lighthaus);
      color: var(--color-text);
    }
  }
  &__menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 2rem;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40px;
    padding: 1rem;
    @include tablet {
      padding: 18px;
      flex-direction: row;
    }
  }
  &__link {
    width: 20px;
    height: 20px;
  }
}
.container {
  padding: 2rem 0 0.5rem 0;
  background-image: url('/public/images/blossoming-delicate-peony.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  border-top: 1px solid #161515;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__columт-title {
  text-transform: uppercase;
}
.copyright {
  text-align: center;
  background-color: transparent;
  padding: 2rem 0 0 0;
  font-weight: 500;
}
</style>s