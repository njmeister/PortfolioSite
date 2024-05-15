import { Link } from "react-router-dom";

export default function Nav() {
	  return (
	<nav className="nav">
		<h2><Link to="/">About</Link></h2>
		<h2><Link to="/projects">Projects</Link></h2>
		<h2><Link to="/contact">Contact</Link></h2>
		<h2><Link to="/resume">Resume</Link></h2>
	</nav>
  );
}