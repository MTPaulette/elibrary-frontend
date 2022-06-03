import Vue from "vue";
import VueRouter from "vue-router";

import Authentification from "../views/Authentification.vue";
import Login from "../components/Authentification/Login.vue";
import Register from "../components/Authentification/Register.vue";
import ResetPassword from "../components/Authentification/ResetPassword.vue";

// import Chat from "../views/Chat.vue";
// import ChatComponent from "../components/Chat.vue";

import Layout from "../views/base/Layout.vue";

// import LoginPage from "../views/Authentification/Login.vue";
import Home from "../views/Home.vue";
import Informatiques from "../views/Pages/Filiere/Informatiques.vue";
import Mathematiques from "../views/Pages/Filiere/Mathematiques.vue";
import Physiques from "../views/Pages/Filiere/Physiques.vue";
import Chimies from "../views/Pages/Filiere/Chimies.vue";
import Biologies from "../views/Pages/Filiere/Biologies.vue";
import Enseignants from "../views/Pages/Enseignants/Enseignants.vue";
import InfosDocL1s from "../views/Pages/Filiere/InfosDocL1s.vue";
import MatiereInfL1s from "../views/Pages/Filiere/MatiereInfL1s.vue";
import InfosDocL2s from "../views/Pages/Filiere/InfosDocL2s.vue";
import InfosDocL3s from "../views/Pages/Filiere/InfosDocL3s.vue";
import InfosDocM1s from "../views/Pages/Filiere/InfosDocM1s.vue";
import InfosDocM2s from "../views/Pages/Filiere/InfosDocM2s.vue";
import InfosDoctorats from "../views/Pages/Filiere/InfosDoctorats.vue";
import DocEnseignants from "../views/Pages/Enseignants/DocEnseignants.vue";

/**route des pages de l'admin */
import HomeAdmin from "../views/AdminDashboard/Home.vue";
import Simpleform from "../components/AdminDashboard/Form/Simpleform.vue";
import Advancedform from "../components/AdminDashboard/Form/Advancedform.vue";
import Table from "../components/AdminDashboard/Table.vue";
import User from "../components/AdminDashboard/Form/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Authentification,
    children: [
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/resetPassword",
        component: ResetPassword,
      },
    ],
    /*
    path: "/",
    name: "LoginPage",
    component: LoginPage,
    */
  },
  {
    path: "/informatiques",
    name: "Informatiques",
    component: Informatiques,
  },
  {
    path: "/informatiques/matiereInfL1",
    name: "MatiereInfL1s",
    component: MatiereInfL1s,
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
    path: "/layout",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/enseignants/docEnseignant",
    name: "docEnseignant",
    component: DocEnseignants,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Advancedform",
    name: "HomeAdmin",
    component: HomeAdmin,
    children: [
      {
        path: "/Simpleform",
        component: Simpleform,
      },
      {
        path: "/Advancedform",
        component: Advancedform,
      },
      {
        path: "/Table",
        component: Table,
      },
      {
        path: "/User",
        component: User,
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
