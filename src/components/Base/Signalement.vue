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
									<form action="" method="post" enctype="multipart/form-data" class="form-horizontal">


										<div class="row form-group">
											<div class="col col-md-3"><label for="select" class=" form-control-label">Selectionner une
													raison</label></div>
											<div class="col-12 col-md-9">
												<select name="raison" class="form-control textbox" v-model="raison">
													<option disabled value="">Raison</option>
													<option v-for="raison in raisons" :key="raison.id" v-bind:value="raison.description">
														{{ raison.description }}
													</option>
													<i class="bi bi-chevron-down"></i>
												</select>
											</div>
										</div>

										<div class="row form-group">
											<div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Autre</label>
											</div>
											<div class="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows="6"
													placeholder="Content..." class="form-control textbox"></textarea></div>
										</div>
									</form>
								</div>
							</div>




							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" @click="$emit('close')">
									<i class="fa fa-ban mr-2 pl-0"></i>Annuler
								</button>
								<button type="submit" class="btn btn-primary">
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
	computed: {

		//toutes les raisons
		// raisonsss() {
		// 	let res = axios.get("http://localhost:5000/api/raisons/raisons");
		// 	console.log(res)
		// 	return res.data.raisons
		// },
	},
	data() {
		return {
			raison: "",
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