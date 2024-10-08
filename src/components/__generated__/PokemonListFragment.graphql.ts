/**
 * @generated SignedSource<<9c7f9867fddfb1ffa030eca06895bb79>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PokemonListFragment$data = {
  readonly name: string;
  readonly order: number | null | undefined;
  readonly pokemon_v2_pokemons: ReadonlyArray<{
    readonly pokemon_v2_pokemontypes: ReadonlyArray<{
      readonly pokemon_v2_type: {
        readonly name: string;
      } | null | undefined;
    }>;
  }>;
  readonly " $fragmentType": "PokemonListFragment";
};
export type PokemonListFragment$key = {
  readonly " $data"?: PokemonListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PokemonListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonListFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "order",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "pokemon_v2_pokemon",
      "kind": "LinkedField",
      "name": "pokemon_v2_pokemons",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "pokemon_v2_pokemontype",
          "kind": "LinkedField",
          "name": "pokemon_v2_pokemontypes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "pokemon_v2_type",
              "kind": "LinkedField",
              "name": "pokemon_v2_type",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemonspecies",
  "abstractKey": null
};
})();

(node as any).hash = "9aac46ccfecc1eda448a4e3addb26f26";

export default node;
