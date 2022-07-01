<script setup lang="ts">
import HomePage from './components/HomePage.vue'
import { useStore } from "vuex";

const store = useStore();

const getAPI = () => {
  store.dispatch('goods/getData')
}

// created
if (localStorage.getItem('cart_data') === null) {
  localStorage.setItem('cart_data', JSON.stringify({}))
}
getAPI();
</script>

<template>
  <HomePage />
</template>