// import { TestEditCardRemoveQuestionMutation } from '../../__generated__/queries/TestEditCardRemoveQuestionMutation.graphql';
// import { TestEditCardCreateQuestionMutation } from '../../__generated__/queries/TestEditCardCreateQuestionMutation.graphql';
// import { TestEditCardUpdateQuestionMutation } from '../../__generated__/queries/TestEditCardUpdateQuestionMutation.graphql';
// import { TestEditCardRemoveAnswerMutation } from '../../__generated__/queries/TestEditCardRemoveAnswerMutation.graphql';
// import { TestEditCardCreateAnswerMutation } from '../../__generated__/queries/TestEditCardCreateAnswerMutation.graphql';
// import { TestEditCardUpdateAnswerMutation } from '../../__generated__/queries/TestEditCardUpdateAnswerMutation.graphql';
// import { TestEditCardRemoveMutation } from '../../__generated__/queries/TestEditCardRemoveMutation.graphql';
// import { TestEditCardUpdateMutation } from '../../__generated__/queries/TestEditCardUpdateMutation.graphql';
// import { TestEditCardFragment$key } from '../../__generated__/queries/TestEditCardFragment.graphql';
// import { editTestQuery } from '../../__generated__/queries/editTestQuery.graphql';

// import React from 'react';
// import { Accordion, Button, ButtonGroup, Card } from 'react-bootstrap';
// import {
//   graphql,
//   PreloadedQuery,
//   useFragment,
//   useMutation,
//   usePreloadedQuery,
// } from 'react-relay';

// import { testEditQuery } from '../../pages/test/edit';
// import TestForm from '../forms/TestForm';
// import QuestionForm from '../forms/QuestionForm';
// import AnswerForm from '../forms/AnswerForm';
// import router, { useRouter } from 'next/router';

// // mark: queries
// const TestEditFragment = graphql`
//   fragment TestEditCardFragment on User {
//     id
//     test(id: $id) {
//       id
//       testName
//       description
//       questions {
//         id
//         text
//         answers {
//           id
//           text
//           isCorrect
//         }
//       }
//     }
//   }
// `;

// const TestUpdateMutation = graphql`
//   mutation TestEditCardUpdateMutation(
//     $id: String!
//     $testName: String
//     $description: String
//   ) {
//     updateTest(id: $id, testName: $testName, description: $description) {
//       id
//       testName
//       description
//     }
//   }
// `;

// const TestRemoveMutation = graphql`
//   mutation TestEditCardRemoveMutation($id: String!) {
//     removeTest(testId: $id) {
//       id
//       tests {
//         id
//       }
//     }
//   }
// `;

// const QuestionCreateMutation = graphql`
//   mutation TestEditCardCreateQuestionMutation($id: String!) {
//     addQuestion(forTestId: $id, withText: "New Question") {
//       id
//       questions {
//         id
//         text
//       }
//     }
//   }
// `;

// const QuestionUpdateMutation = graphql`
//   mutation TestEditCardUpdateQuestionMutation($id: String!, $text: String) {
//     updateQuestion(id: $id, text: $text) {
//       id
//       text
//     }
//   }
// `;

// const questionDeleteMutation = graphql`
//   mutation TestEditCardRemoveQuestionMutation(
//     $fromTestId: String!
//     $questionId: String!
//   ) {
//     removeQuestion(fromTestId: $fromTestId, questionId: $questionId) {
//       id
//       questions {
//         id
//       }
//     }
//   }
// `;

// const AnswerCreateMutation = graphql`
//   mutation TestEditCardCreateAnswerMutation($id: String!) {
//     addAnswer(forQuestionId: $id, withText: "new answer", isCorrect: false) {
//       id
//       answers {
//         id
//         text
//       }
//     }
//   }
// `;

// const AnswerUpdateMutation = graphql`
//   mutation TestEditCardUpdateAnswerMutation(
//     $id: String!
//     $text: String!
//     $isCorrect: Boolean
//   ) {
//     updateAnswer(id: $id, text: $text, isCorrect: $isCorrect) {
//       id
//       text
//       isCorrect
//     }
//   }
// `;

// const answerDeleteMutation = graphql`
//   mutation TestEditCardRemoveAnswerMutation(
//     $fromQuestionId: String!
//     $answerId: String!
//   ) {
//     removeAnswer(fromQuestionId: $fromQuestionId, answerId: $answerId) {
//       id
//       answers {
//         id
//       }
//     }
//   }
// `;

