// Import du module mongoose pour la connexion à MongoDB
const mongoose = require("mongoose");

// connection de mongoose à la base de données MongoDB // 
mongoose.connect('mongodb+srv://slimabida21_db_user:qwe@cluster0.5lpjqrr.mongodb.net/tweeter?retryWrites=true&w=majority&appName=tweeter')
.then( () => {
  console.log("✅ Connexion à MongoDB Atlas réussie");
})
.catch( (err) => {
  console.error("❌ Erreur de connexion à MongoDB Atlas:", err);
})