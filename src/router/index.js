import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import Favorites from '../views/Favorites.vue'
import OrderPage from '../views/OrderPage.vue'
import Cart from '../views/Cart.vue' */
import AdvantagesBlock from '../components/AdvantagesBlock.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'advantages',
      component: AdvantagesBlock
    },
    {
      path: '/favorites',
      name: 'favorites',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Favorites.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/Catalog.vue')
    },
    {
      path: '/catalog/product/:title',
      name: 'product',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import('../views/Subscribe.vue')
    },
    {
      path: '/helps',
      name: 'helps',
      component: () => import('../views/Helps.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/OrderPage.vue')
    },
    {
      path: '/order',
      name: 'make-order',
      component: () => import('../views/OrderMake.vue')
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/Contacts.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('../views/Delivery.vue')
    }
  ]
})

export default router
