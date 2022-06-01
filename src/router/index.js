import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Authentification/Login.vue";
import Dashbord from "../components/Dashbord/Pages/Dashbord.vue";
import Corbeille from "../components/Dashbord/Pages/Corbeille.vue";
import Notification from "../components/Dashbord/Pages/Notification.vue";
import NouveauDoc from "../components/Dashbord/Pages/NouveauDoc.vue";
import NouveauEns from "../components/Dashbord/Pages/NouveauEns.vue";
import ListeEns from "../components/Dashbord/Pages/ListeEns.vue";
import Locked from "../components/Dashbord/Pages/Locked.vue";

import Profil from "../components/Dashbord/Pages/Profil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashbord",
    name: "Dashbord",
    component: Dashbord,
  },
  {
    path: "/dashbord/corbeille",
    name: "Corbeille",
    component: Corbeille,
  },

  {
    path: "/dashbord/notification",
    name: "Notification",
    component: Notification,
  },
  {
    path: "/dashbord/nouveauDoc",
    name: "NouveauDoc",
    component: NouveauDoc,
  },
  {
    path: "/dashbord/nouveauEns",
    name: "NouveauEns",
    component: NouveauEns,
  },
  {
    path: "/dashbord/profil",
    name: "profil",
    component: Profil,
  },
  {
    path: "/dashbord/listeEns",
    name: "ListeEns",
    component: ListeEns,
  },
  {
    path: "/dashbord/locked",
    name: "locked",
    component: Locked,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
