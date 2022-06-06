import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { fetchData } from "./fetchData.module";
import main  from "./main.module";
import mainw  from "../services/main";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    fetchData,
    main,
    mainw
  },
});

/*
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

*/
