import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import AllArtCraft from "../components/pages/allArt&Carft/AllArtCraft";
import AddCraft from "../components/pages/add-craft/AddCraft";
import MyArtAndCraft from "../components/pages/my-art-craft/MyArtAndCraft";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import CraftDetailsPage from "../components/pages/detail-page/craftDetailsPage";
import PrivetRoute from "./PrivetRoute";
import UpdateCraft from "../components/pages/updateCraft/UpdateCraft";
import Blog from "../components/pages/blog/Blog";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element:<Home/>,
                loader: () => fetch('https://art-and-craft-store-server-site.vercel.app/products')
            },
            {
                path:'/all-art-&-craft',
                element: <PrivetRoute><AllArtCraft/></PrivetRoute>,
                loader: () => fetch('https://art-and-craft-store-server-site.vercel.app/products')
            },
            {
                path:'/add-craft',
                element:<AddCraft/>
            },
            {
                path:'/my-art&craft',
                element:<PrivetRoute><MyArtAndCraft/></PrivetRoute>,
                loader: () => fetch('https://art-and-craft-store-server-site.vercel.app/products')
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/products/:id',
                element:<PrivetRoute><CraftDetailsPage/></PrivetRoute>,
                loader: ({params}) => fetch(`https://art-and-craft-store-server-site.vercel.app/products/${params.id}`)
            },
            {
                path:'/update/:id',
                element: <UpdateCraft/>,
                loader: ({params}) => fetch(`https://art-and-craft-store-server-site.vercel.app/products/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    }
]);

export default router;