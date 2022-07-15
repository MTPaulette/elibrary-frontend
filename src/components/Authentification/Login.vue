<template>
  <div class="body">
    <section class="img js-fullheight">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5 mt-11">
            <h2 class="heading-section">
              <img
                alt="speed learn logo"
                class="logo"
                src="../../assets/logo-final.png"
              />
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
              <h3 class="mb-4 text-center" id="link">
                <router-link to="/register">Creer un compte?</router-link>
              </h3>
              <form
                action="#"
                class="signin-form"
                @submit.prevent="handleLogin"
              >
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    v-model="user.email"
                    placeholder="email"
                    name="email"
                    autocomplete="email"
                    autofocus
                    v-validate="'required'"
                  />
                  <i class="bi bi-envelope field-icon"></i>
                </div>
                <div
                  class="alert alert-danger bg-danger h-25"
                  role="alert"
                  v-if="errors.has('email')"
                >
                  Email is required!
                </div>
                <div class="form-group">
                  <input
                    id="password-field"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    v-validate="'required'"
                  />
                  <i class="bi bi-eye field-icon"></i>
                  <div
                    class="alert alert-danger"
                    role="alert"
                    v-if="errors.has('password')"
                  >
                    Password is required!
                  </div>
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-block signin"
                    :disabled="loading"
                  >
                    <span
                      class="spinner-border spinner-border-sm mr-1"
                      v-show="loading"
                    ></span>
                    <span>Login</span>
                  </button>
                </div>
                <div class="form-group">
                  <div class="alert alert-danger" role="alert" v-if="message">
                    {{ message }}
                  </div>
                </div>

                <div class="form-group d-md-flex">
                  <div class="w-50 text-md-right">
                    <router-link to="/resetPassword"
                      >Forgot Password</router-link
                    >
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import User from "../../models/user";

export default {
  name: "LoginComponnent",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll();

      if (this.errors.any()) {
        console.log("dans le eror");
        this.loading = false;
        return;
      }

      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            console.log("error");
            this.loading = false;
            this.message = error.message;
          }
        );
      }
    },
  },
};
</script>

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
  height: 100vh;
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
  color: #eea412;
}

a:hover {
  text-decoration: none !important;
  outline: none !important;
  box-shadow: none;
  color: #fff;
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
  background-image: url("../../../public/static/images/bg2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
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
  height: 50px;
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
.signin:hover {
  background-color: transparent !important;
  color: #878787 !important;
}

.signin {
  background-color: #eea412 !important;
  border-color: #eea412 !important;
  color: #fff !important;
}


.logo {
  margin: 0 auto 10px;
  display: block;
  border-radius: 20%;
}
</style>
