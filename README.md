# API Pokemon

Petit projet Node.js autour d'une liste de Pokemons, avec affichage web et endpoint JSON.

Le projet est deploye sur Vercel avec :
- une page d'accueil statique
- une fonction serverless pour exposer les donnees Pokemon

## Apercu

Sur Vercel :
- `/` affiche l'interface web
- `/api` renvoie les Pokemons au format JSON

Exemple de reponse :

```json
{
  "message": "La liste des pokemons a bien ete recuperee.",
  "data": [
    {
      "id": 1,
      "name": "Bulbizarre"
    }
  ]
}
```

## Structure du projet

```text
APIPokemon/
├─ api/
│  └─ index.js
├─ aaaammjjhhss/
│  └─ index.js
├─ db-pokemons.js
├─ helper.js
├─ index.html
├─ package.json
└─ vercel.json
```

## Fichiers principaux

- [index.html](C:\Users\oscar\Desktop\APIPokemon\index.html) : page d'accueil qui charge les Pokemons depuis `/api`
- [api/index.js](C:\Users\oscar\Desktop\APIPokemon\api\index.js) : fonction Vercel qui renvoie les donnees JSON
- [db-pokemons.js](C:\Users\oscar\Desktop\APIPokemon\db-pokemons.js) : base de donnees locale des Pokemons
- [helper.js](C:\Users\oscar\Desktop\APIPokemon\helper.js) : helper de format de reponse
- [vercel.json](C:\Users\oscar\Desktop\APIPokemon\vercel.json) : configuration Vercel

## Installation

```bash
npm install
```

## Lancement en local

Le projet contient deux approches :

### 1. Version historique Express

```bash
npm start
```

Ou en mode dev :

```bash
npm run dev
```

Cette version utilise le fichier `aaaammjjhhss/index.js`.

### 2. Version Vercel

Pour tester le comportement du deploiement Vercel en local :

```bash
vercel dev
```

## Deploiement sur Vercel

Le projet est configure pour :
- servir `index.html` sur la racine `/`
- rewriter `/api` vers `api/index.js`

Configuration actuelle :

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/api",
      "destination": "/api/index"
    }
  ]
}
```

## Technologies utilisees

- Node.js
- Express
- Vercel Functions
- HTML / CSS / JavaScript vanilla

## Objectif du projet

Ce projet sert a :
- afficher une liste de Pokemons
- consulter leurs details
- exposer les donnees via une API simple
- deployer facilement l'application sur Vercel

## Auteur

Projet realise par Oscar.
