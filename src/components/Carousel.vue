<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from 'vue'
import jeans from '../assets/jeans.jpg'
import necklace from '../assets/necklace.jpg'
import salad from '../assets/salad.jpg'

const images = ref([
  {
    id: 1,
    url: jeans,
    des: 'Jeans!',
    to: '/fashion'
  },
  {
    id: 2,
    url: necklace,
    des: 'Accessories!',
    to: '/accessory'
  },
  {
    id: 3,
    url: salad,
    des: 'Salad!',
    to: '/salad'
  }
])
</script>

<template>
  <Carousel :wrap-around="true" :items-to-scroll="1" :items-to-show="1" :autoplay="4000">
    <Slide v-for="image in images" :key="image.id">
      <RouterLink :to="image.to" style="height:100%; width: 100%;" class="relative">
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold absolute left-0 top-1/4 pl-20 lg:pl-44 2xl:pl-72">
          <span class="fontKnewave">{{ image.des }}</span>
          <!-- <span class="text-base block text-left text-white font-normal py-1.5 pl-px">더 자세히 알아보기</span> -->
        </h2>
        <img :src="image.url" :alt="'캐러셀 이미지' + image.id" style="max-height: 700px; width: 100%; object-fit: cover;" />
      </RouterLink>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style lang="scss">
.carousel {
  display: block;
  overflow: hidden;
  width: 100%;
}
.carousel__pagination > .carousel__pagination-item > .carousel__pagination-button {
  width: 30px
}
</style>