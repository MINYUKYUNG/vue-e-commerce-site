<script setup lang="ts">
import Layout from './components/Layout.vue';
import { useStore } from "vuex";
import { Storage } from './utils/storage';

if (Storage.get('cart_data') === null) Storage.set('cart_data', JSON.stringify({}));

const store = useStore();

store.dispatch('goods/getProducts');
store.dispatch('goods/getWomenFashion');
store.dispatch('goods/getMenFashion');
store.dispatch('goods/getElectronics');
store.dispatch('goods/getJewelery');
</script>

<template>
  <Layout />
</template>