import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React Router V6.6+
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
// pages for routing
import Add from './pages/Add';
import Update from './pages/Update';
import Books from './pages/Books';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Books />,
			},
			{
				path: '/add',
				element: <Add />,
			},
			{
				path: '/update',
				element: <Update />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
