# SportSee - Dashboard Frontend

## À propos

SportSee est une startup dédiée au coaching sportif. Ce projet est le nouveau tableau de bord utilisateur pour l'application SportSee, permettant aux utilisateurs de suivre leurs sessions d'entraînement et leurs statistiques.

## Prérequis

- Node.js (version 12.x ou supérieure)
- npm ou yarn
- [Backend SportSee](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

## Installation et lancement de l'application

1. Cloner le repository qui contient le frontend et le backend
<pre>

```bash
git clone https://github.com/Rogue06/SportSee.git
cd sportsee-frontend
```

</pre>

2. Installer les dépendances
<pre>

```bash
npm install
```

</pre>
3. Lancer l'application en mode développement
<pre>
```bash
npm run dev
```
</pre>

## Configuration du Backend

<pre>
```bash
cd SportSee-backend
```
</pre>

1. Installer les dépendances
<pre>

```bash
yarn install
```

</pre>

2. Lancer le serveur backend
<pre>

```bash
yarn dev
```

</pre>

Le backend sera accessible sur `http://localhost:3000`

## Connexion au Backend

Par défaut, l'application utilise des données mockées. Pour utiliser l'API :

1. Ouvrir `src/services/userService.js`
2. Modifier la constante `USE_MOCKED_DATA` :

<pre>
```javascript
const USE_MOCKED_DATA = false;
```
</pre>

## Fonctionnalités

- Suivi du temps des sessions
- Graphique d'activité quotidienne
- Statistiques clés (calories, protéines, glucides, lipides)
- Graphique radar des performances
- Score de progression

## Technologies Utilisées

- React
- Recharts pour les graphiques
- PropTypes pour la validation des props
- CSS pour le styling

## Structure du Projet

sportsee-frontend/
├── src/
│ ├── assets/ # Images et ressources
│ ├── components/ # Composants React
│ ├── hooks/ # Hooks personnalisés
│ ├── services/ # Services API
│ ├── styles/ # Fichiers CSS
│ └── mocks/ # Données mockées

## Endpoints API Disponibles README.md backend

- `http://localhost:3000/user/${userId}` - Informations utilisateur
- `http://localhost:3000/user/${userId}/activity` - Activité quotidienne
- `http://localhost:3000/user/${userId}/average-sessions` - Sessions moyennes
- `http://localhost:3000/user/${userId}/performance` - Données de performance

## Utilisateurs de Test

Deux profils sont disponibles :

- Karl: userId = 12
- Cecilia: userId = 18

## Scripts Disponibles

- `npm run dev` - Lance l'application en mode développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production

## Auteur

Mickael (Rogue06)
