<template>
  <div>
    <div class="row">
      <div class="all-title-box">
        <div class="container text-center">
          <h1>
            <strong> {{ filiere.nom }} </strong
            ><span class="m_1"
              > {{ filiere.description }}</span
            >
          </h1>
        </div>
      </div>
    </div>

    <div id="overviews" class="section wb">
      <div class="container">
        <div class="row">
          <div class="section-title row text-center">
            <div class="col-md-8 offset-md-2">
              <p class="lead">
                Vous pouvez consulter les documents selon votre niveau
              </p>
            </div>
          </div>
        </div>

        <div class="row">
            <hr class="invis" />
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 col-6 mb-5"
                                v-for="niveau in niveaux"
                                :key="niveau.id">
            <div class="course-item">
              <div class="image-blog">
                <img
                  src="../../../public/static/homePage/images/blog_1.jpg"
                  alt=""
                  class="img-fluid"
                  width="50px"
                  heigth="50px"
                />
              </div>
              <div class="course-br py-0 my-0">
                <div class="course-title">
                  <h2>
                    <router-link :to="{ name: 'Ue', params: { filiereId: filiere.id}, query: { niveau: niveau.id  }}">{{ niveau.nom }}</router-link>
                    <!-- <router-link :to="{ path: '/ue', query: {  niveau: niveau.id  }}" >{{ niveau.nom }}</router-link> -->
                  </h2>
                </div>
                <div class="course-desc h-20">
                  <p class="h-25">{{ niveau.description }}
                  </p>
                </div>
                <div class="course-rating mb-2">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="course-meta-bot">
                <ul>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>Semestre 1
                    et 2
                  </li>
                  <li>
                    <i class="fa fa-book" aria-hidden="true"></i> Livres et
                    supports de cours
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--

          <div class="col-lg-4 col-md-6 col-6 mb-5">
            <div class="course-item">
              <div class="image-blog">
                <img
                  src="../../../public/static/homePage/images/blog_2.jpg"
                  alt=""
                  class="img-fluid"
                  width="50px"
                  heigth="50px"
                />
              </div>
              <div class="course-br py-0 my-0">
                <div class="course-title">
                  <h2>
                    <a href="/informatiques/infosL2" title="">Licence 2</a>
                  </h2>
                </div>
                <div class="course-desc">
                  <p class=" my-auto">
                    Ce niveau correspond à des compétentes moyennes et générales
                  </p>
                </div>
                <div class="course-rating mb-2">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="course-meta-bot">
                <ul>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>Semestre 1
                    et 2
                  </li>
                  <li>
                    <i class="fa fa-book" aria-hidden="true"></i> Livres et
                    supports de cours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-6 mb-5">
            <div class="course-item">
              <div class="image-blog">
                <img
                  src="../../../public/static/homePage/images/blog_3.jpg"
                  alt=""
                  class="img-fluid"
                  width="50px"
                  heigth="50px"
                />
              </div>
              <div class="course-br py-0 my-0">
                <div class="course-title">
                  <h2>
                    <a href="/informatiques/infosL3" title="">Licence 3</a>
                  </h2>
                </div>
                <div class="course-desc">
                  <p class="h-25">
                    En fonction de votre préférence vous trouverez des documents
                    portant sur des domaines de spécialite:
                    <strong
                      >Génie logiciel, Sciences de données,Réseaux et sécurité
                      informatique</strong
                    >
                  </p>
                </div>
                <div class="course-rating mb-2">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="course-meta-bot">
                <ul>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>Semestre 1
                    et 2
                  </li>
                  <li>
                    <i class="fa fa-book" aria-hidden="true"></i> Livres et
                    supports de cours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-6 mb-5">
            <div class="course-item">
              <div class="image-blog">
                <img
                  src="../../../public/static/homePage/images/blog_4.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="course-br py-0 my-0">
                <div class="course-title">
                  <h2>
                    <a href="/informatiques/infosM1" title="">Master 1</a>
                  </h2>
                </div>
                <div class="course-desc">
                  <p>Faites des recherches pour préparer votre maîtrise</p>
                </div>
                <div class="course-rating mb-2">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="course-meta-bot">
                <ul>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>Semestre 1
                    et 2
                  </li>
                  <li>
                    <i class="fa fa-book" aria-hidden="true"></i> Livres et
                    supports de cours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-6 mb-5">
            <div class="course-item">
              <div class="image-blog">
                <img
                  src="../../../public/static/homePage/images/blog_5.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="course-br py-0 my-0">
                <div class="course-title">
                  <h2>
                    <a href="/informatiques/infosM2" title="">Master 2</a>
                  </h2>
                </div>
                <div class="course-desc">
                  <p class="h-25">
                    Retrouvez des anciennes thèses de Master pour vous inspirer
                  </p>
                </div>
                <div class="course-rating mb-2">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="course-meta-bot">
                <ul>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>Semestre 1
                    et 2
                  </li>
                  <li>
                    <i class="fa fa-book" aria-hidden="true"></i> Livres et
                    supports de cours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-6 mb-5">
            <div class="course-item">
              <div class="image-blog">
                <img
                  src="../../../public/static/homePage/images/blog_6.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="course-br py-0 my-0">
                <div class="course-title">
                  <h2>
                    <a href="/informatiques/infosDoctorat" title=""
                      >Doctorant</a
                    >
                  </h2>
                </div>
                <div class="course-desc">
                  <p class="h-25">
                    Retrouvez des anciennes thèses de Doctorat pour vous
                    inspirer
                  </p>
                </div>
                <div class="course-rating mb-2">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div class="course-meta-bot">
                <ul>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>Semestre 1
                    et 2
                  </li>
                  <li>
                    <i class="fa fa-book" aria-hidden="true"></i> Livres et
                    supports de cours
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
          
        </div>
      </div>

    </div>
    <!-- end section -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  computed: {
    niveaux() {
      return this.$store.state.fetchData.niveaux;
    },
  },

  data() {
    return {
      filiere: {},
    };
  },
  beforeMount() {
    this.getFiliere(this.$route.query.filiere);
  },
  mounted() {
    this.$store.dispatch("fetchData/getNiveaux");
  },

  methods: {
    getFiliere(filiereId) {
      axios
        .get(
          "http://localhost:5000/api/filieres/filiere/" + filiereId
        )
        .then((res) => {
          console.log("**********************")
          console.log(res.data)
          this.filiere = res.data.filiere;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
/* @import "../../../public/static/homePage/css/bootstrap.min.css";k */
@import "../../../public/static/homePage/style.css";
@import "../../../public/static/homePage/css/versions.css";
@import "../../../public/static/homePage/css/responsive.css";
@import "../../../public/static/homePage/css/custom.css";

.course-desc {
  height: 80px;
  overflow: hidden;
}
.course-title > h2 {
	margin: 5px 0;
	padding: 0px;
}
</style>
