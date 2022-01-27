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
import useAccount from 'apps/client/Hooks/useAccount';

export default function Topbar() {
  const { username, isLoggedIn, logout } = useAccount();

  // const useLazyLoadQuery<TopbarRootQuery>(appQuery, {});
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {isLoggedIn ? (
            <NavDropdown title={username}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavItem>Not logged in</NavItem>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
