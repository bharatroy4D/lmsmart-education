import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Course from "../Pages/Course/Course";
import Blog from "../Pages/Blog/Blog";
import Pages from "../Pages/Pages/Pages";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import OverView from "../Pages/Dashboard/OverView/OverView";
import User from "../Pages/Dashboard/User/User";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Setting from "../Pages/Dashboard/Setting/Setting";
import PrivateRoute from "../Components/privateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/course',
                element: <Course />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/pages',
                element: <Pages />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboardLayout',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <OverView />
            },
            {
                path: 'overview',
                element: <OverView />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'setting',
                element: <Setting />
            },
        ]
    }
])