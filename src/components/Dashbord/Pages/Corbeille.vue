<template>
  <html>
    <head> </head>
    <body>
      <SidebarCob> </SidebarCob>
      <div class="main-content">
        <Header />
        <DashbordContent />
      </div>
    </body>
  </html>
</template>
<script>
import SidebarCob from "../Partial/sidebars/SidebarCob.vue";
import Header from "../Partial/Header.vue";
import DashbordContent from "../Partial/DashbordContent.vue";
export default {
  name: "dashbord",
  components: {
    SidebarCob,
    Header,
    DashbordContent,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
