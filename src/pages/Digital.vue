<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from "vuex";
import Category from '../components/Category.vue';

const store = useStore();
const isLoaded = ref(false);

onMounted(() => {
  store.dispatch('goods/getElectronics');
  isLoaded.value = true;
});

const isState = computed(() => {
  const elec = computed(() => store.state.goods.elec);

  const info = {
    data: elec.value,
    subTitle: "디지털",
  };

  return info;
});
</script>

<template>
  <main v-if="isLoaded">
    <Category v-bind=isState />
  </main>
</template>