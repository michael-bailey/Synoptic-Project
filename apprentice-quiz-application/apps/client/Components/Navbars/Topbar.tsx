import { TopbarRootQuery } from './__generated__/TopbarRootQuery.graphql';
import { TopbarLogoutMutation } from './__generated__/TopbarLogoutMutation.graphql';

import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import {
  graphql,
  loadQuery,
  useLazyLoadQuery,
  useMutation,
  usePreloadedQuery,
} from 'react-relay';
import RelayEnvironment from '../../Relay/RelayEnvironment';

const appQuery = graphql`
  query TopbarRootQuery {
    session {
      id
      root {
        id
        username
      }
      admin {
        id
        username
      }
      user {
        id
        username
      }
    }
  }
`;

const logoutMutation = graphql`
  mutation TopbarLogoutMutation {
    logout {
      id
      root {
        id
        username
      }
      admin {
        id
        username
      }
      user {
        id
        username
      }
    }
  }
`;

console.log(`making query call`);
const query = loadQuery<TopbarRootQuery>(RelayEnvironment, appQuery, {});

export default function Topbar() {
  const data = usePreloadedQuery<TopbarRootQuery>(appQuery, query, {});
  const [commitLogoutMutation] =
    useMutation<TopbarLogoutMutation>(logoutMutation);
  console.log(`got data: ${data}`);

  let loggedin =
    data.session.root != null ||
    data.session.admin != null ||
    data.session.user != null;

  let username =
    data.session.root?.username ??
    data.session.admin?.username ??
    data.session.user?.username ??
    'Username Error';

  // const useLazyLoadQuery<TopbarRootQuery>(appQuery, {});
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {loggedin ? (
            <NavDropdown title={username}>
              <NavDropdown.Item
                onClick={() => commitLogoutMutation({ variables: {} })}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavItem>Not logged in</NavItem>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
