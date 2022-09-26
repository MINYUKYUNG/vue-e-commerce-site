<script setup lang="ts">
import Layout from './components/Layout.vue';
import { useStore } from "vuex";

const store = useStore();

if (localStorage.getItem('cart_data') === null) 
  localStorage.setItem('cart_data', JSON.stringify({}));
store.dispatch('goods/getProducts');
</script>

<template>
  <Layout />
</template>