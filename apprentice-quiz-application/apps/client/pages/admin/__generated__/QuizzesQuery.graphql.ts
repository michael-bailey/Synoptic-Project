/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuizzesQueryVariables = {};
export type QuizzesQueryResponse = {
    readonly session: {
        readonly id: string;
        readonly admin: {
            readonly id: string;
            readonly quizzes: ReadonlyArray<{
                readonly id: string;
                readonly title: string;
                readonly " $fragmentRefs": FragmentRefs<"QuizEditCardFragment">;
            }>;
        } | null;
    };
};
export type QuizzesQuery = {
    readonly response: QuizzesQueryResponse;
    readonly variables: QuizzesQueryVariables;
};



/*
query QuizzesQuery {
  session {
    id
    admin {
      id
      quizzes {
        id
        title
        ...QuizEditCardFragment
      }
    }
  }
}

fragment QuizEditCardFragment on Quiz {
  id
  title
  description
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
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuizzesQuery",
    "selections": [
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
              {
                "alias": null,
                "args": null,
                "concreteType": "Quiz",
                "kind": "LinkedField",
                "name": "quizzes",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuizEditCardFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QuizzesQuery",
    "selections": [
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
              {
                "alias": null,
                "args": null,
                "concreteType": "Quiz",
                "kind": "LinkedField",
                "name": "quizzes",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7cd6c4b576faccd46d86ebc5a2e8b09e",
    "id": null,
    "metadata": {},
    "name": "QuizzesQuery",
    "operationKind": "query",
    "text": "query QuizzesQuery {\n  session {\n    id\n    admin {\n      id\n      quizzes {\n        id\n        title\n        ...QuizEditCardFragment\n      }\n    }\n  }\n}\n\nfragment QuizEditCardFragment on Quiz {\n  id\n  title\n  description\n}\n"
  }
};
})();
(node as any).hash = '97631b2a813a99fdd64d4b3c8543fa76';
export default node;
