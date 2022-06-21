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
                            <img src="assets/images/user.jpg" alt="">
                          </a>
                          <div class="user-name">
                            <h5>
                              <router-link :to="{ path: '/profile', query: { id:currentUser.id }}">{{
                                currentUser.username }}
                              </router-link>
                            </h5>
                            <span><a href="#">{{ currentUser.email }}</a></span>
                          </div>
                        </div>
                      </div>
                      <!-- Modal -->
                      <div class="col-12">
                        <div class="inbox-body text-center my-lg-4 my-2">
                          <a href="#myModal" data-toggle="modal" title="Nouveau" class="btn btn-primary">
                            <i class="fa fa-plus mr-2 pl-0"></i>Nouveau</a>
                          <div aria-hidden="true" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                            <div class="modal-dialog">
                              <div class="modal-content text-left">
                                <div class="modal-header">
                                  <button aria-hidden="true" data-dismiss="modal" class="close" type="button"><i
                                      class="ti-close"></i></button>
                                  <h4 class="modal-title">Nouveau</h4>
                                </div>
                                <div class="modal-body">
                                  <form class="form-horizontal">
                                    <div class="form-group">
                                      <label class="col-lg-2 control-label">To</label>
                                      <div class="col-lg-10">
                                        <input type="text" placeholder="" id="inputEmail1" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-lg-2 control-label">Cc / Bcc</label>
                                      <div class="col-lg-10">
                                        <input type="text" placeholder="" id="cc" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-lg-2 control-label">Subject</label>
                                      <div class="col-lg-10">
                                        <input type="text" placeholder="" id="inputPassword1" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-lg-2 control-label">Message</label>
                                      <div class="col-lg-10">
                                        <textarea rows="10" cols="30" class="form-control" id="texarea1"
                                          name="texarea"></textarea>
                                      </div>
                                    </div>

                                    <div class="form-group">
                                      <div class="col-lg-offset-2 col-lg-10">
                                        <span class="btn green fileinput-button"><i class="fa fa-plus fa fa-white"></i>
                                          <span>Attachment</span>
                                          <input type="file" name="files[]" multiple="">
                                        </span>
                                        <button class="btn btn-primary" type="submit">Send</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /.modal> -->
                      <div class="col-12">
                        <ul class=" inbox-nav inbox-divider people">
                          <li class="border-bottom inbox-nav-item p-2 mt-1" v-for="requete in requetes"
                            :key="requete.id">
                            <a href="#!" class="">
                              <div class="row">

                                <div class="col-2">
                                  <router-link :to="{ path: '/profile', query: { id:requete.UserId }}">
                                    <img src="../../assets/avatar.png" alt="avatar"
                                      class="d-flex align-self-center  rounded-circle" width="100%" height="100%">
                                  </router-link>
                                </div>
                                <div class="p-0 pl-2 m-0 col-9" @click="getMessages(requete.id);">
                                  <div>
                                    <div class="float-end">
                                      <!-- <span class="fw-bold small text-muted text-end mb-1">25 jan 
                                      </span> -->
                                      <span class="fw-bold small text-muted text-end mb-1" v-if="requete.Messages">{{
                                        requete.Messages[0].createdAt }}
                                      </span>
                                      <span class="badge rounded-pill bg-secondary ">{{
                                        requete.Messages.length}}</span>
                                    </div>
                                    <span class="fw-bold mb-0 text-start text-bold">{{ requete.User.username
                                      }}</span>
                                  </div>
                                  <!-- <p class="smalltext-muted">{{ requete.Messages[0]}}</p> -->
                                  <p class="smalltext-muted" v-if="requete.Messages">{{ requete.Messages[0].contenu }}
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
                              <input type="text" class="sr-input" placeholder="Search Mail">
                              <button class="btn sr-btn append-btn" type="button"><i class="fa fa-search"></i></button>
                            </div>
                          </form>
                          <h3 class="input-text">Requete</h3>
                          <p>
                            <a class="_blanc"
                              :href="'http://localhost:5000/api/documents/telecharger/' +$route.query.documentId">Lien
                              du PV</a>
                          </p>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="message p-5">
                          <div v-for="message in messages" :key="message.id">

                            <div class="d-flex flex-row justify-content-end" v-if="message.UserId == currentUser.id">
                              <div>
                                <p class="small p-2 me-3 mb-1 rounded-3 bg-chat">
                                  {{message.contenu}}</p>
                                <p class="small me-3 mb-3 rounded-3 text-muted">{{ message.createdAt}}
                                </p>
                              </div>
                              <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 1"
                                style="width: 45px; height: 100%;">
                            </div>

                            <div class="d-flex flex-row justify-content-start" v-else>
                              <img src="../../assets/avatar.png" alt="avatar 1" class="rounded-circle"
                                style="width: 45px; height: 100%;">
                              <div>
                                <p class="small p-2 ms-3 mb-1 rounded-3 text-white  bg-primary">
                                  {{message.contenu}}
                                </p>
                                <p class="small ms-3 mb-3 rounded-3 text-muted float-end">{{ message.createdAt}}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                          <form @submit.prevent="postMessage" class="form-inline">
                            <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 3"
                              style="width: 40px; height: 100%;">
                            <input type="text" class="form-control form-control-lg textbox" v-model="message"
                              placeholder="Type message">

                            <a class="ms-1 text-muted" href="#!"><i class="fa fa-paperclip"></i></a>
                            <a class="ms-3 text-muted" href="#!"><i class="fa fa-smile-o"></i></a>
                            <button type="submit" class="btn ms-3 send"><i class="fa fa-paper-plane"></i>
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
  props: {
    enseignantId: Number
  },
  data() {
    return {
      user: {},
      message: '',
      messages: [],
      requete: '',
      requetes: {},
      socket: io('http://localhost:5000')
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
  },
  methods: {
    getUser() {
      this.notFound = false;
      axios
        .get(
          "http://localhost:5000/api/users/user/" + this.$route.params.enseignantId
        )
        .then((res) => {
          this.user = res.data.user;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllRequetes() {
      axios
        .get(
          "http://localhost:5000/api/chat/requetes/"
        )
        .then((res) => {
          console.log("-------------------")
          console.log(res.data.requetes)
          this.requetes = res.data.requetes;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMessages(requeteId) {
      this.requete = requeteId;
      axios
        .get(
          "http://localhost:5000/api/chat/requetes/" + requeteId
        )
        .then((res) => {
          this.messages = res.data.messages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postMessage() {
      console.log(this.requete)
      let req = {
        contenu: this.message
      };
      axios
        .post(
          "http://localhost:5000/api/chat/requetes/" + this.requete, req
        )
        .then((res) => {
          console.log(res.data);
          this.message = '';
          //this.messages = res.data.messages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOrCreateRequete() {
      let req = {
        userReceiverId: this.$route.params.enseignantId,
        documentId: this.$route.query.documentId
      };
      console.log('****************************')
      axios
        .post(
          "http://localhost:5000/api/chat/requetes/create", req
        )
        .then((res) => {
          console.log(res.data.requetes)
          //this.requetes = res.data.requete;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit('SEND_MESSAGE', {
        user: this.$route.params.enseignantId,
        message: this.message
      });
      this.message = ''
    }
  },
  mounted () {
    this.getUser();
    this.getAllRequetes();
    this.socket.on('NEW_MESSAGE', (data) => {
      console.log("++++++++++++++++++++++++++++@@@@@@@@@@@@@@@@@@@@@@@")
      this.messages = [...this.messages, data];
      console.log(this.messages)
    });

  }
     
}
</script>
<style scoped>
/********style pour la zone de saisie******/
.textbox {

  /* border: medium none; */
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
  margin-top: -.75rem;
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
ul.inbox-nav li.active a, ul.inbox-nav li a:hover{
  background-color: #fde9bffd;
  color: #6a6a6a;
}
.bg-primary {
  background-color: #eea412!important;
}
.bg-chat {
  background-color: #f5f6f7;
}
ul.inbox-nav li a {
  color: #6a6a6a;
  display: inline-block;
  line-height: 45px;
  /* padding: 0 20px; */
  width: 100%;
  font-family: 'Roboto', sans-serif;
}
/* ul.inbox-nav li {
  background-color: #eea412 !important;
  border-color: #eea412 !important;
  color: #fff !important;
} */


/**inbox */
.inbox-head {
  /* background: #eef5f9; */
  /* background: #fff; */
  background: #fde9bffd;
  border-radius: 4px 4px 0 0;
  color: #373757;
  min-height: 100%;
  padding: 20px;
}
.inbox-head h3 {
  display: inline-block;
  font-weight: 300;
  margin: 0;
  /* padding-top: 6px; */
}

.inbox-head .sr-input {
  /* border: medium none; */
  border-radius: 4px 0 0 4px;
  box-shadow: none;
  color: #8a8a8a;
  background-color: #fff;
  border: 1px solid #eea412;
  float: left;
  height: 40px;
  /* padding: 0 10px; */
}
.inbox-head .sr-btn {
  background: #eea412;
  border: medium none;
  border-radius: 0 4px 4px 0;
  color: #373757;
  height: 40px;
  /* padding: 0 20px; */
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
  /* padding: 5px 10px; */
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
  border-radius: 4px 0 0 4px;
  /* width: 25%; */
}

.sm-side .user-head {
  background: #fff;
  border-radius: 4px 0 0;
  color: #373757;
  min-height: 80px;
  /* padding: 10px; */
}

.inbox-body {
  /* padding: 20px 0px; */
}
.fw-bold {
  color: #eea412 !important;
}
.send:hover {
  background-color: #eea412 !important;
  color: #fff !important;
}
</style>