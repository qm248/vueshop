import Vue from 'vue'
import Vuex from 'vuex';
import counter from './modules/counter';
import user from "./modules/user";
import cart from "./modules/cart";
import index from "./modules/index";

Vue.use(Vuex);

let store=new Vuex.Store({
    modules:{
        counter,
        user,
        cart,
        index
    }
});

export default store;