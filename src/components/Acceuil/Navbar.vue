<template>
    
    <div>
    <!-- Modernizer for Portfolio -->
    <!---<script src="js/modernizer.js"></script>--->
        <header class="top-navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<img src="../../../public/static/homePage/images/logo.png" alt="" />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-host">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active"><a class="nav-link" href="/">Acceuil</a></li>
						<!-- <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li> -->
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle"  id="dropdown-a" data-toggle="dropdown">Faculté des Sciences </a>
							<div class="dropdown-menu" aria-labelledby="dropdown-a">
								<a class="dropdown-item" href="/informatiques">Informatique</a>
								<a class="dropdown-item" href="/mathematiques">Mathématiques </a>
								<a class="dropdown-item" href="/physiques">Physique</a>
                                <a class="dropdown-item" href="course-grid-4.html">Chimie</a>
                                <a class="dropdown-item" href="course-grid-4.html">Biologie</a>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" id="dropdown-a" data-toggle="dropdown">Faculté des Lettres </a>
							<div class="dropdown-menu" aria-labelledby="dropdown-a">
								<a class="dropdown-item" href="course-grid-2.html">Géographie</a>
								<a class="dropdown-item" href="course-grid-3.html">Germanistique</a>
								<a class="dropdown-item" href="course-grid-4.html">Lettres Françaises</a>
                                <a class="dropdown-item" href="course-grid-4.html">Lettres Bilingue</a>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="/enseignants">Enseignant</a></li>
						<!-- <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li> -->
						<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
                        <li><a class="hover-btn-new log orange" href="#" data-toggle="modal" data-target="#login"><span>Rechercher</span></a></li>
                    </ul>
				</div>
			</div>
		</nav>
	</header>
    </div>
</template>

<script>

export default {
    name: 'Navbar',
}
</script>

<style scoped>
    @import '../../../public/static/homePage/css/bootstrap.min.css';
    @import '../../../public/static/homePage/style.css';
    @import '../../../public/static/homePage/css/versions.css';
    @import '../../../public/static/homePage/css/responsive.css';
    @import '../../../public/static/homePage/css/custom.css';
</style>