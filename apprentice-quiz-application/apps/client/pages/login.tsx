import { loginRootMutation } from './__generated__/loginRootMutation.graphql';
import { loginUserMutation } from './__generated__/loginUserMutation.graphql';
import { loginAdminMutation } from './__generated__/loginAdminMutation.graphql';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { graphql, useMutation } from 'react-relay';
import { Card, Container, Tab, Tabs } from 'react-bootstrap';

import LoginForm from '../Components/Forms/loginForm';
import RootLoginForm from '../Components/Forms/RootloginForm';
import useAccount from '../Hooks/useAccount';

const loginUser = graphql`
  mutation loginUserMutation($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      id
      root {
        id
      }
      admin {
        id
      }
      user {
        id
        username
      }
    }
  }
`;

const loginAdmin = graphql`
  mutation loginAdminMutation($username: String!, $password: String!) {
    loginAdmin(username: $username, password: $password) {
      id
      root {
        id
      }
      admin {
        id
        username
      }
      user {
        id
      }
    }
  }
`;

const loginRoot = graphql`
  mutation loginRootMutation($password: String!) {
    loginRoot(password: $password) {
      id
      root {
        id
        username
      }
      admin {
        id
      }
      user {
        id
      }
    }
  }
`;

export default function Login() {
  const [tab, setTab] = useState('user');
  const router = useRouter();
  const { isLoggedIn } = useAccount();

  const [commitUserLogin] = useMutation<loginUserMutation>(loginUser);
  const [commitAdminLogin] = useMutation<loginAdminMutation>(loginAdmin);
  const [commitRootLogin] = useMutation<loginRootMutation>(loginRoot);

  if (isLoggedIn) {
    console.log('re-routing');
    router.push('/');
  }

  return (
    <>
      <Container>
        <h1>Login</h1>
        <Card>
          <Card.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={tab}
              onSelect={(t) => setTab(t)}
              className="mb-3"
            >
              <Tab eventKey="user" title="User">
                <LoginForm
                  initialValues={{
                    username: '',
                    password: '',
                  }}
                  onSubmit={function (v): void {
                    commitUserLogin({ variables: v });
                  }}
                />
              </Tab>
              <Tab eventKey="admin" title="Admin">
                <LoginForm
                  initialValues={{
                    username: '',
                    password: '',
                  }}
                  onSubmit={function (v): void {
                    commitAdminLogin({ variables: v });
                  }}
                />
              </Tab>

              <Tab eventKey="root" title="Root">
                {/* change this one */}
                <RootLoginForm
                  initialValues={{
                    password: '',
                  }}
                  onSubmit={function (v): void {
                    commitRootLogin({ variables: v });
                  }}
                />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
