<template lang="">
  <div class="content mt-3">
    <div class="animated fadeIn">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <strong class="card-title">Souhaitez-vous blouer un enseignant?</strong>
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
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Créé le</th>
                      <th>Etat</th>
                      <th>bloqué?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="teacher in teachers"
                      :key="teacher.id"
                      v-bind:value="teacher.id">
                      <td>{{teacher.username}}</td>
                      <td>{{teacher.email}}</td>
                      <td>{{teacher.createdAt}}</td>
                      <td><span class="badge badge-success">{{teacher.etat}}</span></td>
                      <td>
                        <label class="switch switch-3d switch-danger mr-3">
                          <input type="checkbox" class="switch-input">
                          <span class="switch-label"></span> <span class="switch-handle"></span>
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
import { mapActions } from "vuex";
export default {
  name: "",
  props: {
    msg: String,
  },
  data() {
    return {
      teachers: "",
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
    ...mapActions([
      "getActiveTeacher",
    ]),

    //********************************** */
    fetchData() {
      this.getActiveTeacher().then((res) => {
        this.loading = false;
        this.teachers = res.data.allUser;
      });

    },
  },
  mounted() {},
};
</script>
<style scoped></style>
