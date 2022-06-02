<template>
  <div>
    <navbar></navbar>
    <biologie></biologie>
    <foot></foot>
  </div>
</template>

<script>
import Biologie from "@/components/Filiere/Biologie.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
  name: "Biologies",
  components: {
    biologie: Biologie,
    navbar: Navbar,
    foot: Footer,
  },
};
</script>

<style scoped></style>
