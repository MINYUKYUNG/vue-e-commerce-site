<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from "vuex";
import Category from '../components/Category.vue';

const store = useStore();
const isLoaded = ref(false);

onMounted(() => {
  store.dispatch('goods/getWomenFashion');
  store.dispatch('goods/getMenFashion');
  isLoaded.value = true;
});

const isState = computed(() => {
  const womenFash = computed(() => store.state.goods.womenFash);
  const menFash = computed(() => store.state.goods.menFash);

  const info = {
    data: [ ...womenFash.value, ...menFash.value ],
    subTitle: "패션",
  };

  return info;
});
</script>

<template>
  <main v-if="isLoaded">
    <Category v-bind=isState />
  </main>
</template>