import { PokemonListContentQuery$data } from "./__generated__/PokemonListContentQuery.graphql";
import { ListItem } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import type { ArrayElement } from "../utils/TypeUtil";

type Props = {
  pokemon: ArrayElement<
    PokemonListContentQuery$data["pokemon_v2_pokemonspecies"]
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
