import axios from "axios";
//import router from '../router';

const state = {};

const getters = {};

const actions = {
  //toutes les facultes
  async getFacultes() {
    let res = await axios.get("http://localhost:5000/api/facultes/facultes");
    return res;
  },

  //toutes les filieres
  async getFilieres() {
    let res = await axios.get("http://localhost:5000/api/filieres/filieres");
    return res;
  },

  //toutes les niveaux
  async getNiveaux() {
    let res = await axios.get("http://localhost:5000/api/niveaux/niveaux");
    return res;
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
