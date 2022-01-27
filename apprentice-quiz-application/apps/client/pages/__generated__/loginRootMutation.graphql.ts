/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type loginRootMutationVariables = {
    password: string;
};
export type loginRootMutationResponse = {
    readonly loginRoot: {
        readonly id: string;
        readonly root: {
            readonly id: string;
            readonly username: string;
        } | null;
        readonly admin: {
            readonly id: string;
        } | null;
        readonly user: {
            readonly id: string;
        } | null;
    };
};
export type loginRootMutation = {
    readonly response: loginRootMutationResponse;
    readonly variables: loginRootMutationVariables;
};



/*
mutation loginRootMutation(
  $password: String!
) {
  loginRoot(password: $password) {
    id
    root {
      id
      username
    }
    admin {
      id
    }
    user {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "Session",
    "kind": "LinkedField",
    "name": "loginRoot",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "kind": "LinkedField",
        "name": "root",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
        "concreteType": "Admin",
        "kind": "LinkedField",
        "name": "admin",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "loginRootMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginRootMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "0d5dbafa3e9d3b0ee20a5e0ee6e88e63",
    "id": null,
    "metadata": {},
    "name": "loginRootMutation",
    "operationKind": "mutation",
    "text": "mutation loginRootMutation(\n  $password: String!\n) {\n  loginRoot(password: $password) {\n    id\n    root {\n      id\n      username\n    }\n    admin {\n      id\n    }\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cbe45ec1f22974ccf0902122e6858976';
export default node;
