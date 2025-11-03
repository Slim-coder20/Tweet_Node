// Import du module mongoose pour la connexion à MongoDB
const mongoose = require("mongoose");
// Import du module Schema pour la création du schéma
const Schema = mongoose.Schema;

// Création du schéma pour la table tweets//
const tweetSchema = new Schema({
  content: {
    type: String,
    maxlength: [140, "Tweet trop long "],
    minlength: [1, "Tweet trop court "],
    required: [true, "Le tweet est requis"],
  },
});
// Création du modèle pour la table tweets//
const Tweet = mongoose.model("tweets", tweetSchema);

// Export du modèle pour la table tweets//
module.exports = Tweet;
