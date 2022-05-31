import axios from "axios";
//import router from '../router';

const state = {
  token: localStorage.getItem("token") || "",
  document: {},
  status: "",
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  document: (state) => state.document,
  //isLoggedIn: function (state) {
  //  if(state.token != '') {
  //    return true
  //}else{
  //    return false
  //}
  //},
};

const actions = {
  async createDocument({ commit }, document) {
    commit("auth_request");
    let res = await axios.post("http://localhost:5000/api/documents/createDocument", document);
    if (res.data.success) {
      const token = res.data.token;
      document = res.data.document;
      commit("auth_success", token, document);
    }
    return res;
  }
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, document) {
    (state.token = token), (state.document = document), (state.status = state);
  },
  register_success(state, document) {
    state.document = document;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
