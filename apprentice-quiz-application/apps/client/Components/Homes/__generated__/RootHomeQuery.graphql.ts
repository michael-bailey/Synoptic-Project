/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RootHomeQueryVariables = {};
export type RootHomeQueryResponse = {
    readonly session: {
        readonly id: string;
        readonly root: {
            readonly id: string;
            readonly username: string;
            readonly admins: ReadonlyArray<{
                readonly id: string;
                readonly username: string;
            }>;
        } | null;
    };
};
export type RootHomeQuery = {
    readonly response: RootHomeQueryResponse;
    readonly variables: RootHomeQueryVariables;
};



/*
query RootHomeQuery {
  session {
    id
    root {
      id
      username
      admins {
        id
        username
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Session",
    "kind": "LinkedField",
    "name": "session",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "kind": "LinkedField",
        "name": "root",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Admin",
            "kind": "LinkedField",
            "name": "admins",
            "plural": true,
            "selections": [
              (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RootHomeQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RootHomeQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "031c562a0a9976cbd89a17bf87296c34",
    "id": null,
    "metadata": {},
    "name": "RootHomeQuery",
    "operationKind": "query",
    "text": "query RootHomeQuery {\n  session {\n    id\n    root {\n      id\n      username\n      admins {\n        id\n        username\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ca3642a06fc9209e736e633b791e122f';
export default node;
