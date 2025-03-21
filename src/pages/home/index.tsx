import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
      <div>Home page</div>
      <Link to={'/login'}>login</Link>
    </>
  );
}
