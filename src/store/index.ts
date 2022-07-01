import { createStore } from "vuex";
import cart from "./cart";
import goods from "./goods";

export default createStore({
  modules: {
    cart,
    goods
  }
})