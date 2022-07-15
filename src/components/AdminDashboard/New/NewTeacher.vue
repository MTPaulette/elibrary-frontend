<template>
  <div class="my-5 animated">

      <div class="row">
        <div class="section-title ml-5">
          <h2>Enseignant</h2>
          <p>Creation d'enseignant</p>
        </div>
      </div>
      
      <div v-if="error">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
      <!-- .if success -->
      <div v-if="successful">
        <div class="alert alert-success" role="alert">
          {{ message }}
        </div>
      </div>

      <div class="col mx-auto mb-3" v-else>
        <div class="card container">
          <div class="card-header">NOUVEAU ENSEIGNANT</div>
          <div class="card-body">
            <div class="e-profile">

              <div class="tab-content pt-3">
                <div class="tab-pane active">
                  <form class="form" action="#" @submit.prevent="register">
                    <div class="row">
                      <div class="col">
                        <div class="my-2">
                          <b>Informations Personnelles
                            <span class="text-danger">*</span></b>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Noms & Prénoms</label>
                              <input class="form-control" type="text" name="name" placeholder="Ex: Mayogue Paulette"
                                v-model="username" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Email</label>
                              <input class="form-control" type="email" v-model="email"
                                placeholder="Ex: exemple@fasciences-uy1.cm" />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="my-2">
                            <b>Informations Universitaires</b>
                          </div>
                          <div class="col mb-3">
                            <div class="form-group">
                              <label for="">Faculte</label>
                              <select name="faculte" class="form-control" v-model="faculte">
                                <option disabled value="">
                                  {{ currentUser.Faculte.nom }}
                                </option>
                                <option v-for="faculte in facultes" :key="faculte.id" :nom="faculte"
                                  v-bind:value="faculte.id">
                                  {{ faculte.nom }}
                                </option>
                              </select>
                              <!-- <i class="bi bi-chevron-down field-icon"></i> -->
                            </div>
                          </div>
                          <!-- </div>
															<div class="row"> -->

                          <div class="col mb-3">
                            <div class="form-group">
                              <label for="">Filiere</label>
                              <select name="filiere" class="form-control" v-model="filiere">
                                <option disabled value="">
                                  {{ currentUser.Filiere.nom }}
                                </option>
                                <option v-for="filiere in filieres" :key="filiere.id" v-bind:value="filiere.id">
                                  {{ filiere.nom }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col mb-3">
                            <div class="form-group">
                              <label for="">Niveau</label>
                              <select name="niveau" class="form-control" v-model="niveau">
                                <option disabled value="">
                                  {{ currentUser.Niveau.nom }}
                                </option>
                                <option v-for="niveau in niveaux" :key="niveau.id" :value="niveau.id">
                                  {{ niveau.nom }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- </div>

															<div class="row"> -->
                          <div class="col mb-3">
                            <div class="form-group">
                              <label for="">Specialité</label>
                              <select name="specialite" class="form-control" v-model="specialite">
                                <option disabled value="" v-if="currentUser.Specialite">
                                  {{ currentUser.Specialite.nom }}
                                </option>
                                <option disabled value="" v-else>
                                  Non défini
                                </option>
                                <option v-for="specialite in specialites" :key="specialite.id" :value="specialite.id">
                                  {{ specialite.nom }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-sm-6 mb-3">
                        <div class="my-2">
                          <b>Informations de Sécurité
                            <span class="text-danger">*</span></b>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Mot de passe</label>
                              <input type="password" class="form-control" v-model="password"
                                v-validate="'required|min:6|max:40'" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Confirmer le
                                <span class="d-none d-xl-inline">mot de passe</span></label>
                              <input type="password" class="form-control" v-model="confirmPassword"
                                v-validate="'required|min:6|max:40'" />
                              <!-- <div
                              class="alert-danger"
                              v-if="submitted && errors.has('password')"
                            >
                              {{ errors.first("password") }}
                            </div> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="modal-footer">
                      <button type="reset" class="btn btn-secondary">
                        <i class="fa fa-ban mr-2 pl-0"></i>Annuler
                      </button>

                      <button class="btn btn-primary" type="submit" :disabled="loading">
                        <span class="spinner-border spinner-border-sm mr-1" v-show="loading"></span>
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
    </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "RegisterComponent",
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
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",

      //************dynamic loading of filiere*******/
      loading: false,
      error: false,
      successful: false,
      message: "",

      faculte: "",
      filiere: "",
      niveau: "",
      specialite: "",
    };
  },
  mounted() {
    this.$store.dispatch("fetchData/getFacultes");
    this.$store.dispatch("fetchData/getFilieres");
    this.$store.dispatch("fetchData/getNiveaux");
    this.$store.dispatch("fetchData/getSpecialites");
  },

  methods: {
    ...mapActions(["registerAuth"]),
    register() {
      this.loading = true;
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        FaculteId: this.faculte,
        FiliereId: this.filiere,
        NiveauId: this.niveau,
        SpecialiteId: this.specialite,
      };
      console.log(user);

      axios
        .post("http://localhost:5000/api/users/ajouterEnseignant", user)
        .then((res) => {
          this.loading = false;
          console.log(res.data.user);
          this.message = res.data.msg;
          console.log(res.data.msg);
          if (!res.data.success) {
            //this.successful = false;
            this.error = true;
          } else {
            this.successful = true;
          }
        })
        .catch((err) => {
          console.log("*******************");
          console.log(err);
        });
      //this.registerAuth(user)
      // this.$store.dispatch("auth/register", user).then(
      //   () => {
      //     this.$router.push("/login");
      //   },
      //   (error) => {
      //     this.loading = false;
      //     this.message = error.msg;
      //     console.log(this.message);
      //   }
      // );
    },
  },
};
</script>
<style scoped>
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
