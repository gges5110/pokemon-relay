/**
 * @generated SignedSource<<ec897da115c7ad7ba7699f30a7265a3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PokemonListQuery$variables = {
  offset?: number | null | undefined;
};
export type PokemonListQuery$data = {
  readonly pokemon_v2_pokemonspecies: ReadonlyArray<{
    readonly name: string;
    readonly order: number | null | undefined;
    readonly pokemon_v2_pokemons: ReadonlyArray<{
      readonly pokemon_v2_pokemontypes: ReadonlyArray<{
        readonly pokemon_v2_type: {
          readonly name: string;
        } | null | undefined;
      }>;
    }>;
  }>;
};
export type PokemonListQuery = {
  response: PokemonListQuery$data;
  variables: PokemonListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "offset"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 10
      },
      {
        "kind": "Variable",
        "name": "offset",
        "variableName": "offset"
      },
      {
        "kind": "Literal",
        "name": "order_by",
        "value": {
          "order": "asc"
        }
      },
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "pokemon_v2_generation": {
            "id": {
              "_eq": 1
            }
          }
        }
      }
    ],
    "concreteType": "pokemon_v2_pokemonspecies",
    "kind": "LinkedField",
    "name": "pokemon_v2_pokemonspecies",
    "plural": true,
    "selections": [
      (v1/*: any*/),
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
                  (v1/*: any*/)
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonListQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PokemonListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a67bc04fb2c90677504e83f847fd4c23",
    "id": null,
    "metadata": {},
    "name": "PokemonListQuery",
    "operationKind": "query",
    "text": "query PokemonListQuery(\n  $offset: Int\n) {\n  pokemon_v2_pokemonspecies(limit: 10, offset: $offset, where: {pokemon_v2_generation: {id: {_eq: 1}}}, order_by: {order: asc}) {\n    name\n    order\n    pokemon_v2_pokemons {\n      pokemon_v2_pokemontypes {\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "757036b6d66e66bf0387241c33258135";

export default node;
