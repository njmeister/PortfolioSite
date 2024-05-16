import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Nav({ currentPage, handlePageChange}) {

	  return (
	<nav className="nav">
		<h2>
			<Link 
				to="/" 
				onClick={() => handlePageChange('About')} 
				className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
			>
				About
			</Link>
		</h2>
		<h2>
			<Link 
				to="/projects"
				onClick={() => handlePageChange('Projects')}
				className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
			>
				Projects
			</Link>
		</h2>
		<h2>
			<Link 
				to="/contact"
				onClick={() => handlePageChange('Contact')}
				className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
			>
				Contact
			</Link>
		</h2>
		<h2>
			<Link 
				to="/resume"
				onClick={() => handlePageChange('Resume')}
				className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
			>
				Resume
			</Link>
		</h2>
		<Hamburger />
	</nav>
  );
}