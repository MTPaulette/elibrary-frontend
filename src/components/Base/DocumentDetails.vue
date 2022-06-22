<template>
  <div>
    <section id="main-content">
      <div class="row">
        <div class="section-title ml-5">
          <h2>Details</h2>
          <p>Plus d'informations sur le document: {{ document.titre }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-11 mx-auto">
          <div class="card">
            <div class="card-body">
              <div class="user-profile">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="user-photo m-b-30">
                      <img
                        class="img-fluid"
                        v-if="document.TypeId == 1"
                        src="../../assets/logo-book.png"
                        alt="..."
                      />
                      <img
                        class="img-fluid"
                        v-else
                        src="../../assets/logo-pdf.png"
                        alt="..."
                      />
                    </div>
                    <div class="user-work mt-lg-5">
                      <h4>CARACTERISTIQUES</h4>
                      <div class="work-content">
                        <h3>{{ document.Type.nom }}</h3>
                        <p class="details" v-if="document.Ue">
                          {{ document.Ue.nom }}
                        </p>
                        <p class="details" v-if="document.Specialite">
                          {{ document.Specialite.nom }}
                        </p>
                        <p class="details">{{ document.Filiere.nom }}</p>
                        <p class="details">{{ document.Faculte.nom }}</p>
                      </div>
                    </div>
                    <!-- <div class="user-skill">
                          <h4>Skill</h4>
                          <ul>
                            <li>
                              <a href="#">Branding</a>
                            </li>
                            <li>
                              <a href="#">UI/UX</a>
                            </li>
                            <li>
                              <a href="#">Web Design</a>
                            </li>
                            <li>
                              <a href="#">Wordpress</a>
                            </li>
                            <li>
                              <a href="#">Magento</a>
                            </li>
                          </ul>
                        </div> -->
                  </div>
                  <div class="col-lg-8">
                    <div class="user-profile-name m-1">
                      {{ document.titre }}
                    </div>
                    <div class="user-Location">
                      <i class="ti-location-pin"></i> {{ document.createdAt }}
                    </div>
                    <div class="user-job-title">{{ document.resume }}</div>
                    <!-- <div class="ratings">
                          <h4>Ratings</h4>
                          <div class="rating-star">
                            <span>8.9</span>
                            <i class="ti-star color-primary"></i>
                            <i class="ti-star color-primary"></i>
                            <i class="ti-star color-primary"></i>
                            <i class="ti-star color-primary"></i>
                            <i class="ti-star"></i>
                          </div>
                        </div> -->
                    <a
                      class="user-send-message"
                      target="_blanc"
                      :href="
                        'http://localhost:5000/api/documents/telecharger/' +
                        document.id
                      "
                    >
                      <button
                        class="btn btn-primary btn-addon px-3"
                        type="button"
                      >
                        <i class="bi bi-download mr-2 pl-0"></i>
                        telecharger</button
                      >{{ document.contenu }}
                    </a>
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

                            <div class="phone-content" v-if="!document.User">
                              <span class="contact-title">Publieur:</span>
                              <span class="details" disabled> Non défini</span>
                            </div>

                            <div v-else>
                              <div class="phone-content">
                                <span class="contact-title">Publieur:</span>
                                <span class="details" v-if="document.UserId">
                                  <router-link
                                    :to="{
                                      path: '/profile',
                                      query: { id: document.User.id },
                                    }"
                                    >{{ document.User.username }}</router-link
                                  >
                                </span>
                                <span class="details" v-else>Non défini</span>
                              </div>
                              <div class="address-content">
                                <span class="contact-title">Fonction:</span>
                                <span
                                  class="details"
                                  v-if="document.User.RoleId === 2"
                                  >Enseignant</span
                                >
                                <span
                                  class="details"
                                  v-if="document.User.RoleId === 3"
                                  >Etudiant</span
                                >
                              </div>
                              <div class="email-content">
                                <span class="contact-title">Email:</span>
                                <span class="details">{{
                                  document.User.email
                                }}</span>
                              </div>
                              <div class="website-content">
                                <span class="contact-title">Etat:</span>
                                <span
                                  class="badge badge-success"
                                  v-if="document.User.etat == 'actif'"
                                  >{{ document.User.etat }}</span
                                >
                                <span
                                  class="badge badge-warming"
                                  v-if="document.User.etat === 'bloqué'"
                                  >{{ document.User.etat }}</span
                                >
                                <span
                                  class="badge badge-danger"
                                  v-if="document.User.etat === 'supprimé'"
                                  >{{ document.User.etat }}</span
                                >
                              </div>
                              <div class="skype-content">
                                <span class="contact-title">Auteur:</span>
                                <span class="details" v-if="document.auteur">{{
                                  document.auteur
                                }}</span>
                                <span class="details" v-else>Non défini</span>
                              </div>
                            </div>
                          </div>
                          <div class="basic-information">
                            <h4>Informations basiques</h4>
                            <div class="birthday-content">
                              <span class="contact-title">Publié le:</span>
                              <span class="details">{{
                                document.createdAt
                              }}</span>
                            </div>
                            <div class="birthday-content">
                              <span class="contact-title">Modifié le:</span>
                              <span class="details">{{
                                document.updatedAt
                              }}</span>
                            </div>
                            <div class="birthday-content">
                              <span class="contact-title"
                                >Nombre de téléchargement:</span
                              >
                              <span class="badge badge-secondary">{{
                                document.nbTelechargement
                              }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    document: {},
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
  padding-top: 10px;
  padding-bottom: 15px;
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
