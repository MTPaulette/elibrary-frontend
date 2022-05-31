import Vue from "vue";
import Vuex from "vuex";

import Authentification from "../database/Authentification";
import FetchData from "../database/FetchData";
//import Upload from "../database/Upload";

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
