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
        loader: ()=> fetch('http://localhost:5000/brand')
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
     <RouterProvider router={router} />
  </React.StrictMode>,
)
