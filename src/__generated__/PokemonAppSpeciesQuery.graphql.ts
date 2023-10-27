/**
 * @generated SignedSource<<cd24de8208ae65d1a308841e4429bf9d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PokemonAppSpeciesQuery$variables = Record<PropertyKey, never>;
export type PokemonAppSpeciesQuery$data = {
  readonly pokemon_v2_pokemonspecies: ReadonlyArray<{
    readonly name: string;
  }>;
};
export type PokemonAppSpeciesQuery = {
  response: PokemonAppSpeciesQuery$data;
  variables: PokemonAppSpeciesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "pokemon_v2_pokemonspecies",
    "kind": "LinkedField",
    "name": "pokemon_v2_pokemonspecies",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonAppSpeciesQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokemonAppSpeciesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7816911ee4870bfa473ec9b4909fad7f",
    "id": null,
    "metadata": {},
    "name": "PokemonAppSpeciesQuery",
    "operationKind": "query",
    "text": "query PokemonAppSpeciesQuery {\n  pokemon_v2_pokemonspecies {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "b38cea00a446911f16d275332436268e";

export default node;
