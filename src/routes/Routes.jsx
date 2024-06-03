import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
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
    }
])

export default router;