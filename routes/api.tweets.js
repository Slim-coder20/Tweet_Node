// Import du module express.Router pour créer un routeur
const router = require("express").Router();
// Import du module mongoose pour accéder à la connexion
const mongoose = require("mongoose");
// Import du module tweet.model pour la création du modèle
const Tweet = require("../database/models/tweet.model");

// Route GET de test pour vérifier que les routes sont montées
router.get("/", (req, res) => {
  res.json({ message: "Route /api/tweets accessible !", method: "GET" });
});

// Définition de la route sur la page de création de tweet//
router.post("/", (req, res) => {
  console.log("🚀 Route POST /api/tweets appelée !");
  console.log("📝 Données reçues:", req.body);
  const body = req.body;
  const newTweet = new Tweet(body);
  console.log("💾 Tentative de sauvegarde du tweet...");
  newTweet
    .save()
    .then((savedTweet) => {
      console.log("✅ Tweet sauvegardé avec succès:", savedTweet);
      console.log("📍 Base de données:", mongoose.connection.db.databaseName);
      console.log("📍 Collection:", Tweet.collection.name);
      res.redirect("/");
    })
    .catch((err) => {
      console.error("❌ Erreur lors de la sauvegarde:", err);
      if (err.errors) {
        const errors = Object.keys(err.errors).map(
          (key) => err.errors[key].message
        );
        res.status(400).render("tweets/tweet-form", { errors });
      } else {
        console.error("❌ Erreur inattendue:", err);
        res.status(500).send("Erreur serveur lors de la sauvegarde");
      }
    });
});

module.exports = router;
