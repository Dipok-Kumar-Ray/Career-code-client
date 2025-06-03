import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Shared/Login";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/Home/JobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../myPostedJob/MyPostedJobs";




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
        },
        {
          path: 'jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>

        },
        {
          path: 'myApplications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path: 'addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: 'myPostedJobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        }
    ]
    }
])

export default router;