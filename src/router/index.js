import Vue from "vue";
import VueRouter from "vue-router";

import Authentification from "../views/Authentification.vue";
import Login from "../components/Authentification/Login.vue";
import Register from "../components/Authentification/Register.vue";
import ResetPassword from "../components/Authentification/ResetPassword.vue";
import Search from '../components/Base/Search.vue';


// import LoginPage from "../views/Authentification/Login.vue";
//import Home from "../views/Home.vue";
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

Vue.use(VueRouter);
/*
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "register", "/myHome"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // try to access a restricted page + not logged in
  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
*/
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
    ]
  },
  {
    path: "/Advancedform",
    name: "HomeAdmin",
    component: HomeAdmin,
    children: [
      {
        path: "/newDocument",
        name: "newDocument",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/New/Document.vue"),
      },

      /*********** bloqué ***********/
      {
        path: "/BlockDocument",
        name: "BlockDocument",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Block/Document.vue"),
      },
      {
        path: "/BlockStudent",
        name: "BlockStudent",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Block/Student.vue"),
      },
      {
        path: "/BlockTeacher",
        name: "BlockTeacher",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Block/Teacher.vue"),
      },



      /*********** debloqué ***********/
      {
        path: "/UnblockDocument",
        name: "UnblockDocument",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Unblock/Document.vue"),
      },
      {
        path: "/UnblockStudent",
        name: "UnblockStudent",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Unblock/Student.vue"),
      },
      {
        path: "/UnblockTeacher",
        name: "UnblockTeacher",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Unblock/Teacher.vue"),
      },


      /*********** bloqué ***********/
      {
        path: "/DeletedDocuments",
        name: "DeleteDocument",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Delete/Document.vue"),
      },
      {
        path: "/DeletedStudents",
        name: "DeleteStudent",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Delete/Student.vue"),
      },
      {
        path: "/DeletedTeachers",
        name: "DeleteTeacher",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Delete/Teacher.vue"),
      },

      /*********** recherche ***********/
      {
        path: "/DeletedDocuments",
        name: "DeleteDocument",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Delete/Document.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        // lazy-loaded
        component: () => import("../components/AdminDashboard/Profile.vue"),
      },
  {
    path: "/search",
    component: Search,
  },

    ],
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
    path: "/enseignants/docEnseignant",
    name: "docEnseignant",
    component: DocEnseignants,
  },

  /*************************
  {
    path: "/myHome",
    name: "MyHome",
    // lazy-loaded
    component: () => import("../views/MyHome.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: () => import("../views/BoardAdmin.vue"),
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: () => import("../views/BoardTeacher.vue"),
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: () => import("../views/BoardStudent.vue"),
  },*****************************/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
