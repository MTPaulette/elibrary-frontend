import Vue from "vue";
import Vuex from "vuex";

import Authentification from "../actions/Authentification";
import FetchData from "../actions/FetchData";
//import Upload from "../actions/Upload";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Authentification,
    FetchData,
    //Upload
  },

  state: {},
  mutations: {},
  actions: {},
});
