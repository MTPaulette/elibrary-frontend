import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import veeValidate from "vee-validate";

Vue.config.productionTip = false;

// //setting up default vue's http modules for api calls
Vue.prototype.$http = axios;

// //load the token from the localStorage
const token = localStorage.getItem("token");

// //is there is any token then we will simply append default axios authorization headers
if (token) {
   Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.use(veeValidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
