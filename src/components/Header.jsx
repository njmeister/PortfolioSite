import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
  return (
	<header className="header">
	  <h1><Link to="/">Noah Meister</Link></h1>
	  <Nav />
	</header>
  );
}