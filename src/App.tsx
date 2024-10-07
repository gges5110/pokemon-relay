import { Suspense } from "react";
import { PokemonListContainer } from "./components/PokemonListContainer";

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="font-semibold p-2">
        <center>Pokemons!</center>
      </div>
      <PokemonListContainer />
    </Suspense>
  );
}
