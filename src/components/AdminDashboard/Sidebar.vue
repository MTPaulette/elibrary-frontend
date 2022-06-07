<template lang="">
  <div>
    <!-- <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default"> -->

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
        ><img src="../../assets/fille-logo.jpg" class="w-25 h-25"  alt="Logo"
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
            <li>
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
              <i class="fa fa-table"></i
              ><a href="BlockDocument">Suspension</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="Unblockdocument">Restauration</a>
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
            <i class="menu-icon fa fa-th"></i>Enseignant</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i
              ><a href="UpdateTeacher">Modification</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="BlockTeacher">Suspension</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="UnblockTeacher">Restauration</a>
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
            <i class="menu-icon fa fa-th"></i>Etudiant</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i
              ><a href="BlockStudent">Suspension</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="UnblockStudent">Restauration</a>
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
            <i class="menu-icon fa fa-th"></i>Corbeille</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i
              ><a href="DeletedDocuments">Document</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="DeletedTeachers">Enseignant</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="DeletedStudents">Etudiant</a>
            </li>
          </ul>
        </li>
        <!--li class="menu-item-has-children dropright">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-th"></i>Suspension</a
          >
          <ul class="sub-menu children dropdown-menu">
            <li>
              <i class="fa fa-table"></i
              ><a href="blockedDocuments">Document</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="blockedTeachers">Enseignant</a>
            </li>
            <li>
              <i class="fa fa-table"></i
              ><a href="blockedStudents">Etudiant</a>
            </li>
          </ul>
        </li-->

        <h3 class="menu-title">Notifications</h3>
        <li>
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Nouveau</a>
        </li>
        <li>
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Boite d'envoi</a>
        </li>
        <li>
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Boite de reception</a>
        </li>

        <h3 class="menu-title">Analyse & Rapport</h3>
        <li>
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Analyse</a>
        </li>
        <li>
          <a href="#"> <i class="menu-icon fa fa-line-chart"></i>Rapport</a>
        </li>

        <h3 class="menu-title">Paramètres</h3>
        <li>
          <a href="/profile"> <i class="menu-icon fa fa-user"></i>Profil</a>
        </li>
        <li>
          <a href="" @click="handleLogout"> <i class="menu-icon fa fa-power-off"></i>Deconnexion</a>
        </li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
    <!-- </nav>
    </aside> -->
  </div>
</template>
<script>
export default {
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
      }
  }
};
</script>
<style>
ul li {
  list-style: none;
}
</style>
