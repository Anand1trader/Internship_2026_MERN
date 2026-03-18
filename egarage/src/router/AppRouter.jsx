import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { UserNavbar } from "../components/user/UserNavbar";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { About } from "../components/user/About";
import { Services } from "../components/user/Services";
import { UserPanel } from "../components/admin/UserPanel";
import { Garages } from "../components/admin/Garages";
import { Bookings } from "../components/admin/Bookings";
import { Payments } from "../components/admin/Payments";
import { AdminServices } from "../components/admin/AdminServices";
import { GetApiDemo } from "../components/user/GetApiDemo";
import { UseEffectDemo } from "../components/user/UseEffectDemo";
import { Contact } from "../components/user/Contact";
const router = createBrowserRouter([
    {path:"/", element:<Login/>},
    {path:"/signup", element:<Signup/>},
    {
        path:"/user", element:<UserNavbar/>,
        children:[
            {path:"about", element:<About/>},
            {path:"services", element:<Services/>},
            {path:"contact", element:<Contact/>},
            {path:"getapidemo", element:<GetApiDemo/>},
            {path:"useeffectdemo", element:<UseEffectDemo/>}
        ]
    },
    {
        path:"/admin", element:<AdminSidebar/>,
        children:[
            {path:"userpanel", element:<UserPanel/>},
            {path:"garages", element:<Garages/>},
            {path:"bookings", element:<Bookings/>},
            {path:"adminservices", element:<AdminServices/>},
            {path:"payments", element:<Payments/>}
        ]
    }
])
const AppRouter = () => {
    
    return<RouterProvider router={router}></RouterProvider>
}
export default AppRouter