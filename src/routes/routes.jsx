import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import MyBookings from '../pages/MyBookings';
import Blogs from '../pages/Blogs';
import DoctorDetails from '../pages/DoctorDetails';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                // path: "/",
                index: true,
                Component: Home,
                hydrateFallbackElement: <div>Loading, please wait....</div>,
                loader: () => fetch('../doctors.json'),
            },
            {
                path: "my-bookings",
                Component: MyBookings,
            },
            {
                path: "blogs",
                Component: Blogs,
            },
            {
                path: "doctor-details/:id",
                Component: DoctorDetails
            }
        ]
    }
])

export default router;