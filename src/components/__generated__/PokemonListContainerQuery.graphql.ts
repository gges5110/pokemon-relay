/**
 * @generated SignedSource<<04632d1b69663043e886f8b6be768b9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PokemonListContainerQuery$variables = Record<PropertyKey, never>;
export type PokemonListContainerQuery$data = {
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
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "generation_id": {
            "_eq": 1
          }
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonListContainerQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokemonListContainerQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2387e2bec8500861f229aed00ad1af54",
    "id": null,
    "metadata": {},
    "name": "PokemonListContainerQuery",
    "operationKind": "query",
    "text": "query PokemonListContainerQuery {\n  pokemon_v2_pokemonspecies_aggregate(where: {generation_id: {_eq: 1}}) {\n    aggregate {\n      count\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d6bb08fbb54603846311d4a838e42b91";

export default node;
