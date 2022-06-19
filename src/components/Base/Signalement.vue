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
											<div class="col col-md-3"><label for="select" class=" form-control-label">Choisir un problème</label></div>
											<div class="col-12 col-md-9">
												<select name="select" id="select" class="form-control">
													<option value="0">Please select</option>
													<option value="1">Option #1</option>
													<option value="2">Option #2</option>
													<option value="3">Option #3</option>
												</select>
											</div>
										</div>

										<div class="row form-group">
											<div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Autre</label>
											</div>
											<div class="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows="6"
													placeholder="Content..." class="form-control"></textarea></div>
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
export default {
	props: {
		show: Boolean,
		document: Number
	}
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


/* .modal-content {
	width: 300px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
} */


</style>