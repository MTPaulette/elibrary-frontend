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
    //let res = await axios.get("http://localhost:5000/api/filieres/filiere/:fa");
    return res;
  },

  //toutes les niveaux
  async getNiveaux() {
    let res = await axios.get("http://localhost:5000/api/niveaux/niveaux");
    return res;
  },

  //toutes les specialites
  async getSpecialites() {
    let res = await axios.get(
      "http://localhost:5000/api/specialites/specialites"
    );
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
