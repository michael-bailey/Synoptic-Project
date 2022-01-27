/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type loginAdminMutationVariables = {
    username: string;
    password: string;
};
export type loginAdminMutationResponse = {
    readonly loginAdmin: {
        readonly id: string;
        readonly root: {
            readonly id: string;
        } | null;
        readonly admin: {
            readonly id: string;
            readonly username: string;
        } | null;
        readonly user: {
            readonly id: string;
        } | null;
    };
};
export type loginAdminMutation = {
    readonly response: loginAdminMutationResponse;
    readonly variables: loginAdminMutationVariables;
};



/*
mutation loginAdminMutation(
  $username: String!
  $password: String!
) {
  loginAdmin(username: $username, password: $password) {
    id
    root {
      id
    }
    admin {
      id
      username
    }
    user {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "Session",
    "kind": "LinkedField",
    "name": "loginAdmin",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "kind": "LinkedField",
        "name": "root",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Admin",
        "kind": "LinkedField",
        "name": "admin",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginAdminMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "loginAdminMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "e88b092a36206cbd012123ddbc6a3822",
    "id": null,
    "metadata": {},
    "name": "loginAdminMutation",
    "operationKind": "mutation",
    "text": "mutation loginAdminMutation(\n  $username: String!\n  $password: String!\n) {\n  loginAdmin(username: $username, password: $password) {\n    id\n    root {\n      id\n    }\n    admin {\n      id\n      username\n    }\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3da9388ef05049fad1fee66d94c2c5ae';
export default node;
