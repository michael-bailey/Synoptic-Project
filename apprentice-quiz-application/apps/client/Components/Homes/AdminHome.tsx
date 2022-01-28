import { AdminHomeAddUserMutation } from './__generated__/AdminHomeAddUserMutation.graphql';

import { Suspense, useState } from 'react';
import { Accordion, Button, Container, Modal } from 'react-bootstrap';
import {
  graphql,
  loadQuery,
  useMutation,
  usePreloadedQuery,
} from 'react-relay';

import RelayEnvironment from '../../Relay/RelayEnvironment';
import AddUserForm from '../Forms/AddUserForm';
import { AdminHomeQuery } from './__generated__/AdminHomeQuery.graphql';

const rootQuery = graphql`
  query AdminHomeQuery {
    session {
      id
      admin {
        id
        username
        users {
          id
          username
        }
      }
    }
  }
`;

const adminAdd = graphql`
  mutation AdminHomeAddUserMutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
      users {
        id
        username
      }
    }
  }
`;

const query = loadQuery<AdminHomeQuery>(RelayEnvironment, rootQuery, {});

export default function AdminHome() {
  const [showAddModal, setShowAddModal] = useState(false);
  let data = usePreloadedQuery<AdminHomeQuery>(rootQuery, query);
  const [commitCreateUser] = useMutation<AdminHomeAddUserMutation>(adminAdd);

  return (
    <Container>
      <h1>Users</h1>
      <Suspense fallback="loading">
        <Modal
          show={showAddModal}
          onHide={() => {
            setShowAddModal(false);
          }}
        >
          <Modal.Header closeButton>Add User</Modal.Header>
          <Modal.Body>
            <AddUserForm
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={function (variables): void {
                commitCreateUser({ variables });
                setShowAddModal(false);
              }}
            />
          </Modal.Body>
        </Modal>
        <Button onClick={() => setShowAddModal(true)}>add user</Button>
        <Accordion>
          {data != null
            ? data.session.admin?.users.map((a) => (
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
