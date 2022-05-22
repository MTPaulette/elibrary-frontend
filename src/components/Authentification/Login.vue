<template>
  <div class="body">
    <section class="img js-fullheight">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">
              <img alt="Vue logo" src="../../assets/logo.png" />
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
              <h3 class="mb-4 text-center link">
                <router-link to="/register">Creer un compte?</router-link>
              </h3>
              <form action="#" class="signin-form">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="login"
                    required
                  />
                  <i
                    toggle="#password-field"
                    class="bi bi-person field-icon toggle-password"
                  ></i>
                </div>
                <div class="form-group">
                  <input
                    id="password-field"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <i
                    toggle="#password-field"
                    class="bi bi-eye field-icon toggle-password"
                  ></i>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control submit px-3 signin"
                  >
                    Sign In
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50">
                    <label for="remember" class="checkbox-wrap">
                      <input
                        type="checkbox"
                        name="remember"
                        id=""
                        class="mx-3"
                      />
                      <a>Remember Me</a>
                    </label>
                  </div>
                  <div class="w-50 text-md-right">
                    <router-link to="/reinitialise">Forgot Password</router-link>
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
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {},
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
  color: #fbceb5;
}

a:hover,
a:focus {
  text-decoration: none !important;
  outline: none !important;
  box-shadow: none;
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
.login-wrap .social a {
  width: 100%;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.login-wrap .social a:hover {
  border-color: rgb(221, 219, 219);
  background: rgba(255, 255, 255, 0.4);
  color: #000;
}

.login-wrap .social .facebook {
  color: #fff;
  background: #3b5998;
}

.login-wrap .social .twitter {
  color: #fff;
  background: #00acee;
}

.login-wrap .social .facebook:hover {
  color: #3b5998;
}

.login-wrap .social .twitter:hover {
  color: #00acee;
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

/* Hide the browser's default checkbox************************
.checkbox-wrap input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
 */

/* Create a custom checkbox 
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
}
*/

/* Create the checkmark/indicator (hidden when not checked) 
.checkmark:after {
  font-family: "FontAwesome";
  position: absolute;
  color:rgba(255,255,255,.1);
  font-size: 20px;
  margin-top: -4px;
  transition: 3s;
}

input:checked ~ .checkmark:after {
	display: block;
	content: "\f14a";
	font-family: "FontAwesome";
	color: rgba(0,0,0,.2);
}

.checkbox-wrap .checkmark:after {
}

.checkbox-primary{
  color: #fbceb5;
}

input:checked ~ .checkmark:after {
	color: #fbceb5;
}
*/

/*BUTTON*/
.signin {
	background: #fbceb5;
	border: 1px solid #fbceb5;
	color: #000;	
}

.signin:hover {
	border: 1px solid #fbceb5;
	background: transparent;
	color :#fbceb5;
}
</style>
