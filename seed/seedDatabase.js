const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation createPokemon(
    $name: String,
    $height: Int,
    $weight: Int,
    $moves: MoveCreateManyInput,
    $types: TypeCreateManyInput
) {
    createPokemon(data: {
      name: $name
      height: $height
      weight: $weight
      moves: $moves
      types: $types
    })
    {
      id
    }
  }
`

const sampleFiles = ['pokemon-data.json']

async function main(inputFile) {

  const content = fs.readFileSync(`./seed/${inputFile}`)
  const allPokemon = JSON.parse(content)

  allPokemon.forEach(async item => {
    fetch(item.url)
      .then(function (response) {
        return response.json()
      })
      .then(async function (poke) {

        const variables = {
          name: poke.name,
          height: poke.height,
          weight: poke.weight,
          moves: {
            create: [{
              name: poke.moves[0].move.name,
              url: poke.moves[0].move.url,
            },
            {
              name: poke.moves[1].move.name,
              url: poke.moves[1].move.url,
              },
              {
                name: poke.moves[2].move.name,
                url: poke.moves[2].move.url,
              },
              {
                name: poke.moves[3].move.name,
                url: poke.moves[3].move.url,
              }]
          },
          types: {
            create: [{
              name: poke.types[0].type.name,
            }]
          }
        }
      
        await client
          .request(mutation, variables)
          .then(data => console.log(data))
          .catch(err => console.log(`${err}`))
    })
      })
}

for (let fileName of sampleFiles) {
    main(fileName).catch(e => console.error(e))
}
