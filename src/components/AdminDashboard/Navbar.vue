<template>
  <!-- <div>
        <header id="header" class="header"> -->

  <div class="header-menu">
    <div class="col-sm-7">
      <a id="menuToggle" class="menutoggle pull-left"
        ><i class="fa fa fa-tasks"></i
      ></a>
      <div class="header-left">
        <button class="search-trigger"><i class="fa fa-search"></i></button>
        <div class="form-inline">
          <form
            class="search-form"
            action="/search"
            method="get"
            @submit="handleSearch"
          >
            <input
              class="form-control mr-sm-2"
              type="text"
              v-model="recherche"
              placeholder="Search ..."
              aria-label="Search"
            />

            <!-- <button class="bg-secondary" type="">

                                
                            <i class="fa fa-search"></i></router-link></button> -->

            <button class="search-close bg-secondary" type="">
              <router-link
                :to="{ path: '/search', query: { q: this.recherche } }"
              >
                <i class="fa fa-close"></i>
              </router-link>
            </button>
          </form>
        </div>

        <div class="dropdown for-notification">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="notification"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-bell"></i>
            
          <a href="/notifications" class=""><span class="count bg-danger">5</span></a>
          </button>
          <div class="dropdown-menu" aria-labelledby="notification">
            <p class="red">You have 3 Notification</p>
            <a class="dropdown-item media bg-flat-color-1" href="#">
              <i class="fa fa-check"></i>
              <p>Server #1 overloaded.</p>
            </a>
            <a class="dropdown-item media bg-flat-color-4" href="#">
              <i class="fa fa-info"></i>
              <p>Server #2 overloaded.</p>
            </a>
            <a class="dropdown-item media bg-flat-color-5" href="#">
              <i class="fa fa-warning"></i>
              <p>Server #3 overloaded.</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-5">
      <div class="user-area dropdown float-right">
        <a
          href="/profile"
          class="dropdown-toggle"
          id="dropdownMenuClickable"
          data-bs-toggle="dropdown"
          data-bs-auto-close="false"
          aria-expanded="false"
        >
          <span class="fw-bold">{{ currentUser.user.username }}</span>
        </a>

        <div
          class="user-menu dropdown-menu"
          aria-labelledby="dropdownMenuClickable"
        >
          <a class="nav-link dropdown-item" href="#"
            ><i class="fa fa-user"></i> Notifications
            <span class="count">13</span></a
          >
          <a class="nav-link dropdown-item" href="#"
            ><i class="fa fa-user"></i>Profil d'utilisateur</a
          >
          <a class="nav-link dropdown-item" href="#"
            ><i class="fa fa-power-off"></i> Deconnexion</a
          >
        </div>
      </div>
    </div>
  </div>

  <!-- </header>
    </div> -->
</template>
<script>
export default {
  data() {
    return {
      recherche: "",
    };
  },
  props: {
    user: {},
  },
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  },
  methods: {
    handleSearch() {
      this.$router.push({ path: "/search", query: { q: this.recherche } });
    },
  },
};
</script>
<style scoped>
.header-menu {
  width: 80vw;
}
</style>
