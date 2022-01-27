import { useRouter } from 'next/router';
import useAccount from '../Hooks/useAccount';

export function Index() {
  const { isLoggedIn } = useAccount();
  const router = useRouter();

  if (!isLoggedIn) router.push('/login');

  return (
    <>
      <h1>Index</h1>
    </>
  );
}

export default Index;
