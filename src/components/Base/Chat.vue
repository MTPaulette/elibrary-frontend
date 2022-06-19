<template>



  <div class="content-wrap">
    <div class="main">
      <div class="container-fluid">
        <!-- /# row -->
        <div class="main-content">
          <div class="row">
            <div class="col-lg-12">
              <div class="card my-5" style="background: transparent">
                <div class="card-body">
                  <div class="compose-email">
                    <div class="mail-box">
                      <div class="row">
                        <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                          <aside class="sm-side m-5">

                            <div class="user-head">
                              <a class="inbox-avatar" href="javascript:;">
                                <img src="assets/images/user.jpg" alt="">
                              </a>
                              <div class="user-name">
                                <h5><a href="#">john doe document:{{ $route.query.documentId}} enseignant: {{ $route.params.enseignantId}}</a></h5>
                                <span><a href="#">example@gmail.com</a></span>
                              </div>
                            </div>
                            <!-- Modal -->
                            <div class="inbox-body text-center">
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
                                            <span class="btn green fileinput-button"><i
                                                class="fa fa-plus fa fa-white"></i>
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
                            <!-- /.modal -->
                            <ul class=" inbox-nav inbox-divider people">

                              <li class="p-2 border-bottom active">
                                <a href="#!" class="d-flex justify-content-between">
                                  <div class="d-flex flex-row">
                                    <div> <img src="../../assets/avatar.png" alt="avatar"
                                        class="d-flex align-self-center me-3 rounded-circle" width="60">
                                      <span class="badge bg-warning badge-dot"></span>
                                    </div>
                                    <div class="pt-1">
                                      <p class="fw-bold mb-0">Alexa Chung</p>
                                      <p class="small text-muted">Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div class="pt-1">
                                    <p class="small text-muted mb-1">5 mins ago</p>
                                    <span class="badge bg-danger rounded-pill float-end">2</span>
                                  </div>
                                </a>
                              </li>

                              <li class="p-2 border-bottom">
                                <a href="#!" class="d-flex justify-content-between">
                                  <div class="d-flex flex-row">
                                    <div> <img src="../../assets/avatar.png" alt="avatar"
                                        class="d-flex align-self-center me-3" width="60">
                                      <span class="badge bg-warning badge-dot"></span>
                                    </div>
                                    <div class="pt-1">
                                      <p class="fw-bold mb-0">Alexa Chung</p>
                                      <p class="small text-muted">Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div class="pt-1">
                                    <p class="small text-muted mb-1">5 mins ago</p>
                                    <span class="badge bg-success rounded-pill float-end">2</span>
                                  </div>
                                </a>
                              </li>

                              <li class="p-2 border-bottom">
                                <a href="#!" class="d-flex justify-content-between">
                                  <div class="d-flex flex-row">
                                    <div> <img src="../../assets/avatar.png" alt="avatar"
                                        class="d-flex align-self-center me-3" width="60">
                                      <span class="badge bg-warning badge-dot"></span>
                                    </div>
                                    <div class="pt-1">
                                      <p class="fw-bold mb-0">Alexa Chung</p>
                                      <p class="small text-muted">Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div class="pt-1">
                                    <p class="small text-muted mb-1">5 mins ago</p>
                                    <span class="badge bg-success rounded-pill float-end">2</span>
                                  </div>
                                </a>
                              </li>

                              <!-- <li class="breadcrumb-item active">
                                <a href="#"><i class="fa fa-inbox"></i> Inbox <span
                                    class="badge badge-success pull-right m-t-12">2</span></a>
                              </li>
                              <li>
                                <a href="#"><i class="fa fa-envelope-o"></i> Sent Mail</a>
                              </li>
                              <li>
                                <a href="#"><i class="fa fa-bookmark-o"></i> Important</a>
                              </li>
                              <li>
                                <a href="#"><i class=" fa fa-external-link"></i> Drafts <span
                                    class="badge badge-info pull-right m-t-12">30</span></a>
                              </li>
                              <li>
                                <a href="#"><i class=" fa fa-trash-o"></i> Trash</a>
                              </li> -->
                            </ul>


                            <!-- <div class="inbox-body text-center">
                              <div class="btn-group">
                                <a class="btn btn-primary" href="javascript:;">
                                  <i class="fa fa-plus mr-2 pl-0"></i>Nouveau
                                </a>
                              </div>
                            </div> -->


                          </aside>
                        </div>

                        <div class="col-md-6 col-lg-7 col-xl-8">
                          <aside class="lg-side">
                            <div class="inbox-head">
                              <h3 class="input-text">Inbox</h3>
                              <form action="#" class="pull-right position">
                                <div class="input-append inner-append">
                                  <input type="text" class="sr-input" placeholder="Search Mail">
                                  <button class="btn sr-btn append-btn" type="button"><i
                                      class="fa fa-search"></i></button>
                                </div>
                              </form>
                            </div>

                            <div class="message p-5">

                              <div class="d-flex flex-row justify-content-start">
                                <img src="../../assets/avatar.png" alt="avatar 1" class="rounded-circle"
                                  style="width: 45px; height: 100%;">
                                <div>
                                  <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Lorem
                                    ipsum
                                    dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore
                                    magna aliqua.</p>
                                  <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM |
                                    Aug 13</p>
                                </div>
                              </div>

                              <div class="d-flex flex-row justify-content-end">
                                <div>
                                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut
                                    enim ad minim veniam,
                                    quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</p>
                                  <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13
                                  </p>
                                </div>
                                <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 1"
                                  style="width: 45px; height: 100%;">
                              </div>

                              <div class="d-flex flex-row justify-content-start">
                                <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 1"
                                  style="width: 45px; height: 100%;">
                                <div>
                                  <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Duis aute
                                    irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                  </p>
                                  <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM |
                                    Aug 13</p>
                                </div>
                              </div>

                              <div class="d-flex flex-row justify-content-end">
                                <div>
                                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                    Excepteur sint occaecat
                                    cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.</p>
                                  <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13
                                  </p>
                                </div> <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 1"
                                  style="width: 45px; height: 100%;">
                              </div>

                              <div class="d-flex flex-row justify-content-start"> <img src="../../assets/avatar.png"
                                  class="rounded-circle" alt="avatar 1" style="width: 45px; height: 100%;">
                                <div>
                                  <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Sed ut
                                    perspiciatis
                                    unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam
                                    rem
                                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae
                                    dicta
                                    sunt explicabo.</p>
                                  <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM |
                                    Aug 13</p>
                                </div>
                              </div>

                              <div class="d-flex flex-row justify-content-end">
                                <div>
                                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Nemo
                                    enim ipsam
                                    voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos
                                    qui
                                    ratione voluptatem sequi nesciunt.</p>
                                  <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13
                                  </p>
                                </div> <img src="../../assets/avatar.png" alt="avatar 1"
                                  style="width: 45px; height: 100%;">
                              </div>

                              <div class="d-flex flex-row justify-content-start"> <img src="../../assets/avatar.png"
                                  alt="avatar 1" style="width: 45px; height: 100%;">
                                <div>
                                  <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Neque
                                    porro
                                    quisquam
                                    est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non
                                    numquam
                                    eius modi tempora incidunt ut labore et dolore magnam aliquam
                                    quaerat voluptatem.</p>
                                  <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM |
                                    Aug 13</p>
                                </div>
                              </div>

                              <div class="d-flex flex-row justify-content-end">
                                <div>
                                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut
                                    enim ad minima veniam,
                                    quis
                                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                    ut aliquid ex ea
                                    commodi
                                    consequatur?</p>
                                  <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13
                                  </p>
                                </div> <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 1"
                                  style="width: 45px; height: 100%;">
                              </div>

                            </div>

                            <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                              <img src="../../assets/avatar.png" class="rounded-circle" alt="avatar 3"
                                style="width: 40px; height: 100%;">
                              <input type="text" class="form-control form-control-lg textbox" id="exampleFormControlInput2"
                                placeholder="Type message">
                              <a class="ms-1 text-muted" href="#!"><i class="fa fa-paperclip"></i></a>
                              <a class="ms-3 text-muted" href="#!"><i class="fa fa-smile-o"></i></a>
                              <a class="ms-3" href="#!"><i class="fa fa-paper-plane"></i></a>
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
      </div>
    </div>
  </div>


