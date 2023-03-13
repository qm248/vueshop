import Vue from 'vue'
import Vuex from 'vuex';
import user from "./modules/user";
import index from "./modules/index";
import goods from './modules/goods';
import search from './modules/search';
import goodsReview from './modules/goods/review';
import cart from './modules/cart';



Vue.use(Vuex);

let store=new Vuex.Store({
    modules:{
        user,
        index,
        goods,
        search,
        goodsReview,
        cart
    }
});

export default store;