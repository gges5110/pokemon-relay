import { useState, ChangeEvent, Suspense, useDeferredValue } from "react";
import { List, Pagination } from "@mui/material";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";
import { PokemonItem } from "./PokemonItem";
import type { PokemonListQuery } from "./__generated__/PokemonListQuery.graphql";

const Query = graphql`
  query PokemonListQuery($offset: Int) {
    pokemon_v2_pokemonspecies(
      limit: 10
      offset: $offset
      where: { pokemon_v2_generation: { id: { _eq: 1 } } }
      order_by: { order: asc }
    ) {
      name
      order
      pokemon_v2_pokemons {
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`;

type Props = {
  total: number;
};

export const PokemonList = ({ total }: Props) => {
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const data = useLazyLoadQuery<PokemonListQuery>(
    Query,
    {
      offset: (page - 1) * 10,
    },
    {
      fetchPolicy: "store-and-network",
    }
  );
  const deferredQuery = useDeferredValue(data);

  return (
    <div>
      <Suspense fallback={"loading..."}>
        <List>
          {deferredQuery?.pokemon_v2_pokemonspecies?.map((pokemon, index) => {
            return <PokemonItem pokemon={pokemon} key={index} />;
          })}
        </List>
      </Suspense>
      <Pagination
        count={Math.floor(total / 10) || 0}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};
