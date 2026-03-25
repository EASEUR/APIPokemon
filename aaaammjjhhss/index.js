const express = require('express')
const app = express()
const port = 3003
const pokemons = require('../db-pokemons')
const { success } = require('../helper')

app.get('/', (req, res) => {
  const pokemonsJson = JSON.stringify(pokemons)
  const cards = pokemons
    .map(
      (pokemon) => `
      <article
        data-pokemon-id="${pokemon.id}"
        style="border:1px solid #ddd;border-radius:10px;padding:12px;text-align:center;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.08);cursor:pointer;transition:transform .15s ease, box-shadow .15s ease"
      >
        <img src="${pokemon.picture}" alt="${pokemon.name}" width="96" height="96" style="display:block;margin:0 auto 8px;object-fit:contain" />
        <h3 style="margin:0 0 6px;font-size:16px">${pokemon.name}</h3>
        <p style="margin:0;color:#666;font-size:13px">Type: ${pokemon.types.join(', ')}</p>
      </article>
    `
    )
    .join('')

  res.send(`
    <main style="font-family:Verdana,Geneva,Tahoma,sans-serif;max-width:960px;margin:24px auto;padding:0 16px">
      <h1 style="margin-bottom:16px">Liste des Pokemons</h1>
      <section id="pokemon-details" style="display:none;margin-bottom:20px;border:1px solid #ddd;border-radius:14px;padding:18px;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.08)"></section>
      <section style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:12px">
        ${cards}
      </section>
    </main>
    <script>
      const pokemons = ${pokemonsJson}
      const detailBox = document.getElementById('pokemon-details')
      const cards = document.querySelectorAll('[data-pokemon-id]')

      const renderPokemon = (pokemon) => {
        detailBox.style.display = 'block'
        detailBox.innerHTML = \`
          <div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">
            <img src="\${pokemon.picture}" alt="\${pokemon.name}" width="140" height="140" style="object-fit:contain;background:#f8f8f8;border-radius:12px;padding:12px" />
            <div style="flex:1;min-width:240px">
              <h2 style="margin:0 0 10px">\${pokemon.name}</h2>
              <p style="margin:0 0 6px;color:#444"><strong>Type :</strong> \${pokemon.types.join(', ')}</p>
              <p style="margin:0 0 6px;color:#444"><strong>Categorie :</strong> \${pokemon.category}</p>
              <p style="margin:0 0 6px;color:#444"><strong>Taille :</strong> \${pokemon.size}</p>
              <p style="margin:0 0 6px;color:#444"><strong>Poids :</strong> \${pokemon.weight}</p>
              <p style="margin:0 0 6px;color:#444"><strong>PV :</strong> \${pokemon.hp}</p>
              <p style="margin:0 0 6px;color:#444"><strong>CP :</strong> \${pokemon.cp}</p>
              <p style="margin:0 0 6px;color:#444"><strong>Talents :</strong> \${pokemon.abilities.join(', ')}</p>
              <p style="margin:0 0 6px;color:#444"><strong>Faiblesses :</strong> \${pokemon.weaknesses.join(', ')}</p>
              <p style="margin:0 0 6px;color:#444"><strong>Evolution :</strong> \${pokemon.evolution}</p>
              <p style="margin:12px 0 0;color:#333;line-height:1.5">\${pokemon.description}</p>
            </div>
          </div>
        \`
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-2px)'
          card.style.boxShadow = '0 6px 14px rgba(0,0,0,.12)'
        })

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0)'
          card.style.boxShadow = '0 2px 8px rgba(0,0,0,.08)'
        })

        card.addEventListener('click', () => {
          const pokemonId = Number(card.dataset.pokemonId)
          const pokemon = pokemons.find((item) => item.id === pokemonId)

          if (pokemon) {
            renderPokemon(pokemon)
          }
        })
      })
    </script>
  `)
})

app.get('/api/pokemons', (req, res) => {
  const message = 'La liste des pokemons a bien ete recuperee.'
  const pokemonsWithImages = pokemons.map((pokemon) => ({
    ...pokemon,
    image: pokemon.picture
  }))

  res.json(success(message, pokemonsWithImages))
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
