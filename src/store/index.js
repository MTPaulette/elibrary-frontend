import Vue from "vue";
import Vuex from "vuex";

<<<<<<< HEAD
import Authentification from "../database/Authentification";
import FetchData from "../database/FetchData";
//import Upload from "../database/Upload";
=======
import Authentification from "../actions/Authentification";
import FetchData from "../actions/FetchData";
//import Upload from "../actions/Upload";
>>>>>>> samuel

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