</template>
<script>
export default {
  props: {
    enseignantId: String
  }
    
}
</script>
<style scoped>
/********style pour la zone de saisie******/
.textbox {

  /* border: medium none; */
    border-radius: 4px 0 0 4px;
    /* box-shadow: none; */
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
  max-height: 40vh;
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
ul.inbox-nav li a {
  color: #6a6a6a;
  display: inline-block;
  line-height: 45px;
  padding: 0 20px;
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
  background: #fff;
  border-radius: 4px 4px 0 0;
  color: #373757;
  min-height: 80px;
  padding: 20px;
}
.inbox-head h3 {
  display: inline-block;
  font-weight: 300;
  margin: 0;
  padding-top: 6px;
}

.inbox-head .sr-input {
  /* border: medium none; */
  border-radius: 4px 0 0 4px;
  box-shadow: none;
  color: #8a8a8a;
  border: 1px solid#fde9bffd;
  float: left;
  height: 40px;
  padding: 0 10px;
}
.inbox-head .sr-btn {
  background: #fff;
  border: medium none;
  border-radius: 0 4px 4px 0;
  color: #373757;
  height: 40px;
  padding: 0 20px;
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
  padding: 5px 10px;
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
/******************************* */
.mail-box {
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
}

.mail-box .sm-side {
  background: #fff;
  border-radius: 4px 0 0 4px;
  width: 25%;
}

.mail-box .sm-side .user-head {
  background: #fff;
  border-radius: 4px 0 0;
  color: #373757;
  min-height: 80px;
  padding: 10px;
}

.mail-box aside {
  display: table-cell;
  float: none;
  height: 100%;
  padding: 0;
  vertical-align: top;
}

.inbox-body {
  padding: 20px 0px;
}
</style>