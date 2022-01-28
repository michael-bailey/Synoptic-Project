import { QuizEditCardFragment$key } from './__generated__/QuizEditCardFragment.graphql';
import { QuizEditCardMutation } from './__generated__/QuizEditCardMutation.graphql';

import router from 'next/router';
import { Card } from 'react-bootstrap';
import { graphql, useFragment, useMutation } from 'react-relay';
import QuizForm from '../Forms/QuizForm';

const quizEditFragment = graphql`
  fragment QuizEditCardFragment on Quiz {
    id
    title
    description
  }
`;

const quizUpdateMutaton = graphql`
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
`;

type Props = {
  id: string;
  onSumbit: (v: { id: string; title: string; description: string }) => void;
  fragRef: any;
};

export default function QuizEditCard({ onSumbit, fragRef }: Props) {
  // this does work, typescript is throwing errors for no reason
  const data = useFragment<QuizEditCardFragment$key>(quizEditFragment, fragRef);
  const [commitQuizupdate] =
    useMutation<QuizEditCardMutation>(quizUpdateMutaton);
  return (
    <Card>
      <Card.Body>
        <h1>Editing test</h1>
        <QuizForm
          initialValues={data}
          onSubmit={async (v) => {
            commitQuizupdate({ variables: v });
          }}
        />
      </Card.Body>
    </Card>
  );
}
