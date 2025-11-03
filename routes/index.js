// Import du module express.Router pour créer un routeur
const router = require("express").Router();
const api = require("./api");


// connecter API tweets à la route /api/tweets
router.use("/api", api);

// Définition de la route sur la page d'acceuil
router.get("/", (req, res) => {
  res.render("tweets/tweet-list");
});

// Définition de la route sur la page de création de tweet//
router.get("/tweet/new", (req, res) => {
  res.render("tweets/tweet-form");
});

module.exports = router;