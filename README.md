# Argolight – Test Technique

## 📁 Structure du projet

```
argolight/
├── argolight-backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config.js
│   │   └── index.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   └── seed.js
└── argolight-frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── router/
    │   ├── services/
    │   ├── views/
    │   ├── App.vue
    │   ├── main.js
    │   └── style.css
    ├── .gitignore
    ├── electron.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── vite.config.js
```

---

## 🚀 Installation & lancement

### Backend

1. Copier `.env.example` en `.env` et compléter :

   ```dotenv
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/argolight
   JWT_SECRET=<votre_secret_jwt>
   ```

2. Installer et lancer :

   ```bash
   cd argolight-backend
   npm install
   node seed.js 
   npm run dev    
   ```

### Frontend

1. Installer et lancer :

   ```bash
   cd argolight-frontend
   npm install
   npm run dev 
   ```

2. La fenêtre Electron s’ouvre sur l’interface Vue.

---

## 🔧 API Endpoints

| Méthode | URL            | Description                                      | Auth |
| ------- | -------------- | ------------------------------------------------ | ---- |
| GET     | `/`            | Vérification `{ message: "API Argolight – OK" }` | Non  |
| POST    | `/user/signin` | Connexion / inscription auto → `{ token }`       | Non  |
| GET     | `/rocket`      | Liste de toutes les fusées                       | Oui  |
| GET     | `/rocket/:id`  | Détails d’une fusée par son `_id` (modal)              | Oui  |

> **Auth** : header `Authorization: Bearer <token>` obtenu via `/user/signin`.

---

## 🗃️ Modèles de données

### Rocket

| Champ             | Type    |  Description                      |
| ----------------- | ------- | -------------------------------- |
| `name`            | String  | Nom de la fusée                  |
| `active`          | Boolean | Statut opérationnel (true/false) |
| `firstFlight`     | Date    | Date du premier vol              |
| `country`         | String  | Pays d’origine                   |
| `description`     | String  |Description                      |
| `coverUrl`        | String  | URL image de couverture          |
| `height`          | Number  | Hauteur (m)                      |
| `diameter`        | Number  |  Diamètre (m)                     |
| `mass`            | Number  |  Masse (kg)                       |
| `payloadCapacity` | Number  |  Capacité utile (kg)              |
| `stages`          | Number  |  Nombre d’étages                  |
| `wikipedia`       | String  |  Lien vers page Wikipédia (fr)    |

### User

| Champ          | Type   | Description                 |
| -------------- | ------ |  --------------------------- |
| `email`        | String |  Adresse email unique        |
| `passwordHash` | String |  Hash bcrypt du mot de passe |

---

## 🛠️ Front‑end

* **Vue Router**

  * `/login` → `Login.vue`
  * `/rockets` → `RocketList.vue`

* **Services**

  * `src/services/api.js`

    * `baseURL = http://localhost:3000`
    * injection du header `Authorization`

* **Composants**

  * `Loader.vue`, `ErrorMessage.vue`
  * `RocketCard.vue` – aperçu
  * `RocketModal.vue` – détails
  * **Responsive** avec grille CSS et menu burger sur mobile

---

## ✅ Bonnes pratiques

* Commits fréquents et messages de commits clairs
* Mettre à jour la seed si nouveaux champs/données
* Protéger routes qui nécessitent l'authentification avec JWT
* Tester les endpoints avec `curl` ou `Invoke-RestMethod` (Windows)
---
