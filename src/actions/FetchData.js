import axios from "axios";
//import router from '../router';
const URL = "http://localhost:5000/api/";
const state = {};

const getters = {};

const actions = {
  //toutes les facultes
  async getFacultes() {
    let res = await axios.get(URL + "facultes/facultes");
    return res;
  },

  //toutes les filieres
  async getFilieres() {
    let res = await axios.get(URL + "filieres/filieres");
    //let res = await axios.get(URL+"filieres/filiere/:fa");
    return res;
  },

  //toutes les niveaux
  async getNiveaux() {
    let res = await axios.get(URL + "niveaux/niveaux");
    return res;
  },

  //toutes les specialites
  async getSpecialites() {
    let res = await axios.get(URL + "specialites/specialites");
    return res;
  },

  //tous les documents
  async getDocumentsActifs() {
    let res = await axios.get(
      "http://localhost:5000/api/documents/TousDocumentsActifs"
    );
    return res;
  },

  //toutes les specialites
  async download(id) {
    console.log("**************************************************");
    console.log(id);
    console.log(id.params);
    const ids = 2;
    let res = await axios.get(
      `http://localhost:5000/api/documents/telecharger/${ids}`
      // "http://localhost:5000/api/documents/telecharger/2"
      // "http://localhost:5000/api/documents/telecharger", {
      //   params: {
      //     id: id
      //   }
      // }
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
