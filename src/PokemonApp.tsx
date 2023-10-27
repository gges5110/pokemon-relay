import { useLazyLoadQuery } from "react-relay";
import { graphql } from 'react-relay';
  
const PokemonQuery = graphql`
  query PokemonAppSpeciesQuery { 
    # Gets all the pokemon belonging to generation 3
    pokemon_v2_pokemonspecies {
      name
    } 
  }
`

export const PokemonApp = () => {
  const data = useLazyLoadQuery(PokemonQuery, {});
  return (
    <div>Pokemons!
        {JSON.stringify(data)}

    </div>
  )
}