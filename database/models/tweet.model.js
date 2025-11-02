// Import du module mongoose pour la connexion à MongoDB
const mongoose = require("mongoose");
// Import du module Schema pour la création du schéma
const Schema = mongoose.Schema;

// Création du schéma pour la table tweets// 
const tweetSchema = schema({
  content : {type: String, maxlength: 140, minlength: 1, required: true},

});
// Création du modèle pour la table tweets// 
const Tweet = mongoose.model("tweets", tweetSchema);

// Export du modèle pour la table tweets// 
module.exports = Tweet;