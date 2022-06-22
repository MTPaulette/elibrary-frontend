<template lang="">
  <div>

    <div class="navbar-header">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#main-menu"
        aria-controls="main-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <a class="navbar-brand" href="./"
        ><img src="../../assets/fille-logo.jpg" class="w-25 h-25" alt="Logo"
      /></a>
      <a class="navbar-brand hidden" href="./"
        ><img src="images/logo2.png"
      /></a>
    </div>

    <div id="main-menu" class="main-menu collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active">
          <a href="index.html">
            <i class="menu-icon fa fa-dashboard"></i>Accueil
          </a>
        </li>
        <h3 class="menu-title">Gestion</h3>
        <!-- /.menu-title -->
        <li class="menu-item-has-children dropright">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-laptop"></i>Nouveau</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-puzzle-piece"></i
              ><a href="NewDocument">Document</a>
            </li>
            <li v-if="currentUser.RoleId == 1">
              <i class="fa fa-id-badge"></i><a href="NewTeacher">Enseignant</a>
            </li>
          </ul>
        </li>

        <li class="menu-item-has-children dropright">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-table"></i>Documents</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i
              ><a href="UpdateDocument">Modification</a>
            </li>
            <li>
              <i class="fa fa-table"></i><a href="BlockDocument">Suspension</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="Unblockdocument">Restauration</a>
            </li>
          </ul>
        </li>

        <li class="menu-item-has-children dropright" v-if="currentUser.RoleId == 1">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-th"></i>Enseignant</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i
              ><a href="UpdateTeacher">Modification</a>
            </li>
            <li>
              <i class="fa fa-table"></i><a href="BlockTeacher">Suspension</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="UnblockTeacher">Restauration</a>
            </li>
          </ul>
        </li>

        <li class="menu-item-has-children dropright"  v-if="currentUser.RoleId == 1">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-th"></i>Etudiant</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i><a href="BlockStudent">Suspension</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="UnblockStudent">Restauration</a>
            </li>
          </ul>
        </li>
        <li class="menu-item-has-children dropright" v-if="currentUser.RoleId == 1 || currentUser.RoleId == 2">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-th"></i>Corbeille</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i><a href="DeletedDocuments">Document</a>
            </li>
            <li v-if="currentUser.RoleId">
              <i class="fa fa-table"></i
              ><a href="DeletedTeachers">Enseignant</a>
            </li>
            <li v-if="currentUser.RoleId == 1">
              <i class="fa fa-table"></i><a href="DeletedStudents">Etudiant</a>
            </li>
          </ul>
        </li>
        

        <h3 class="menu-title">Notifications</h3>
        <li  v-if="currentUser.RoleId == 1" @click="showModal = true;">
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Nouveau</a>
        </li>
        <li>
          <a href="/notifications">
            <i class="menu-icon fa fa-line-chart"></i>Notifications</a
          >
        </li>
        <li>
          <a href="#">
            <i class="menu-icon fa fa-line-chart"></i>Boite de reception</a
          >
        </li>


        <div v-if="currentUser.RoleId == 1">
        <h3 class="menu-title">Signalement</h3>
        <li>
          <a href="/signalements"> <i class="menu-icon fa fa-line-chart"></i>signalements</a>
        </li></div>

        <h3 class="menu-title" v-if="currentUser.RoleId == 1">Analyse & Rapport</h3>
        <li v-if="currentUser.RoleId == 1">
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Analyse</a>
        </li>
        <li v-if="currentUser.RoleId == 1">
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Rapport</a>
        </li>

        <h3 class="menu-title">Paramètres</h3>
        <li>
          <router-link :to="{ path: '/profile', query: { id:currentUser.id }}"> <i class="menu-icon fa fa-user"></i>Profil</router-link>
          <!-- <a href="/profile"> <i class="menu-icon fa fa-user"></i>Profil</a> -->
        </li>
        <li>
          <a href="/reglage"> <i class="menu-icon fa fa-user"></i>Reglages</a>
        </li>
        <li>
          <a href="" @click="handleLogout">
            <i class="menu-icon fa fa-power-off"></i>Deconnexion</a
          >
        </li>
      </ul>
    </div>
    
			<Notification :show="showModal" @close="showModal = false;">
			</Notification>

  </div>
</template>
<script>
import Notification from "../Notification/New.vue";
export default {
  components: {
    Notification
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout").then(
        () => {
          this.$router.push("/login");
        },
        (error) => {
          console.log("error");
          this.loading = false;
          this.message = error.message;
        }
      );
    },
  },
};
</script>
<style>
@media (max-width: 575.99px) {

  }
</style>
