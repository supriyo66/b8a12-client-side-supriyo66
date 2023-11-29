import {
    createBrowserRouter
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Error from "../Pages/Error/Error";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children:[
          {
  
          path: "/",
          element:<Home></Home>
  
        },
          {
  
          path: "menu",
          element:<PrivateRoute><Menu></Menu></PrivateRoute>
  
        },
          {
  
          path: "/order/:category",
          element:<PrivateRoute><Order></Order></PrivateRoute>
  
        },
          {
  
          path: "/login",
          element:<Login></Login>
  
        },
          {
  
          path: "/signup",
          element:<Register></Register>
  
        },
          {
  
          path: "/secret",
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
  
        },
    ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
      {
        path:'cart',
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path:'users',
        element:<PrivateRoute><Allusers></Allusers></PrivateRoute>
      },
      
    ]
    }
  ]);