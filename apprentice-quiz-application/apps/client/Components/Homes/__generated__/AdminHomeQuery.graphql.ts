/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AdminHomeQueryVariables = {};
export type AdminHomeQueryResponse = {
    readonly session: {
        readonly id: string;
        readonly admin: {
            readonly id: string;
            readonly username: string;
            readonly users: ReadonlyArray<{
                readonly id: string;
                readonly username: string;
            }>;
        } | null;
    };
};
export type AdminHomeQuery = {
    readonly response: AdminHomeQueryResponse;
    readonly variables: AdminHomeQueryVariables;
};



/*
query AdminHomeQuery {
  session {
    id
    admin {
      id
      username
      users {
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
        "concreteType": "Admin",
        "kind": "LinkedField",
        "name": "admin",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "users",
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
    "name": "AdminHomeQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AdminHomeQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c8dcb9d0449d03fca17cb0901c62a9a6",
    "id": null,
    "metadata": {},
    "name": "AdminHomeQuery",
    "operationKind": "query",
    "text": "query AdminHomeQuery {\n  session {\n    id\n    admin {\n      id\n      username\n      users {\n        id\n        username\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6f9bd63c6d8ed921f837fbeacfe57a3b';
export default node;
