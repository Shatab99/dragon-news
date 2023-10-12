import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home/Home';
import Login from './components/UserInUp/Login';
import Register from './components/UserInUp/Register';
import AuthProvider from './components/Providers/AuthProvider';
import NewsDetails from './components/Home/NewsDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Shared/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/news/:id',
        loader :()=> fetch('../news.json'),
        element:<PrivateRoute><NewsDetails/></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path:'/profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
