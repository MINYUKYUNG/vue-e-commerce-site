import { createRouter, createWebHistory } from 'vue-router';
import {
  Home,
  Fashion,
  Accessory,
  Digital,
  NotFound,
  Product,
  Cart,
} from '../pages';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    return { top: 0 };
  },

  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/products',
      component: Product,
    },
    {
      path: '/products/:id',
      component: Product,
    },
    {
      path: '/fashion',
      component: Fashion,
    },
    {
      path: '/accessory',
      component: Accessory,
    },
    {
      path: '/digital',
      component: Digital,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound,
    },
  ],
});
