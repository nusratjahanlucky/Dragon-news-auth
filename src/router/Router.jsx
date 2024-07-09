import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import Home from "../Home";
import Login from "../Login/Login";
import Registers from "../Registers/Registers";
import News from "../News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
           
            {
                path:'/registers',
                element:<Registers></Registers>
            }
        ]
    }
]);
export default router;