<template>
  <div class="home">
    <navbar></navbar>
    <carousel></carousel>

    <afficheLivre></afficheLivre>
    <!---<img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />--->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Acceuil/Navbar.vue";
import Carousel from "@/components/Acceuil/Carousel.vue";
import Livres from "@/components/Acceuil/Livres.vue";

export default {
  name: "Home",
  components: {
    navbar: Navbar,
    carousel: Carousel,
    afficheLivre: Livres,
  },
};
</script>
<style scoped></style>
