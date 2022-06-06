export default class Document {
  constructor(titre, resume, auteur, type, FaculteId, FiliereId, NiveauId, SpecialiteId) {
    this.titre = titre;
    this.resume = resume;
    this.auteur = auteur;
    this.type = type;
    this.FaculteId = FaculteId;
    this.FiliereId = FiliereId;
    this.NiveauId = NiveauId;
    this.SpecialiteId = SpecialiteId;
  }
}
