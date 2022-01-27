/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useAccountsMutationVariables = {};
export type useAccountsMutationResponse = {
    readonly logout: {
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
export type useAccountsMutation = {
    readonly response: useAccountsMutationResponse;
    readonly variables: useAccountsMutationVariables;
};



/*
mutation useAccountsMutation {
  logout {
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
    "name": "logout",
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
    "name": "useAccountsMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useAccountsMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c48b2046f968b4a65074c88e88837366",
    "id": null,
    "metadata": {},
    "name": "useAccountsMutation",
    "operationKind": "mutation",
    "text": "mutation useAccountsMutation {\n  logout {\n    id\n    root {\n      id\n      username\n    }\n    admin {\n      id\n      username\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fa1ae09f19afee4ba6ea8ef42ee81954';
export default node;
