import Vue from "vue";
import VueRouter from "vue-router";

import Authentification from "../views/Authentification.vue";
import Login from "../components/Authentification/Login.vue";
import Register from "../components/Authentification/Register.vue";
import ResetPassword from "../components/Authentification/ResetPassword.vue";
import Search from "../components/Base/Search.vue";
import Document from "../components/Base/DocumentDetails.vue";
import Profile from "../components/AdminDashboard/Profile.vue";
//import Search2 from "../components/Base/Search2.vue";

import LayoutPage from "../views/Pages/LayoutPage.vue";

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
    ],
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
        component: () =>
          import("../components/AdminDashboard/New/Document.vue"),
      },

      {
        path: "/newTeacher",
        name: "newTeacher",
        // lazy-loaded
        component: () =>
          import("../components/AdminDashboard/New/NewTeacher.vue"),
      },

      /*********** bloqué ***********/
      {
        path: "/BlockDocument",
        name: "BlockDocument",
        component: () =>
          import("../components/AdminDashboard/Block/Document.vue"),
      },
      {
        path: "/BlockStudent",
        name: "BlockStudent",
        component: () =>
          import("../components/AdminDashboard/Block/Student.vue"),
      },
      {
        path: "/BlockTeacher",
        name: "BlockTeacher",
        component: () =>
          import("../components/AdminDashboard/Block/Teacher.vue"),
      },

      /*********** debloqué ***********/
      {
        path: "/UnblockDocument",
        name: "UnblockDocument",
        component: () =>
          import("../components/AdminDashboard/Unblock/Document.vue"),
      },
      {
        path: "/UnblockStudent",
        name: "UnblockStudent",
        component: () =>
          import("../components/AdminDashboard/Unblock/Student.vue"),
      },
      {
        path: "/UnblockTeacher",
        name: "UnblockTeacher",
        component: () =>
          import("../components/AdminDashboard/Unblock/Teacher.vue"),
      },

      /*********** bloqué ***********/
      {
        path: "/DeletedDocuments",
        name: "DeleteDocument",
        component: () =>
          import("../components/AdminDashboard/Delete/Document.vue"),
      },
      {
        path: "/DeletedStudents",
        name: "DeleteStudent",
        component: () =>
          import("../components/AdminDashboard/Delete/Student.vue"),
      },
      {
        path: "/DeletedTeachers",
        name: "DeleteTeacher",
        component: () =>
          import("../components/AdminDashboard/Delete/Teacher.vue"),
      },

      /*********** recherche ***********/
      {
        path: "/DeletedDocuments",
        name: "DeleteDocument",
        component: () =>
          import("../components/AdminDashboard/Delete/Document.vue"),
      },
      {
        path: "/reglage",
        name: "Reglage",
        component: () => import("../components/AdminDashboard/Reglage.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
        //component: () => import("../components/AdminDashboard/Profile.vue"),
      },
      {
        path: "/search",
        name: "Search",
        component: Search,
      },
      {
        path: "/document/:id",
        name: "Document",
        component: Document,
        props: true,
      },
    ],
  },
  {
    path: "/",
    name: "LayoutPage",
    component: LayoutPage,
    children: [
      {
        path: "/",
        component: () =>
          import("../components/Acceuil/Carousel.vue"),
      },
      {
        path: "/ue/:filiereId",
        name: "Ue",
        component: () =>
          import("../components/Filiere/Ue.vue"),
        props: true,
      },
      {
        path: "/niveau",
        name: "Niveau",
        component: () =>
          import("../components/Filiere/Niveau.vue"),
      },
      {
        path: "/document",
        name: "DocumentHome",
        component: () =>
          import("../components/Filiere/Document.vue"),
      },
      {
        path: "/enseignants",
        component: () =>
          import("../components/Enseignant/Enseignant.vue"),
      },
      
      {
        path: "/DocEnseignants",
        name: "DocumentHome",
        component: () =>
          import("../components/Filiere/Document.vue"),
      },
],
},

      {
        path: "*",
        component: () =>
          import("../components/Filiere/NotFound.vue"),
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
