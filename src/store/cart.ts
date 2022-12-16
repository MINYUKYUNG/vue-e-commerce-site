import { Storage } from '../utils/storage';

interface payGuard {
  id: number
  num: number
}

type K = string;
export type V = {
  id: number,
  count: number
};

export interface saveGuard {
  [key: K]: V
}

interface stateGuard {
  [key: K]: saveGuard
}

export default {
  namespaced: true,

  state: () => ({
    saveCart: {} as saveGuard,
  }),

  mutations: {
    updateCart(state: stateGuard, payload: payGuard) {
      const { id, num } = payload;

      if (Storage.get('cart_data')) {
        state.saveCart = JSON.parse(Storage.get('cart_data') || '{}');
      } else {
        state.saveCart = {};
      }

      if (state.saveCart[id]) {
        if (state.saveCart[id].count === 1 && num === -1) {
          state.saveCart[id] = { id, count: 1 };
        } else {
          state.saveCart[id].count += num;
        }
      } else {
        state.saveCart[id] = { id, count: 1 };
      }

      const hateProxy = { ...state.saveCart };
      Storage.set('cart_data', JSON.stringify(hateProxy));
    },
    deleteCart(state: stateGuard) {
      state.saveCart = {};
      Storage.remove('cart_data');
    },
    loadCart(state: stateGuard) {
      state.saveCart = JSON.parse(Storage.get('cart_data') || '{}');
    },
    deleteItem(state: stateGuard, payload: { id: number }) {
      const { id } = payload;
      delete state.saveCart[id];
      state.saveCart = { ...state.saveCart };

      const hateProxy = { ...state.saveCart };
      Storage.set('cart_data', JSON.stringify(hateProxy));
    },
  },
};
