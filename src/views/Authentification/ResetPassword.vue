<template>
  <div class="">
    <Reset-password />
  </div>
</template>

<script>
// @ is an alias to /src
import ResetPassword from "@/components/Authentification/ResetPassword.vue";

export default {
  name: "ResetPasswordPage",
  components: {
    ResetPassword,
  },
};
</script>
