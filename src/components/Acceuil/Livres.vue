<template>
  <div>
    <div id="fh5co-course">
      <div class="container">
        <div class="row animate-box">
          <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
            <h2>Découvrez quelques ouvrages</h2>
            <p>Disponibles pour vous 7J/7, 24h/24</p>
          </div>
        </div>
        <div class="row">
          <!--div v-for="livre in livres" :key="livre.id" v-bind:value="livre.id">
				</div-->
          <div
            class="col-4 animate-box"
            v-for="livre in livres"
            :key="livre.id"
            v-bind:value="livre.id"
          >
            <div class="course">
              <a href="#" class="course-img"> </a>
              <div class="desc">
                <h3>
                  <a href="#"
                    >Titre: {{ livre.titre }} &amp; Auteur:
                    {{ livre.auteur }}</a
                  >
                </h3>
                <p>Description du livre: {{ livre.resume }}</p>
                <span
                  ><a href="#" class="btn btn-primary btn-sm btn-course">{{
                    livre.nbTelechargement
                  }}</a></span
                >
                <span
                  ><a
                    class="btn btn-primary btn-sm btn-course"
                    :href="
                      'http://localhost:5000/api/documents/telecharger/' +
                      livre.id
                    "
                    >Télécharger</a
                  ></span
                >
                <span
                  ><a href="#" class="btn btn-primary btn-sm btn-course"
                    >Signaler</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Livres",
  data() {
    return {
      //************dynamic loading of filiere*******/
      loading: false,
      error: null,

      livres: null,
    };
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getDocuments();
      },
      { immediate: true }
    );
  },

  methods: {
    ...mapActions(["getDocumentsActifs"]),

    //********************************** */
    getDocuments() {
      this.getDocumentsActifs().then((res) => {
        this.livres = res.data.allDocument;
        console.log(this.livres);
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
@import "../../../public/static/homePage2/css/animate.css";
@import "../../../public/static/homePage2/css/magnific-popup.css";
@import "../../../public/static/homePage2/css/flexslider.css";
@import "../../../public/static/homePage2/css/style.css";
.course-img {
  background-image: url("../../../public/static/homePage2/images/project-1.jpg");
}
</style>
