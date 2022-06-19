<template>
  <div class="">
    <section>
      <div class="row">
        <div class="section-title ml-5">
          <h2>Recherche</h2>
          <p>Resultats de la recherche:</p>

        </div>

      </div>

      <div class="row">
        <div class="d-flex justify-content-center align-items-center" data-parallax="scroll">
          <form class="d-flex">
            <div class="my-auto">
              <span class="spinner-border spinner-border-sm" v-show="loading"></span>
            </div>

            <input class="form-control" type="search" placeholder="quel document voulez-vous?" aria-label="Search"
              v-model="recherche">
            <button class="" type="submit">
              <i class="fa fa-search"></i>
            </button>

          </form>
        </div>

      </div>
      <div class="row">

        <div class="col-lg-10 col-sm-11 d-flex justify-content-center align-items-center mx-auto">
          <!-- <div v-if="!notFound" class="col-lg-10 col-sm-11 d-flex justify-content-center align-items-center mx-auto"> -->
          <ul class="d-flex flex-wrap">
            <li>

              <div class="form-group">
                <select name="faculte" class="form-control" v-model="faculte">
                  <option disabled value="">Faculte</option>
                  <option v-for="faculte in facultes" :key="faculte.id" :nom="faculte" v-bind:value="faculte.nom">
                    {{ faculte.nom }}
                  </option>
                  <i class="bi bi-chevron-down"></i>
                </select>
              </div>
            </li>
            <li>

              <div class="form-group">
                <select name="filiere" class="form-control" v-model="filiere">
                  <option disabled value="">Filiere</option>
                  <option v-for="filiere in filieres" :key="filiere.id" v-bind:value="filiere.nom">
                    {{ filiere.nom }}
                  </option>
                </select>
              </div>
            </li>

            <li>

              <div class="form-group">
                <select name="niveau" class="form-control" v-model="niveau">
                  <option disabled value="">Niveau</option>
                  <option v-for="niveau in niveaux" :key="niveau.id" :value="niveau.nom">
                    {{ niveau.nom }}
                  </option>
                </select>
              </div>
            </li>
            <li>


              <div class="form-group">
                <select name="specialite" class="form-control" v-model="specialite">
                  <option disabled value="">specialite</option>
                  <option v-for="specialite in specialites" :key="specialite.id" :value="specialite.nom">
                    {{ specialite.nom }}
                  </option>
                </select>
              </div>
            </li>
            <li>


              <div class="form-group">
                <select name="ue" class="form-control" v-model="ue" @change="handleSearchUe">
                  <option disabled value="">ue</option>
                  <option v-for="ue in ues" :key="ue.id" :value="ue.id">
                    {{ ue.nom }}
                  </option>
                </select>
              </div>
            </li>

            <li>


              <div class="form-group">
                <select name="typeDoc" class="form-control" v-model="typeDoc">
                  <option disabled value="">type</option>
                  <option v-for="typeDoc in types" :key="typeDoc.id" :value="typeDoc.nom">
                    {{ typeDoc.nom }}
                  </option>
                </select>
              </div>
            </li>

            <li>


              <div class="form-group">
                <select name="enseignant" class="form-control" v-model="enseignant">
                  <option disabled value="">enseignant</option>
                  <option v-for="enseignant in enseignants" :key="enseignant.id" :value="enseignant.nom">
                    {{ enseignant.username }}
                  </option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="content mt-3">
        <div class="animated fadeIn">

          <div class="row">

            <!-- /# column -->
            <div class="col-lg-12 mx-auto">
              <div class="mycard">
                <div class="card-title section-title mt-2">
                  <h4>Resultat pour la recherche: {{recherche}} </h4>

                </div>
                <div class="row">
                  <!-- .if notfound -->
                  <div class="col-lg-11 mx-auto" v-if="notFound">
                    <div class="alert alert-danger" role="alert">Aucun document ne correspond à cette recherche!</div>
                  </div>
                </div>

                <div class="recent-comment" v-if="!notFound" data-wow-duration="0.75s" data-wow-delay="0s">

                  <div class="col-lg-6" v-for="document in filterDocuments" :key="document.id" :value="document.id">
                    <div class="media mb-2 p-2">
                      <div class="media-left ml-lg-4">
                        <a href="#">
                          <img class="media-object" v-if="document.TypeId == 1" src="../../assets/logo-book.png"
                            alt="...">
                          <img class="media-object" v-else src="../../assets/logo-pdf.png" alt="...">
                        </a>
                      </div>
                      <div class="media-body">
                        <span class="media-heading mb-2">{{ document.titre }}
                        </span>

                        <div class="dropdown position-relative">
                          <div class=" position-absolute bottom-0 end-0">
                            <!-- <div class="dropdown">
                              <div class=""> -->
                            <div class="dropdown-toggle" data-toggle="dropdown"><i
                                class="bi bi-three-dots-vertical"></i>

                              <ul class="dropdown-menu mt-3
                            ">
                                <li>
                                  <router-link
                                    :to="{ name: 'Document', params: { document: document}, query: { id:document.id }}">
                                    <i class="fa fa-eye"></i> <span class="ml-2 comment-date">Details</span>
                                  </router-link>
                                </li>
                                <li>
                                  <a class="" :href="
                                    'http://localhost:5000/api/documents/telecharger/' +
                                    document.id
                                  ">
                                    <i class="fa fa-download"></i>
                                    <span class="comment-date ml-2">
                                      Telecharger {{document.id}} </span>
                                  </a>
                                </li>
                                <li @click="showModal = true;"><a href="#"><i class="fa fa-exclamation-circle"></i><span
                                      class="ml-2 comment-date">Signaler</span></a></li>

                              </ul>
                            </div>
                          </div>
                        </div>



                        <p class="resume mb-1">{{ document.resume }}</p>
                        <div class="comment-action">
                          <div class="badge badge-success ml-2 mr-3">{{ document.Type.nom }}</div>
                          <span class="ml-10">
                            <a target="_blanc" class="" :href="
                              'http://localhost:5000/api/documents/telecharger/' +
                              document.id
                            ">
                              <i class="fa fa-download"></i>
                              <span class="comment-date">
                                {{ document.nbTelechargement }}</span>
                            </a>
                            <a href="#" class="ml-2 w-10">
                              <i class="bi bi-person-fill"></i>
                              {{ document.User.username }}
                            </a>
                            <a href="#" class="ml-2">
                              <i class="bi bi-mortarboard-fill"></i>
                              {{ document.Filiere.nom }}
                            </a>

                            <!-- <a href="#">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Faculte.nom }}
                          </a>
                          <a href="#">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Niveau.nom }}
                          </a>

                          <a href="#" v-if="document.SpecialiteId">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Specialite.nom }}
                          </a>

                          <a href="#" v-if="document.UeId">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Ue.nom }}
                          </a> -->

                            <!-- <a class="comment-date ml-5">{{ document.createdAt }}</a> -->
                          </span>
                          <p class="comment-date">{{ document.createdAt }}</p>




                        </div>
                      </div>
                    </div>

                    <Signalement :show="showModal" :document ="document.id" @close="showModal = false;">
                      <template #header>
                        <h3>custom header</h3>
                      </template>
                    </Signalement>

                  </div>

                </div>
              </div>
              <!-- /# card -->
            </div>

          </div><!-- .row -->
        </div><!-- .animated -->
      </div><!-- .content -->


    </section>
  </div>
