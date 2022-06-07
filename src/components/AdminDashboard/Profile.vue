<template>

          <div class="m-5">
            <div class="col mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="e-profile">
                    <div class="row">
                      <div class="col-12 col-sm-auto mb-3">
                        <div class="mx-auto" style="width: 150px">
                          <div
                            class="d-flex justify-content-center align-items-center rounded"
                            style="
                              height: 180px;
                              background-color: rgb(233, 236, 239);
                            "
                          >
                            <span
                              style="
                                color: rgb(166, 168, 170);
                                font: bold 8pt Arial;
                              "
                              ><img
                                src=../../assets/fille-logo.jpg
                                alt=""
                            /></span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col d-flex flex-column flex-sm-row justify-content-between mb-3"
                      >
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">
                            {{ currentUser.username }}
                          </h4>
                          <p class="mb-0">{{ currentUser.email }}</p>
                          <div class="text-muted">
                            <small>Last seen 2 hours ago</small>
                          </div>
                          <div class="mt-2">
                            <button class="btn btn-primary" type="button">
                              <i class="bi bi-camera-fill mr-2"></i>
                              <span
                                ><input
                                  type="file"
                                  class="btn- btn-primary"
                                  placeholder="changer la photo"
                              /></span>
                            </button>
                          </div>
                        </div>
                        <div class="text-center text-sm-right">
                          <span class="badge badge-secondary"
                            >Role</span
                          >
                          <div class="text-muted">
                            <small>Joined 02 juin 2022</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a href="" class="active nav-link">Settings</a>
                      </li>
                    </ul>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form" 
                action="#"
                @submit.prevent="handleUpdate">
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Noms & Prénoms</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="name"
                                      :placeholder="currentUser.username"
																			v-model="user.username"
                                    />
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Matricule</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      placeholder="xxxxxxx"
																			v-model="matricule"
																			v-validate="'required'"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Email</label>
                                    <input disabled
                                      class="form-control"
                                      type="email"
                                      :placeholder="currentUser.email"
                                    />
                                  </div>
                                </div>
                              </div>

															<div class="row">
																<div class="col mb-3">


                  <div class="form-group">
										<label for=""> ..nom </label>
                    <select
                      name="faculte"
                      class="form-control"
                      v-model="faculte"
                    >
                      <option disabled value="">Faculte...</option>
                      <option
                        v-for="faculte in facultes"
                        :key="faculte.id"
                        :nom="faculte"
                        v-bind:value="faculte.id"
                      >
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
                    <select
                      name="filiere"
                      class="form-control"
                      v-model="filiere"
                    >
                      <option disabled value="">Filiere...</option>
                      <option
                        v-for="filiere in filieres"
                        :key="filiere.id"
                        v-bind:value="filiere.id"
                      >
                        {{ filiere.nom }}
                      </option>
                    </select>
                    <i class="bi bi-chevron-down field-icon"></i>
                  </div>
                                </div>
                              </div>

															<div class="row">
																<div class="col mb-3">

                  <div class="form-group">
                    <select name="niveau" class="form-control" v-model="niveau">
                      <option disabled value="">Niveau...</option>
                      <option
                        v-for="niveau in niveaux"
                        :key="niveau.id"
                        :value="niveau.id"
                      >
                        {{ niveau.nom }}
                      </option>
                    </select>
                    <i class="bi bi-chevron-down field-icon"></i>
                  </div>
                                </div>
                              <!-- </div>

															<div class="row"> -->
																<div class="col mb-3">

                  <div class="form-group">
                    <select
                      name="specialite"
                      class="form-control"
                      v-model="specialite"
                    >
                      <option disabled value="">Specialité...</option>
                      <option
                        v-for="specialite in specialites"
                        :key="specialite.id"
                        :value="specialite.id"
                      >
                        {{ specialite.nom }}
                      </option>
                    </select>
                    <i class="bi bi-chevron-down field-icon"></i>
                  </div>
																</div>
															</div>

                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">

                                    <label>About</label>
                                    <textarea
                                      class="form-control"
                                      rows="5"
                                      placeholder="About"
                                    >
																		Shadow monarch</textarea
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12 col-sm-6 mb-3">
                              <div class="mb-2"><b>Change Password</b></div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Current Password</label>
                                    <input
                      type="password"
                      class="form-control"
                      placeholder="******"
                      v-model="user.password"
                      v-validate="'required|min:6|max:40'"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>New Password</label>
                                    <input
                      type="password"
                      class="form-control"
                      placeholder="******"
                      v-model="newPassword"
                      v-validate="'required|min:6|max:40'"
                                    />
                  
                                    
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label
                                      >Confirm
                                      <span class="d-none d-xl-inline"
                                        >Password</span
                                      ></label
                                    >
                                    <input
                      type="password"
                      class="form-control"
                      placeholder="******"
                      v-model="confirmPassword"
                      v-validate="'required|min:6|max:40'"
                                    />
                    <div
                      class="alert-danger"
                      v-if="submitted && errors.has('password')"
                    >
                      {{ errors.first("password") }}
                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button class="btn btn-primary" type="submit">
                                Enregistrer
                              </button>
                            </div>
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
//import { mapActions } from "vuex";
//import { mapState } from "vuex";
import User from "../../models/user";
export default {
  name: "profile",
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
		}
  },

	data() {
		return {
			role: "",
      username: "",
      matricule: "",
      newPassword: "",
			submitted: "",

      user: new User("", "", ""),

			confirmPassword: "",
      faculte: "",
      filiere: "",
      niveau: "",
      specialite: "",

			error: "",
			loading:"",

		}
	},
	mounted() {
		this.$store.dispatch("fetchData/getFacultes")
		this.$store.dispatch("fetchData/getFilieres")
		this.$store.dispatch("fetchData/getNiveaux")
		this.$store.dispatch("fetchData/getSpecialites")
	},
	
	methods: {
    handleUpdate() {
      this.message = "";
      this.submitted = true;
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
				
			console.log(this.faculte)
					/*
          this.$store.dispatch("auth/register", this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
              this.$router.push("/login");
            },
          (error) => {
            this.message = error.message;
            this.successful = false;
          })
					*/
        //}
      //});
    },
	},
};
</script>
<style scoped>
</style>