<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from "vuex";
import Category from '../components/Category.vue';

const store = useStore();
const isLoaded = ref(false);

onMounted(() => {
  store.dispatch('goods/getJewelery');
  isLoaded.value = true;
});

const isState = computed(() => {
  const jewe = computed(() => store.state.goods.jewe);

  const info = {
    data: jewe.value,
    subTitle: "액세서리",
  };

  return info;
});
</script>

<template>
  <main v-if="isLoaded">
    <Category v-bind=isState />
  </main>
</template>