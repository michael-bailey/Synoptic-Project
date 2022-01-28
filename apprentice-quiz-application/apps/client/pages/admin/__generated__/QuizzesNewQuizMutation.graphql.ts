/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuizzesNewQuizMutationVariables = {
    title: string;
    description?: string | null | undefined;
};
export type QuizzesNewQuizMutationResponse = {
    readonly addQuiz: {
        readonly id: string;
        readonly username: string;
        readonly quizzes: ReadonlyArray<{
            readonly id: string;
            readonly title: string;
            readonly description: string | null;
        }>;
    };
};
export type QuizzesNewQuizMutation = {
    readonly response: QuizzesNewQuizMutationResponse;
    readonly variables: QuizzesNewQuizMutationVariables;
};



/*
mutation QuizzesNewQuizMutation(
  $title: String!
  $description: String
) {
  addQuiz(title: $title, description: $description) {
    id
    username
    quizzes {
      id
      title
      description
    }
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
  "name": "title"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
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
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Admin",
    "kind": "LinkedField",
    "name": "addQuiz",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Quiz",
        "kind": "LinkedField",
        "name": "quizzes",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
    "name": "QuizzesNewQuizMutation",
    "selections": (v3/*: any*/),
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
    "name": "QuizzesNewQuizMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "5310a64eb51911ecf007fbb5b91f60e8",
    "id": null,
    "metadata": {},
    "name": "QuizzesNewQuizMutation",
    "operationKind": "mutation",
    "text": "mutation QuizzesNewQuizMutation(\n  $title: String!\n  $description: String\n) {\n  addQuiz(title: $title, description: $description) {\n    id\n    username\n    quizzes {\n      id\n      title\n      description\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f8a7754e3493e8fc4dfef64065a737ba';
export default node;
