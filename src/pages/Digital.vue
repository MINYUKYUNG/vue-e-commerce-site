<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from "vuex";
import Category from '../components/Category.vue';

const store = useStore();

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
  <Category v-bind=isState />
</template>