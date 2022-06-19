<template>
  <div>
    <div class="row">
      <div class="all-title-box w-100">
        <div class="container text-center">
          <div class="mu-book-overview-area py-auto">
            <div class="mu-heading-area">
              <h2 class="mu-heading-title">Liste des Unités d'enseignement de: {{ filiere }} {{ niveau }} </h2>
              <span class="mu-header-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="overviews" class="section wb">
      <div class="container">
        <section>
          <!--     <div class="row">
    <div class="section-title ml-5">
      <h2>Recherche</h2>
      <p>Resultats de la recherche:</p>
    </div>

    </div>

<div class="row">
                <div class="d-flex justify-content-center align-items-center" data-parallax="scroll">
                    <form class="d-flex">
                <div class="my-auto">
                  <span
                          class="spinner-border spinner-border-sm"
                          v-show="loading"
                        ></span>
                </div>

                        <input class="form-control" type="search" placeholder="quel document voulez-vous?" aria-label="Search" 
                      v-model="recherche"
                      >
                        <button class="" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                        
                    </form>
                </div>

</div>
<div class="row">

                <div class="col-lg-10 col-sm-11 d-flex justify-content-center align-items-center mx-auto">
                    <ul class="d-flex flex-wrap">
                      <li>

                  <div class="form-group">
                    <select
                      name="faculte"
                      class="form-control"
                      v-model="faculte"
                    >
                      <option disabled value="">Faculte</option>
                      <option
                        v-for="faculte in facultes"
                        :key="faculte.id"
                        :nom="faculte"
                        v-bind:value="faculte.nom"
                      >
                        {{ faculte.nom }}
                      </option>
                    <i class="bi bi-chevron-down"></i>
                    </select>
                  </div>
                    </li>
                    <li>

                  <div class="form-group">
                    <select
                      name="filiere"
                      class="form-control"
                      v-model="filiere"
                    >
                      <option disabled value="">Filiere</option>
                      <option
                        v-for="filiere in filieres"
                        :key="filiere.id"
                        v-bind:value="filiere.nom"
                      >
                        {{ filiere.nom }}
                      </option>
                    </select>
                  </div>
                    </li>

                    <li>

                  <div class="form-group">
                    <select name="niveau" class="form-control" v-model="niveau">
                      <option disabled value="">Niveau</option>
                      <option
                        v-for="niveau in niveaux"
                        :key="niveau.id"
                        :value="niveau.nom"
                      >
                        {{ niveau.nom }}
                      </option>
                    </select>
                  </div>
                    </li>
                    <li>


                  <div class="form-group">
                    <select
                      name="specialite"
                      class="form-control"
                      v-model="specialite"
                    >
                      <option disabled value="">specialite</option>
                      <option
                        v-for="specialite in specialites"
                        :key="specialite.id"
                        :value="specialite.nom"
                      >
                        {{ specialite.nom }}
                      </option>
                    </select>
                  </div>
                    </li>
                    <li>


                  <div class="form-group">
                    <select
                      name="ue"
                      class="form-control"
                      v-model="ue"
                      @change="handleSearchUe"
                    >
                      <option disabled value="">ue</option>
                      <option
                        v-for="ue in ues"
                        :key="ue.id"
                        :value="ue.id"
                      >
                        {{ ue.nom }}
                      </option>
                    </select>
                  </div>
                    </li>

                    <li>


                  <div class="form-group">
                    <select
                      name="typeDoc"
                      class="form-control"
                      v-model="typeDoc"
                    >
                      <option disabled value="">type</option>
                      <option
                        v-for="typeDoc in types"
                        :key="typeDoc.id"
                        :value="typeDoc.nom"
                      >
                        {{ typeDoc.nom }}
                      </option>
                    </select>
                  </div>
                    </li>

                    <li>


                  <div class="form-group">
                    <select
                      name="enseignant"
                      class="form-control"
                      v-model="enseignant"
                    >
                      <option disabled value="">enseignant</option>
                      <option
                        v-for="enseignant in enseignants"
                        :key="enseignant.id"
                        :value="enseignant.nom"
                      >
                        {{ enseignant.username }}
                      </option>
                    </select>
                  </div>
                    </li>
                    </ul>
                </div>
</div> -->
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
                        <img class="w-50 h-50" src="../../assets/404.jpeg" alt="...">
                        <div class="alert alert-danger" role="alert">Aucun document ne correspond à cette recherche!
                        </div>
                      </div>
                    </div>

                    <div class="recent-comment" v-if="!notFound" data-wow-duration="0.75s" data-wow-delay="0s">
                      <DocumentList :documents="documents"></DocumentList>

                    </div>
                  </div>
                  <!-- /# card -->
                </div>

              </div><!-- .row -->
            </div><!-- .animated -->
          </div><!-- .content -->


        </section>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import DocumentList from "./../Base/DocumentList.vue";
export default {
  name: "",
  components: {
    DocumentList
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    }
  },

  data() {
    return {
      documents: {},

      notFound: false,
      loading: false,
    };
  },
  beforeMount() {
    this.handleSearchUe(this.$route.query.q);
  },

  methods: {

    handleSearchUe(ue) {
      this.loading = true;
      this.notFound = false;

      //if(this.checkValue) {
      axios
        .get(
          // "http://localhost:5000/api/documents/documentActif/" + this.recherche
          "http://localhost:5000/api/documents/documentActifUe/" + ue
        )
        .then((res) => {
          const n = res.data.allDocument.length;
          this.loading = false;
          if (n != 0) {
          console.log(
            "---------------------------------ue--------------------------------------------"
          );
            console.log(ue);
            console.log(res.data.allDocument);
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

@import "../../../public/static/homePage3/style.css";
</style>
