import axios from "axios";
//import router from '../router';
const API_URL = "http://localhost:5000/api/";

const initialState = {
  facultes: null,
  filieres: null,
  niveaux: null,
  specialites: null,
  ues: null,
  types: null,
  enseignants: null,
};

export const fetchData = {
  namespaced: true,
  state: initialState,
  actions: {
    //toutes les ues
    async getEnseignants({ commit }) {
      let res = await axios.get(API_URL + "users/TousEnseignantsActifs");
      commit("setEnseignant", res.data.allUser);
    },

    //toutes les ues
    async getTypes({ commit }) {
      let res = await axios.get(API_URL + "types/types");
      commit("setType", res.data.types);
    },

    //toutes les ues
    async getUes({ commit }) {
      let res = await axios.get(API_URL + "ues/ues");
      commit("setUe", res.data.ues);
    },

    //toutes les facultes
    async getFacultes({ commit }) {
      let res = await axios.get(API_URL + "facultes/facultes");
      commit("setFaculte", res.data.facultes);
    },

    //toutes les filieres
    async getFilieres({ commit }) {
      let res = await axios.get(API_URL + "filieres/filieres");
      //let res = await axios.get(API_URL+"filieres/filiere/:fa");
      commit("setFiliere", res.data.filieres);
    },

    //toutes les niveaux
    async getNiveaux({ commit }) {
      let res = await axios.get(API_URL + "niveaux/niveaux");
      commit("setNiveau", res.data.niveaux);
    },

    //toutes les specialites
    async getSpecialites({ commit }) {
      let res = await axios.get(API_URL + "specialites/specialites");
      commit("setSpecialite", res.data.specialites);
    },

    //toutes les specialites
    async getDocumentsActifs() {
      let res = await axios.get(
        "http://localhost:5000/api/documents/TousDocumentsActifs"
      );
      return res;
    },
  },
  mutations: {
    setFaculte(state, facultes) {
      state.facultes = facultes;
    },
    setFiliere(state, filieres) {
      state.filieres = filieres;
    },
    setNiveau(state, niveaux) {
      state.niveaux = niveaux;
    },
    setSpecialite(state, specialites) {
      state.specialites = specialites;
    },
    setUe(state, ues) {
      state.ues = ues;
    },
    setEnseignant(state, enseigants) {
      state.enseignants = enseigants;
    },
    setType(state, types) {
      state.types = types;
    },
  },
};
