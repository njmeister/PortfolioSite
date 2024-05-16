import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';

export default function Header() {
	const [currentPage, setCurrentPage] = useState('About');

	const handlePageChange = (page) => setCurrentPage(page);

  return (
	<header className="header">
	  <h1><Link to="/">Noah Meister</Link></h1>
	  <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
	</header>
  );
}