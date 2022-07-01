<script setup lang="ts">
import { useStore } from "vuex"
import { computed } from 'vue'

const store = useStore();

const preFash = computed(() => {
  return store.state.goods.preFash
})
const preAcce = computed(() => {
  return store.state.goods.preAcce
})
const preDigi = computed(() => {
  return store.state.goods.preDigi
})
</script>

<template>
  <div class="mt-10 mb-20">
    <!-- 패션 미리보기 -->
    <section class="px-4 pt-12 pb-8 container mx-auto 2xl:px-20">
      <h2 class="pb-8 text-4xl font-bold text-center">패션</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-6">
        <!-- 상품 v-for -->
        <div 
          v-for="{ id, title, price, image } in preFash" :key="id"
          class="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none"
        >
          <RouterLink :to="'/product/' + id">
            <figure class="bg-white overflow-hidden h-80"><img :src="image" alt="미리보기 이미지" class="object-contain h-1/2 w-1/2" /></figure>
            <div class="card-body h-44">
              <h2 class="card-title text-base">{{ title }}</h2>
              <p class="text-base">${{ price }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 악세서리 미리보기 -->
    <section class="px-4 pt-12 pb-8 container mx-auto 2xl:px-20">
      <h2 class="pb-8 text-4xl font-bold text-center">악세서리</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-6">
        <!-- 상품 v-for -->
        <div 
          v-for="{ id, title, price, image } in preAcce" :key="id" 
          class="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none"
        >
          <RouterLink :to="'/product/' + id">
            <figure class="bg-white overflow-hidden h-80"><img :src="image" alt="미리보기 이미지" class="object-contain h-1/2 w-1/2" /></figure>
            <div class="card-body h-44">
              <h2 class="card-title text-base">{{ title }}</h2>
              <p class="text-base">${{ price }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 디지털 미리보기 -->
    <section class="px-4 pt-12 pb-8 container mx-auto 2xl:px-20">
      <h2 class="pb-8 text-4xl font-bold text-center">디지털</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-6">
        <!-- 상품 v-for -->
        <div 
          v-for="{ id, title, price, image } in preDigi" :key="id" 
          class="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none"
        >
          <RouterLink :to="'/product/' + id">
            <figure class="bg-white overflow-hidden h-80"><img :src="image" alt="미리보기 이미지" class="object-contain h-1/2 w-1/2" /></figure>
            <div class="card-body h-44">
              <h2 class="card-title text-base">{{ title }}</h2>
              <p class="text-base">${{ price }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>