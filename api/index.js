const express = require('express');
const app = express();

// IMPORTANT : exporter un handler compatible Vercel
const serverless = require('serverless-http');

const pokemons = require('../db-pokemons');
const { /* tes helpers */ } = require('../helper');

// ici tu remets ton code Express actuel (routes, middlewares, etc.)
// exemple :
app.get('/', (req, res) => {
  res.send('API Pokemon OK');
});

// routes existantes, par ex. /api/pokemons, etc.

// Vercel attend une fonction, pas app.listen
module.exports = app;        // si tu veux adapter différemment
module.exports.handler = serverless(app);