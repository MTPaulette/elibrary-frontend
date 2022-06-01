<template>
  <html>
    <head> </head>
    <body>
      <SidebarProf />
      <div class="main-content">
        <Header />
        <DashbordContent />
      </div>
    </body>
  </html>
</template>
<script>
import SidebarProf from "../Partial/sidebars/sidebarProf.vue";
import Header from "../Partial/Header.vue";
import DashbordContent from "../Partial/DashbordContent.vue";
export default {
  name: "dashbord",
  components: {
    SidebarProf,
    Header,
    DashbordContent,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
