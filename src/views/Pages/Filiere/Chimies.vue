<template>
  <div>
    <navbar></navbar>
    <chimie></chimie>
    <foot></foot>
  </div>
</template>

<script>
import Chimie from "@/components/Filiere/Chimie.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
  name: "Chimies",
  components: {
    chimie: Chimie,
    navbar: Navbar,
    foot: Footer,
  },
};
</script>

<style scoped></style>
