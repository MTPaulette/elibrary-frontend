<template>
  <div class="homeAdmin">
  <!-- <div class="homeAdmin" v-if="currentUser.username"> -->
    <aside id="left-panel" class="left-panel">
      <nav class="navbar navbar-expand-sm navbar-default">
        <Sidebar></Sidebar>
      </nav>
    </aside>
    <div id="right-panel" class="right-panel">
      <header id="header" class="header">
        <Navbar></Navbar>
      </header>

      <Breadcrumbs></Breadcrumbs>

      <router-view />
      <Footer></Footer>

    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/AdminDashboard/Sidebar.vue";
import Navbar from "@/components/AdminDashboard/Navbar.vue";
import Footer from "@/components/AdminDashboard/Footer.vue";
import Breadcrumbs from "@/components/AdminDashboard/Breadcrumbs.vue";

export default {
  name: "HomeAdmin",
  components: {
    Sidebar: Sidebar,
    Navbar: Navbar,
    Breadcrumbs: Breadcrumbs,
    Footer,
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
<style>
body {
  padding: 0;
  margin: 0;
  width: 100%;
}
.homeAdmin {
  text-align: left;
}
li {
  list-style: none;
}
/* @import "../../../public/static/css/admin/style.css";
@import "../../../public/static/css/admin/chosen.min.css"; */
</style>
