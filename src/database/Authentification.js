import axios from "axios";
//import router from '../router';

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
  //isLoggedIn: function (state) {
  //  if(state.token != '') {
  //    return true
  //}else{
  //    return false
  //}
  //},
};

const actions = {
  //login action
  async loginAuth({ commit }, user) {
    commit("auth_request");
    let res = await axios.post("http://localhost:5000/api/users/login", user);
    if (res.data.success) {
      const token = res.data.token;
      user = res.data.user;
      //store de token into the localStorage
      localStorage.setItem("token", token);
      //set the axios defeult
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
    }
    return res;
  },

  //register action
  async registerAuth({ commit }, user) {
    commit("auth_request");
    let res = await axios.post(
      "http://localhost:5000/api/users/register",
      user
    );
    if (res.data.success) {
      commit("register_success", user);
    }
    return res;
  },

  //upload de fichier
  async createDocument({ commit }, document) {
    commit("auth_request");
    let res = await axios.post(
      "http://localhost:5000/api/documents/createDocument",
      document
    );
    //let res = await axios.post("http://localhost:5000/wanda/uploadFile", document);
    return res;
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    (state.token = token), (state.user = user), (state.status = state);
  },
  register_success(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
