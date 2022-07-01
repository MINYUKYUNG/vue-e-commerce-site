<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="drawer h-auto">
    <!-- 누르면 바로 checked가 false -> true 로 바뀌고, v-model로 인해 바로 반영됨. -->
    <input id="my-drawer" v-model="checked" type="checkbox" class="drawer-toggle" />

    <section class="drawer-content">
      <Header />
      <RouterView />
      <Footer />
    </section>
    
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- 이때 checked는 true로, 클릭하면 checked = !true 가 된다. -->
        <li @click="checked = !checked">
          <RouterLink to="/fashion" class="btn btn-ghost text-gray-700 justify-start dark:text-white">패션</RouterLink>
        </li>
        <li @click="checked = !checked">
          <RouterLink to="/accessory" class="btn btn-ghost text-gray-700 justify-start dark:text-white">액세서리</RouterLink>
        </li>
        <li @click="checked = !checked">
          <RouterLink to="/digital" class="btn btn-ghost text-gray-700 justify-start dark:text-white">디지털</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>