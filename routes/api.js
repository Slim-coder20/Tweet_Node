// Import du module express.Router pour créer un routeur
const router = require("express").Router();
// Import du module tweets pour la route sur la page de création de tweet//
const tweets = require("./api.tweets");

router.use("/tweets", tweets);

module.exports = router;