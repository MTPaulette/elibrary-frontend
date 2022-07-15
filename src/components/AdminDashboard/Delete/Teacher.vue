<template>
  <div class="content mt-3">
    <div class="animated fadeIn">

      <div class="row">
        <div class="section-title ml-5">
          <h2>Enseignant</h2>
          <p>Suppression d'enseignant</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <strong class="card-title">ENSEIGNANTS SUPPRIMES</strong>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="" id="">
                    <!-- <div class="dataTables_length" id="row-select_length"> -->
                    <label>Show
                      <select name="row-select_length" aria-controls="row-select" class="form-control input-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries</label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div id="" class="">
                    <!-- <div id="row-select_filter" class="dataTables_filter"> -->
                    <label>Search:<input type="search" class="form-control input-sm" placeholder=""
                        aria-controls="row-select" /></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Créé le</th>
                      <th>Etat</th>
                      <th>bloqué?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="teacher in teachers" :key="teacher.id" v-bind:value="teacher.id">
                      <td>{{ teacher.username }}</td>
                      <td>{{ teacher.email }}</td>
                      <td>{{ teacher.createdAt }}</td>
                      <td>
                        <span class="badge badge-danger">{{
                          teacher.etat
                          }}</span>
                      </td>
                      <td>
                        <label class="switch switch-3d switch-success mr-3">
                          <input type="checkbox" class="switch-input" @click="blockTeacher(teacher.id)" />
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
      teachers: "",
      checkValue: false,
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
      axios
        .get("http://localhost:5000/api/users/TousEnseignantsSupprimes")
        .then((res) => {
          console.log(res.data.allUser);
          this.teachers = res.data.allUser;

          if (!res.data.success) {
            console.log("fin  de backend");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    blockTeacher(teacherId) {
      //if(this.checkValue) {
      axios
        .get("http://localhost:5000/api/users/debloquerUser/" + teacherId)
        .then((res) => {
          // axios.get("http://localhost:5000/api/users/etudiantBloque/"+teacherId).then((res) => {
          console.log("-------------------------");
          console.log(teacherId);
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
    },
  },
  mounted() {},
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
