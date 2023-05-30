import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/User/Login";
import Registation from "../pages/User/Registation";
import PrivateRoute from "../providers/PrivateRoute";
import About from "../pages/About/About";
import Deshboard from "../Layout/Deshboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element:<Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            // {
            //     path: 'order/:category',
            //     element: <PrivateRoute><Order></Order></PrivateRoute>
            // },
            {
                path: 'about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registation></Registation>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Deshboard></Deshboard>,
        children: [
            {
                path: 'mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            }
        ]
    },
]);