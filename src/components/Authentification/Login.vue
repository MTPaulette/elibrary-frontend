<template>
  <div class="">
    <div class="body">
      <section class="img js-fullheight ftco-section imgBg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
              <h2 class="heading-section">Veillez entrer vos informations</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="login-wrap p-0">
                <h3 class="mb-4 text-center">
                  <a href="/register">Avez-vous déjà un compte ?</a>
                </h3>
                <form action="#" class="signin-form">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      id="password-field"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <span
                      toggle="#password-field"
                      class="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary submit px-3"
                    >
                      Se connecter
                    </button>
                  </div>
                </form>
                <p class="w-100 text-center">
                  &mdash; Se connecter avec &mdash;
                </p>
                <div class="social d-flex text-center">
                  <a href="/home" class="px-2 py-2 m-1 bg-info rounded"
                    ><i class="bi bi-facebook mr-2"></i> Facebook</a
                  >
                  <a href="/home" class="px-2 py-2 m-1 bg-danger rounded"
                    ><span class="bi bi-twitter mr-2"></span> Twitter</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
.imgBg {
  background-image: url("../../../public/static/images/bg2.jpg");
}

.body {
  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  font-weight: normal;
  color: lighten(#000, 50%);
  position: relative;
  z-index: 0;
  padding: 0;
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

h1,
h2,
h3,
h4,
h5,
.h1,
.h2,
.h3,
.h4,
.h5 {
  line-height: 1.5;
  font-weight: 400;
  font-family: "Lato", Arial, sans-serif;
  color: #000;
}

.bg-primary {
  background: #fbceb5 !important;
}

.ftco-section {
  padding: 7em 0;
}

.ftco-no-pt {
  padding-top: 0;
}
.ftco-no-pb {
  padding-bottom: 0;
}

/* HEADING SECTION */
.heading-section {
  font-size: 28px;
  color: #fff;
}

/*COVER BG*/
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100wh;
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
  color: #000;
  background: #fff;
}

.login-wrap .social a:hover {
  background: #000;
  color: #fff;
  border-color: #000;
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

/* Hide the browser's default checkbox */
.checkbox-wrap input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  font-family: "FontAwesome";
  position: absolute;
  color: rgba(255, 255, 255, 0.1);
  font-size: 20px;
  margin-top: -4px;
  @include transition(0.3s);
}

/* Show the checkmark when checked 
.checkbox-wrap{
	input:checked ~ .checkmark:after {
	  display: block;
	  content: "\f14a";
	  font-family: "FontAwesome";
	  color: rgba(0,0,0,.2);
	}
}
*/
/* Style the checkmark/indicator */
.checkbox-wrap .checkmark:after {
}

.checkbox-primary {
  color: #fbceb5;
  input: checked;
}
.checkmark:after {
  color: #fbceb5;
}

/*BUTTON*/
.btn {
  cursor: pointer;
  border-radius: 40px;
  box-shadow: none !important;
  font-size: 15px;
  text-transform: uppercase;
}

.btn:hover,
.btn:active,
.btn:focus {
  outline: none;
}

.btn .btn-primary {
  background: #fbceb5 !important;
  border: 1px solid #fbceb5 !important;
  color: #000 !important;
}

.btn .btn-primary:hover {
  border: 1px solid #fbceb5;
  background: transparent;
  color: #fbceb5;
}

.btn .btn-primary .btn-outline-primary {
  border: 1px solid #fbceb5;
  background: transparent;
  color: #fbceb5;
}

.btn .btn-primary .btn-outline-primary:hover {
  border: 1px solid transparent;
  background: #fbceb5;
  color: #fff;
}
</style>
