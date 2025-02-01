# 🏋️‍♂️ SportSee - Dashboard Frontend

![SportSee Banner](https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png)

## 📖 À propos

SportSee est une startup dédiée au coaching sportif. Ce projet est le **nouveau tableau de bord utilisateur** permettant aux utilisateurs de suivre leurs **sessions d'entraînement** et leurs **statistiques de performance**.

---

## ✅ Prérequis

📌 Avant d’installer l’application, assurez-vous d’avoir :

- **[Node.js](https://nodejs.org/)** (version 12.x ou supérieure)
- **npm** ou **yarn**
- **Backend SportSee** : [Lien du repo backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

---

## ⚙️ Installation et Lancement

### 📥 **1. Cloner le projet**

````bash
git clone https://github.com/Rogue06/SportSee.git
cd sportsee-frontend 
````

📦 2. **Installer les dépendances**

```bash
npm install
````

🚀 3. **Lancer l'application en mode développement**

```bash
npm run dev
```

L’application sera accessible sur http://localhost:3001.

---

## 🖥️ Configuration du Backend

```bash
cd SportSee-backend
```

📦 1. **Installer les dépendances**

```bash
yarn install
```

🔄 2. **Démarrer le backend**

```bash
yarn dev
```

Le backend sera accessible sur `http://localhost:3000`

## 🔌 Connexion au Backend

Par défaut, l'application utilise **des données mockées**. Pour **utiliser l'API en direct, suivez ces étapes** :

1. Ouvrir `src/services/userService.js`
2. Modifier la constante `USE_MOCKED_DATA` :

```javascript
const USE_MOCKED_DATA = false;
```

## 🎯 Fonctionnalités

✔️ Suivi du temps des sessions

✔️ Graphique d'activité quotidienne

✔️ Statistiques clés (calories, protéines, glucides, lipides)

✔️ Graphique radar des performances

✔️ Score de progression

## 🛠️ Technologies Utilisées

- ⚛️ **React**
- 📊 **Recharts** pour les graphiques
- 🔄 **PropTypes** pour la validation des props
- 🎨 **CSS** pour le styling

## 📂 Structure du Projet

```bash
SportSee-backend/
    ├── .devcontainer/ # Conteneur Docker
    ├── app/ # Backend
    ├── node_modules/ # Node Modules
├── .gitignore # Git Ignore
├── .dockerignore # Docker Ignore


```

```bash
sportsee-frontend/
├── src/
│ ├── assets/ # Images et ressources
│ ├── components/ # Composants React
│ ├── hooks/ # Hooks personnalisés
│ ├── services/ # Services API
│ ├── styles/ # Fichiers CSS
│ └── mocks/ # Données mockées
```

## 🔗 API Endpoints

| Endpoint                                                | Description              |
| ------------------------------------------------------- | ------------------------ |
| `http://localhost:3000/user/${userId}`                  | Informations utilisateur |
| `http://localhost:3000/user/${userId}/activity`         | Activité quotidienne     |
| `http://localhost:3000/user/${userId}/average-sessions` | Sessions moyennes        |
| `http://localhost:3000/user/${userId}/performance`      | Données de performance   |

## 👥 Utilisateurs de Test

📌 Deux profils sont disponibles :

- **Karl** → userId = 12
- **Cecilia** → userId = 18

## 🎯 Scripts Disponibles

| Commande          | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Démarrer l’application en mode développement |
| `npm run build`   | Compiler l’application pour la production    |
| `npm run preview` | Prévisualiser la version de production       |

## Auteur

[Rogue06](https://github.com/Rogue06)

## 💻 Let's go !

![SportSee Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGIyN3pia2dibXMzNXhmcnh1YmU2c2VhdXZjYXN4bGJpYmhuNnFtdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BpGWitbFZflfSUYuZ9/giphy.gif)
