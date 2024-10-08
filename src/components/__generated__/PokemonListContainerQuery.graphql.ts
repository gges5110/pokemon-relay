/**
 * @generated SignedSource<<ac8ff2a47b531ff5459d69f2c094582f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PokemonListContainerQuery$variables = Record<PropertyKey, never>;
export type PokemonListContainerQuery$data = {
  readonly pokemon_v2_pokemonspecies: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"PokemonListFragment">;
  }>;
  readonly pokemon_v2_pokemonspecies_aggregate: {
    readonly aggregate: {
      readonly count: number;
    } | null | undefined;
  };
};
export type PokemonListContainerQuery = {
  response: PokemonListContainerQuery$data;
  variables: PokemonListContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "_eq": 1
},
v1 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "where",
      "value": {
        "generation_id": (v0/*: any*/)
      }
    }
  ],
  "concreteType": "pokemon_v2_pokemonspecies_aggregate",
  "kind": "LinkedField",
  "name": "pokemon_v2_pokemonspecies_aggregate",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "pokemon_v2_pokemonspecies_aggregate_fields",
      "kind": "LinkedField",
      "name": "aggregate",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "pokemon_v2_pokemonspecies_aggregate(where:{\"generation_id\":{\"_eq\":1}})"
},
v2 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 10
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
        "id": (v0/*: any*/)
      }
    }
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonListContainerQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "pokemon_v2_pokemonspecies",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemonspecies",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonListFragment"
          }
        ],
        "storageKey": "pokemon_v2_pokemonspecies(limit:10,order_by:{\"order\":\"asc\"},where:{\"pokemon_v2_generation\":{\"id\":{\"_eq\":1}}})"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokemonListContainerQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "pokemon_v2_pokemonspecies",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemonspecies",
        "plural": true,
        "selections": [
          (v3/*: any*/),
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
                      (v3/*: any*/)
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
        "storageKey": "pokemon_v2_pokemonspecies(limit:10,order_by:{\"order\":\"asc\"},where:{\"pokemon_v2_generation\":{\"id\":{\"_eq\":1}}})"
      }
    ]
  },
  "params": {
    "cacheID": "a1e65fb66f80692b66d30a4428538d6e",
    "id": null,
    "metadata": {},
    "name": "PokemonListContainerQuery",
    "operationKind": "query",
    "text": "query PokemonListContainerQuery {\n  pokemon_v2_pokemonspecies_aggregate(where: {generation_id: {_eq: 1}}) {\n    aggregate {\n      count\n    }\n  }\n  pokemon_v2_pokemonspecies(limit: 10, where: {pokemon_v2_generation: {id: {_eq: 1}}}, order_by: {order: asc}) {\n    ...PokemonListFragment\n  }\n}\n\nfragment PokemonListFragment on pokemon_v2_pokemonspecies {\n  name\n  order\n  pokemon_v2_pokemons {\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c787e016a7f73f16630a865b853decbe";

export default node;
