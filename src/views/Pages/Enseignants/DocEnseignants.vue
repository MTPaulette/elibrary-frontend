<template>
  <div>
    <navbar></navbar>
    <docEnseignants></docEnseignants>
    <foot></foot>
  </div>
</template>

<script>
import DocEnseignant from "@/components/Enseignants/DocEnseignant.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
// import DocEnseignant from '../../../components/Enseignants/DocEnseignant.vue';

export default {
  name: "DocEnseignants",
  components: {
    docEnseignants: DocEnseignant,
    navbar: Navbar,
    foot: Footer,
  },
};
</script>

<style scoped></style>
