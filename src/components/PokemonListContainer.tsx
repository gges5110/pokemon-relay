import { Suspense } from "react";
import { useLazyLoadQuery, graphql } from "react-relay";
import { PokemonList } from "./PokemonList";
import type { PokemonListContainerQuery } from "./__generated__/PokemonListContainerQuery.graphql";

const Query = graphql`
  query PokemonListContainerQuery {
    pokemon_v2_pokemonspecies_aggregate(where: { generation_id: { _eq: 1 } }) {
      aggregate {
        count
      }
    }
  }
`;

export const PokemonListContainer = () => {
  const data = useLazyLoadQuery<PokemonListContainerQuery>(Query, {});
  return (
    <Suspense>
      <PokemonList
        total={data.pokemon_v2_pokemonspecies_aggregate.aggregate?.count || 0}
      />
    </Suspense>
  );
};
