import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import store from '@/store.js';
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.config.devtools = true;

Vue.use(Vuex);


const storedCredentials = sessionStorage.getItem('credentials');
if (storedCredentials) {
  const credentials = JSON.parse(storedCredentials);
  store.commit('updateData', credentials);
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
