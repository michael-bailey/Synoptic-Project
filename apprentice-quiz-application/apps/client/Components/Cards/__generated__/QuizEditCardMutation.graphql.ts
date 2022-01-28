/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuizEditCardMutationVariables = {
    id: string;
    title: string;
    description: string;
};
export type QuizEditCardMutationResponse = {
    readonly updateQuiz: {
        readonly id: string;
        readonly title: string;
        readonly description: string | null;
    };
};
export type QuizEditCardMutation = {
    readonly response: QuizEditCardMutationResponse;
    readonly variables: QuizEditCardMutationVariables;
};



/*
mutation QuizEditCardMutation(
  $id: String!
  $title: String!
  $description: String!
) {
  updateQuiz(id: $id, title: $title, description: $description) {
    id
    title
    description
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Quiz",
    "kind": "LinkedField",
    "name": "updateQuiz",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuizEditCardMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "QuizEditCardMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b82ba182ce961c502d671415a563e49a",
    "id": null,
    "metadata": {},
    "name": "QuizEditCardMutation",
    "operationKind": "mutation",
    "text": "mutation QuizEditCardMutation(\n  $id: String!\n  $title: String!\n  $description: String!\n) {\n  updateQuiz(id: $id, title: $title, description: $description) {\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '3b9254aedb28fdb3f13aa3c595afa431';
export default node;
