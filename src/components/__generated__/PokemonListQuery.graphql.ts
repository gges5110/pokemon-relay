/**
 * @generated SignedSource<<08d969acf65aeb78fd09b942c8c33b35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PokemonListQuery$variables = {
  cursor?: number | null | undefined;
  limit?: number | null | undefined;
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
    "name": "cursor"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "limit"
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
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      },
      {
        "kind": "Literal",
        "name": "order_by",
        "value": {
          "order": "asc"
        }
      },
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_gt",
                "variableName": "cursor"
              }
            ],
            "kind": "ObjectValue",
            "name": "order"
          },
          {
            "kind": "Literal",
            "name": "pokemon_v2_generation",
            "value": {
              "id": {
                "_eq": 1
              }
            }
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
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
    "cacheID": "c2b7f069b9d2bf26bb5e14f0c05462bd",
    "id": null,
    "metadata": {},
    "name": "PokemonListQuery",
    "operationKind": "query",
    "text": "query PokemonListQuery(\n  $cursor: Int\n  $limit: Int = 10\n) {\n  pokemon_v2_pokemonspecies(limit: $limit, where: {pokemon_v2_generation: {id: {_eq: 1}}, order: {_gt: $cursor}}, order_by: {order: asc}) {\n    name\n    order\n    pokemon_v2_pokemons {\n      pokemon_v2_pokemontypes {\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "82f1cbf94e574d93d46efdd782c7d371";

export default node;
