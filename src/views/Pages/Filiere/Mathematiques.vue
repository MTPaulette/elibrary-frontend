<template>
  <div>
    <navbar></navbar>
    <maths></maths>
    <foot></foot>
  </div>
</template>

<script>
import Mathematique from "@/components/Filiere/Mathematique.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
  name: "Mathematiques",
  components: {
    maths: Mathematique,
    navbar: Navbar,
    foot: Footer,
  },
};
</script>

<style scoped></style>
