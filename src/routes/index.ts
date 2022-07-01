// import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import Home from './Home.vue'
import Product from './Product.vue'
import Fashion from './Fashion.vue'
import Accessory from './Accessory.vue'
import Digital from './Digital.vue'
import Cart from './Cart.vue'
import NotFound from './NotFound.vue'

export default createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/product/:id',
      component: Product
    },
    {
      path: '/fashion',
      component: Fashion
    },
    {
      path: '/accessory',
      component: Accessory
    },
    {
      path: '/digital',
      component: Digital
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound // 404 페이지
    }
  ]
})