// // mark: component props
// type Props = {
//   queryRef: PreloadedQuery<editTestQuery>;
// };

// const styles = {
//   card: { marginTop: '16px', marginBotton: '16px' },
// };

// // mark: component definition
// export default function TestEditCard({ queryRef }: Props) {
//   const [commitTestUpdate] =
//     useMutation<TestEditCardUpdateMutation>(TestUpdateMutation);
//   const [commitTestRemove] =
//     useMutation<TestEditCardRemoveMutation>(TestRemoveMutation);

//   // question mutations
//   const [commitQuestionAdd] = useMutation<TestEditCardCreateQuestionMutation>(
//     QuestionCreateMutation
//   );
//   const [commitQuestionUpdate] =
//     useMutation<TestEditCardUpdateQuestionMutation>(QuestionUpdateMutation);
//   const [commitQuestionRemove] =
//     useMutation<TestEditCardRemoveQuestionMutation>(questionDeleteMutation);

//   // answer mutations
//   const [commitAnswerAdd] =
//     useMutation<TestEditCardCreateAnswerMutation>(AnswerCreateMutation);
//   const [commitAnswerUpdate] =
//     useMutation<TestEditCardUpdateAnswerMutation>(AnswerUpdateMutation);
//   const [commitAnswerRemove] =
//     useMutation<TestEditCardRemoveAnswerMutation>(answerDeleteMutation);

//   const router = useRouter();

//   // data fetching
//   const data = usePreloadedQuery<editTestQuery>(testEditQuery, queryRef);
//   const fragData = useFragment<TestEditCardFragment$key>(
//     TestEditFragment,
//     data.session.user
//   );

//   // mark : component structure
//   return (
//     <>
//       <Card style={styles.card}>
//         <Card.Body>
//           <h1>Editing test</h1>
//           <TestForm
//             initialValues={fragData.test}
//             onSubmit={async (v) => {
//               commitTestUpdate({ variables: v });
//             }}
//             onDelete={async () => {
//               commitTestRemove({ variables: { id: fragData.test.id } });
//               router.back();
//             }}
//           />
//         </Card.Body>
//       </Card>
//       <Card style={styles.card}>
//         <Card.Body>
//           <h2>Questions</h2>
//           <Button
//             onClick={() =>
//               commitQuestionAdd({ variables: { id: fragData.test.id } })
//             }
//           >
//             Add Question
//           </Button>
//           <Accordion style={styles.card}>
//             {fragData.test.questions.map((q) => (
//               <Accordion.Item key={q.id} eventKey={q.id}>
//                 <Accordion.Header>{q.text}</Accordion.Header>
//                 <Accordion.Body>
//                   <QuestionForm
//                     initialValues={q}
//                     onSubmit={async (v) => {
//                       commitQuestionUpdate({ variables: v });
//                     }}
//                     onDelete={async () => {
//                       commitQuestionRemove({
//                         variables: {
//                           fromTestId: fragData.test.id,
//                           questionId: q.id,
//                         },
//                       });
//                     }}
//                   />
//                   <Card style={styles.card}>
//                     <Card.Body>
//                       <h3>Answers</h3>
//                       <Button
//                         onClick={() =>
//                           commitAnswerAdd({ variables: { id: q.id } })
//                         }
//                       >
//                         Add Answer
//                       </Button>

//                       <Accordion style={styles.card}>
//                         {q.answers?.map((a) => {
//                           return (
//                             <Accordion.Item key={a.id} eventKey={a.id}>
//                               <Accordion.Header>{a.text}</Accordion.Header>
//                               <Accordion.Body>
//                                 <AnswerForm
//                                   initialValues={a}
//                                   onSubmit={async (v) => {
//                                     commitAnswerUpdate({
//                                       variables: {
//                                         id: v.id,
//                                         text: v.text,
//                                         isCorrect: Boolean(v.isCorrect),
//                                       },
//                                     });
//                                   }}
//                                   onDelete={async () => {
//                                     commitAnswerRemove({
//                                       variables: {
//                                         fromQuestionId: q.id,
//                                         answerId: a.id,
//                                       },
//                                     });
//                                   }}
//                                 />
//                               </Accordion.Body>
//                             </Accordion.Item>
//                           );
//                         }) ?? []}
//                       </Accordion>
//                     </Card.Body>
//                   </Card>
//                 </Accordion.Body>
//               </Accordion.Item>
//             ))}
//           </Accordion>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }
