// Import du module express.Router pour créer un routeur
const router = require("express").Router();
const api = require("./api");
// Import du module tweet.model pour la création du modèle
const Tweet = require("../database/models/tweet.model");

// connecter API tweets à la route /api/tweets
router.use("/api", api);

// Définition de la route sur la page d'acceuil
router.get("/", (req, res) => {
  Tweet.find({})
    .exec()
    .then((tweets) => {
      res.render("tweets/tweet-list", { tweets });
    });
});

// Définition de la route sur la page de création de tweet//
router.get("/tweet/new", (req, res) => {
  res.render("tweets/tweet-form");
});

module.exports = router;
