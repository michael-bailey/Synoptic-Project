/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuizEditCardFragment = {
    readonly id: string;
    readonly title: string;
    readonly description: string | null;
    readonly " $refType": "QuizEditCardFragment";
};
export type QuizEditCardFragment$data = QuizEditCardFragment;
export type QuizEditCardFragment$key = {
    readonly " $data"?: QuizEditCardFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"QuizEditCardFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuizEditCardFragment",
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
  "type": "Quiz",
  "abstractKey": null
};
(node as any).hash = '1641b352af8225fa09ffb35204efea3b';
export default node;
