<script setup lang="ts">
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import YesProduct from './components/YesProduct.vue';
import NoProduct from './components/NoProduct.vue';

const store = useStore();
const route = useRoute();
const paramsId = ref(route.params.id);

const isLoaded = ref(false);
onMounted(() => {
  store.dispatch('goods/getProducts');
  isLoaded.value = true;
});

const allLists = computed(() => store.state.goods.allLists);
</script>

<template>
  <main :key="route.fullPath" class="pt-16" v-if="isLoaded">
    <template v-if="paramsId && paramsId[0] === '0'">
      <NoProduct />
    </template>
    <template v-else-if="allLists[Number(route.params.id)]">
      <YesProduct />
    </template>
    <template v-else>
      <NoProduct />
    </template>
  </main>
</template>
