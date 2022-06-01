<template>
  <html>
    <head> </head>
    <body>
      <SidebarEns></SidebarEns>
      <div class="main-content">
        <Header />
        <FormEns/>
      </div>
    </body>
  </html>
</template>
<script>
import SidebarEns from "../Partial/sidebars/SidebarEns.vue";
import Header from "../Partial/Header.vue";
import FormEns from "../Partial/FormEns.vue";
export default {
  name: "dashbord",
  components: {
    SidebarEns,
    Header,
    FormEns,
  },
};
</script>
<style scoped>
@import "../css/style.css";
</style>
