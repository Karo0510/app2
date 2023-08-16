import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    credentials: null
  },
  mutations: {
    updateData(state, payload) {
      state.credentials = payload;
    }
  },
  getters: {
    getData(state) {
      return state.credentials;
    }
  }
});

export default store;