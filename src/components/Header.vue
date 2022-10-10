<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useStore } from "vuex";
import Search from './Search.vue';
import { Storage } from '../utils/storage';

const checked = ref(false);
const numberCart = ref(0);

const store = useStore();

const saveCart = computed(() => {
  return store.state.cart.saveCart;
});

const redIcon = () => {
  const headerCart = JSON.parse(Storage.get('cart_data') || '{}');

  for (const key in headerCart) {
    numberCart.value = numberCart.value + headerCart[key].count;
  };
};

const lightDark = () => {
  const documentEl = window.document.documentElement;
  if (checked.value === false) {
    documentEl.dataset.theme = 'light';
    documentEl.classList.remove('dark');
    Storage.set('theme', 'light');
  } else if (checked.value === true) {
    documentEl.dataset.theme = 'dark';
    documentEl.classList.add('dark');
    Storage.set('theme', 'dark');
  };
};

watch(checked, lightDark);

watch(saveCart, () => {
  numberCart.value = 0;
  redIcon();
});

if (Storage.get('theme')) {
  if (Storage.get('theme') === 'dark') checked.value = true;
  else if (Storage.get('theme') === 'light') lightDark();
} else lightDark();
redIcon();
</script>

<template>
  <header class="navbar bg-base-100 shadow-lg fixed dark:bg-gray-900 z-10">
    <div class="w-full container mx-auto">
      <div class="flex-none">
        <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current dark:stroke-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div class="mx-2 flex-none">
        <RouterLink to="/" class="text-lg font-bold text-gray-700 dark:text-white">Vue Shop</RouterLink>
      </div>
      <div class="hidden flex-none sm:flex md:flex-1">
        <RouterLink to="/fashion" class="btn btn-ghost text-gray-700 content-center btn-sm dark:text-white">패션</RouterLink>
        <RouterLink to="/accessory" class="btn btn-ghost text-gray-700 content-center btn-sm dark:text-white">액세서리</RouterLink>
        <RouterLink to="/digital" class="btn btn-ghost text-gray-700 content-center btn-sm dark:text-white">디지털</RouterLink>
      </div>
      <div class="flex items-center">
        <label class="swap swap-rotate">
          <input v-model="checked" type="checkbox" />
          <svg class="swap-on fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg class="swap-off fill-gray-700 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
        <Search />
        <RouterLink to="/cart" class="btn btn-ghost text-gray-700 content-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-gray-700 dark:stroke-white" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span class="bg-red-500 text-gray-200 w-5 h-5 text-center leading-5 rounded-full text-xs absolute top-0 left-2/4">{{ numberCart }}</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>