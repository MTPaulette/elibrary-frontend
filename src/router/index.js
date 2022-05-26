import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/Authentification/Login.vue";
import Informatiques from "../views/Pages/Filiere/Informatiques.vue";
import Mathematiques from "../views/Pages/Filiere/Mathematiques.vue";
import Physiques from "../views/Pages/Filiere/Physiques.vue";
import Enseignants from "../views/Pages/Enseignants/Enseignants.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/informatiques",
    name: "Informatiques",
    component: Informatiques,
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
