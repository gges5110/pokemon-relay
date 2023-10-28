import { useState, ChangeEvent } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";
import { PokemonItem } from "./PokemonItem";
import type { PokemonListQuery } from "./__generated__/PokemonListQuery.graphql";
import { List, Pagination } from "@mui/material";

const PokemonQuery = graphql`
  query PokemonListQuery($offset: Int) {
    pokemon_v2_pokemon(limit: 10, offset: $offset) {
      name
      order
      pokemon_v2_pokemontypes {
        type_id
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const PokemonList = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const data = useLazyLoadQuery<PokemonListQuery>(PokemonQuery, {
    offset: page * 10,
  });
  return (
    <List>
      {data?.pokemon_v2_pokemon?.map((pokemon, index) => {
        return <PokemonItem pokemon={pokemon} key={index} />;
      })}
      <Pagination count={10} page={page} onChange={handleChange} />
    </List>
  );
};
