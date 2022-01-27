import {
  graphql,
  loadQuery,
  useMutation,
  usePreloadedQuery,
} from 'react-relay';
import RelayEnvironment from '../Relay/RelayEnvironment';
import { useAccountsMutation } from './__generated__/useAccountsMutation.graphql';
import { useAccountsQuery } from './__generated__/useAccountsQuery.graphql';

const appQuery = graphql`
  query useAccountsQuery {
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
  mutation useAccountsMutation {
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

const query = loadQuery<useAccountsQuery>(RelayEnvironment, appQuery, {});

export default function useAccount() {
  const data = usePreloadedQuery<useAccountsQuery>(appQuery, query, {});
  const [commitLogoutMutation] =
    useMutation<useAccountsMutation>(logoutMutation);

  const root = data.session.root;
  const admin = data.session.admin;
  const user = data.session.user;

  let isLoggedIn = root != null || admin != null || user != null;

  let username =
    data.session.root?.username ??
    data.session.admin?.username ??
    data.session.user?.username;

  return {
    username,
    isLoggedIn,
    root,
    admin,
    user,
    logout: () => commitLogoutMutation({ variables: {} }),
  };
}
