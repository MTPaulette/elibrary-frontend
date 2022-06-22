<template>
  <div>
    <section id="main-content">
      <div class="row">
        <div class="section-title ml-5">
          <h2>Details</h2>
          <p>Profil: {{ user.username }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-11 mx-auto">
          <div class="card pb-5">
            <div class="card-body">
              <div class="user-profile">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="user-photo m-b-30">
                      <img
                        class="img-fluid"
                        src="../../assets/avatar.png"
                        alt="..."
                      />
                    </div>
                    <div class="user-work mt-lg-5">
                      <h4>Ses documents</h4>
                      <div
                        class="work-content"
                        v-for="document in documents"
                        :key="document.id"
                        :value="document.id"
                      >
                        <p class="">{{ document.titre }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="user-profile-name">{{ user.username }}</div>
                    <div class="user-Location">
                      <i class="ti-location-pin"></i> {{ user.createdAt }}
                    </div>
                    <div class="user-job-title">{{ user.resume }}</div>

                    <!-- <a class="user-send-message" target="_blanc"
                          :href="'http://localhost:5000/api/documents/telecharger/'+document.id">
                          <button class="btn btn-primary btn-addon px-3" type="button">
                            <i class="bi bi-download mr-2 pl-0"></i>
                          telecharger </button>{{ document.contenu }}
                        </a> -->
                    <div class="custom-tab user-profile-tab">
                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active mt-3">
                          <span aria-controls="1" role="tab" data-toggle="tab"
                            >A propos</span
                          >
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="1">
                          <div class="contact-information">
                            <h4>Informations sur le publieur</h4>

                            <!-- <div class="phone-content" v-if="!document.User">
                                  <span class="contact-title">Publieur:</span>
                                  <span class="details" disabled> Non défini</span>
                                </div>

                                <div v-else>

                                <div class="phone-content">
                                  <span class="contact-title">Publieur:</span>
                                  <span class="details" v-if="document.UserId">
                                    <router-link :to="{ path: '/profile', query: { id:document.User.id }}">{{ document.User.username}}</router-link>
                                  </span>
                                  <span class="details" v-else>Non défini</span>
                                </div> -->
                            <div class="address-content">
                              <span class="contact-title">Fonction:</span>
                              <span class="details">{{ user.Role.nom }}</span>
                            </div>
                            <div class="email-content">
                              <span class="contact-title">Email:</span>
                              <span class="details">{{ user.email }}</span>
                            </div>
                            <div class="website-content">
                              <span class="contact-title">Etat:</span>
                              <span
                                class="badge badge-success"
                                v-if="user.etat == 'actif'"
                                >{{ user.etat }}</span
                              >
                              <span
                                class="badge badge-warming"
                                v-if="user.etat === 'bloqué'"
                                >{{ user.etat }}</span
                              >
                              <span
                                class="badge badge-danger"
                                v-if="user.etat === 'supprimé'"
                                >{{ user.etat }}</span
                              >
                            </div>
                            <!-- <div class="skype-content">
                                  <span class="contact-title">Auteur:</span>
                                  <span class="details" v-if="document.auteur">{{ document.auteur }}</span>
                                  <span class="details" v-else>Non défini</span>
                                </div> -->
                          </div>
                        </div>
                        <div class="basic-information">
                          <h4>Informations basiques</h4>
                          <div class="birthday-content">
                            <span class="contact-title">créé le:</span>
                            <span class="details">{{ user.createdAt }}</span>
                          </div>
                          <div class="birthday-content">
                            <span class="contact-title">mis à jour le:</span>
                            <span class="details">{{ user.updatedAt }}</span>
                          </div>
                          <div class="birthday-content">
                            <span class="contact-title"
                              >Nombre de documents publiés:</span
                            >
                            <span class="badge badge-secondary">{{
                              documents.length
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- </div> -->
              </div>
            </div>

            <div class="row">
              <div class="section-title ml-5">
                <h2>Ses documents publiés</h2>
              </div>
            </div>

            <div class="row">
              <div
                class="recent-comment"
                data-wow-duration="0.75s"
                data-wow-delay="0s"
              >
                <DocumentList :documents="documents"></DocumentList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import DocumentList from "./../Base/DocumentList.vue";
export default {
  name: "profile",

  data() {
    return {
      user: "",
      documents: {},
    };
  },
  components: {
    DocumentList,
  },

  methods: {
    getUser() {
      this.notFound = false;
      axios
        .get("http://localhost:5000/api/users/user/" + this.$route.query.id)
        .then((res) => {
          const n = res.data.user.length;
          if (n != 0) {
            this.user = res.data.user;
          } else {
            this.notFound = true;
          }
          console.log("****************************");
          console.log(this.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserDocument() {
      axios
        .get(
          "http://localhost:5000/api/documents/documentOfUser/" +
            this.$route.query.id
        )
        .then((res) => {
          this.documents = res.data.allDocument;
          console.log("****************************");
        });
    },
  },
  mounted() {
    this.getUser();
    this.getUserDocument();
  },
};
</script>
<style scoped>
.section-title h2 {
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
.section-title h2::after {
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
/************************************** */
.contact-information,
.basic-information {
  margin: 10px 0px;
}
.contact-information h4,
.basic-information h4 {
  font-size: 12px;
  text-transform: uppercase;
  padding-top: 15px;
  padding-bottom: 20px;
  font-family: "Roboto", sans-serif;
}
.contact-title {
  display: inline-block;
  padding-bottom: 15px;
  width: 170px;
  font-size: 16px;
  color: #868e96;
}
.details {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #373757;
}
/**************************** */
.user-work h4,
.user-skill h4 {
  font-size: 14px;
  position: relative;
  margin-bottom: 15px;
  padding: 5px 0px;
  border-bottom: 1px solid #e7e7e7;
  font-family: "Roboto", sans-serif;
}
.work-content {
  margin-bottom: 15px;
}
.work-content h3 {
  font-size: 15px;
  margin-bottom: 5px;
}
/************************************ */
.user-profile-name {
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  padding: 0px 15px;
}
.user-Location {
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
}
.user-job-title {
  font-size: 14px;
  padding-bottom: 5px;
  padding-left: 15px;
  color: #5873fe;
}
.user-send-message {
  margin-top: 15px;
  padding-left: 15px;
}
.m-b-30 {
  margin-bottom: 30px !important;
}
.btn-addon {
  position: relative;
  padding-left: 40px;
}
</style>
