import { useState, ChangeEvent, Suspense } from "react";
import { List, Pagination } from "@mui/material";
import { useFragment } from "react-relay";
import { graphql } from "react-relay";
import { PokemonItem } from "./PokemonItem";

const PokemonListFragment = graphql`
  fragment PokemonListFragment on pokemon_v2_pokemonspecies {
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
`;

type Props = {
  total: number;
  pokemonList: Array<any>;
};

export const PokemonList = ({ total, pokemonList }: Props) => {
  const data = useFragment(PokemonListFragment, pokemonList);

  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Suspense fallback={"loading..."}>
        <List>
          {data.map((pokemon, index) => {
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
