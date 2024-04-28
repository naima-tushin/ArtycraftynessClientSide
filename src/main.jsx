import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AOS from 'aos';
import AllArtCraft from './components/AllArtCraft/AllArtCraft';
import MyArtCraft from './components/MyArtCraft/MyArtCraft';
import AddCraft from './components/AddCraft/AddCraft';
import 'aos/dist/aos.css'; 
AOS.init();

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/allartcraft',
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: '/addcraft',
        element: <ProtectedRoute> 
               <AddCraft></AddCraft>,
      </ProtectedRoute>,
      },
      {
        path: '/myartcraft',
        element: <ProtectedRoute> 
               <MyArtCraft></MyArtCraft>,
      </ProtectedRoute>,
      },
     
      // {
      //   path: '/estate/:id',
      //   element: <ProtectedRoute> 
      //     <EstateDetails></EstateDetails>
      //   </ProtectedRoute>,
      //   loader: () => fetch('/estate.json')
      // },
      // {
      //   path: '/updateprofile',
      //   element: <UpdateProfile></UpdateProfile>,
      // },
      // {
      //   path: '/userprofile',
      //   element: <UserProfile></UserProfile>,
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)