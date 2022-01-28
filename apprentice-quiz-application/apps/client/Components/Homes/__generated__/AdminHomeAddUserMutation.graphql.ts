/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AdminHomeAddUserMutationVariables = {
    username: string;
    password: string;
};
export type AdminHomeAddUserMutationResponse = {
    readonly createUser: {
        readonly id: string;
        readonly username: string;
        readonly users: ReadonlyArray<{
            readonly id: string;
            readonly username: string;
        }>;
    };
};
export type AdminHomeAddUserMutation = {
    readonly response: AdminHomeAddUserMutationResponse;
    readonly variables: AdminHomeAddUserMutationVariables;
};



/*
mutation AdminHomeAddUserMutation(
  $username: String!
  $password: String!
) {
  createUser(username: $username, password: $password) {
    id
    username
    users {
      id
      username
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
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
    "concreteType": "Admin",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
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
    "name": "AdminHomeAddUserMutation",
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
    "name": "AdminHomeAddUserMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "8a2ff20ba5a2a7e6a5fb37610edf53b6",
    "id": null,
    "metadata": {},
    "name": "AdminHomeAddUserMutation",
    "operationKind": "mutation",
    "text": "mutation AdminHomeAddUserMutation(\n  $username: String!\n  $password: String!\n) {\n  createUser(username: $username, password: $password) {\n    id\n    username\n    users {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3a8b8f6ab66adc253a345f2e2480e44f';
export default node;
