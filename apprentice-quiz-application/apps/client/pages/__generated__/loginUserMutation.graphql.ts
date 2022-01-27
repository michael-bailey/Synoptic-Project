/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type loginUserMutationVariables = {
    username: string;
    password: string;
};
export type loginUserMutationResponse = {
    readonly loginUser: {
        readonly id: string;
        readonly root: {
            readonly id: string;
        } | null;
        readonly admin: {
            readonly id: string;
        } | null;
        readonly user: {
            readonly id: string;
            readonly username: string;
        } | null;
    };
};
export type loginUserMutation = {
    readonly response: loginUserMutationResponse;
    readonly variables: loginUserMutationVariables;
};



/*
mutation loginUserMutation(
  $username: String!
  $password: String!
) {
  loginUser(username: $username, password: $password) {
    id
    root {
      id
    }
    admin {
      id
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
    "name": "loginUser",
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
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
    "name": "loginUserMutation",
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
    "name": "loginUserMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "8fcf32ed74b4f6866b5500ddd7525db2",
    "id": null,
    "metadata": {},
    "name": "loginUserMutation",
    "operationKind": "mutation",
    "text": "mutation loginUserMutation(\n  $username: String!\n  $password: String!\n) {\n  loginUser(username: $username, password: $password) {\n    id\n    root {\n      id\n    }\n    admin {\n      id\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1e5b7c52acd54abad01415601d0c1731';
export default node;
