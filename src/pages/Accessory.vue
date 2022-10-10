<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from "vuex";
import Category from '../components/Category.vue';

const store = useStore();

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
  <Category v-bind=isState />
</template>