</template>


<script>
import axios from "axios";
import Signalement from "./Signalement";
export default {
  name: "Search",
  components: {
    Signalement
  },
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
    ues() {
      return this.$store.state.fetchData.ues;
    },
    types() {
      return this.$store.state.fetchData.types;
    },
    enseignants() {
      return this.$store.state.fetchData.enseignants;
    },
    filterDocuments() {
      
      if(this.filiere.length > 0) {
        return this.documents.filter((document) => {
          if(document.Filiere.nom === this.filiere) {
              return document;
          };
        });
      }
      
      if(this.niveau.length > 0) {
        return this.documents.filter((document) => {
          if(document.Niveau.nom === this.niveau) {
              return document;
          };
        });
      }
      
      if(this.specialite.length > 0) {
        return this.documents.filter((document) => {
          if(document.Specialite.nom === this.specialite) {
              return document;
          };
        });
      }
      if(this.typeDoc.length > 0) {
        return this.documents.filter((document) => {
          if(document.Type.nom === this.typeDoc) {
              return document;
          };
        });
      }
      if(this.enseignant.length > 0) {
        return this.documents.filter((document) => {
          if(document.Enseignant.nom === this.enseignant) {
              return document;
          };
        });
      }
      
      if(this.documents.length != 0) {
        return this.documents;
      }
      return {}
    },
  },

  data() {
    return {
      faculte: "",
      filiere: "",
      niveau: "",
      specialite: "",
      ue: "",
      typeDoc: "",
      enseignant: "",
      recherche: "",
      documents: "",

      notFound: false,
      loading: false,
      showModal: false
    };
  },
  watch: {
    recherche: function () {
      if (this.recherche.length >= 3) {
        this.handleSearch(this.recherche);
      }
    },
    /*
    ue: function () {
      this.handleSearchUe(this.ue);
    }
    */
  },
  beforeMount() {
    this.handleSearch(this.$route.query.q);
  },
  mounted() {
    this.$store.dispatch("fetchData/getFacultes");
    this.$store.dispatch("fetchData/getFilieres");
    this.$store.dispatch("fetchData/getNiveaux");
    this.$store.dispatch("fetchData/getSpecialites");
    this.$store.dispatch("fetchData/getUes");
    this.$store.dispatch("fetchData/getTypes");
    this.$store.dispatch("fetchData/getEnseignants");
  },

  methods: {
    reset() {
      this.faculte = "",
      this.filiere = "",
      this.niveau = "",
      this.specialite = "",
      this.ue = "",
      this.typeDoc = "",
      this.enseignant = ""
    },

    handleSearch(recherche) {
      this.loading = true;
      this.notFound = false;

      //if(this.checkValue) {
      axios
        .get(
          // "http://localhost:5000/api/documents/documentActif/" + this.recherche
          "http://localhost:5000/api/documents/documentActif/" + recherche
        )
        .then((res) => {
          const n = res.data.allDocument.length;
          this.loading = false;
          if (n != 0) {
          console.log(
            "---------------------------------search--------------------------------------------"
          );
            console.log(this.recherche);
            console.log(res.data.allDocument);
            this.reset();
            this.documents = res.data.allDocument;
          } else {
            this.notFound = true;
          }
        })
        .catch((err) => {
          this.loading = false;
            this.notFound = true;
          console.log(err);
        });
    },

    handleSearchUe() {
      this.loading = true;
      this.notFound = false;

      //if(this.checkValue) {
      axios
        .get(
          // "http://localhost:5000/api/documents/documentActif/" + this.recherche
          "http://localhost:5000/api/documents/documentActifUe/" + this.ue
        )
        .then((res) => {
          const n = res.data.allDocument.length;
          this.loading = false;
          if (n != 0) {
          console.log(
            "---------------------------------ue--------------------------------------------"
          );
            console.log(this.ue);
            console.log(res.data.allDocument);
            this.reset();
            //return res.data.allDocument;
            this.documents = res.data.allDocument;
          } else {
            this.notFound = true;
          }
        })
        .catch((err) => {
          this.loading = false;
            this.notFound = true;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
div {
  font-family: 'Poppins';
}

.field-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.9);
}

.media {
  background-color: #fff;
  background-clip: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  /* border-radius: 0.25rem; */
  height: 135px;
}
.media img {
  width: 80px;
  height: 90%;
}

.mycard {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
}
.media {
  overflow: hidden;
}
.media-left {
  height: 100%;
}
.media-body {
  width: 50%;
}
.media-heading {
  font-size: 18px;
  font-weight: 500;
  line-height: 2px;
  letter-spacing: 0px;
  height: 18px;
  width: 100%;
}

.media-body .resume {
  width: 100%;
  height: 30px;
  margin-bottom: 1px;
  line-height: 1rem !important;
  overflow: hidden;
}
.media-body .comment-action {
  height: 20px;
}
.media-body .comment-date {
  width: 100%;
  height: 20px;
  font-weight:300;
  font-size: small;
}
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  overflow: hidden;
}

.section-bg {
  /* background-color: #1a1814;*/
}
.section-title {
  /* padding-bottom: 30px;
  margin-top: 100px; */
}
.section-title h2,
.section-title h4 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #100f0f;
  /* color: #aaaaaa; */
  font-family: "Poppins", sans-serif;
}
.section-title h2::after,
.section-title h4::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: rgba(16, 14, 14, 0.2);

  /* background: rgba(255, 255, 255, 0.2); */
  margin: 4px 10px;
}
.section-title p {
  margin: 0;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  color: #cda45e;
}

/*--------------------------------------------------------------
# dropdown pour le signalement
--------------------------------------------------------------*/
.dropdown-menu {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .12);
  border: none;
  border-radius: 0px;
  margin-left: -150px !important;
  padding: 10px;
  background-color: #f8f9fa;
}
.dropdown-menu li:hover, .dropdown-menu a:hover {
  background: #eea412;
  color: #ffffff !important;
}
.dropdown:hover>.dropdown-menu {
  padding-left: 10px;
}

.dropdown-menu li {
  padding: .25rem 0.5rem;
  font-weight: 400;
  border: 0;
}
.dropdown-menu li,
.dropdown-menu a{
  color: #495057 !important;
}
</style>