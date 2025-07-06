import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import type { PokemonListQuery$data } from "./__generated__/PokemonListQuery.graphql";
import type { ArrayElement } from "../utils/TypeUtil";

type Props = {
  pokemon: ArrayElement<
    PokemonListQuery$data["pokemon_v2_pokemonspecies"]
  >;
};

export const PokemonItem = ({ pokemon }: Props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.order}.png`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={pokemon.name}
        secondary={"Order: " + pokemon.order}
      />
    </ListItem>
  );
};
