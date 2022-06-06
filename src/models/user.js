export default class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  setOthersInformations(
    confirmPassword,
    faculte,
    filiere,
    niveau,
    specialite
  ) {
    this.confirmPassword = confirmPassword;
    this.FaculteId = faculte;
    this.FiliereId = filiere;
    this.NiveauId = niveau;
    this.SpecialiteId = specialite;
  }
}
