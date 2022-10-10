<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from 'vue';

const store = useStore();

const isState = computed(() => {
  const preWomen = computed(() => store.state.goods.preWomen);
  const preMen = computed(() => store.state.goods.preMen);
  const preElec = computed(() => store.state.goods.preElec);
  const preJewe = computed(() => store.state.goods.preJewe);

  const forPre = [ 
    { subTitle: '패션', data: [ ...preWomen.value, ...preMen.value ] }, 
    { subTitle: '액세서리', data: preElec.value }, 
    { subTitle: '디지털', data: preJewe.value }, 
  ];

  return forPre;
});
</script>

<template>
  <div class="mt-10 mb-20">
    <section 
      v-for="{ subTitle, data }, index in isState" :key="index"
      class="px-4 pt-12 pb-8 container mx-auto 2xl:px-20"
    >
      <h2 class="pb-8 text-4xl font-bold text-center">{{ subTitle }}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-6">
        <div 
          v-for="{ id, title, price, image } in data" :key="id"
          class="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none"
        >
          <RouterLink :to="'/products/' + id">
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