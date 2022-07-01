<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from "vuex"

let baseCart = ref<{ id: number, count: number }[]>([]);
let num = ref(0);

const store = useStore();

const all = computed(() => {
  return store.state.goods.all
})

const saveCart = computed(() => {
  return store.state.cart.saveCart
})

const emit = defineEmits(['repage'])
const repage = () => {
  emit('repage')
}

const plusCart = (value: number) => {
  store.commit('cart/updateCart', {
    getParams: value,
    num: 1
  })
}
const minusCart = (value: number) => {
  store.commit('cart/updateCart', {
    getParams: value,
    num: -1
  })
}
const deleteItem = (value: number) => {
  store.commit('cart/deleteItem', {
    id: value
  })
}
const countCart = (value: number) => {
  num.value = num.value + value
}

// created
const data = saveCart.value
for (const key in data) {
  baseCart.value = [...baseCart.value, data[key]];
}
</script>

<template>
  <!-- 개별상품 전체 -->
  <div>
    <!-- 개별상품 1개 -->
    <div v-for="{ id } in baseCart" :key="id" class="card lg:card-side border-solid border border-gray-200 my-12">
      
      <!-- 이미지 -->
      <RouterLink :to="'/product/' + id" class="bg-white flex justify-center">
        <figure class="bg-white h-56 w-56"><img :src="all[id-1].image" alt="상품 이미지" class="object-contain h-5/6 w-5/6" /></figure>
      </RouterLink>

      <!-- 정보 -->
      <div class="card-body relative">
        <!-- 타이틀 -->
        <RouterLink :to="'/product/' + id">
          <h2 class="card-title">{{ all[id-1].title }}</h2>
        </RouterLink>

        <!-- 가격 -->
        <p :key="num" class="text-3xl">${{ all[id-1].price * saveCart[id].count }}</p>

        <!-- 증가감소 버튼 -->
        <div class="card-actions pt-4">
          <div class="btn-group">
            <button class="btn btn-primary" @click="minusCart(id), countCart(-1)"> - </button>
            <button :key="num" class="btn no-animation btn-disabled bg-white text-black">{{ saveCart[id].count }}</button>
            <button class="btn btn-primary" @click="plusCart(id), countCart(1)"> + </button>
          </div>
        </div>

        <!-- X 버튼 -->
        <button class="btn btn-square btn-outline absolute bottom-3 2xl:top-3 right-3 border-0 hover:bg-inherit" @click="deleteItem(id), repage()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-black dark:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      
    </div>
  </div>
</template>