<template>
  <html>
    <head> </head>
    <body>
      <SidebarList> </SidebarList>
      <div class="main-content">
        <Header />
      </div>
    </body>
  </html>
</template>
<script>
import SidebarList from "../Partial/sidebars/sidebarList.vue";
import Header from "../Partial/Header.vue";

export default {
  name: "dashbord",
  components: {
    SidebarList,
    Header,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
