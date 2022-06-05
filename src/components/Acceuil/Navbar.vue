<template>
  <div>
    <!-- Modernizer for Portfolio -->
    <!---<script src="js/modernizer.js"></script>--->
    <header class="top-navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <!-- <img src="../../../public/static/homePage/images/logo.png" alt="" /> -->
            <img class="logo" src="../../../public/static/images/logo.jpg" alt="" />

          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-host"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbars-host">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/home">Acceuil</a>
              </li>
              <!-- <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li> -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown-a"
                  data-toggle="dropdown"
                  >Faculté des Sciences
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown-a">
                  <a class="dropdown-item" href="/informatiques"
                    >Informatique</a
                  >
                  <a class="dropdown-item" href="/mathematiques"
                    >Mathématiques
                  </a>
                  <a class="dropdown-item" href="/physiques">Physique</a>
                  <a class="dropdown-item" href="/chimies">Chimie</a>
                  <a class="dropdown-item" href="/biologies">Biologie</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="dropdown-a"
                  data-toggle="dropdown"
                  >Faculté des Lettres
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown-a">
                  <a class="dropdown-item" href="#">Géographie</a>
                  <a class="dropdown-item" href="#">Germanistique</a>
                  <a class="dropdown-item" href="#">Lettres Françaises</a>
                  <a class="dropdown-item" href="#">Lettres Bilingue</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/enseignants">Enseignant</a>
              </li>
              <!-- <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li> -->
              <li class="nav-item"><a class="nav-link" href="#">Profil</a></li>
            </ul>
            <div id="header">
              <form action="#" method="post" id="search">
                <p>
                  <input
                    type="text"
                    onfocus="defaultInput(this)"
                    onblur="clearInput(this)"
                    name="keyword"
                    id="keyword"
                    value=""
                  />
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
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import "../../../public/static/homePage/css/bootstrap.min.css";
@import "../../../public/static/homePage/style.css";
@import "../../../public/static/homePage/css/versions.css";
@import "../../../public/static/homePage/css/responsive.css";
@import "../../../public/static/homePage/css/custom.css";

@import "../../../public/static/recherche/css/style.css";

.logo{
  width:180px;
  height : 110px;
}
</style>
