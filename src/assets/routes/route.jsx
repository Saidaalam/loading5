import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import SpecialOffers from "../pages/SpecialOffer/SpecialOffers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/estates.json'),
            },
            {
                path:"/estateDetails/:id" ,
                element:<PrivateRoutes><EstateDetails /></PrivateRoutes> ,
            },
            {
                path:"/offer" ,
                element:<PrivateRoutes><SpecialOffers/></PrivateRoutes> ,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
]);

export default router;
