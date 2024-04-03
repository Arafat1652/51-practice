import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
