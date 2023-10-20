import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import MyCart from './components/MyCart';
import Login from './components/Login';
import AvailableBrandDetails from './components/AvailableBrandDetails';
import AuthProvider from './firebase/AuthProvider';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Update from './components/Update';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands'),
      },
      {
        path:'/products/:brand_name',
        element:<Products></Products>,
        loader: () => fetch('http://localhost:5000/product'),
      },
    
      {
        path:'/details/:_id',
        element:<ProductDetails></ProductDetails>,
        loader:() => fetch(`http://localhost:5000/product`),
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path: '/home/:id',
        element: <PrivateRoute><AvailableBrandDetails></AvailableBrandDetails></PrivateRoute>,
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
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
