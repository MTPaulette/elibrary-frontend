<template>
  <div>
    <navbar></navbar>
    <physique></physique>
    <foot></foot>
  </div>
</template>

<script>
import Physique from "@/components/Filiere/Physique.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
  name: "Physiques",
  components: {
    physique: Physique,
    navbar: Navbar,
    foot: Footer,
  },
};
</script>

<style scoped></style>
