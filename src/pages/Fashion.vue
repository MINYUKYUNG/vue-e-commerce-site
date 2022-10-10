<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from "vuex";
import Category from '../components/Category.vue';

const store = useStore();

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
  <Category v-bind=isState />
</template>