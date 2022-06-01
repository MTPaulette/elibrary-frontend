<template>
  <div class="body">
    <section class="img js-fullheight">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5 mt-11">
            <h2 class="heading-section">
              <img
                alt="speed learn logo"
                width="20%"
                height="20%"
                src="../assets/fille-logo.jpg"
              />
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
              <form action="#" class="signin-form" enctype="multipart/form-data" method="POST" @submit.prevent="newDocument">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="titre"
                    placeholder="titre..."
                    name="titre"
                    autocomplete="titre"
                    autofocus
                  />
                  <i class="bi bi-envelope field-icon"></i>
                </div>

                <div class="form-group">
                  <input type="file" id="myFile" name="myFile" class="form-control" @change="processFile($event)">
                  <!--input
                    type="text"
                    class="form-control"
                    v-model="contenu"
                    placeholder="contenu..."
                    name="contenu"
                    autocomplete="contenu"
                    autofocus
                    required
                  /-->
                  <i class="bi bi-envelope field-icon"></i>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="resume"
                    placeholder="resume..."
                    name="resume"
                    autocomplete="resume"
                  />
                  <i class="bi bi-envelope field-icon"></i>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="auteur"
                    placeholder="auteur..."
                    name="auteur"
                    autocomplete="auteur"
                  />
                  <i class="bi bi-envelope field-icon"></i>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="type"
                    placeholder="type..."
                    name="type"
                  />
                  <i class="bi bi-envelope field-icon"></i>
                </div>
                <!---------------------------------------------------------------->
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
                      :key="filiere.id" v-bind:value="filiere.id"
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

                <!---------------------------------------------------------------->

                <div class="form-group">
                  <button type="submit" class="form-control submit px-3 signin">
                    Sign In
                  </button>
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
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "document",
  data() {
    return {
      titre: "",
      resume: "",
      auteur: "",
      type: "",
      file: "",
      contenu: {},

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
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
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
    ...mapActions(["createDocument", "getFacultes", "getFilieres", "getNiveaux", "getSpecialites"]),

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

    processFile(event){
      this.file = event.target.files[0];
    },
    newDocument() {
      const formData = new FormData();
      formData.append('myFile', this.file);
      formData.append('titre', this.titre);
      formData.append('auteur', this.auteur);
      formData.append('resume', this.resume);
      formData.append('type', this.type);

      formData.append('FaculteId', this.faculte);
      formData.append('FiliereId', this.filiere);
      formData.append('NiveauId', this.niveau);
      formData.append('SpecialiteId', this.specialite);
      //console.log(document);
      this.createDocument(formData)
        .then((res) => {
            console.log("message de backend");
            console.log(res.data);

          if (!res.data.success) {
            console.log("fin  de backend");
          }
        })
        .catch((err) => {
          console.log(err);
        });
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

/*COVER BG
  background-image: url("../../../public/static/images/bg_book_noir_et_blanc.jpeg");*/
.img {
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
</style>
