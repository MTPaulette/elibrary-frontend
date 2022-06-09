<template>
<div class="">
<section>
    <div class="row">
    <div class="section-title ml-5">
      <h2>Recherche</h2>
      <p>Resultats de la recherche</p>
    </div>

    </div>

<div class="row">
                <div class="d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="img/hero.jpg">
                    <form class="d-flex">
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

      <!-- .if notfound -->
      <div v-if="notFound">
        <div class="alert alert-danger" role="alert">Aucun document ne correspond à cette recherche!</div>
      </div>

                <div v-else class="d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="img/hero.jpg">
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
                        v-bind:value="faculte.id"
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
                        v-bind:value="filiere.id"
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
                        :value="niveau.id"
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
                        :value="specialite.id"
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
                        :value="typeDoc.id"
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
                        :value="enseignant.id"
                      >
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
            <div class="col-lg-11 mx-auto">
              <div class="mycard">
                <div class="card-title section-title mt-2">
                  <h4>Resultat pour la recherche: {{recherche}} </h4>

                </div>
                <div class="recent-comment">

                <div class="col-lg-6"
                        v-for="document in documents"
                        :key="document.id"
                        :value="document.id"
                  >
                  <div class="media mb-2 p-2">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object" src="../../assets/logo-pdf.png" alt="...">
                      </a>
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading mb-0">{{ document.titre }}</h6>
                      <p class="resume">{{ document.resume }}</p>
                      <div class="comment-action">
                        <div class="badge badge-success">{{ document.etat }}</div>
                        <span class="ml-10">
                          <a href="#">
                            <i class="fa fa-replycolor-success"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-reply color-danger"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-reply color-primary"></i>
                          </a>
                        </span>
                      </div>
                      <p class="comment-date">{{ document.createdAt }}</p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <!-- /# card -->
            </div>
            <!-- /# column -->

                </div><!-- .row -->
            </div><!-- .animated -->
        </div><!-- .content -->


</section>
</div>
</template>
<script>
import axios from "axios";
//import User from "../../models/user";
export default {
  name: "Search",
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
		facultes() {
			return this.$store.state.fetchData.facultes
		},
		filieres() {
			return this.$store.state.fetchData.filieres
		},
		niveaux() {
			return this.$store.state.fetchData.niveaux
		},
		specialites() {
			return this.$store.state.fetchData.specialites
		},
		ues() {
			return this.$store.state.fetchData.ues
		},
		types() {
			return this.$store.state.fetchData.types
		},
		enseignants() {
			return this.$store.state.fetchData.enseignants
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

		}
	},
  watch: {
    recherche: function() {
      if(this.recherche.length >= 3) {this.handleSearch();}
      
    }
  },
	mounted() {
		this.$store.dispatch("fetchData/getFacultes")
		this.$store.dispatch("fetchData/getFilieres")
		this.$store.dispatch("fetchData/getNiveaux")
		this.$store.dispatch("fetchData/getSpecialites")
		this.$store.dispatch("fetchData/getUes")
		this.$store.dispatch("fetchData/getTypes")
		this.$store.dispatch("fetchData/getEnseignants")
	},
	
	methods: {
    handleSearch() {
      this.loading = true;
				
      //if(this.checkValue) {
        axios.get("http://localhost:5000/api/documents/documentActif/"+this.recherche).then((res) => {
          console.log("-----------------------------------------------------------------------------");
          const n = res.data.allDocument.length;
            this.loading = false;
          if (n != 0) {
            this.documents = res.data.allDocument;
          }else {
            this.notFound = true;
            console.log(this.notFound)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
	},
};
</script>
<style scoped>

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
	border: 1px solid rgba(0,0,0,.125);
	border-radius: .25rem;
  height: 125px;
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
  height: 50px;
  margin-bottom: 0;
  overflow: hidden;
}
.media-body .comment-action {
  height: 20px;
}
.media-body .comment-date {
  width: 100%;
  height: 20px;
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
.section-title h2, .section-title h4 {
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
.section-title h2::after, .section-title h4::after {
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
# About
--------------------------------------------------------------*/


    
</style>