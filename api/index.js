const pokemons = require('../db-pokemons')
const { success } = require('../helper')

module.exports = (req, res) => {
  const pokemonsWithImages = pokemons.map((pokemon) => ({
    ...pokemon,
    image: pokemon.picture
  }))

  res.status(200).json(success('La liste des pokemons a bien ete recuperee.', pokemonsWithImages))
}
