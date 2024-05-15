import { Outlet } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Board from './components/Board.jsx';
import Row from './components/Row.jsx';

export default function App() {
  return (
	<div>
	  <Header />
	  <Row />
	  <Board />
	  <Footer />
	  <Outlet />
	</div>
  );
}