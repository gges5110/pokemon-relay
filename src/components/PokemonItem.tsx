import { PokemonListQuery$data } from "./__generated__/PokemonListQuery.graphql";
import { ListItem } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type Props = {
  pokemon: ArrayElement<PokemonListQuery$data["pokemon_v2_pokemon"]>;
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
      <ListItemText primary={pokemon.name} />
    </ListItem>
  );
};
