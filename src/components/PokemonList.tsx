import { useState, ChangeEvent, Suspense, useDeferredValue, useEffect } from "react";
import { List, Pagination } from "@mui/material";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";
import { PokemonItem } from "./PokemonItem";
import type { PokemonListQuery } from "./__generated__/PokemonListQuery.graphql";

const Query = graphql`
  query PokemonListQuery($cursor: Int, $limit: Int = 10) {
    pokemon_v2_pokemonspecies(
      limit: $limit
      where: { 
        pokemon_v2_generation: { id: { _eq: 1 } }
        order: { _gt: $cursor }
      }
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
  const [cursors, setCursors] = useState<(number | null)[]>([null]);
  const [page, setPage] = useState(1);
  
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  const currentCursor = cursors[page - 1] || null;
  
  const data = useLazyLoadQuery<PokemonListQuery>(
    Query,
    {
      cursor: currentCursor || 0,
      limit: 10,
    },
    {
      fetchPolicy: "store-and-network",
    }
  );
  
  // Update cursors when data changes
  useEffect(() => {
    if (data?.pokemon_v2_pokemonspecies && data.pokemon_v2_pokemonspecies.length > 0) {
      const lastItem = data.pokemon_v2_pokemonspecies[data.pokemon_v2_pokemonspecies.length - 1];
      setCursors(prev => {
        const newCursors = [...prev];
        if (page >= newCursors.length) {
          // Add new cursor for next page
          newCursors[page] = lastItem.order;
        }
        return newCursors;
      });
    }
  }, [data, page]);
  
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
