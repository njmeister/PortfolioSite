
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { element } from 'prop-types';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
	{
	  path: '/',
	  element: <App />,
	  errorElement: <ErrorPage />,
	  children: [
		{
		  index: true,
		  element: <AboutPage />,
		},
		{
		  path: 'projects',
		  element: <BoardPage />,
		},
		{
		  path: 'projects/:id',
		  element: <ProjectPage />,
		},
		{
		  path: 'contact',
		  element: <ContactPage />,
		},
		{
			path: 'resume',
			element: <ResumePage />,
		},
	  ],
	},
  ]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
  );
