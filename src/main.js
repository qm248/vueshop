import "babel-polyfill";//es6转es5兼容IE
import "url-search-params-polyfill";//让ie兼容new URLSearchParams()
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import config from './assets/js/conf/config';


Vue.config.productionTip = false;

Vue.prototype.$config=config;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
