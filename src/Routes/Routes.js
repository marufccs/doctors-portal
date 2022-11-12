import { createBrowserRouter, Routes } from "react-router-dom";
import Layouts from "../Main/Layouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default router;