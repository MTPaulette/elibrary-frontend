<template>
  <html>
    <head> </head>
    <body>
      <Sidebar> </Sidebar>
      <div class="main-content">
        <Header />
        <DashbordContent />
      </div>
    </body>
  </html>
</template>
<script>
import Sidebar from "../Partial/sidebars/Sidebar.vue";
import Header from "../Partial/Header.vue";
import DashbordContent from "../Partial/DashbordContent.vue";
export default {
  name: "dashbord",
  components: {
    Sidebar,
    Header,
    DashbordContent,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
