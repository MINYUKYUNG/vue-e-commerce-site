<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const paramsId = ref(route.params.id);

const allLists = computed(() => store.state.goods.allLists);

const sendCart = () => {
  store.commit('cart/updateCart', {
    id: Number(paramsId.value),
    num: 1,
  });
};

const {
  image,
  title,
  description,
  rating,
  price,
  category,
} = allLists.value[Number(paramsId.value)];
</script>

<template>
  <section class="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
    <div>
      <div class="text-sm breadcrumbs">
        <ul>
          <li v-if="category === `men's clothing` || category === `women's clothing`">패션</li>
          <li v-else-if="category === `jewelery`">악세서리</li>
          <li v-else-if="category === `electronics`">디지털</li>
          <li>{{ title }}</li>
        </ul>
      </div>
      <div class="card lg:card-side shadow-xl mt-12 mb-8">
        <figure class="bg-white p-8 lg:w-1/3 lg:p-20">
          <img :src="image" alt="상품 이미지" class="object-contain h-72 w-full" />
        </figure>
        <div class="card-body lg:w-2/3 my-auto">
          <h2 class="card-title">{{ title }}</h2>
          <p class="pb-2">{{ description }}</p>
          <div className="rating rating-md rating-half pointer-events-none">
            <template v-for="id in Math.floor(rating.rate)" :key="id">
              <input
                type="radio"
                name="rating-10"
                class="bg-yellow-400 mask mask-star-2 mask-half-1"
                disabled
                checked
              />
              <input
                type="radio"
                name="rating-10"
                class="bg-yellow-400 mask mask-star-2 mask-half-2"
                disabled
                checked
              />
            </template>
            <template v-if="0.5 <= rating.rate % 1">
              <input
                type="radio"
                name="rating-10"
                class="bg-yellow-400 mask mask-star-2 mask-half-1"
                disabled
                checked
              />
              <input
                type="radio"
                name="rating-10"
                class="bg-yellow-400 mask mask-star-2 mask-half-2"
                disabled
              />
            </template>
            <template v-for="id in (5 - Math.round(rating.rate))" :key="id">
              <input
                type="radio"
                name="rating-10"
                class="bg-yellow-400 mask mask-star-2 mask-half-1"
                disabled
              />
              <input
                type="radio"
                name="rating-10"
                class="bg-yellow-400 mask mask-star-2 mask-half-2"
                disabled
              />
            </template>
            <p class="pl-2">{{ rating.rate }} / {{ rating.count }} 참여</p>
          </div>
          <p class="text-3xl">${{ price }}</p>
          <div class="card-actions gap-4 pt-8">
            <button class="btn btn-primary" @click="sendCart">장바구니에 담기</button>
            <RouterLink to="/cart">
              <button class="btn btn-outline btn-primary dark:text-white">장바구니로 이동</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
