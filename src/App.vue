<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">bezKoder</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </a>
        </li>
        <li class="nav-item" v-if="showAdminBoard">
          <a href="/admin" class="nav-link">Admin Board</a>
        </li>
        <li class="nav-item" v-if="showTeacherBoard">
          <a href="/mod" class="nav-link">Moderator Board</a>
        </li>
        <li class="nav-item">
          <a href="/user" class="nav-link" v-if="currentUser">User</a>
        </li>
      </div>

      <div class="navbar-nav ml-auto" v-if="!currentUser">
        <li class="nav-item">
          <a href="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </a>
        </li>
        <li class="nav-item">
          <a href="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </a>
        </li>
      </div>

      <div class="navbar-nav ml-auto" v-if="currentUser">
        <li class="nav-item">
          <a href="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </a>
        </li>
        <li class="nav-item">
          <a href class="nav-link" @click="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav> -->

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser) {
        if (this.currentUser.user.RoleId === 1) {
          return true;
        }
      }
      return false;
    },
    showTeacherBoard() {
      if (this.currentUser) {
        if (this.currentUser.user.RoleId === 2) {
          return true;
        }
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
*,
body {
  font-family: "Poppins";
}
.btn:hover {
  background-color: #fff !important;
  color: #878787 !important;
}

.btn-primary {
  background-color: #eea412 !important;
  border-color: #eea412 !important;
  color: #fff !important;
}
</style>
