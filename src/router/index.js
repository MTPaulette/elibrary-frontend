import Vue from "vue";
import VueRouter from "vue-router";

import Authentification from "../views/Authentification.vue";
import Login from "../components/Authentification/Login.vue";
import Register from "../components/Authentification/Register.vue";
import ResetPassword from "../components/Authentification/ResetPassword.vue";

import Chat from "../views/Chat.vue";
import ChatComponent from "../components/Chat.vue";

import Layout from "../views/base/Layout.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Authentification,
    children: [
      {
        path: "/register",
        component: Register,
      },
      {
        path: "login",
        component: Login,
      },
      {
        path: "resetPassword",
        component: ResetPassword,
      },
    ],
  },

  {
    path: "/layout",
    name: "Layout",
    component: Layout,
  },

  {
    path: "/chat",
    component: Chat,
    children: [
      {
        path: "/",
        component: ChatComponent,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
