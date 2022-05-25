import Vue from "vue";
import Vuex from "vuex";

import Authentification from "../database/Authentification";
import FetchData from "../database/FetchData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Authentification,
    FetchData,
  },

  state: {},
  mutations: {},
  actions: {},
});
