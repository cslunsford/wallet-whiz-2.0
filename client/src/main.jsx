import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/index.css';

import App from './App.jsx';
import Dashboard from './pages/dashboard';
import Homepage from './pages/homepage';
import User from './pages/user';
import Register from './pages/RegisterPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <Homepage />
            }, {
                path: '/dashboard',
                element: <Dashboard />
            }, {
                path: '/user',
                element: <User />
            }, {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)