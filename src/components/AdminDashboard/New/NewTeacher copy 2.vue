<template>
  <!-- <div class="body"> -->
  <div class="card">
    <section class="img js-fullheight">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-2 mt-2">
            <h2 class="heading-section">
              <img
                alt="speed learn logo"
                width="15%"
                height="15%"
                src="../../../assets/fille-logo.jpg"
              />
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
              <h3 class="mb-4 text-center" id="link">
                <router-link to="/login">Avez-vous un compte?</router-link>
              </h3>
              <div class="form-group">
                <div class="alert alert-danger" role="alert" v-if="message">
                  {{ message }}
                </div>
              </div>
              <form action="#" class="signin-form" @submit.prevent="register">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="name"
                    autocomplete="name"
                    autofocus
                    v-model="username"
                    required
                  />
                  <i class="bi bi-person field-icon"></i>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    name="email"
                    autocomplete="email"
                    v-model="email"
                    required
                  />
                  <i class="bi bi-envelope field-icon"></i>
                </div>

                <div class="form-group">
                  <input
                    id="password-field"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                  <i class="bi bi-eye field-icon"></i>
                </div>
                <div class="form-group">
                  <input
                    id="password-field"
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                    required
                  />
                  <i class="bi bi-eye field-icon"></i>
                </div>

                <div class="form-group">
                  <select name="faculte" class="form-control" v-model="faculte">
                    <option disabled value="">Faculte...</option>
                    <option
                      v-for="faculte in facultes"
                      :key="faculte.id"
                      :nom="faculte"
                      v-bind:value="faculte.id"
                    >
                      {{ faculte.nom }}
                    </option>
                  </select>
                  <i class="bi bi-chevron-down field-icon"></i>
                </div>
                <div class="form-group">
                  <select name="filiere" class="form-control" v-model="filiere">
                    <option disabled value="">Filiere...</option>
                    <option
                      v-for="filiere in filieres"
                      :key="filiere.id"
                      v-bind:value="filiere.id"
                    >
                      {{ filiere.nom }}
                    </option>
                  </select>
                  <i class="bi bi-chevron-down field-icon"></i>
                </div>

                <div class="form-group">
                  <select name="niveau" class="form-control" v-model="niveau">
                    <option disabled value="">Niveau...</option>
                    <option
                      v-for="niveau in niveaux"
                      :key="niveau.id"
                      :value="niveau.id"
                    >
                      {{ niveau.nom }}
                    </option>
                  </select>
                  <i class="bi bi-chevron-down field-icon"></i>
                </div>

                <div class="form-group">
                  <select
                    name="specialite"
                    class="form-control"
                    v-model="specialite"
                  >
                    <option disabled value="">Specialité...</option>
                    <option
                      v-for="specialite in specialites"
                      :key="specialite.id"
                      :value="specialite.id"
                    >
                      {{ specialite.nom }}
                    </option>
                  </select>
                  <i class="bi bi-chevron-down field-icon"></i>
                </div>

                <div class="form-group">
                  <button class="btn btn-block signin" :disabled="loading">
                    <span
                      class="spinner-border spinner-border-sm mr-1"
                      v-show="loading"
                    ></span>
                    <span>Sign in</span>
                  </button>
                </div>
                <!--div class="form-group d-md-flex">
                  <div class="w-50">
                    <label for="remember" class="checkbox-wrap">
                      <input
                        type="checkbox"
                        name="remember"
                        id=""
                        class="mx-3"
                      />
                      <span class="rememberme">Remember Me</span>
                    </label>
                  </div>
                  <div class="w-50 text-md-right">
                    <router-link to="/reinitialise">Forgot Password</router-link>
                  </div>
                </div-->
              </form>
              <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
              <div class="social d-flex text-center">
                <a href="#" class="px-2 py-2 m-1 rounded facebook"
                  ><i class="bi bi-facebook mr-2"></i> Facebook</a
                >
                <a href="#" class="px-2 py-2 m-1 rounded twitter"
                  ><i class="bi bi-twitter mr-2"></i> Twitter</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterComponent",
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
    facultes() {
      return this.$store.state.fetchData.facultes;
    },
    filieres() {
      return this.$store.state.fetchData.filieres;
    },
    niveaux() {
      return this.$store.state.fetchData.niveaux;
    },
    specialites() {
      return this.$store.state.fetchData.specialites;
    },
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",

      //************dynamic loading of filiere*******/
      loading: false,
      error: null,
      message: "",

      faculte: "",
      filiere: "",
      niveau: "",
      specialite: "",
    };
  },
  mounted() {
    this.$store.dispatch("fetchData/getFacultes");
    this.$store.dispatch("fetchData/getFilieres");
    this.$store.dispatch("fetchData/getNiveaux");
    this.$store.dispatch("fetchData/getSpecialites");
  },

  methods: {
    ...mapActions(["registerAuth"]),
    register() {
      this.loading = true;
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        FaculteId: this.faculte,
        FiliereId: this.filiere,
        NiveauId: this.niveau,
        SpecialiteId: this.specialite,
      };
      console.log(user);
      //this.registerAuth(user)
      this.$store.dispatch("auth/register", user).then(
        () => {
          this.$router.push("/login");
        },
        (error) => {
          this.loading = false;
          this.message = error.msg;
          console.log(this.message);
        }
      );
    },
  },
};
</script>
<style scoped>

</style>