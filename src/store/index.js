import Vue from 'vue'
import Vuex from 'vuex';
import user from "./modules/user";
import index from "./modules/index";

Vue.use(Vuex);

let store=new Vuex.Store({
    modules:{
        user,
        index
    }
});

export default store;