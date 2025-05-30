import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Shared/Login";
import JobDetails from "../pages/jobDetails/JobDetails";


const router = createBrowserRouter([
    {
    path:'/', 
    Component:RootLayout,
    children: [
        {
        index:true,
        Component:Home
        },
        {
          path:'register',
          Component: Register,
        },
        {
          path: 'login',
          Component: Login
        }, 
        {
          path: '/jobs/:id',
          Component: JobDetails,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        }
    ]
    }
])

export default router;