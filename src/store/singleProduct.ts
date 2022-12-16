import { Commit } from 'vuex';
import { singleApi } from '../apis/goodsApi';
import { ProductGuard } from '../utils/type';

interface StateGuard {
  [key: string]: ProductGuard
}

export default {
  namespaced: true,

  state: () => ({
    single: {},
  }),

  mutations: {
    singleProduct(state: StateGuard, payload: { data: ProductGuard }) {
      const { data } = payload;
      state.single = data;
    },
  },

  actions: {
    async getSingle(context: { commit: Commit }, productId: string | undefined) {
      const data = await singleApi(productId);
      if (data !== '') data.price = Math.round(data.price);

      context.commit('singleProduct', {
        data,
      });

      return data;
    },
  },
};
