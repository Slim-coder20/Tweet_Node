// ============================================
// IMPORTS DES MODULES NÉCESSAIRES
// ============================================

// Import du module Express qui permet de créer une application web
const express = require("express");
// Import du module path pour manipuler les chemins de fichiers
const path = require("path");
// Import du module morgan pour logger les requêtes HTTP
const morgan = require("morgan");
// Import du module index pour la route sur la page d'acceuil
const index = require("./routes");
// ============================================
// CRÉATION DE L'APPLICATION EXPRESS
// ============================================

// Création d'une nouvelle instance d'application Express
const app = express();

// ============================================
// CONFIGURATION DU MOTEUR DE TEMPLATES
// ============================================

// Définition du dossier contenant les fichiers de vue (templates)
// __dirname est le chemin absolu du dossier courant
app.set("views", path.join(__dirname, "views"));
// Définition du moteur de templates à utiliser (Pug)
app.set("view engine", "pug");

// ============================================
// CONFIGURATION DES MIDDLEWARES
// ============================================

// Configuration de morgan avec le format 'short' pour logger les requêtes HTTP
// Exemple de log: GET /users 200 15ms
app.use(morgan("short"));

// Middleware pour servir les fichiers statiques (CSS, JS, images, etc.)
// depuis le dossier 'public' à la racine de l'application
app.use(express.static(path.join(__dirname, "public")));

// Middleware pour parser automatiquement les corps de requête au format JSON
// Permet d'utiliser req.body pour accéder aux données JSON envoyées
app.use(express.json());

// Middleware pour parser les corps de requête au format URL-encoded
// (extended: true permet d'utiliser la bibliothèque qs au lieu de querystring)
app.use(express.urlencoded({ extended: true }));

// difinr la route sur la page d'acceuil // 
app.use(index); 

// ============================================
// LANCEMENT DU SERVEUR
// ============================================

// Définition du port sur lequel le serveur va écouter
// Utilise la variable d'environnement PORT si elle existe, sinon 3000 par défaut
const port = process.env.PORT || 3000;

// Démarrage du serveur sur le port défini
// Le serveur est maintenant prêt à recevoir des requêtes HTTP
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
