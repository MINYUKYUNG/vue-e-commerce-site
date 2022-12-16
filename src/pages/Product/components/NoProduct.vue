<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const paramsId = ref(route.params.id);
</script>

<template>
  <RouterLink to="/">
    <section class="container mx-auto px-4 2xl:px-20 w-full pt-52 pb-56">
      <p class="text-center text-3xl pt-4 line-clamp-1">상품 없음 : {{ paramsId }}</p>
      <p class="text-center text-sm pt-4">(화면을 클릭하면 메인으로 이동합니다)</p>
    </section>
  </RouterLink>
</template>
