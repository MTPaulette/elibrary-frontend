<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide bs-slider box-slider"
      data-ride="carousel"
      data-pause="hover"
      data-interval="false"
    >
      <!-- Indicators 
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleControls" data-slide-to="1"></li>
			<li data-target="#carouselExampleControls" data-slide-to="2"></li>
		</ol>-->
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div id="home" class="first-section">
            <div class="dtab">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12 text-right">
                    <div class="big-tagline p-5">
                      <h2>
                        <strong>E-Library </strong>Université de Yaoundé 1
                      </h2>
                      <p class="lead">
                        Ici vous pouvez trouvez tous les livres, documents et
                        supports de cours pour votre épanouissement intellectuel
                      </p>
                      <!-- <a href="/" class="hover-btn-new"
                        ><span>S'authentifier</span></a
                      >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="/register" class="hover-btn-new"
                        ><span>{{currentUser}}</span></a
                      > -->
                    </div>
                  </div>
                </div>
                <!-- end row -->
              </div>
              <!-- end container -->
            </div>
          </div>
          <!-- end section -->
        </div>
      </div>
    </div>

    <div class="container">
      <section>
        <div class="content mt-3 mb-5">
          <div class="animated fadeIn">
            <div class="row">
              <!-- /# column -->
              <div class="col-lg-12 mx-auto">
                <div class="mycard">
                  <div class="card-title section-title mt-5">
                    <h4>Quelques documents selon votre filière</h4>
                  </div>

                  <div class="row">
                    <!-- .if notfound -->
                    <div class="col-lg-11 mx-auto" v-if="notFound">
                      <div class="alert alert-danger" role="alert">
                        Aucun document ne correspond à cette recherche!
                      </div>
                    </div>
                  </div>

                  <div
                    class="recent-comment"
                    v-if="!notFound"
                    data-wow-duration="0.75s"
                    data-wow-delay="0s"
                  >
                    <DocumentList :documents="documents"></DocumentList>
                  </div>
                </div>
                <!-- /# card -->
              </div>
            </div>
            <!-- .row -->
          </div>
          <!-- .animated -->
        </div>
        <!-- .content -->
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DocumentList from "./../Base/DocumentList.vue";
import io from "socket.io-client";
export default {
  name: "",
  components: {
    DocumentList,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
  },

  data() {
    return {
      documents: {},

      notFound: false,
      loading: false,
      socket: io("http://localhost:5000/"),
    };
  },
  beforeMount() {
    this.handleSearchFiliere(this.$route.query.q);
  },
  mounted() {
    this.socket.on("login", (user) => {
      console.log("++++++++++++++++++++++++++++@@@@@@@@@@@@@@@@@@@@@@@");
      this.messages = [...this.messages, user];
      // you can also do this.messages.push(data)
    });
    this.socket.on("newUser", (user) => {
      console.log("++++++++++++++++++++++++++++@@@@@@@@@@@@@@@@@@@@@@@");
      this.messages = [...this.messages, user];
      // you can also do this.messages.push(data)
    });
  },

  methods: {
    handleSearchFiliere() {
      this.loading = true;
      this.notFound = false;

      //if(this.checkValue) {
      axios
        .get(
          // "http://localhost:5000/api/documents/documentActif/" + this.recherche
          "http://localhost:5000/api/documents/documentActifFiliere/" +
            this.currentUser.FiliereId
        )
        .then((res) => {
          const n = res.data.allDocument.length;
          this.loading = false;
          if (n != 0) {
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
@import "../../../public/static/homePage/css/bootstrap.min.css";
@import "../../../public/static/homePage/style.css";
@import "../../../public/static/homePage/css/versions.css";
@import "../../../public/static/homePage/css/responsive.css";
@import "../../../public/static/homePage/css/custom.css";
.first-section {
  background-image: url("../../../public/static/homePage/images/slider-01.jpg");
}

div {
  font-family: "Poppins";
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
  font-weight: 300;
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
  color: #eea412;
}

@import "../../../public/static/homePage3/style.css";
</style>
