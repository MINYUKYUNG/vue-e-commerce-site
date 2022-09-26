<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from "vuex"
import { useRoute } from 'vue-router'

const store = useStore();
const route = useRoute();

const paramsId = ref(route.params.id)
const isMenFashion = ref("men's clothing")
const isWomenFashion = ref("women's clothing")
const isAccessory = ref("jewelery")
const isDigital = ref("electronics")

const all = computed(() => {
  return store.state.goods.all
})

const sendCart = () => {
  store.commit('cart/updateCart', {
    getParams:  Number(paramsId.value),
    num: 1
  })
}

// created
const { image, title, description, rating, price, category } = all.value[Number(paramsId.value) - 1]
</script>

<template>
  <section class="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
    <!-- 상세페이지 내용 -->
    <div>
      <div class="text-sm breadcrumbs">
        <ul>
          <li v-if="category === isMenFashion || category === isWomenFashion">패션</li> 
          <li v-else-if="category === isAccessory">악세서리</li> 
          <li v-else-if="category === isDigital">디지털</li> 
          <li>{{ title }}</li>
        </ul>
      </div>

      <div class="card lg:card-side shadow-xl mt-12 mb-8">
        <figure class="bg-white p-8 lg:w-1/3 lg:p-20"><img :src="image" alt="상품 이미지" class="object-contain h-72 w-full" /></figure>

        <div class="card-body lg:w-2/3 my-auto">
          <h2 class="card-title">{{ title }}</h2>
          <p class="pb-2">{{ description }}</p>
          <div className="rating rating-md rating-half pointer-events-none">
            <template v-for="id in Math.floor(rating.rate)" :key="id">
              <input type="radio" name="rating-10" class="bg-yellow-400 mask mask-star-2 mask-half-1" disabled checked />
              <input type="radio" name="rating-10" class="bg-yellow-400 mask mask-star-2 mask-half-2" disabled checked />
            </template>
            <!-- 0.5 ~ 0.9 만, 반개 더 -->
            <template v-if="0.5 <= rating.rate%1">
              <input type="radio" name="rating-10" class="bg-yellow-400 mask mask-star-2 mask-half-1" disabled checked />
              <input type="radio" name="rating-10" class="bg-yellow-400 mask mask-star-2 mask-half-2" disabled />
            </template>
            <template v-for="id in (5 - Math.round(rating.rate))"  :key="id">
              <input type="radio" name="rating-10" class="bg-yellow-400 mask mask-star-2 mask-half-1" disabled />
              <input type="radio" name="rating-10" class="bg-yellow-400 mask mask-star-2 mask-half-2" disabled />
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