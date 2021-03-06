import axios from "axios";
//import router from '../router';
const URL = "http://localhost:5000/api/";

const actions = {
  //toutes les ues
  async getUes() {
    let res = await axios.get(URL + "ues/ues");
    return res;
  },

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
};

export default {
  actions,
};
