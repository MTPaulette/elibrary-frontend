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
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </div>

</div>
<div class="row">
                <div class="d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="img/hero.jpg">
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
                    </select>
                    <i class="bi bi-chevron-down field-icon"></i>
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
                  <h4>Recent Comments </h4>

                </div>
                <div class="recent-comment">

                <div class="col-lg-6"
                        v-for="document in documents"
                        :key="document.id"
                        :value="document.id"
                  >
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object" src="../../assets/logo-pdf.png" alt="...">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">{{ document.titre }}</h4>
                      <p>{{ document.resume }} </p>
                      <div class="comment-action">
                        <div class="badge badge-success">{{ document.etat }}</div>
                        <span class="m-l-10">
                          <a href="#">
                            <i class="ti-check color-success"></i>
                          </a>
                          <a href="#">
                            <i class="ti-close color-danger"></i>
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


                <div class="col-lg-6">
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object" src="../../assets/logo-pdf.png" alt="...">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">john doe</h4>
                      <p>Cras sit amet nibh libero, in gravida nulla. </p>
                      <div class="comment-action">
                        <div class="badge badge-success">Approved</div>
                        <span class="m-l-10">
                          <a href="#">
                            <i class="ti-check color-success"></i>
                          </a>
                          <a href="#">
                            <i class="ti-close color-danger"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-reply color-primary"></i>
                          </a>
                        </span>
                      </div>
                      <p class="comment-date">October 21, 2017</p>
                    </div>
                  </div>
                </div>

                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object" src="../../assets/logo-pdf.png" alt="...">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">Mr. John</h4>
                      <p>Cras sit amet nibh libero, in gravida nulla. </p>
                      <div class="comment-action">
                        <div class="badge badge-warning">Pending</div>
                        <span class="m-l-10">
                          <a href="#">
                            <i class="ti-check color-success"></i>
                          </a>
                          <a href="#">
                            <i class="ti-close color-danger"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-reply color-primary"></i>
                          </a>
                        </span>
                      </div>
                      <p class="comment-date">October 21, 2017</p>
                    </div>
                  </div>
                  <div class="media no-border">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object" src="../../assets/logo-pdf.png" alt="...">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">Mr. John</h4>
                      <p>Cras sit amet nibh libero, in gravida nulla. </p>
                      <div class="comment-action">
                        <div class="badge badge-danger">Rejected</div>
                        <span class="m-l-10">
                          <a href="#">
                            <i class="ti-check color-success"></i>
                          </a>
                          <a href="#">
                            <i class="ti-close color-danger"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-reply color-primary"></i>
                          </a>
                        </span>
                      </div>
                      <div class="comment-date">October 21, 2017</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /# card -->
            </div>
            <!-- /# column -->


                    <!--<div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title mb-3">Profile Card</strong>
                            </div>
                            <div class="card-body">
                                <div class="mx-auto d-block">
                                    <img class="rounded-circle mx-auto d-block" src="images/admin.jpg" alt="Card image cap">
                                    <h5 class="text-sm-center mt-2 mb-1">Steven Lee</h5>
                                    <div class="location text-sm-center"><i class="fa fa-map-marker"></i> California, United States</div>
                                </div>
                                <hr>
                                <div class="card-text text-sm-center">
                                    <a href="#"><i class="fa fa-facebook pr-1"></i></a>
                                    <a href="#"><i class="fa fa-twitter pr-1"></i></a>
                                    <a href="#"><i class="fa fa-linkedin pr-1"></i></a>
                                    <a href="#"><i class="fa fa-pinterest pr-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="mx-auto d-block">
                                    <img class="rounded-circle mx-auto d-block" src="images/admin.jpg" alt="Card image cap">
                                    <h5 class="text-sm-center mt-2 mb-1">Steven Lee</h5>
                                    <div class="location text-sm-center"><i class="fa fa-map-marker"></i> California, United States</div>
                                </div>
                                <hr>
                                <div class="card-text text-sm-center">
                                    <a href="#"><i class="fa fa-facebook pr-1"></i></a>
                                    <a href="#"><i class="fa fa-twitter pr-1"></i></a>
                                    <a href="#"><i class="fa fa-linkedin pr-1"></i></a>
                                    <a href="#"><i class="fa fa-pinterest pr-1"></i></a>
                                </div>
                            </div>
                            <div class="card-footer">
                                <strong class="card-title mb-3">Profile Card</strong>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-user"></i><strong class="card-title pl-2">Profile Card</strong>
                            </div>
                            <div class="card-body">
                                <div class="mx-auto d-block">
                                    <img class="rounded-circle mx-auto d-block" src="images/admin.jpg" alt="Card image cap">
                                    <h5 class="text-sm-center mt-2 mb-1">Steven Lee</h5>
                                    <div class="location text-sm-center"><i class="fa fa-map-marker"></i> California, United States</div>
                                </div>
                                <hr>
                                <div class="card-text text-sm-center">
                                    <a href="#"><i class="fa fa-facebook pr-1"></i></a>
                                    <a href="#"><i class="fa fa-twitter pr-1"></i></a>
                                    <a href="#"><i class="fa fa-linkedin pr-1"></i></a>
                                    <a href="#"><i class="fa fa-pinterest pr-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <aside class="profile-nav alt">
                            <section class="card">
                                <div class="card-header user-header alt bg-dark">
                                    <div class="media">
                                        <a href="#">
                                            <img class="align-self-center rounded-circle mr-3" style="width:85px; height:85px;" alt="" src="images/admin.jpg">
                                        </a>
                                        <div class="media-body">
                                            <h2 class="text-light display-6">Jim Doe</h2>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                </div>


                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <a href="#"> <i class="fa fa-envelope-o"></i> Mail Inbox <span class="badge badge-primary pull-right">10</span></a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span></a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"> <i class="fa fa-bell-o"></i> Notification <span class="badge badge-success pull-right">11</span></a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"> <i class="fa fa-comments-o"></i> Message <span class="badge badge-warning pull-right r-activity">03</span></a>
                                    </li>
                                </ul>

                            </section>
                        </aside>
                    </div>

                    <div class="col-md-4">
                        <div class="feed-box text-center">
                            <section class="card">
                                <div class="card-body">
                                    <div class="corner-ribon blue-ribon">
                                        <i class="fa fa-twitter"></i>
                                    </div>
                                    <a href="#">
                                        <img class="align-self-center rounded-circle mr-3" style="width:85px; height:85px;" alt="" src="images/admin.jpg">
                                    </a>
                                    <h2>Kanye West</h2>
                                    <p>Just got a pretty neat project via <a href="#">@ooomf</a> - Give it a try <a href="#">http://t.co/e02DwGEeOJ</a></p>
                                </div>
                            </section>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <section class="card">
                            <div class="twt-feed blue-bg">
                                <div class="corner-ribon black-ribon">
                                    <i class="fa fa-twitter"></i>
                                </div>
                                <div class="fa fa-twitter wtt-mark"></div>

                                <div class="media">
                                    <a href="#">
                                        <img class="align-self-center rounded-circle mr-3" style="width:85px; height:85px;" alt="" src="images/admin.jpg">
                                    </a>
                                    <div class="media-body">
                                        <h2 class="text-white display-6">Jim Doe</h2>
                                        <p class="text-light">Project Manager</p>
                                    </div>
                                </div>



                            </div>
                            <div class="weather-category twt-category">
                                <ul>
                                    <li class="active">
                                        <h5>750</h5>
                                        Tweets
                                    </li>
                                    <li>
                                        <h5>865</h5>
                                        Following
                                    </li>
                                    <li>
                                        <h5>3645</h5>
                                        Followers
                                    </li>
                                </ul>
                            </div>
                            <div class="twt-write col-sm-12">
                                <textarea placeholder="Write your Tweet and Enter" rows="1" class="form-control t-text-area"></textarea>
                            </div>
                            <footer class="twt-footer">
                                <a href="#"><i class="fa fa-camera"></i></a>
                                <a href="#"><i class="fa fa-map-marker"></i></a>
                                New Castle, UK
                                <span class="pull-right">
                                    32
                                </span>
                            </footer>
                        </section>
                    </div>



                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Card with switch</strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Card with Label <small><span class="badge badge-success float-right mt-1">Success</span></small></strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Card with Label <small><span class="badge badge-danger float-right mt-1">49</span></small></strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="card border border-primary">
                            <div class="card-header">
                                <strong class="card-title">Card Outline</strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card border border-secondary">
                            <div class="card-header">
                                <strong class="card-title">Card Outline</strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card border border-success">
                            <div class="card-header">
                                <strong class="card-title">Card Outline</strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="card bg-primary">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0 text-light">
                                    <p class="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-secondary">
                                <strong class="card-title text-light">Card Header</strong>
                            </div>
                            <div class="card-body text-white bg-primary">
                                <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-dark">
                                <strong class="card-title text-light">Card Header</strong>
                            </div>
                            <div class="card-body text-white bg-danger">
                                <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-success">
                                <strong class="card-title text-light">Card Header</strong>
                            </div>
                            <div class="card-body text-white bg-warning">
                                <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="../../assets/fille-logo.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title mb-3">Card Image Title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="../../assets/fille-logo.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title mb-3">Card Image Title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="../../assets/fille-logo.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title mb-3">Card Image Title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div-->

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

			error: "",
			loading: false,
      message: "",

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
    handleUpdate() {
      this.submitted = true;
      this.loading = true;

      if (!this.faculte) {
        this.faculte = this.currentUser.FaculteId;
      }
      if (!this.filiere) {
        this.filiere = this.currentUser.FiliereId;
      }
      if (!this.niveau) {
        this.niveau = this.currentUser.NiveauId;
      }
      if (!this.specialite) {
        this.specialite = this.currentUser.SpecialiteId
      }
      if (!this.user.username) {
        this.user.username = this.currentUser.username
      }
      
      //this.$validator.validate().then((valid) => {
        //if (valid) {
          this.user.setOthersInformations(
            this.confirmPassword,
            this.faculte,
            this.filiere,
            this.niveau,
            this.specialite,
            this.newPassword,
            this.matricule,
          );
				
      //if(this.checkValue) {
        axios.post("http://localhost:5000/api/users/updateUser/"+this.currentUser.id, this.user).then((res) => {
          console.log("-------------------------");
          console.log(res.data.msg);
            this.loading = false;
          if (res.data.success) {
            this.message = res.data.msg;
          }else {
            this.error = res.data.msg
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
}
.mycard {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
    
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