// Import du module express.Router pour créer un routeur
const router = require("express").Router();

// Définition de la route sur la page d'acceuil
router.get("/", (req, res) => {
  res.render("tweets/tweet-list");
});
module.exports = router;

// Définition de la route sur la page de création de tweet//
router.get("/tweet/new", (req, res) => {
 res.render("tweets/tweet-form");
});
