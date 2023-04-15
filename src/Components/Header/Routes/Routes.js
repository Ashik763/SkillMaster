import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Spinner from '../../Shared/Spinner';
import Home from '../../Pages/Home/Home';
import Courses from '../../Pages/Courses/Courses';
import CourseDetails from '../../CourseDetails/CourseDetails';
import Checkout from '../../Pages/Checkout/Checkout';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import DefaultCourseDetails from '../../DefaultCourseDetails/DefaultCourseDetails';
import NoRoute from '../../NoRoute/NoRoute';
import ComingSoon from '../../ComingSoon/ComingSoon';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
                
            },
            {
                path:'/login',
                element: <Login></Login>
                
            },
            {
                path: '/register',
                element: <Register></Register>,
               
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://skillify-eta.vercel.app/courses'),
                children: [
                    {
                        path:'/courses',
                        redirect:'/courses/1',
                        element: <DefaultCourseDetails></DefaultCourseDetails>
                        
                    },
                    {
                        path:'/courses/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({params}) => fetch(`https://skillify-eta.vercel.app/courses/${params.id}`)
                    }
                ]
            },
            {
                path: "/checkout",
                element: <PrivateRoute><Checkout></Checkout>   </PrivateRoute> 
            }
            
        ]
    },
    {
        path:'/spinner',
        element: <Spinner> </Spinner>
    },
    {
        path: "/blog",
        element: <ComingSoon></ComingSoon>
    },
    {
        path: "/faq",
        element: <ComingSoon></ComingSoon>
    },
    {
        path:'*',
        element:<NoRoute></NoRoute>
    }

   
])

