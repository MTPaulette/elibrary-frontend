<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide bs-slider box-slider" data-ride="carousel" data-pause="hover" data-interval="false" >
		<!-- Indicators 
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleControls" data-slide-to="1"></li>
			<li data-target="#carouselExampleControls" data-slide-to="2"></li>
		</ol>-->
		<div class="carousel-inner" role="listbox">
			<div class="carousel-item active">
				<div id="home" class="first-section" >
					<div class="dtab">
						<div class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 text-right">
									<div class="big-tagline">
										<h2><strong>E-Library </strong>Université de Yaoundé 1</h2>
										<p class="lead">Ici vous pouvez trouvez tous les livres, documents et supports de cours pour votre épanouissement intellectuel </p>
											<!-- <a href="/login" class="hover-btn-new"><span>Se connecter</span></a>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<a href="#" class="hover-btn-new"><span>S'authentifier</span></a> -->
									</div>
								</div>
							</div><!-- end row -->            
						</div><!-- end container -->
					</div>
				</div><!-- end section -->
			</div>
		</div>
	</div>
	
    </div>
</template>

<script>
//import Login from "@/components/Authentification/Login.vue";
export default {
    name: 'Caroussel',
    components: {
        // 'login':Login
    }
}
</script>

<style scoped>
@import '../../../public/static/homePage/css/bootstrap.min.css';
    @import '../../../public/static/homePage/style.css';
    @import '../../../public/static/homePage/css/versions.css';
    @import '../../../public/static/homePage/css/responsive.css';
    @import '../../../public/static/homePage/css/custom.css'; 
</style>