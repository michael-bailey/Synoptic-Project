/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useAccountsQueryVariables = {};
export type useAccountsQueryResponse = {
    readonly session: {
        readonly id: string;
        readonly root: {
            readonly id: string;
            readonly username: string;
        } | null;
        readonly admin: {
            readonly id: string;
            readonly username: string;
        } | null;
        readonly user: {
            readonly id: string;
            readonly username: string;
        } | null;
    };
};
export type useAccountsQuery = {
    readonly response: useAccountsQueryResponse;
    readonly variables: useAccountsQueryVariables;
};



/*
query useAccountsQuery {
  session {
    id
    root {
      id
      username
    }
    admin {
      id
      username
    }
    user {
      id
      username
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
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "username",
    "storageKey": null
  }
],
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
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Admin",
        "kind": "LinkedField",
        "name": "admin",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": (v1/*: any*/),
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
    "name": "useAccountsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useAccountsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "82c7df571ad8f2b05b7993c171cd2dff",
    "id": null,
    "metadata": {},
    "name": "useAccountsQuery",
    "operationKind": "query",
    "text": "query useAccountsQuery {\n  session {\n    id\n    root {\n      id\n      username\n    }\n    admin {\n      id\n      username\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1bb0aacc18bb2cb7214177dc402b22e0';
export default node;
