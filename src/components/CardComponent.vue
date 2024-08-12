<template>
  <div class="product-inner">
    <div class="product-wrap">
      <img :src="card.imgPath" />
      <div class="actions">
        <button class="add-to-cart" @click="$emit('closeCart'), cartItemsStore.addToCart(card)">
          <!--  $emit('addToCart', card), -->
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5"
                stroke="#fff"
                stroke-linecap="round"
              />
              <path
                d="M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z"
                stroke="#fff"
                stroke-linecap="round"
              />
              <circle cx="17" cy="20" r="1" fill="#fff" />
              <circle cx="9" cy="20" r="1" fill="#fff" />
            </g>
          </svg>
        </button>
        <button class="wishlist" @click="favoritesStore.addToFavorites(card)">
          <svg
            v-if="!card.isFavorite"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                stroke="#fff"
              />
            </g>
          </svg>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-else
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                fill="#dda3b6"
                stroke="#dda3b6"
                stroke-width="2"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">
        <router-link :to="{ name: 'product', params: { title: card.title } }">{{
          card.title
        }}</router-link>
      </h3>
      <!-- @click="$emit('navigate', card)" -->
      <span class="price">₽ {{ card.price }}</span>
    </div>
  </div>
</template>

<script setup>
import { useCartItemsStore } from '@/stores/cartItems'
import { useFavoritesStore } from '@/stores/favorites'
const favoritesStore = useFavoritesStore()
const cartItemsStore = useCartItemsStore()
defineProps({
  card: {
    type: Object,
    required: true
  }
})

defineEmits(['closeCart'])
</script>

<style lang="scss" scoped>
.product-inner {
  width: 200px;
  height: 100%;
  margin: 0 auto;
  background: white;
  text-align: center;
  border-bottom: 2px solid #ebebec;
  transition: 0.2s linear;
}
.product-inner:hover {
  border-color: #bca480;
}
.product-wrap {
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
}
.product-wrap img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 250px;
}
.actions {
  position: absolute;
  left: 0;
  bottom: -20%;
  width: 100%;
  background: rgba(59, 62, 67, 0.75);
  transition: 0.3s linear;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  cursor: pointer;
}
.product-inner:hover .actions {
  bottom: 0;
}
.actions a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  transition: 0.2s linear;
}
.actions a:hover {
  background: rgba(59, 62, 67, 0.85);
}
.actions a:before {
  font-family: 'FontAwesome';
}
.add-to-cart {
  width: 25px;
  height: 25px;
  background: transparent;
  cursor: pointer;
  transition: 1s;
  &:hover {
    transform: scale(1.2);
  }
}

.wishlist {
  width: 25px;
  height: 25px;
  background: transparent;
  cursor: pointer;
  transition: 1s;
  &:hover {
    transform: scale(1.2);
    background: url('/public/svg/favorite-fill.svg') center center/cover no-repeat;
  }
}
.product-info {
  padding-bottom: 5px;
  font-family: 'Noto Sans', sans-serif;
}
.product-title {
  margin: 0 0 5px 0;
  font-family: 'Noto Sans', sans-serif;
}
.product-title a {
  text-decoration: none;
  color: #1e1e1e;
  font-weight: 400;
  font-size: 16px;
}
.price {
  font-weight: bold;
  color: #bca480;
}
</style>