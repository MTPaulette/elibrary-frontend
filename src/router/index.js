import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Authentification/Login.vue";
import Informatiques from "../views/Pages/Filiere/Informatiques.vue";
import Mathematiques from "../views/Pages/Filiere/Mathematiques.vue";
import Physiques from "../views/Pages/Filiere/Physiques.vue";
import Chimies from "../views/Pages/Filiere/Chimies.vue";
import Biologies from "../views/Pages/Filiere/Biologies.vue";
import Enseignants from "../views/Pages/Enseignants/Enseignants.vue";
import InfosDocL1s from "../views/Pages/Filiere/InfosDocL1s.vue";
import InfosDocL2s from "../views/Pages/Filiere/InfosDocL2s.vue";
import InfosDocL3s from "../views/Pages/Filiere/InfosDocL3s.vue";
import InfosDocM1s from "../views/Pages/Filiere/InfosDocM1s.vue";
import InfosDocM2s from "../views/Pages/Filiere/InfosDocM2s.vue";
import InfosDoctorats from "../views/Pages/Filiere/InfosDoctorats.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/informatiques",
    name: "Informatiques",
    component: Informatiques,
  },
  {
    path: "/informatiques/infosL1",
    name: "InfosL1",
    component: InfosDocL1s,
  },
  {
    path: "/informatiques/infosL2",
    name: "InfosL2",
    component: InfosDocL2s,
  },
  {
    path: "/informatiques/infosL3",
    name: "InfosL3",
    component: InfosDocL3s,
  },
  {
    path: "/informatiques/infosM1",
    name: "InfosM1",
    component: InfosDocM1s,
  },
  {
    path: "/informatiques/infosM2",
    name: "InfosM2",
    component: InfosDocM2s,
  },
  {
    path: "/informatiques/infosDoctorat",
    name: "infosDoctorat",
    component: InfosDoctorats,
  },
  {
    path: "/mathematiques",
    name: "mathematiques",
    component: Mathematiques,
  },
  {
    path: "/physiques",
    name: "physique",
    component: Physiques,
  },
  {
    path: "/chimies",
    name: "chimies",
    component: Chimies,
  },
  {
    path: "/biologies",
    name: "biologies",
    component: Biologies,
  },
  {
    path: "/enseignants",
    name: "enseignants",
    component: Enseignants,
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
     path: "/home",
    name: "Home",
     component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
