// Import du module express.Router pour créer un routeur
const router = require("express").Router();


// Définition de la route sur la page d'acceuil 
router.get("/", (req, res) => {
  res.render("home");
})
module.exports = router;