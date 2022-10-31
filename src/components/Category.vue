<script setup lang="ts">
import { ProductGuard } from '../utils/type';

interface CategoryGuard {
  data: ProductGuard[];
  subTitle: string;
};

defineProps<CategoryGuard>();
</script>

<template>
  <section class="pt-16">
    <div class="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>홈</li> 
          <li>{{ subTitle }}</li>
        </ul>
      </div>
      <div class="pt-12 pb-8 container mx-auto">
        <h2 class="pb-8 text-4xl font-bold text-center">{{ subTitle }}</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-6">
          <div 
            v-for="{ id, title, price, image } in data" :key="id"
            class="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none"
          >
            <RouterLink :to="'/products/' + id">
              <figure class="bg-white overflow-hidden h-80"><img :src="image" alt="상품 이미지" class="object-contain h-1/2 w-1/2" /></figure>
              <div class="card-body h-44">
                <h2 class="card-title text-sm xl:text-base">{{ title }}</h2>
                <p class="text-sm xl:text-base">${{ price }}</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>