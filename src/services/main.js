
import axios from "axios";
//import router from '../router';
const API_URL = "http://localhost:5000/api/";

const actions = {
    //upload de fichier
    async uploadDocumentw(document) {
      console.log("**********************document************************");
      console.log(document);
      console.log(document.titre);
     /* 
      let res = await axios.post(API_URL+"documents/createDocument",
        document
        /*, {
          headers: {
            'content-type': 'multipart/form-data;',
          }
        }
        */
     // );
      return document;
    },

    async getActiveStudent() {
      let res = await axios.get(API_URL + "users/TousEtudiantsActifs");
      console.log("+++++++++++++++++++++++++++++")
      console.log(res.data)
      return res.data;
    },

    async getActiveTeacher() {
      let res = await axios.get(API_URL + "users/TousEnseignantsActifs");
      return res;
    },

    async getActiveDocument() {
      let res = await axios.get(API_URL + "documents/TousDocumentsActifs");
      return res;
    },

};


export default {
  actions,
};
