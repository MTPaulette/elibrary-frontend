<template>
  <html>
    <head> </head>
    <body>
      <SidebarNot> </SidebarNot>
      <div class="main-content">
        <Header />
        <DashbordContent />
      </div>
    </body>
  </html>
</template>
<script>
import SidebarNot from "../Partial/sidebars/SidebarNot.vue";
import Header from "../Partial/Header.vue";
export default {
  name: "dashbord",
  components: {
    SidebarNot,
    Header,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
