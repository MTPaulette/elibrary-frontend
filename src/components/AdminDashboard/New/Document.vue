<template lang="">
  <div class="content mt-3">
    <div class="animated fadeIn">

        <div class="row">
          <div class="section-title ml-5">
            <h2>Document</h2>
            <p>Creation de document</p>
          </div>
        </div>
      <!-- .if success -->
      <div class="row" v-if="successful">
        <div class="alert alert-success" role="alert">
          Document enregistré avec succès!
        </div>
      </div>

      <div class="row" v-else>
        <div class="col-lg-12">
          <div class="card container">
            <div class="card-header">NOUVEAU DOCUMENT</div>
            <div class="card-body card-block">
              <form
                action="/Document"
                method="POST"
                enctype="multipart/form-data"
                class="form-horizontal"
                @submit.prevent="newDocument"
              >
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="text-input" class="form-control-label"
                      >Titre</label
                    >
                  </div>
                  <div class="col-12 col-md-9">
                    <input
                      type="text"
                      name="titre"
                      v-model="titre"
                      v-validate="'required|min:3|max:20'"
                      autocomplete="titre"
                      class="form-control"
                    /><small class="form-text text-muted"
                      >Titre du document</small
                    >
                  </div>
                  <div
                    class="alert-danger"
                    v-if="submitted && errors.has('titre')"
                  >
                    {{ errors.first("titre") }}
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="textarea-input" class="form-control-label"
                      >Resume</label
                    >
                  </div>
                  <div class="col-12 col-md-9">
                    <textarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="4"
                      v-model="resume"
                      placeholder="Bref résumé du document (facultatif)"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="text-input" class="form-control-label"
                      >Auteur</label
                    >
                  </div>
                  <div class="col-12 col-md-9">
                    <input
                      type="text"
                      name="titre"
                      v-model="auteur"
                      autocomplete="titre"
                      class="form-control"
                    /><small class="form-text text-muted"
                      >Acteur du document (facultatif)</small
                    >
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="select" class="form-control-label"
                      >Faculté</label
                    >
                  </div>
                  <div class="col-12 col-md-9">
                    <select
                      name="faculte"
                      class="form-control"
                      v-model="faculte"
                    >
                      <option disabled value="">...</option>
                      <option
                        v-for="faculte in facultes"
                        :key="faculte.id"
                        :nom="faculte"
                        v-bind:value="faculte.id"
                      >
                        {{ faculte.nom }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="select" class="form-control-label"
                      >Filiere</label
                    >
                  </div>
                  <div class="col-12 col-md-9">
                    <select
                      name="filiere"
                      class="form-control"
                      v-model="filiere"
                    >
                      <option disabled value="">...</option>
                      <option
                        v-for="filiere in filieres"
                        :key="filiere.id"
                        v-bind:value="filiere.id"
                      >
                        {{ filiere.nom }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="select" class="form-control-label"
                      >Niveau</label
                    >
                  </div>
                  <div class="col-12 col-md-9">
                    <select name="niveau" class="form-control" v-model="niveau">
                      <option disabled value="">...</option>
                      <option
                        v-for="niveau in niveaux"
                        :key="niveau.id"
                        :value="niveau.id"
                      >
                        {{ niveau.nom }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="select" class="form-control-label"
                      >Specialité</label
                    >
                  </div>

                  <div class="col-12 col-md-9">
                    <select
                      name="specialite"
                      class="form-control"
                      v-model="specialite"
                    >
                      <option disabled value="">...</option>
                      <option
                        v-for="specialite in specialites"
                        :key="specialite.id"
                        :value="specialite.id"
                      >
                        {{ specialite.nom }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="select" class="form-control-label">UE</label>
                  </div>

                  <div class="col-12 col-md-9">
                    <select name="ue" class="form-control" v-model="ue">
                      <option disabled value="">..</option>
                      <option v-for="ue in ues" :key="ue.id" :value="ue.id">
                        {{ ue.nom }} : {{ ue.intitule }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col col-md-3">
                    <label class="form-control-label">Type</label>
                  </div>

                  <div class="col col-md-9" v-if="currentUser.RoleId == 3">
                    <div class="form-check">
                      <div class="radio">
                        <label for="1" class="form-check-label">
                          <input
                            type="radio"
                            id="1"
                            name="s"
                            v-model="typeDoc"
                            value="1"
                            class="form-check-input"
                          />Livre
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col col-md-9"
                    v-if="currentUser.RoleId == 1 || currentUser.RoleId == 2"
                  >
                    <div class="form-check">
                      <div class="radio" v-if="currentUser.RoleId == 1">
                        <label for="1" class="form-check-label">
                          <input
                            type="radio"
                            id="1"
                            name="s"
                            v-model="typeDoc"
                            value="1"
                            class="form-check-input"
                          />Livre
                        </label>
                      </div>
                      <div class="radio">
                        <label for="2" class="form-check-label">
                          <input
                            type="radio"
                            id="2"
                            name="s"
                            value="2"
                            v-model="typeDoc"
                            class="form-check-input"
                          />support de cours
                        </label>
                      </div>
                      <div class="radio">
                        <label for="3" class="form-check-label">
                          <input
                            type="radio"
                            id="3"
                            name="s"
                            value="3"
                            v-model="typeDoc"
                            class="form-check-input"
                          />PV
                        </label>
                      </div>
                      <div class="radio">
                        <label for="3" class="form-check-label">
                          <input
                            type="radio"
                            id="3"
                            name="s"
                            value="4"
                            v-model="typeDoc"
                            class="form-check-input"
                          />TD
                        </label>
                      </div>
                      <div class="radio">
                        <label for="1" class="form-check-label">
                          <input
                            type="radio"
                            id="1"
                            name="s"
                            v-model="typeDoc"
                            value="5"
                            class="form-check-input"
                          />TP
                        </label>
                      </div>
                      <div class="radio">
                        <label for="2" class="form-check-label">
                          <input
                            type="radio"
                            id="2"
                            name="s"
                            value="6"
                            v-model="typeDoc"
                            class="form-check-input"
                          />SN
                        </label>
                      </div>
                      <div class="radio">
                        <label for="3" class="form-check-label">
                          <input
                            type="radio"
                            id="3"
                            name="s"
                            value="7"
                            v-model="typeDoc"
                            class="form-check-input"
                          />CC
                        </label>
                      </div>
                      <div class="radio">
                        <label for="3" class="form-check-label">
                          <input
                            type="radio"
                            id="3"
                            name="s"
                            value="4"
                            v-model="typeDoc"
                            class="form-check-input"
                          />Rattrapage
                        </label>
                      </div>
                      <div class="radio">
                        <label for="3" class="form-check-label">
                          <input
                            type="radio"
                            id="3"
                            name="s"
                            value="9"
                            v-model="typeDoc"
                            class="form-check-input"
                          />Correction
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col col-md-3">
                    <label for="file-input" class="form-control-label"
                      >Fichier</label
                    >
                  </div>
                  <div class="col-12 col-md-9">
                    <input
                      type="file"
                      id="myFile"
                      name="myFile"
                      @change="processFile($event)"
                    />
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="reset" class="btn btn-secondary">
                    <i class="fa fa-ban mr-2 pl-0"></i>Annuler
                  </button>
                  <button type="submit" class="btn btn-primary">
                    <i class="fa fa-dot-circle-o mr-2 pl-0"></i>Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- .content -->
</template>

<script>
import axios from "axios";
export default {
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
  },
  data() {
    return {
      titre: "",
      resume: "",
      auteur: "",
      typeDoc: "",
      file: {},

      ue: "",
      faculte: "",
      filiere: "",
      niveau: "",
      specialite: "",

      //document: new Document("", "", "", "", "", "", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  mounted() {
    this.$store.dispatch("fetchData/getFacultes");
    this.$store.dispatch("fetchData/getFilieres");
    this.$store.dispatch("fetchData/getNiveaux");
    this.$store.dispatch("fetchData/getSpecialites");
    this.$store.dispatch("fetchData/getUes");
  },
  methods: {
    processFile(event) {
      this.file = event.target.files[0];
    },
    newDocument() {
      const formData = new FormData();
      formData.append("myFile", this.file);
      formData.append("titre", this.titre);
      formData.append("auteur", this.auteur);
      formData.append("resume", this.resume);
      formData.append("type", this.typeDoc);
      formData.append("UeId", this.ue);

      formData.append("FaculteId", this.faculte);
      formData.append("FiliereId", this.filiere);
      formData.append("NiveauId", this.niveau);
      formData.append("SpecialiteId", this.specialite);

      axios
        .post("http://localhost:5000/api/documents/createDocument", formData)
        .then((res) => {
          if (!res.data.success) {
            this.successful = false;
          } else {
            this.successful = true;
          }
          this.successful = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.card-header {
  background-color: #4c5a7d;
  color: #fff;
  margin: 0 -10px;
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
</style>
