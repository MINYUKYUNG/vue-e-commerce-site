import axios from "axios"
import { Commit } from 'vuex';

export interface proGuard {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number}
}

interface stateGuard {
  [key: string]: proGuard[]
}

export default {
  namespaced: true,
  
  state: () => {
    return {
      // Product.vue
      all: [] as proGuard[],
      // Fashion.vue // Accessory.vue // Digital.vue
      fash: [] as proGuard[],
      acce: [] as proGuard[],
      digi: [] as proGuard[],
      // Preview.vue
      preFash: [] as proGuard[],
      preAcce: [] as proGuard[],
      preDigi: [] as proGuard[]
    }
  },

  mutations: {
    async setState(state: stateGuard, payload: { data: proGuard[]}) { // payload는 이 함수가 실행될때 인수로 들어온 데이터들을 받아 사용가능.
      const { data } = payload;
      const preNums = 4;
      
      await data.forEach(item => {
        item.price = Math.round(item.price)
        state.all = [...state.all, item];
        if (item.category === "men's clothing" || item.category === "women's clothing") state.fash = [...state.fash, item];
        else if (item.category === "jewelery") state.acce = [...state.acce, item];
        else if (item.category === "electronics") state.digi = [...state.digi, item];
      })
      state.preFash = state.fash.slice(0, preNums)
      state.preAcce = state.acce.slice(0, preNums)
      state.preDigi = state.digi.slice(0, preNums)
    }
  },

  actions: {
    async getData(context: { commit: Commit }) {
      const result = await axios.get('https://fakestoreapi.com/products');
      
      const data = result.data;
      context.commit('setState', {
        data
      });
    }
  }
}