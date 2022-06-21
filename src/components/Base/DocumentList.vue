<template>
    <div>

        <div class="col-lg-6" v-for="document in documents" :key="document.id" :value="document.id">
            <div class="media mb-2 p-2">
                <div class="media-left ml-lg-4">
                    <a href="#">
                        <img class="media-object" v-if="document.TypeId == 1" src="../../assets/logo-book.png"
                            alt="...">
                        <img class="media-object" v-else-if="document.TypeId == 3" src="../../assets/note.png"
                            alt="...">
                        <img class="media-object" v-else src="../../assets/logo-pdf.png" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <span class="media-heading mb-2">{{ document.titre }}
                    </span>

                    <div class="dropdown position-relative">
                        <div class=" position-absolute bottom-0 end-0">
                            <!-- <div class="dropdown">
                              <div class=""> -->
                            <div class="dropdown-toggle" data-toggle="dropdown"><i
                                    class="bi bi-three-dots-vertical"></i>

                                <ul class="dropdown-menu mt-3
                            ">
                                    <li>
                                        <router-link
                                            :to="{ name: 'Document', params: { document: document }, query: { id: document.id } }">
                                            <i class="fa fa-eye"></i> <span class="ml-2 comment-date">Details</span>
                                        </router-link>
                                    </li>
                                    <li v-if="document.TypeId == 3 && currentUser.id != document.User.id">
                                        <router-link
                                            :to="{ name: 'Chat', params: { enseignantId: document.UserId }, query: { documentId: document.id } }">
                                            <i class="fa fa-pencil"></i> <span class="ml-2 comment-date">Requete</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <a class="" :href="
                                            'http://localhost:5000/api/documents/telecharger/' +
                                            document.id
                                        ">
                                            <i class="fa fa-download"></i>
                                            <span class="comment-date ml-2">
                                                Telecharger</span>
                                        </a>
                                    </li>
                                    <li @click="showModal = true;" v-if="currentUser.id != document.User.id"><a
                                            href="#"><i class="fa fa-exclamation-circle"></i><span
                                                class="ml-2 comment-date">Signaler</span></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>



                    <p class="resume mb-1">{{ document.resume }}</p>
                    <div class="comment-action">
                        <div class="badge badge-success ml-2 mr-3">{{ document.Type.nom }}</div>
                        <span class="ml-10">
                            <a target="_blanc" class="" :href="
                                'http://localhost:5000/api/documents/telecharger/' +
                                document.id
                            ">
                                <i class="fa fa-download"></i>
                                <span class="comment-date">
                                    {{ document.nbTelechargement }}</span>
                            </a>
                            <a href="#" class="ml-2 w-10">
                                <i class="bi bi-person-fill"></i>
                                {{ document.User.username }}
                            </a>
                            <a href="#" class="ml-2">
                                <i class="bi bi-mortarboard-fill"></i>
                                {{ document.Filiere.nom }}
                            </a>

                            <!-- <a href="#">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Faculte.nom }}
                          </a>
                          <a href="#">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Niveau.nom }}
                          </a>

                          <a href="#" v-if="document.SpecialiteId">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Specialite.nom }}
                          </a>

                          <a href="#" v-if="document.UeId">
                            <i class="bi bi-person-fill"></i>
                            {{ document.Ue.nom }}
                          </a> -->

                            <!-- <a class="comment-date ml-5">{{ document.createdAt }}</a> -->
                        </span>
                        <p class="comment-date">{{ document.createdAt }}</p>




                    </div>
                </div>
            </div>

            <Signalement :show="showModal" :document="document.id" @close="showModal = false;">
                <template #header>
                    <h3>custom header</h3>
                </template>
            </Signalement>

        </div>

    </div>
</template>
<script>
import Signalement from "./Signalement";
export default {
    props: {
        documents: {}
    },
    components: {
        Signalement
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user.user;
        },
    },
    data() {
        return {
            showModal: false
        };
    },
    
}
</script>
<style scoped>
/*--------------------------------------------------------------
# dropdown pour le signalement
--------------------------------------------------------------*/
.dropdown-menu {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .12);
    border: none;
    border-radius: 0px;
    margin-left: -150px !important;
    padding: 10px;
    background-color: #f8f9fa;
}

.dropdown-menu li:hover,
.dropdown-menu a:hover {
    background: #eea412;
    color: #ffffff !important;
}

.dropdown:hover>.dropdown-menu {
    padding-left: 10px;
}

.dropdown-menu li {
    padding: .25rem 0.5rem;
    font-weight: 400;
    border: 0;
}

.dropdown-menu li,
.dropdown-menu a {
    color: #495057 !important;
}

/****style pour la gestion des images***** */
.media {
    background-color: #fff;
    background-clip: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    /* border-radius: 0.25rem; */
    height: 135px;
}

.media img {
    width: 80px;
    height: 90%;
}

.mycard {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
}

.media {
    overflow: hidden;
}

.media-left {
    height: 100%;
}

.media-body {
    width: 50%;
}

.media-heading {
    font-size: 18px;
    font-weight: 500;
    line-height: 2px;
    letter-spacing: 0px;
    height: 18px;
    width: 100%;
}

.media-body .resume {
    width: 100%;
    height: 30px;
    margin-bottom: 1px;
    line-height: 1rem !important;
    overflow: hidden;
}

.media-body .comment-action {
    height: 20px;
}

.media-body .comment-date {
    width: 100%;
    height: 20px;
    font-weight: 300;
    font-size: small;
}
</style>