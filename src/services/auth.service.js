import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";
// const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
      .then(this.handleResponse)
      .then((response) => {
        console.log("la fameuse reponse");
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "register", {
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      FaculteId: user.FaculteId,
      FiliereId: user.FiliereId,
      NiveauId: user.NiveauId,
      SpecialiteId: user.SpecialiteId,
    });
  }

  handleResponse(response) {
    if (response.status === 401) {
      this.logout();
      location.reload(true);

      const error = response.data && response.data.message;
      return Promise.reject(error);
    }
      console.log("wannnnnnnnnnnnnnnnnnndddddddddddddddddaaaaaaaaaaaaaaaaaa")

    return Promise.resolve(response);
  }
}

export default new AuthService();
