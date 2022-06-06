import axios from "axios";
//import router from '../router';
const API_URL = "http://localhost:5000/api/";

export const fetchData = {
  actions: {
    //toutes les ues
    async getUes() {
      let res = await axios.get(API_URL + "ues/ues");
      return res;
    },

    //toutes les facultes
    async getFacultes() {
      let res = await axios.get(API_URL + "facultes/facultes");
      return res;
    },

    //toutes les filieres
    async getFilieres() {
      let res = await axios.get(API_URL + "filieres/filieres");
      //let res = await axios.get(API_URL+"filieres/filiere/:fa");
      return res;
    },

    //toutes les niveaux
    async getNiveaux() {
      let res = await axios.get(API_URL + "niveaux/niveaux");
      return res;
    },

    //toutes les specialites
    async getSpecialites() {
      let res = await axios.get(API_URL + "specialites/specialites");
      return res;
    },

    //toutes les specialites
    async getDocumentsActifs() {
      let res = await axios.get(
        "http://localhost:5000/api/documents/TousDocumentsActifs"
      );
      return res;
    },
  },
};

/*
export default {
  actions,
};
*/
