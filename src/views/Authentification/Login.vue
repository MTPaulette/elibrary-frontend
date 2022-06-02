<template>
  <div class="home">
    <log></log>
  </div>
</template>

<script>
import Login from "@/components/Authentification/Login.vue";

export default {
  name: "LoginPage",
  components: {
    log: Login,
  },
};
</script>
