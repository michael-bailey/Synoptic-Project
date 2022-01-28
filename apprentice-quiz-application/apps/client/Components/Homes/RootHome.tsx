import RelayEnvironment from 'apps/client/Relay/RelayEnvironment';
import { Suspense, useState } from 'react';
import { Accordion, Button, Container, Modal } from 'react-bootstrap';
import {
  graphql,
  loadQuery,
  useMutation,
  usePreloadedQuery,
} from 'react-relay';
import AddUserForm from '../Forms/AddUserForm';
import { RootHomeAddAdminMutation } from './__generated__/RootHomeAddAdminMutation.graphql';
import { RootHomeQuery } from './__generated__/RootHomeQuery.graphql';

const rootQuery = graphql`
  query RootHomeQuery {
    session {
      id
      root {
        id
        username
        admins {
          id
          username
        }
      }
    }
  }
`;

const adminAdd = graphql`
  mutation RootHomeAddAdminMutation($username: String!, $password: String!) {
    createAdmin(username: $username, password: $password) {
      id
      username
      admins {
        id
        username
      }
    }
  }
`;

const query = loadQuery<RootHomeQuery>(RelayEnvironment, rootQuery, {});

export default function RootHome() {
  const [showAddModal, setShowAddModal] = useState(false);
  let data = usePreloadedQuery<RootHomeQuery>(rootQuery, query);
  const [commitCreateAdmin] = useMutation<RootHomeAddAdminMutation>(adminAdd);

  return (
    <Container>
      <h1>Admins</h1>
      <Suspense fallback="loading">
        <Modal
          show={showAddModal}
          onHide={() => {
            setShowAddModal(false);
          }}
        >
          <Modal.Header closeButton>Add Admin</Modal.Header>
          <Modal.Body>
            <AddUserForm
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={function (variables): void {
                commitCreateAdmin({ variables });
                setShowAddModal(false);
              }}
            />
          </Modal.Body>
        </Modal>
        <Button onClick={() => setShowAddModal(true)}>add admin</Button>
        <Accordion>
          {data != null
            ? data.session.root?.admins?.map((a) => (
                <Accordion.Item eventKey={a.id}>
                  <Accordion.Header>{a.username}</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              )) ?? null
            : null}
        </Accordion>
      </Suspense>
    </Container>
  );
}
