<template>
  <div>
    <navbar></navbar>
    <infosDoctorat></infosDoctorat>
    <foot></foot>
  </div>
</template>

<script>
import InfosDoctorat from "@/components/Filiere/InfosDoctorat.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
// import Navbar from '../../../components/Acceuil/Navbar.vue';

export default {
  name: "InfosDoctorats",
  components: {
    infosDoctorat: InfosDoctorat,
    navbar: Navbar,
    foot: Footer,
  },
};
</script>

<style scoped></style>
