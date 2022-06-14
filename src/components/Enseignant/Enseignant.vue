<template>
  <div>
    <div class="all-title-box">
      <div class="container text-center">
        <h1>
          Enseignants<span class="m_1"
            >Vous pouvez parcourir les profils de certains enseignants pour
            avoir des documents publiés par ceux-ci</span
          >
        </h1>
      </div>
    </div>
    <div id="teachers" class="section wb">
      <div class="container">
        <div class="row">


          <div class="col-lg-3 col-md-6 col-12" v-for="enseignant in enseignants" :key="enseignant.id">
            <div class="our-team">
              <div class="team-img">

                <router-link :to="{ path: '/profile', query: { id:enseignant.id }}"><img src="../../assets/avatar.png" />
                  <div class="social">
                    <a href="#">Contacter</a>
                  </div>
                </router-link>
              </div>
              <div class="team-content">
                <h3 class="title">{{ enseignant.username }}</h3>
                <span class="post">Lecturer in Computer Science</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Enseignant",
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
    enseignants() {
      return this.$store.state.fetchData.enseignants;
    },
  },
  mounted() {
    this.$store.dispatch("fetchData/getEnseignants");
  },
};
</script>

<style scoped>
@import "../../../public/static/homePage/css/bootstrap.min.css";
@import "../../../public/static/homePage/style.css";
@import "../../../public/static/homePage/css/versions.css";
@import "../../../public/static/homePage/css/responsive.css";
@import "../../../public/static/homePage/css/custom.css";
</style>
