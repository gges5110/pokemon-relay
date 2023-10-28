import { Suspense } from "react";
import { PokemonList } from "./components/PokemonList";
import { Button } from "@mui/material";

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="font-semibold p-2">
        <center>Pokemons!</center>
        <Button variant="contained">Contained</Button>
      </div>
      <PokemonList />
    </Suspense>
  );
}
