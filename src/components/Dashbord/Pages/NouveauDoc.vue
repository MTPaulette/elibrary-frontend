<template>
  <html>
    <head> </head>
    <body>
      <SidebarDoc />
      <div class="main-content">
        <Header />
        <DashbordContent />
      </div>
    </body>
  </html>
</template>
<script>
import SidebarDoc from "../Partial/sidebars/SidebarDoc.vue";
import Header from "../Partial/Header.vue";
import DashbordContent from "../Partial/DashbordContent.vue";
export default {
  name: "dashbord",
  components: {
    SidebarDoc,
    Header,
    DashbordContent,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
