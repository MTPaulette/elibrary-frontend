import Vue from "vue";
import Vuex from "vuex";

import Authentification from "../database/Authentification";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Authentification,
  },

  state: {},
  mutations: {},
  actions: {},
});
