<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from 'vue';
import YesCart from './components/YesCart.vue';
import { productsApi } from '@apis/goodsApi';

(async () => {
  await productsApi();
  store.commit('cart/loadCart');
})();

const store = useStore();
const reLoad = ref(0);

const all = computed(() => {
  return store.state.goods.all
});

const saveCart = computed(() => {
  return store.state.cart.saveCart
});

const deleteCart = () => {
  store.commit('cart/deleteCart')
};

const reYesCart = () => {
  reLoad.value = reLoad.value + 1;
};

const toPr = () => {
  let newData = saveCart.value
  let newId = 0, newCount = 0, newTotalPrice = 0;

  for (const key in newData) {
    newCount = newData[key].count
    newId = newData[key].id
    newTotalPrice = newTotalPrice + (all.value[newId-1].price * newCount)
  }

  return newTotalPrice
};
</script>

<template>
  <main class="pt-16">
      <section class="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
        <div class="text-sm breadcrumbs">
          <ul>
            <li>홈</li> 
            <li>장바구니</li>
          </ul>
        </div>
        
        <!-- 물건이 Yes -->
        <template v-if="Object.keys(saveCart).length !== 0">
          <section class="container mx-auto">
            <!-- 개별상품 전체 + 구매하기 버튼 -->
            <div class="px-5 xl:px-20">
              <!-- 개별상품 전체 -->
              <YesCart :key="reLoad" @repage="reYesCart" />
              
              <div>
                <p class="text-3xl">Total: ${{ toPr() }}</p>
                <label for="my-modal-6" class="btn modal-button mt-4 btn-primary">구매하기 버튼</label>
                
                <input id="my-modal-6" type="checkbox" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box">
                    <h3 class="font-bold text-lg">정말로 구매하시겠습니까?</h3>
                    <p class="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
                    <div class="modal-action">
                      <label for="my-modal-6" class="btn" @click="deleteCart">네</label>
                      <label for="my-modal-6" class="btn">아니오</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </template>

        <!-- 물건이 No -->
        <template v-else>
            <section class="py-36">
              <p class="text-center text-3xl py-4 line-clamp-1">장바구니에 물품이 없습니다.</p>
              <RouterLink to="/" class="flex justify-center">
                <button class="btn btn-primary">쇼핑하러 가기</button>
              </RouterLink>
            </section>
        </template>
      </section>
  </main>
</template>