const express = require('express');
const serverless = require('serverless-http');

const app = express();

// TODO: remettre tes vraies données/routes plus tard
// const pokemons = require('../db-pokemons');
// const helpers = require('../helper');

app.get('/', (req, res) => {
  res.send('API Pokemon OK');
});

// IMPORTANT : exporter un handler compatible Vercel
module.exports = serverless(app);