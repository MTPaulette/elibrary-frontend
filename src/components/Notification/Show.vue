<template>
  <div>
    <div class="container-fluid mt-5">
      <div class="animated">
        <div class="row">
          <div class="section-title ml-5">
            <h2>Notification</h2>
            <p>Toutes les notifications</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <table
                    id="bootstrap-data-table-export"
                    class="table table-striped"
                  >
                    <tbody>
                      <tr
                        class=""
                        v-for="notification in notifications"
                        :key="notification.id"
                      >
                        <td class="text-center">
                          <input type="checkbox" class="mail-checkbox" />
                        </td>
                        <td class="text-center"><i class="fa fa-star"></i></td>
                        <td>{{ notification.contenu }}</td>
                        <td v-if="notification.FiliereId">
                          {{ notification.Filiere.nom }}
                        </td>
                        <td v-else>Toutes les filières</td>
                        <!-- <td class="text-center">
                          <router-link :to="{ path: '/profile', query: { id:notification.UserId }}">{{
                            notification.User.username }}
                          </router-link>
                        </td> -->
                        <td class="text-right">{{ notification.createdAt }}</td>
                      </tr>

                      <!-- <tr class="">
                        <td class="inbox-small-cells">
                          <input type="checkbox" class="mail-checkbox">
                        </td>
                        <td class="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                        <td class="view-message dont-show">Freelancer.com <span
                            class="badge badge-danger pull-right m-t-6">urgent</span>
                        </td>
                        <td class="view-message">Stop wasting your visitors
                        </td>
                        <td class="view-message inbox-small-cells">kkk</td>
                        <td class="view-message text-right">May 23</td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      notifications: {},
    };
  },
  mounted() {
    this.getNotifications();
  },
  methods: {
    async getNotifications() {
      await axios
        .get("http://localhost:5000/api/notifications/notifications")
        .then((res) => {
          console.log(res.data);
          this.notifications = res.data.notifications;
          // this.loading = false;
          // if (res.data.success) {
          // 	this.successful = true;
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
/*** le grand titre ***/
.section-title h2,
.section-title h4 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #100f0f;
  /* color: #aaaaaa; */
  font-family: "Poppins", sans-serif;
}

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
.text-primary {
  color: #eea412 !important;
}
.table {
  margin-bottom: 0;
}
.table-inbox {
  border: 1px solid #e7e7e7;
  margin-bottom: 0;
}
.table-inbox tr.unread td {
  background: #eef5f9;
  margin: 250px !important;
  padding: 500px !important;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  line-height: 32px;
  vertical-align: top;
}
.table-inbox > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  border-top: 1px solid #e7e7e7;
  line-height: 1.42857;
  padding: 8px;
  vertical-align: top;
}
.table-inbox tr td {
  padding: 12px !important;
}

tbody tr td {
  font-family: "Roboto", sans-serif;
  color: #868e96;
}
</style>
