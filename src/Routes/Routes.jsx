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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import Edit from "../pages/Dashboard/ManageItem/Edit";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";

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
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addItem',
                element: <AddItem></AddItem>
            },
            {
                path: 'manageItem',
                element: <ManageItem></ManageItem>
            }
            ,
            {
                path: 'manageBooking',
                element: <ManageBooking></ManageBooking>
            }
            ,
            {
                path: 'edit/:_id',
                element: <Edit></Edit>,
                // loader: ({params}) => fetch(`http://localhost:5000/menu/${params._id}`)
                loader: ({params}) => fetch(`https://bistro-boss-server-sandy.vercel.app/menu/${params._id}`)
            },
            {
                path: 'home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'myhome',
                element: <UserHome></UserHome>
            }
        ]
    },
]);