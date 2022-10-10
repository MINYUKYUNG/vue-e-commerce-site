import { createStore } from "vuex";
import cart from "./cart";
import goods from "./goods";
import singleProduct from "./singleProduct";

export default createStore({
  modules: {
    cart,
    goods,
    singleProduct
  }
})