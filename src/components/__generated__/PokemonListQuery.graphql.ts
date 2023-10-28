/**
 * @generated SignedSource<<ff64bccf5838d2a265aeecf25f9e5ffd>>
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
  readonly pokemon_v2_pokemon: ReadonlyArray<{
    readonly name: string;
    readonly order: number | null | undefined;
    readonly pokemon_v2_pokemontypes: ReadonlyArray<{
      readonly pokemon_v2_type: {
        readonly name: string;
      } | null | undefined;
      readonly type_id: number | null | undefined;
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
      }
    ],
    "concreteType": "pokemon_v2_pokemon",
    "kind": "LinkedField",
    "name": "pokemon_v2_pokemon",
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
        "concreteType": "pokemon_v2_pokemontype",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemontypes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type_id",
            "storageKey": null
          },
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
    "cacheID": "c458f0955f483d826e1a00b9e4b05362",
    "id": null,
    "metadata": {},
    "name": "PokemonListQuery",
    "operationKind": "query",
    "text": "query PokemonListQuery(\n  $offset: Int\n) {\n  pokemon_v2_pokemon(limit: 10, offset: $offset) {\n    name\n    order\n    pokemon_v2_pokemontypes {\n      type_id\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dda90f1fde43673122a6401dd461d043";

export default node;
