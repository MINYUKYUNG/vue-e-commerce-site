<script setup lang="ts">
import { useStore } from 'vuex';
import Layout from './components/Layout.vue';
import { Storage } from './utils/storage';

if (Storage.get('cart_data') === null) Storage.set('cart_data', JSON.stringify({}));

const store = useStore();
store.dispatch('goods/getProducts');
</script>

<template>
  <Layout />
</template>
