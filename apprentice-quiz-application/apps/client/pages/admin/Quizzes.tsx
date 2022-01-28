import { QuizzesNewQuizMutation } from './__generated__/QuizzesNewQuizMutation.graphql';
import { QuizzesQuery } from './__generated__/QuizzesQuery.graphql';

import { Suspense, useState } from 'react';
import {
  Accordion,
  Button,
  Container,
  Modal,
  ModalBody,
} from 'react-bootstrap';
import { loadQuery, useMutation, usePreloadedQuery } from 'react-relay';
import { graphql } from 'relay-runtime';

import QuizForm from 'apps/client/Components/Forms/QuizForm';
import RelayEnvironment from 'apps/client/Relay/RelayEnvironment';
import useAccount from 'apps/client/Hooks/useAccount';
import { useRouter } from 'next/router';

const quizPageQuery = graphql`
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
`;

const newQuizMutation = graphql`
  mutation QuizzesNewQuizMutation($title: String!, $description: String) {
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
`;

const query = loadQuery<QuizzesQuery>(RelayEnvironment, quizPageQuery, {});

export default function Quizzes() {
  const [newQuizModal, setNewQuizModal] = useState(false);
  const [newQuestionModal, setNewQuestionModal] = useState(false);
  const [newAnswerModal, setNewAnswerModal] = useState(false);

  // mutations
  const [commitNewQuiz] = useMutation<QuizzesNewQuizMutation>(newQuizMutation);
  const { isLoggedIn, admin, root, user } = useAccount();
  const router = useRouter();
  const data = usePreloadedQuery<QuizzesQuery>(quizPageQuery, query);

  if (!isLoggedIn) router.push('/login');
  return (
    <Container>
      <h1>Quizzes</h1>
      <Suspense fallback="Loading">
        <Modal show={newQuizModal} onHide={() => setNewQuizModal(false)}>
          <Modal.Header closeButton>New Quiz</Modal.Header>
          <ModalBody>
            <QuizForm
              initialValues={{
                id: '',
                title: '',
                description: '',
              }}
              onSubmit={(variables) => {
                commitNewQuiz({ variables });
                setNewQuizModal(false);
              }}
            />
          </ModalBody>
        </Modal>
        <Button onClick={() => setNewQuizModal(true)}>New Quiz</Button>
        <Accordion>
          {data?.session.admin?.quizzes?.map((q) => (
            <Accordion.Item eventKey={q.id}>
              <Accordion.Header>{q.title}</Accordion.Header>
              <Accordion.Body>
                {/*question edit card would go here*/}
              </Accordion.Body>
            </Accordion.Item>
          )) ?? null}
        </Accordion>
      </Suspense>
    </Container>
  );
}
