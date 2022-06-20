<template>
  <div>
    <!-- Modernizer for Portfolio -->
    <!---<script src="js/modernizer.js"></script>--->
    <header class="top-navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="../../../public/static/homePage/images/logo.png" alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host"
            aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbars-host">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Acceuil</a>
              </li>
              <!-- <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li> -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="dropdown-a" data-toggle="dropdown">Faculté des Sciences
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown-a">

                  <router-link class="dropdown-item" v-for="filiere in filiereSciences" :key="filiere.id"
                    :to="{ path: '/niveau', query: {  filiere: filiere.id  }}">{{ filiere.nom }}
                  </router-link>

                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="dropdown-a" data-toggle="dropdown">Faculté des Lettres
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown-a">


                  <!-- <a class="dropdown-item" v-for="filiere in filiereLettres" @click="handleFiliere(filiere.id)"
                    :key="filiere.id">{{ filiere.nom}}
                  </a> -->


                  <router-link class="dropdown-item" v-for="filiere in filiereLettres" @click="location.reload(true);"
                    :key="filiere.id" :to="{ path: '/niveau', query: {  filiere: filiere.id  }}">{{ filiere.nom}}
                  </router-link>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/enseignants">Enseignant</a>
              </li>
              <!-- <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Profil</a></li> -->
              <li class="nav-item">
                <router-link class="nav-link" :to="{ path: '/profile', query: { id: currentUser.id }}">Profil
                </router-link>
              </li>
            </ul>
            <div id="header">
              <form action="/search" method="get" @submit="handleSearch" id="search">
                <p>
                  <input type="text" v-model="recherche" name="keyword" id="keyword" value="" />
                </p>
                <p>
                  <input type="submit" id="go" value="" />
                </p>
                <!-- <div class="clear"></div> -->
              </form>
            </div>
            <!-- <ul class="nav navbar-nav navbar-right">
                        <li><a class="hover-btn-new log orange" href="#" data-toggle="modal" data-target="#login"><span>Rechercher</span></a></li>
                    </ul> -->
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  data() {
    return {
      recherche: "",
    }
  },
  props: {
    user: {},
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
    facultes() {
      return this.$store.state.fetchData.facultes;
    },
    filieres() {
      return this.$store.state.fetchData.filieres;
    },
    niveaux() {
      return this.$store.state.fetchData.niveaux;
    },
    specialites() {
      return this.$store.state.fetchData.specialites;
    },
    enseignants() {
      return this.$store.state.fetchData.enseignants;
    },
    filiereSciences() {
      if(this.filieres) {
        return this.filieres.filter((filiere) => {
          if(filiere.FaculteId == 1) {
              return filiere;
          };
        });
      }else {
      return {}}
    },
    filiereLettres() {
      if(this.filieres) {
        return this.filieres.filter((filiere) => {
          if(filiere.FaculteId == 2) {
              return filiere;
          };
        });
      }else {
      return {}}
    }
  },
  mounted() {
    this.$store.dispatch("fetchData/getFacultes");
    this.$store.dispatch("fetchData/getFilieres");
    this.$store.dispatch("fetchData/getNiveaux");
    this.$store.dispatch("fetchData/getSpecialites");
    this.$store.dispatch("fetchData/getEnseignants");
  },
  methods: {
    handleSearch(){
      this.$router.push({ path: '/search',query: { q: this.recherche }})
    },
    // handleFiliere(filiereId){
    //   location.reload(true);
    //   this.$router.push({ path: '/niveau', query: { filiere: filiereId } });
    // }
  },

};
</script>

<style scoped>
@import "../../../public/static/homePage/css/bootstrap.min.css";
@import "../../../public/static/homePage/style.css";
@import "../../../public/static/homePage/css/versions.css";
@import "../../../public/static/homePage/css/responsive.css";
@import "../../../public/static/homePage/css/custom.css";

@import "../../../public/static/recherche/css/style.css";
</style>
