import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root'
import Homepage from './Homepage';
import AddProduct from './componenets/AddProduct';
import MyCart from './componenets/MyCart';
import Login from './componenets/Login';
import Register from './componenets/Register';
import Brand from './componenets/Brand';
import ErrorPage from './componenets/ErrorPage';
import UpdateProduct from './componenets/UpdateProduct';
import AuthProvider from './Providers/AuthProvider';
import User from './componenets/User';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
        loader: ()=> fetch('/Brand.json')
      },
      {
        path: '/brand/:id',
        element: <Brand></Brand>,
        loader: ()=> fetch('/Product.json')
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      
      {
        path: '/mycart',
        element: <MyCart></MyCart>,
        loader: ()=> fetch('http://localhost:5000/mycart')
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params})=> fetch(`http://localhost:5000/mycart/${params.id}`)
      },
      {
        path: '/user',
        element: <User></User>,
        loader: ()=> fetch('http://localhost:5000/user')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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
