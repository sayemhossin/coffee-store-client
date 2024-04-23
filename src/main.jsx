import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/Sign in/SignIn.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('https://coffee-store-server-dgfm.onrender.com/coffee')
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-dgfm.onrender.com/coffee/${params.id}`)
  },
  {
path:'/signup',
element:<SignUp></SignUp>
  },
  {
path:'/signin',
element:<SignIn></SignIn>
  },
  {
    path:'/users',
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-dgfm.onrender.com/user')
  }



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
