<template>
	<div>

		<Transition name="modal">
			<div v-if="show" class="modal-mask">

				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">

							<h5 class="modal-title">Envoyer une notification</h5>
							<button type="button" class="close" @click="$emit('close')" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">

							<div class="card">
								<div class="card-body card-block">

									<!-- .if success -->
									<div class="row" v-if="successful">
										<div class="alert alert-success" role="alert">
											Vous envoyez la notification!
										</div>
									</div>

									<form method="post" class="form-horizontal">


										<div class="row form-group">
											<div class="col col-md-3"><label for="select" class=" form-control-label">Selectionner une
													filiere (toutes par défaut)</label></div>
											<div class="col-12 col-md-9">
												<select name="filiere" class="form-control textbox" v-model="filiereId">
													<option disabled value="">Filiere</option>
													<option v-for="filiere in filieres" :key="filiere.id" v-bind:value="filiere.id">
														{{ filiere.nom }}
													</option>
													<i class="bi bi-chevron-down"></i>
												</select>
											</div>
										</div>

										<div class="row form-group">
											<div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Notification</label>
											</div>
											<div class="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows="6"
													placeholder="Content..." class="form-control textbox" v-model="notification"></textarea></div>
										</div>
									</form>

								</div>
							</div>



							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" @click="$emit('close')">
									<i class="fa fa-ban mr-2 pl-0"></i>Annuler
								</button>
								<button type="submit" class="btn btn-primary" @click="sendNotification">
									<span class=" spinner-border spinner-border-sm mr-1" v-show="loading"></span>
									<i class="fa fa-dot-circle-o  mr-2 pl-0"></i>Confirmer
								</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script>
import axios from "axios";
export default {
	props: {
		show: Boolean,
	},
	computed: {
		filieres() {
			return this.$store.state.fetchData.filieres;
		},
	},
	data() {
		return {
			filiereId: "",
			notification: "",
			loading: false,
			successful: false,
		}
	},
	mounted() {
		this.$store.dispatch("fetchData/getFilieres");
	},
	methods: {

		sendNotification() {
			if (this.notification) {
			this.loading = true;
			let req = {
				FiliereId: this.filiereId,
				contenu: this.notification
			};
			console.log(req);
			axios
				.post(
					"http://localhost:5000/api/notifications/", req
				)
				.then((res) => {
					this.loading = false;
					console.log(res.data);
					if (res.data.success) {
						this.successful = true;
					}
				})
				.catch((err) => {
					console.log(err);
				});
			} else {
				console.log("rien")
			}
		},
	},
	
}
</script>

<style>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.077);
	display: table;
	transition: opacity 0.3s ease;
}
/********style pour la zone de saisie******/
.card {
	box-shadow: none;
}
.textbox {
	border: 1px solid#fde9bffd !important;
}


</style>