<template>
	<div>

		<Transition name="modal">
			<div v-if="show" class="modal-mask">

				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">

							<h5 class="modal-title">Signaler un document</h5>
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
											Vous avez signalé ce document!
										</div>
									</div>

									<form method="post" class="form-horizontal">


										<div class="row form-group" v-if="!other">
											<div class="col col-md-3"><label for="select" class=" form-control-label">Selectionner une
													raison</label></div>
											<div class="col-12 col-md-9">
												<select name="raison" class="form-control textbox" v-model="raisonId">
													<option disabled value="">Raison</option>
													<option v-for="raison in raisons" :key="raison.id" v-bind:value="raison.id">
														{{ raison.description }}
													</option>
													<i class="bi bi-chevron-down"></i>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="float-end">
												<span @click="other = !other"
													class="fw-bold small text-end text-white mb-1 bg-secondary">Autre</span>
											</div>
										</div>

										<div class="row form-group" v-if="other">
											<div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Autre
													raison</label>
											</div>
											<div class="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows="6"
													placeholder="Content..." class="form-control textbox" v-model="description"></textarea></div>
										</div>
									</form>

								</div>
							</div>



							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" @click="$emit('close')">
									<i class="fa fa-ban mr-2 pl-0"></i>Annuler
								</button>
								<button type="submit" class="btn btn-primary" @click="postSignalement">
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
		document: Number
	},
	data() {
		return {
			description: "",
			raisonId: "",
			loading: false,
			other: false,
			successful: false,
			raisons: {}
		}
	},
	mounted() {
		this.getRaisons()
	},
	methods: {

		//toutes les raisons
		async getRaisons() {
			let res = await axios.get("http://localhost:5000/api/raisons/raisons");
			console.log(res.data)
			this.raisons = res.data.raisons
		},
		postSignalement() {
			if (this.description  || this.raisonId) {
			this.loading = true;
			let req = {
				description: this.description,
				RaisonId: this.raisonId,
				DocumentId: this.document
			};
			console.log(req);
			axios
				.post(
					"http://localhost:5000/api/signalements/", req
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