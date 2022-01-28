import { useRouter } from 'next/router';
import AdminHome from '../Components/Homes/AdminHome';
import RootHome from '../Components/Homes/RootHome';
import useAccount from '../Hooks/useAccount';

export function Index() {
  const { isLoggedIn, admin, root, user } = useAccount();
  const router = useRouter();
  const home = useHome({ admin, root, user });

  if (!isLoggedIn) router.push('/login');

  return <>{home}</>;
}

function useHome({ admin, root, user }) {
  if (root != null) return <RootHome />;
  if (admin != null) return <AdminHome />;
  if (user != null) return <RootHome />;
}

export default Index;
