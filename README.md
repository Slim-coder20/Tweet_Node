# 🐦 Application Twitter Clone

Une application web similaire à Twitter développée avec Node.js et Express, permettant de créer et visualiser des tweets.

## 📋 Description

Cette application est une version simplifiée de Twitter qui permet aux utilisateurs de :
- Créer des tweets (messages de 140 caractères maximum)
- Visualiser tous les tweets publiés
- Interagir avec une interface web moderne

## 🚀 Fonctionnalités

- ✅ Création de tweets avec validation
- ✅ Affichage de la liste de tous les tweets
- ✅ Interface utilisateur moderne et responsive
- ✅ Connexion à MongoDB Atlas (cloud)
- ✅ Validation des données côté serveur
- ✅ Gestion des erreurs

## 🛠️ Technologies utilisées

- **Backend** :
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/) - Framework web
  - [Mongoose](https://mongoosejs.com/) - ODM pour MongoDB
  - [Morgan](https://github.com/expressjs/morgan) - Logger HTTP

- **Base de données** :
  - [MongoDB Atlas](https://www.mongodb.com/atlas) - Base de données cloud

- **Frontend** :
  - [Pug](https://pugjs.org/) - Moteur de templates
  - CSS (Bootstrap pour le style)

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- Un compte MongoDB Atlas (gratuit) pour la base de données

## 🔧 Installation

1. **Cloner le dépôt** :
```bash
git clone https://github.com/Slim-coder20/Tweet_Node.git
cd Tweet_Node
```

2. **Installer les dépendances** :
```bash
npm install
```

3. **Configurer MongoDB Atlas** :
   - Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Créez un cluster gratuit
   - Créez un utilisateur de base de données
   - Ajoutez votre adresse IP à la whitelist
   - Obtenez votre chaîne de connexion

4. **Configurer la connexion à la base de données** :
   
   Modifiez le fichier `database/index.js` avec votre chaîne de connexion MongoDB Atlas :
   ```javascript
   mongoose.connect('mongodb+srv://VOTRE_USER:VOTRE_PASSWORD@cluster0.xxxxx.mongodb.net/tweeter?retryWrites=true&w=majority&appName=tweeter')
   ```

## 🎯 Utilisation

1. **Démarrer le serveur** :
```bash
npm start
```

2. **Accéder à l'application** :
   - Ouvrez votre navigateur à l'adresse : `http://localhost:4000`
   - La page d'accueil affiche tous les tweets
   - Cliquez sur "Nouveau tweet" pour créer un tweet

## 📁 Structure du projet

```
tweet/
├── app.js                 # Point d'entrée de l'application
├── package.json           # Dépendances et scripts
├── database/
│   ├── index.js          # Configuration de la connexion MongoDB
│   └── models/
│       └── tweet.model.js # Modèle Mongoose pour les tweets
├── routes/
│   ├── index.js          # Routes principales
│   ├── api.js            # Routes API
│   └── api.tweets.js     # Routes spécifiques aux tweets
├── views/
│   ├── layout.pug        # Layout principal
│   ├── home.pug          # Page d'accueil
│   ├── includes/         # Partials (topbar, profile)
│   └── tweets/
│       ├── tweet-form.pug    # Formulaire de création
│       └── tweet-list.pug    # Liste des tweets
└── public/
    ├── css/
    │   └── main.css      # Styles CSS
    └── images/           # Images statiques
```

## 🔌 Routes API

### Routes principales

- `GET /` - Affiche la liste de tous les tweets
- `GET /tweet/new` - Affiche le formulaire de création de tweet

### Routes API

- `GET /api/tweets` - Route de test (retourne un JSON)
- `POST /api/tweets` - Crée un nouveau tweet

### Exemple de requête POST

```bash
POST /api/tweets
Content-Type: application/x-www-form-urlencoded

content=Votre message de tweet ici
```

## 📝 Modèle de données

### Tweet

```javascript
{
  content: String (requis, min: 1 caractère, max: 140 caractères),
  _id: ObjectId,
  __v: Number
}
```

## ⚙️ Configuration

Le serveur écoute par défaut sur le port **4000**. Vous pouvez le modifier dans `package.json` :

```json
"scripts": {
  "start": "PORT=4000 nodemon app.js"
}
```

Ou définir une variable d'environnement `PORT` dans votre système.

## 🐛 Résolution de problèmes

### Erreur de connexion à MongoDB Atlas

- Vérifiez que votre adresse IP est ajoutée à la whitelist dans MongoDB Atlas
- Vérifiez que vos identifiants de connexion sont corrects
- Assurez-vous que votre cluster MongoDB Atlas est actif

### Les tweets n'apparaissent pas dans MongoDB Compass

- Assurez-vous d'être connecté à MongoDB Atlas (pas à localhost)
- Vérifiez que vous regardez la bonne base de données : `tweeter`
- Vérifiez que vous regardez la bonne collection : `tweets`
- Rafraîchissez la collection dans MongoDB Compass

## 👨‍💻 Développeur

Développé par [Slim-coder20](https://github.com/Slim-coder20)

## 📄 Licence

Ce projet est sous licence ISC.

## 🔮 Améliorations futures

- Système d'authentification utilisateur
- Suppression de tweets
- Modification de tweets
- Système de likes/retweets
- Pagination pour la liste des tweets
- Recherche de tweets
- Système de hashtags et mentions

