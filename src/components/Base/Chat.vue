<template>
  <div class="content-wrap">
    <div class="main">
      <div class="container-fluid">
        <!-- /# row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="card my-5" style="background: transparent">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-lg-5 col-xl-4 mb-0 mb-md-0 m-0 p-0">
                    <aside class="sm-side row py-0 m-0">
                      <div class="col-12">
                        <div class="user-head">
                          <a class="inbox-avatar" href="javascript:;">
                            <img src="assets/images/user.jpg" alt="" />
                          </a>
                          <div class="user-name">
                            <h5>
                              <router-link :to="{
                                  path: '/profile',
                                  query: { id: currentUser.id },
                                }">{{ currentUser.username }}
                              </router-link>
                            </h5>
                            <span><a href="#">{{ currentUser.email }}</a></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <ul class="inbox-nav inbox-divider people">
                          <li class="border-bottom inbox-nav-item p-2 mt-1" v-for="requete in requetes"
                            :key="requete.id">
                            <a href="#!" class="">
                              <div class="row">
                                <div class="col-2" v-if="
                                    requete.UserReceiverId != currentUser.id
                                  ">
                                  <router-link :to="{
                                      path: '/profile',
                                      query: { id: requete.UserReceiverId },
                                    }">
                                    <img src="../../assets/avatar.png" alt="avatar"
                                      class="d-flex align-self-center rounded-circle" width="100%" height="100%" />
                                  </router-link>
                                </div>

                                <div class="col-2" v-else>
                                  <router-link :to="{
                                      path: '/profile',
                                      query: { id: requete.UserSenderId },
                                    }">
                                    <img src="../../assets/avatar.png" alt="avatar"
                                      class="d-flex align-self-center rounded-circle" width="100%" height="100%" />
                                  </router-link>
                                </div>

                                <div class="p-0 pl-2 m-0 col-9" @click="getMessages(requete.id)">
                                  <div>
                                    <div class="float-end">
                                      <span class="fw-bold small text-muted text-end mb-1"
                                        v-if="requete.Messages.length > 0">{{ requete.Messages[0].createdAt }}
                                      </span>
                                      <span class="fw-bold small text-muted text-end mb-1" v-else>{{ requete.updatedAt
                                        }}</span>
                                      <span class="badge rounded-pill bg-secondary">{{ requete.Messages.length }}</span>
                                    </div>
                                    <span class="fw-bold mb-0 text-start text-bold" v-if="
                                        requete.UserReceiverId != currentUser.id
                                      ">{{ requete.UserReceiver.username }}</span>
                                    <span class="fw-bold mb-0 text-start text-bold" v-else>{{
                                      requete.UserSender.username }}</span>
                                  </div>
                                  <p class="smalltext-muted" v-if="requete.Messages.length > 0">
                                    {{ requete.Messages[0].contenu }}
                                  </p>
                                  <p class="fw-light fst-italic" v-else>
                                    Aucun message
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>

                  <div class="col-md-6 col-lg-7 col-xl-8">
                    <aside class="lg-side row">
                      <div class="col-12">
                        <div class="inbox-head">
                          <form action="#" class="pull-right position">
                            <div class="input-append inner-append">
                              <input type="text" class="sr-input" placeholder="Search Mail" />
                              <button class="btn sr-btn append-btn" type="button">
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                          </form>
                          <h3 class="input-text text-white">Requete</h3>
                          <p v-if="requetes[requete]">
                            <a class="_blanc" :href="
                                'http://localhost:5000/api/documents/telecharger/' +
                                requetes[requete].Document.id
                              ">{{ requetes[requete].Document.titre }}</a>
                          </p>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="message p-5 bg-white">
                          <div class="d-flex flex-row justify-content-center my-auto"
                            v-if="requete && messages.length <= 0">
                            <div class="w-75">
                              <!-- <p class="small p-2 ms-3 mb-1 rounded-3 text-dark fw-light fst-italic fs-3 text-center bg-transparent"> -->
                              <p
                                class="small p-2 ms-3 mb-1 rounded-3 text-white fw-light fst-italic text-center bg-secondary">
                                Aucun message
                              </p>
                            </div>
                          </div>

                          <div v-else v-for="message in messages" :key="message.id">
                            <div class="d-flex flex-row justify-content-end" v-if="message.UserId == currentUser.id">
                              <div>
                                <p class="small p-2 me-3 mb-1 rounded-3 bg-chat">
                                  {{ message.contenu }}
                                </p>
                                <p class="small me-3 mb-3 rounded-3 text-muted">
                                  {{ message.createdAt }}
                                </p>
                              </div>
                              <img src="../../assets/avatar2.jpg" class="rounded-circle" alt="avatar 1"
                                style="width: 45px; height: 100%" />
                            </div>

                            <div class="d-flex flex-row justify-content-start" v-else>
                              <img src="../../assets/avatar.png" alt="avatar 1" class="rounded-circle"
                                style="width: 45px; height: 100%" />
                              <div>
                                <p class="small p-2 ms-3 mb-1 rounded-3 text-white bg-primary">
                                  {{ message.contenu }}
                                </p>
                                <p class="small ms-3 mb-3 rounded-3 text-muted float-end">
                                  {{ message.createdAt }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2"
                          v-if="requete">
                          <form @submit.prevent="postMessage" class="form-inline">
                            <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 3"
                              style="width: 40px; height: 100%" />
                            <input type="text" class="form-control form-control-lg textbox" v-model="message"
                              placeholder="Type message" />

                            <a class="ms-1 text-muted" href="#!"><i class="fa fa-paperclip"></i></a>
                            <a class="ms-3 text-muted" href="#!"><i class="fa fa-smile-o"></i></a>
                            <button type="submit" class="btn ms-3 send">
                              <i class="fa fa-paper-plane"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </aside>
                  </div>
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
import io from "socket.io-client";
export default {
  data() {
    return {
      user: {},
      message: "",
      messages: [],
      requete: "",
      requetes: {},
      socket: io("http://localhost:5000"),
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
  },
  methods: {
    getAllRequetes() {
      axios
        .get("http://localhost:5000/api/chat/requetes/")
        .then((res) => {
          console.log("-------------------");
          console.log(res.data.requetes);
          this.requetes = res.data.requetes;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMessages(requeteId) {
      this.requete = requeteId;
      this.socket.emit("SELECTED_REQUETE", requeteId);
      axios
        .get("http://localhost:5000/api/chat/requetes/" + requeteId)
        .then((res) => {
          this.messages = res.data.messages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postMessage() {
      console.log(this.requete);
      let req = {
        contenu: this.message,
      };
      axios
        .post("http://localhost:5000/api/chat/requetes/" + this.requete, req)
        .then((res) => {
          console.log(res.data);
          this.message = "";
          //this.messages = res.data.messages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getAllRequetes();
    console.log(this.requete);

    this.socket.on("NEW_MESSAGE", (data) => {
      this.messages = [...this.messages, data];
      console.log(this.messages);
    });
  },
};
</script>
<style scoped>
/********style pour la zone de saisie******/
.textbox {
  border-radius: 4px 0 0 4px;
  border-color: #eea412 !important;
  color: #8a8a8a;
  border: 1px solid#fde9bffd;
  float: left;
  height: 40px;
  padding: 0 10px;
}
/***style pour la messagerie***/
.message,
.people {
  overflow: scroll;
  position: relative;
  height: 60vh;
}
.inbox-nav-item {
  overflow: hidden;
}
.badge-dot {
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-left: 2.9rem;
  margin-top: -0.75rem;
}
/*********** */

.inbox-divider {
  border-bottom: 1px solid #e7e7e7;
  max-height: 60vh;
}

ul.inbox-nav li {
  display: inline-block;
  line-height: 45px;
  width: 100%;
}
.active {
background-color: #4c5a7d;
}
ul.inbox-nav li:hover {
background-color: #4c5a7d;
}
ul.inbox-nav li.active a,
ul.inbox-nav li a:hover {
  /* background-color: #f5f6f7; */
  /* background-color: #fde9bffd; */
  color: #6a6a6a;
}
.bg-primary {
  background-color: #eea412 !important;
}
.bg-chat {
  background-color: #4c5a7d;
  color: #fff;
  /* color: #cdcdcf; */
  /* background-color: #f5f6f7; */
}
ul.inbox-nav li a {
  color: #6a6a6a;
  display: inline-block;
  line-height: 45px;
  width: 100%;
  font-family: "Roboto", sans-serif;
}


/**inbox */
.inbox-head {
  background: #4c5a7d;
  color: #cdcdcf;

  /* background: #fff;
  color: #373757; */
  border-radius: 4px 4px 0 0;
  min-height: 100%;
  padding: 20px;
}
.inbox-head h3 {
  display: inline-block;
  font-weight: 300;
  margin: 0;
}

.inbox-head .sr-input {
  border-radius: 4px 0 0 4px;
  box-shadow: none;
  color: #8a8a8a;
  background-color: #fff;
  border: 1px solid #eea412;
  float: left;
  height: 40px;
}
.inbox-head .sr-btn {
  background: #eea412;
  border: medium none;
  border-radius: 0 4px 4px 0;
  color: #373757;
  height: 40px;
}
ul.inbox-nav li a i {
  color: #6a6a6a;
  font-size: 16px;
  padding-right: 10px;
}
.m-t-12 {
  margin-top: 12px !important;
}
.badge {
  font-weight: 400;
  border-radius: 4px;
}
/**list des conservations affichage petit ecran */
ul.inbox-nav {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
}

.sm-side {
  background: #fff;
  /* background: #4c5a7d; */
  border-radius: 4px 0 0 4px;
}

.sm-side .user-head {
  background: #fff;
  /* background: #4c5a7d; */
  border-radius: 4px 0 0;
  color: #373757;
  min-height: 80px;
}

.fw-bold {
  color: #eea412 !important;
}
.send:hover {
  background-color: #eea412 !important;
  color: #fff !important;
}
</style>
