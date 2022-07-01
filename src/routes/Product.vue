<script setup lang="ts">
import YesProduct from '../components/YesProduct.vue'
import NoProduct from '../components/NoProduct.vue'
import { useStore } from "vuex"
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const store = useStore();
const route = useRoute();

const all = computed(() => {
  return store.state.goods.all
})
</script>

<template>
  <main :key="route.fullPath" class="pt-16">
    <!-- params가 있을때 -->
    <template 
      v-if="Number(route.params.id) <= all.length && 
      route.params.id[0] !== '-' && 
      route.params.id[0] !== '0'"
    >
      <YesProduct />
    </template>

    <!-- params가 없을때 -->
    <template v-else>
      <NoProduct />
    </template>
  </main>
</template>