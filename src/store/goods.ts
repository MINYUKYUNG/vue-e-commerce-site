import { Commit } from 'vuex';
import {
  productsApi,
  womenFashionsApi,
  menFashionsApi,
  electronicsApi,
  jeweleryApi,
} from '../apis/goodsApi';
import { ProductGuard } from '../utils/type';

const PRE_HALF = 2;
const PRE_NUMS = 4;

type AllListsGuard = {
  [key: string]: ProductGuard
};

interface StateGuard {
  [key: string]: ProductGuard[] | AllListsGuard
}

export default {
  namespaced: true,

  state: () => ({
    all: [],
    allLists: {},
    womenFash: [],
    menFash: [],
    elec: [],
    jewe: [],
    preWomen: [],
    preMen: [],
    preElec: [],
    preJewe: [],
  }),

  mutations: {
    productLists(state: StateGuard, payload: { data: ProductGuard[] }) {
      const { data } = payload;
      const allLists = {};
      const all = data.map((item: ProductGuard) => {
        item.price = Math.round(item.price);
        allLists[item.id] = item;

        return item;
      });

      state.all = all;
      state.allLists = allLists;
    },
    womenFashionLists(state: StateGuard, payload: { data: ProductGuard[] }) {
      const { data } = payload;
      const womenFash = data.map((item: ProductGuard) => {
        item.price = Math.round(item.price);
        return item;
      });
      const preWomen = womenFash.slice(0, PRE_HALF);

      state.womenFash = womenFash;
      state.preWomen = preWomen;
    },
    menFashionLists(state: StateGuard, payload: { data: ProductGuard[] }) {
      const { data } = payload;
      const menFash = data.map((item: ProductGuard) => {
        item.price = Math.round(item.price);
        return item;
      });
      const preMen = menFash.slice(0, PRE_HALF);

      state.menFash = menFash;
      state.preMen = preMen;
    },
    electronicsLists(state: StateGuard, payload: { data: ProductGuard[] }) {
      const { data } = payload;
      const elec = data.map((item: ProductGuard) => {
        item.price = Math.round(item.price);
        return item;
      });
      const preElec = elec.slice(0, PRE_NUMS);

      state.elec = elec;
      state.preElec = preElec;
    },
    jeweleryLists(state: StateGuard, payload: { data: ProductGuard[] }) {
      const { data } = payload;
      const jewe = data.map((item: ProductGuard) => {
        item.price = Math.round(item.price);
        return item;
      });
      const preJewe = jewe.slice(0, PRE_NUMS);

      state.jewe = jewe;
      state.preJewe = preJewe;
    },
  },

  actions: {
    async getProducts(context: { commit: Commit }) {
      const data = await productsApi();
      context.commit('productLists', {
        data,
      });
    },
    async getWomenFashion(context: { commit: Commit }) {
      const data = await womenFashionsApi();
      context.commit('womenFashionLists', {
        data,
      });
    },
    async getMenFashion(context: { commit: Commit }) {
      const data = await menFashionsApi();
      context.commit('menFashionLists', {
        data,
      });
    },
    async getElectronics(context: { commit: Commit }) {
      const data = await electronicsApi();
      context.commit('electronicsLists', {
        data,
      });
    },
    async getJewelery(context: { commit: Commit }) {
      const data = await jeweleryApi();
      context.commit('jeweleryLists', {
        data,
      });
    },
  },
};
