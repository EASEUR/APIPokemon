const pokemons = [
  {
    id: 1,
    name: 'Bulbizarre',
    hp: 25,
    cp: 5,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    types: ['Plante', 'Poison'],
    category: 'Pokemon Graine',
    size: '0.7 m',
    weight: '6.9 kg',
    abilities: ['Engrais'],
    weaknesses: ['Feu', 'Glace', 'Psy', 'Vol'],
    description:
      'Il peut survivre plusieurs jours sans manger grace au bulbe sur son dos.',
    evolution: 'Herbizarre',
    created: new Date()
  },
  {
    id: 2,
    name: 'Salameche',
    hp: 28,
    cp: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    types: ['Feu'],
    category: 'Pokemon Lezard',
    size: '0.6 m',
    weight: '8.5 kg',
    abilities: ['Brasier'],
    weaknesses: ['Eau', 'Sol', 'Roche'],
    description:
      'La flamme au bout de sa queue indique son humeur et sa vitalite.',
    evolution: 'Reptincel',
    created: new Date()
  },
  {
    id: 3,
    name: 'Carapuce',
    hp: 21,
    cp: 4,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    types: ['Eau'],
    category: 'Pokemon Minitortue',
    size: '0.5 m',
    weight: '9.0 kg',
    abilities: ['Torrent'],
    weaknesses: ['Electrik', 'Plante'],
    description:
      'Sa carapace lui sert de protection et ameliore sa forme hydrodynamique.',
    evolution: 'Carabaffe',
    created: new Date()
  },
  {
    id: 4,
    name: 'Aspicot',
    hp: 16,
    cp: 2,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
    types: ['Insecte', 'Poison'],
    category: 'Pokemon Insectopic',
    size: '0.3 m',
    weight: '3.2 kg',
    abilities: ['Ecran Poudre', 'Fuite'],
    weaknesses: ['Feu', 'Vol', 'Psy', 'Roche'],
    description:
      'On le trouve souvent dans les forets, ou il se defend avec son aiguillon venimeux.',
    evolution: 'Coconfort',
    created: new Date()
  },
  {
    id: 5,
    name: 'Roucool',
    hp: 30,
    cp: 7,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
    types: ['Normal', 'Vol'],
    category: 'Pokemon Minoiseau',
    size: '0.3 m',
    weight: '1.8 kg',
    abilities: ['Regard Vif', 'Pieds Confus'],
    weaknesses: ['Electrik', 'Glace', 'Roche'],
    description:
      'Tres docile, il prefere projeter du sable pour se proteger avant de contre-attaquer.',
    evolution: 'Roucoups',
    created: new Date()
  },
  {
    id: 6,
    name: 'Rattata',
    hp: 18,
    cp: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
    types: ['Normal'],
    category: 'Pokemon Souris',
    size: '0.3 m',
    weight: '3.5 kg',
    abilities: ['Fuite', 'Cran'],
    weaknesses: ['Combat'],
    description:
      'Ses incisives poussent continuellement, il ronge donc tout ce qu il trouve.',
    evolution: 'Rattatac',
    created: new Date()
  },
  {
    id: 7,
    name: 'Piafabec',
    hp: 14,
    cp: 5,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
    types: ['Normal', 'Vol'],
    category: 'Pokemon Minoiseau',
    size: '0.3 m',
    weight: '2.0 kg',
    abilities: ['Regard Vif'],
    weaknesses: ['Electrik', 'Glace', 'Roche'],
    description:
      'Il pousse des cris percants et protege farouchement son territoire.',
    evolution: 'Rapasdepic',
    created: new Date()
  },
  {
    id: 8,
    name: 'Abo',
    hp: 16,
    cp: 4,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
    types: ['Poison'],
    category: 'Pokemon Serpent',
    size: '2.0 m',
    weight: '6.9 kg',
    abilities: ['Intimidation', 'Mue'],
    weaknesses: ['Sol', 'Psy'],
    description:
      'Il se deplace silencieusement dans les hautes herbes pour surprendre ses proies.',
    evolution: 'Arbok',
    created: new Date()
  },
  {
    id: 9,
    name: 'Pikachu',
    hp: 21,
    cp: 7,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
    types: ['Electrik'],
    category: 'Pokemon Souris',
    size: '0.4 m',
    weight: '6.0 kg',
    abilities: ['Statik'],
    weaknesses: ['Sol'],
    description:
      'Il stocke l electricite dans ses joues et la libere quand il est menace.',
    evolution: 'Raichu',
    created: new Date()
  },
  {
    id: 10,
    name: 'Sabelette',
    hp: 19,
    cp: 3,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
    types: ['Sol'],
    category: 'Pokemon Souris',
    size: '0.6 m',
    weight: '12.0 kg',
    abilities: ['Voile Sable'],
    weaknesses: ['Eau', 'Plante', 'Glace'],
    description:
      'Il s enterre rapidement dans le sable sec pour se proteger des attaques.',
    evolution: 'Sablaireau',
    created: new Date()
  },
  {
    id: 11,
    name: 'Melofee',
    hp: 25,
    cp: 5,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
    types: ['Fee'],
    category: 'Pokemon Fee',
    size: '0.6 m',
    weight: '7.5 kg',
    abilities: ['Joli Sourire', 'Garde Magik'],
    weaknesses: ['Poison', 'Acier'],
    description:
      'On raconte qu il danse les nuits de pleine lune avec une grace mysterieuse.',
    evolution: 'Melodelfe',
    created: new Date()
  },
  {
    id: 12,
    name: 'Groupix',
    hp: 17,
    cp: 8,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
    types: ['Feu'],
    category: 'Pokemon Renard',
    size: '0.6 m',
    weight: '9.9 kg',
    abilities: ['Torche'],
    weaknesses: ['Eau', 'Sol', 'Roche'],
    description:
      'Ses six queues deviennent magnifiques a mesure qu il grandit.',
    evolution: 'Feunard',
    created: new Date()
  }
]

module.exports = pokemons
