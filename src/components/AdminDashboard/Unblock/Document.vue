<template lang="">
  <div class="content mt-3">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <strong class="card-title">DOCUMENTS ACTIFS</strong>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="" id="">
                    <!-- <div class="dataTables_length" id="row-select_length"> -->
                    <label
                      >Show
                      <select
                        name="row-select_length"
                        aria-controls="row-select"
                        class="form-control input-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries</label
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div id="" class="">
                    <!-- <div id="row-select_filter" class="dataTables_filter"> -->
                    <label
                      >Search:<input
                        type="search"
                        class="form-control input-sm"
                        placeholder=""
                        aria-controls="row-select"
                    /></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <table
                  id="bootstrap-data-table-export"
                  class="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Titre</th>
                      <th>Contenu</th>
                      <th>Resume</th>
                      <th>Auteur</th>
                      <th>Créé le</th>
                      <th>Etat</th>
                      <th>Activé?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="document in documents"
                      :key="document.id"
                      v-bind:value="document.id">
                      <td>{{document.titre}}</td>
                      <td><a :href="'http://localhost:5000/api/documents/telecharger/'+ document.id">{{document.contenu}}</a></td>
                      <td>{{document.resume}}</td>
                      <td>{{document.auteur}}</td>

                      <td>{{document.createdAt}}</td>
                      <td><span class="badge badge-danger">{{document.etat}}</span></td>
                      <td>
                        <label class="switch switch-3d switch-success mr-3">
                          <input type="checkbox" class="switch-input"  @click="unblockDocument(document.id)">
                          <span class="switch-label" value="1"></span>
                          <span class="switch-handle" value="2"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .animated -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      documents: "",
      checkValue: false
    };
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },

  methods: {

    //********************************** */
    fetchData() {
        axios.get("http://localhost:5000/api/documents/TousDocumentsBloques").then((res) => {
          console.log(res.data.allDocument);
          this.documents = res.data.allDocument;

          if (!res.data.success) {
            console.log("fin  de backend");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    unblockDocument(documentId) {
      //if(this.checkValue) {
        axios.get("http://localhost:5000/api/documents/debloquerDocument/"+documentId).then((res) => {
        // axios.get("http://localhost:5000/api/documents/etudiantBloque/"+documentId).then((res) => {
          console.log("-------------------------");
          console.log(documentId);
          console.log(res.data.msg);
          //this.checkValue = true;

          if (!res.data.success) {
            console.log("fin  de backend");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //}
    }
  },
  mounted() {},
};
</script>
<style scoped></style>
