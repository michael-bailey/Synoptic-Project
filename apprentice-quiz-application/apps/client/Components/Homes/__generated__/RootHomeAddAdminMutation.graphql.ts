/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RootHomeAddAdminMutationVariables = {
    username: string;
    password: string;
};
export type RootHomeAddAdminMutationResponse = {
    readonly createAdmin: {
        readonly id: string;
        readonly username: string;
        readonly admins: ReadonlyArray<{
            readonly id: string;
            readonly username: string;
        }>;
    };
};
export type RootHomeAddAdminMutation = {
    readonly response: RootHomeAddAdminMutationResponse;
    readonly variables: RootHomeAddAdminMutationVariables;
};



/*
mutation RootHomeAddAdminMutation(
  $username: String!
  $password: String!
) {
  createAdmin(username: $username, password: $password) {
    id
    username
    admins {
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
    "concreteType": "Root",
    "kind": "LinkedField",
    "name": "createAdmin",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Admin",
        "kind": "LinkedField",
        "name": "admins",
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
    "name": "RootHomeAddAdminMutation",
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
    "name": "RootHomeAddAdminMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "78c8d6e142c135faa749e25708a4e188",
    "id": null,
    "metadata": {},
    "name": "RootHomeAddAdminMutation",
    "operationKind": "mutation",
    "text": "mutation RootHomeAddAdminMutation(\n  $username: String!\n  $password: String!\n) {\n  createAdmin(username: $username, password: $password) {\n    id\n    username\n    admins {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e0242dce660f0f476867877425f5dd2c';
export default node;
