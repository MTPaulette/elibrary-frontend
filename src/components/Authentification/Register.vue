<template>
  <div class="body">
    <section class="img js-fullheight">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-2 mt-2">
            <h2 class="heading-section">
              <img
                alt="speed learn logo"
                class="logo"
                src="../../assets/fille-logo.jpg"
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
              <form
                action="#"
                class="signin-form"
                @submit.prevent="handleRegister"
              >
                <div v-if="!successful">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      v-model="user.username"
                      v-validate="'required|min:3|max:20'"
                      placeholder="username"
                      autocomplete="username"
                      autofocus
                    />
                    <i class="bi bi-person field-icon"></i>
                    <div
                      class="alert-danger"
                      v-if="submitted && errors.has('username')"
                    >
                      {{ errors.first("username") }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="email"
                      name="email"
                      autocomplete="email"
                      v-model="user.email"
                      v-validate="'required|email|max:50'"
                    />
                    <i class="bi bi-envelope field-icon"></i>
                    <div
                      class="alert-danger"
                      v-if="submitted && errors.has('email')"
                    >
                      {{ errors.first("email") }}
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      id="password-field"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="user.password"
                      v-validate="'required|min:6|max:40'"
                    />
                    <i class="bi bi-eye field-icon"></i>
                    <div
                      class="alert-danger"
                      v-if="submitted && errors.has('password')"
                    >
                      {{ errors.first("password") }}
                    </div>
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
                    <select
                      name="faculte"
                      class="form-control"
                      v-model="faculte"
                    >
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
                    <select
                      name="filiere"
                      class="form-control"
                      v-model="filiere"
                    >
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
                    <button
                      type="submit"
                      class="form-control submit px-3 signin"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
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

            <div
              class="alert"
              :class="successful ? 'alert-success' : 'alert-danger'"
              v-if="message"
            >
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import User from "../../models/user";
import { mapActions } from "vuex";

export default {
  name: "register",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  data() {
    return {
      confirmPassword: "",
      faculte: "",
      filiere: "",
      niveau: "",
      specialite: "",

      facultes: null,
      filieres: null,
      niveaux: null,
      specialites: null,

      user: new User("", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    ...mapActions([
      "getFacultes",
      "getFilieres",
      "getNiveaux",
      "getSpecialites",
    ]),

    //********************************** */
    fetchData() {
      this.error = null;
      (this.loading = true),
        this.getFacultes().then((res) => {
          this.loading = false;
          this.facultes = res.data.facultes;
          //if (this.facultes != null) {
          //this.faculte = res.data.facultes[0].nom;
          //}
          console.log(res.data.facultes);
        });

      this.getFilieres().then((res) => {
        this.loading = false;
        this.filieres = res.data.filieres;
      });

      this.getNiveaux().then((res) => {
        this.loading = false;
        this.niveaux = res.data.niveaux;
      });

      this.getSpecialites().then((res) => {
        this.loading = false;
        this.specialites = res.data.specialites;
      });
    },

    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.user.setOthersInformations(
            this.confirmPassword,
            this.faculte,
            this.filiere,
            this.niveau,
            this.specialite
          );
          this.$store.dispatch("auth/register", this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
              this.$router.push("/login");
            },
          (error) => {
            this.message = error.message;
            this.successful = false;
          })
          // );
          // this.$store.dispatch("auth/register", this.user).then(
          //   (res) => {
          //     console.log(res.data.user)
          //   }
          // );
        }
      });
    },
  },
};
</script>
<!--script>
import { mapActions } from "vuex";
export default {
  name: "RegisterComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      nom: "",
      email: "",
      password: "",
      confirmPassword: "",

      //************dynamic loading of filiere*******/
      loading: false,
      error: null,

      faculte: "",
      filiere: "",
      niveau: "",
      specialite: "",

      facultes: null,
      filieres: null,
      niveaux: null,
      specialites: null,
    };
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },

  methods: {
    ...mapActions([
      "registerAuth",
      "getFacultes",
      "getFilieres",
      "getNiveaux",
      "getSpecialites",
    ]),

    //********************************** */
    fetchData() {
      this.error = this.post = null;
      (this.loading = true),
        this.getFacultes().then((res) => {
          this.loading = false;
          this.facultes = res.data.facultes;
          //if (this.facultes != null) {
          //this.faculte = res.data.facultes[0].nom;
          //}
          console.log(res.data.facultes);
        });

      this.getFilieres().then((res) => {
        this.loading = false;
        this.filieres = res.data.filieres;
      });

      this.getNiveaux().then((res) => {
        this.loading = false;
        this.niveaux = res.data.niveaux;
      });

      this.getSpecialites().then((res) => {
        this.loading = false;
        this.specialites = res.data.specialites;
      });
    },

    register() {
      let user = {
        nom: this.nom,
        email: this.email,
        login: this.login,
        password: this.password,
        confirmPassword: this.confirmPassword,
        FaculteId: this.faculte,
        FiliereId: this.filiere,
        NiveauId: this.niveau,
        SpecialiteId: this.specialite,
      };
      console.log(user);
      this.registerAuth(user)
        .then((res) => {
          if (res.data.success) {
            console.log("message de backend register:" + res.data.msg);
            this.$router.push("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script-->

<style scoped>
/**
primary = #fbceb5
*/
.body {
  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  font-weight: normal;
  color: lighten(#000, 50%);
  position: relative;
  z-index: 0;
  padding: 0;
  min-height: 100vh;
}

.body:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  background: #000;
  opacity: 0.3;
  z-index: -1;
}

a {
  transition: 0.3s all ease;
  color: #fbceb5;
}

a:hover {
  text-decoration: none !important;
  outline: none !important;
  box-shadow: none;
  color: #9f4636;
}

#link {
  display: 3;
  font-weight: bold;
}

.heading-section {
  font-size: 28px;
  color: #fff;
}

/*COVER BG*/
.img {
  background-image: url("../../../public/static/images/bg_book_noir_et_blanc.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
}

.login-wrap {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
}
.login-wrap h3 {
  font-weight: 300;
  color: #fff;
}
.login-wrap .social {
  width: 100%;
}
.login-wrap .social a:hover {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.login-wrap .social a {
  width: 100%;
  display: block;
  border-color: rgb(221, 219, 219);
  background: rgba(255, 255, 255, 0.4);
}

.login-wrap .social .facebook {
  color: #3b5998;
}

.login-wrap .social .twitter {
  color: #00acee;
}

.login-wrap .social .facebook:hover {
  background: #3b5998;
}

.login-wrap .social .twitter:hover {
  background: #00acee;
}
/*
.login-wrap .social a {
  width: 100%;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #000;
  background: #fff;
}

.login-wrap .social a:hover {
  background: rgba(255, 255, 255, 0.4);
  color: #fff;
  border-color: rgb(221, 219, 219);
}
*/
.form-group {
  position: relative;
}

.field-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.9);
}

/*FORM CONTROL*/
.form-control {
  background: transparent;
  border: none;
  height: 40px;
  color: rgba(255, 255, 255, 1) !important;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.form-control:hover,
.form-control:focus {
  background: transparent;
  outline: none;
  box-shadow: none;
  border-color: rgba(255, 255, 255, 0.4);
}

.form-control:focus {
  border-color: rgba(255, 255, 255, 0.4);
}

textarea.form-control {
  height: inherit !important;
}

/*CHECKBOX STYLE*/
.checkbox-wrap {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*BUTTON*/
.signin {
  background: #fbceb5;
  border: 1px solid #fbceb5;
  color: #000;
}

.signin:hover {
  border: 1px solid #fbceb5;
  background: transparent;
  color: #fbceb5;
}
.logo {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
