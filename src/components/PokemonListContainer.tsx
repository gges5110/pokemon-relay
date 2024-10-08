import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";
import { PokemonList } from "./PokemonList";
import type { PokemonListContainerQuery } from "./__generated__/PokemonListContainerQuery.graphql";

const Query = graphql`
  query PokemonListContainerQuery {
    pokemon_v2_pokemonspecies_aggregate(where: { generation_id: { _eq: 1 } }) {
      aggregate {
        count
      }
    }

    pokemon_v2_pokemonspecies(
      limit: 10
      where: { pokemon_v2_generation: { id: { _eq: 1 } } }
      order_by: { order: asc }
    ) {
      ...PokemonListFragment
    }
  }
`;

export const PokemonListContainer = () => {
  const data = useLazyLoadQuery<PokemonListContainerQuery>(Query, {});
  return (
    <Suspense>
      <PokemonList
        total={data.pokemon_v2_pokemonspecies_aggregate.aggregate?.count || 0}
        pokemonList={data.pokemon_v2_pokemonspecies}
      />
    </Suspense>
  );
};
