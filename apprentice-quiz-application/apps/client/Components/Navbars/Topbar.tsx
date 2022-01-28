import Link from 'next/link';
import {
  Container,
  Navbar,
  NavDropdown,
  NavItem,
  NavLink,
} from 'react-bootstrap';

import useAccount from 'apps/client/Hooks/useAccount';
import AdminTopBar from './AdminTopbar';
import { useRouter } from 'next/router';

export default function Topbar() {
  const { username, isLoggedIn, logout, root, admin, user } = useAccount();
  const router = useRouter();

  // const useLazyLoadQuery<TopbarRootQuery>(appQuery, {});
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Quiz App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {admin != null ? <AdminTopBar /> : null}

        <Navbar.Collapse className="justify-content-end">
          {isLoggedIn ? (
            <NavDropdown title={username} className='dropdown-menu-right"'>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/graphql')}>
                Graphql
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
