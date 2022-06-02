<template>
  <div class="homeAdmin">
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
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/AdminDashboard/Sidebar.vue";
import Navbar from "@/components/AdminDashboard/Navbar.vue";
import Breadcrumbs from "@/components/AdminDashboard/Breadcrumbs.vue";

export default {
  name: "HomeAdmin",
  components: {
    Sidebar: Sidebar,
    Navbar: Navbar,
    Breadcrumbs: Breadcrumbs,
  },
};

</script>
<style>

.homeAdmin {
  text-align: left;
}
li {
  list-style: none;
}
/* @import "../../../public/static/css/admin/style.css";
@import "../../../public/static/css/admin/chosen.min.css"; */
</style>
