<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <!-- <Livres></Livres> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

// import Livres from '@/components/Acceuil/Livres.vue';

export default {
  name: "LayoutPage",
  components: {
    Navbar,
    Footer,
    // Livres,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped></style>
