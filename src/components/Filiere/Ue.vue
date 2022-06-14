<template>
<div>
    <div class="row">
      <div class="all-title-box w-100">
        <div class="container text-center">
        <div class="mu-book-overview-area py-auto">
          <div class="mu-heading-area">
            <h2 class="mu-heading-title">Liste des Unités d'enseignement de: {{ filiere }}  {{ niveau }} </h2>
            <span class="mu-header-dot"></span>
          </div>
        </div>
        </div>
      </div>
    </div>

      <!-- <div class="row">
        <div class="mu-book-overview-area py-auto">
          <div class="mu-heading-area">
            <h2 class="mu-heading-title">Liste des Unités d'enseignement de: {{ filiere }}  {{ niveau }} </h2>
            <span class="mu-header-dot"></span>
          </div>
        </div>
      </div> -->

    <div id="overviews" class="section wb">
      <div class="container">
        
          <div class="row mb-10" v-if="this.$route.query.niveau <= 2">
            <div class="col-md-3 col-sm-6" v-for="ue in ues" :key="ue.id">

              <router-link :to="{ path: '/document',query: { q: ue.id }}"
              >
              <div class="mu-book-overview-single ue">
                <span class="mu-book-overview-icon-box">
                  <i class="fa fa-gg" aria-hidden="true"></i>
                </span>
                <h4 class="nom">{{ ue.nom }}</h4>
                <p class="intitule">{{ ue.intitule }}</p>
              </div>
              </router-link>


            </div>
          </div>

        <div v-else v-for="specialite in specialitesParFiliere()" :key="specialite.id" class="mb-3">
            <div class="row">
                <div class="card-title section-title">
                  <h4>Specialité: <strong> {{ specialite.nom }}</strong> </h4>

                </div>
              </div>
          <div class="row mb-10">
            <!-- About Us Single Content -->
            <div class="col-md-3 col-sm-6" v-for="ue in uesParSpecialite(specialite.id)" :key="ue.id">


              <router-link :to="{ path: '/document',query: { q: ue.id }}"
              >
              <div class="mu-book-overview-single ue">
                <span class="mu-book-overview-icon-box">
                  <i class="fa fa-gg" aria-hidden="true"></i>
                </span>
                <h4 class="nom">{{ ue.nom }}</h4>
                <p class="intitule">{{ ue.intitule }}</p>
              </div>
              </router-link>

              <!-- <div class="mu-book-overview-single">
                <span class="mu-book-overview-icon-box">
                  <i class="fa fa-gg" aria-hidden="true"></i>
                </span>
                <h4>{{ ue.nom }}</h4>
                <p class="intitule">{{ ue.intitule }}</p>
              </div> -->

            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {
    filiereId: String,
  },

  data() {
    return {
      ues: {},
      filiere: "",
      niveau: "",
      specialiteId: Number,
    };
  },
  computed: {
    specialites() {
      return this.$store.state.fetchData.specialites;
    },
  },
  beforeMount() {
    const parameter = {
      filiereId:  this.$route.params.filiereId,
      niveauId:  this.$route.query.niveau,
    };
    this.getUe(parameter);
  },
  mounted() {
    this.$store.dispatch("fetchData/getSpecialites");
  },

  methods: {
    getUe(parameter) {
      axios
        .post(
          "http://localhost:5000/api/ues/ues", parameter
        )
        .then((res) => {
          console.log("**********************")
          console.log(res.data)
          this.filiere = res.data.ues[0].Filiere.nom,
          this.niveau = res.data.ues[0].Niveau.nom,
          this.ues = res.data.ues;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    uesParSpecialite(specialiteId) {
      if(this.ues) {
        return this.ues.filter((ue) => {
          if(ue.SpecialiteId == specialiteId) {
              return ue;
          };
        });
      }else {
      return {}}
    },
    
    specialitesParFiliere() {
      if(this.specialites) {
        return this.specialites.filter((specialite) => {
          if(specialite.FiliereId == this.$route.params.filiereId) {
          // if(specialite.FiliereId == 1) {
              return specialite;
          };
        });
      }else {
      return false
      }
    },
  },
};
</script>

<style scoped>
@import "../../../public/static/homePage3/style.css";

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
.ue {
  background: #cae4e2;
}
.intitule {
  height: 50px;
  overflow: hidden;
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

</style>
