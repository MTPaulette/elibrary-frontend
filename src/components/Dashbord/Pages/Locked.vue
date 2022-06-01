<template>
  <html>
    <head> </head>
    <body>
      <SidebarLock> </SidebarLock>
      <div class="main-content">
        <Header />
        <DashbordContent />
      </div>
    </body>
  </html>
</template>
<script>
import SidebarLock from "../Partial/sidebars/SidebarLock.vue";
import Header from "../Partial/Header.vue";
import DashbordContent from "../Partial/DashbordContent.vue";
export default {
  name: "dashbord",
  components: {
    SidebarLock,
    Header,
    DashbordContent,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
