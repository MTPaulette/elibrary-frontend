<template>
  <div class="home">
    <navbar></navbar>
    <log></log>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
import Login from "@/components/Authentification/Login.vue";

export default {
  name: "LoginPage",
  components: {
    'log':Login,
    'navbar':Navbar,
    'foot':Footer
  },
};
</script>
