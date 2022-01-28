import Link from 'next/link';
import { NavLink } from 'react-bootstrap';

export default function AdminTopBar() {
  return (
    <Link href="/admin/Quizzes" passHref>
      <NavLink>Quizzes</NavLink>
    </Link>
  );
}
