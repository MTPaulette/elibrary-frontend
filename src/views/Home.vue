<template>
  <div class="home">
    <navbar></navbar>
    <carousel></carousel>

    <afficheLivre></afficheLivre>
    <foot></foot>
    <!---<img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />--->
  </div>
</template>

<script>
import Navbar from "@/components/Acceuil/Navbar.vue";
import Carousel from "@/components/Acceuil/Carousel.vue";
import Livres from "@/components/Acceuil/Livres.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
  name: "Home",
  components: {
    navbar: Navbar,
    carousel: Carousel,
    afficheLivre: Livres,
    foot: Footer,
  },
};
</script>
<style scoped></style>
