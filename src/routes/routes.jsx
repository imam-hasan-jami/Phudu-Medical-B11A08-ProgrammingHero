import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import MyBookings from '../pages/MyBookings';
import Blogs from '../pages/Blogs';
import DoctorDetails from '../pages/DoctorDetails';
import DocNotFound from '../components/DocNotFound';
import LoadingSpinner from '../components/LoadingSpinner';

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
                hydrateFallbackElement: <LoadingSpinner />,
                loader: () => fetch('../doctors.json'),
            },
            {
                path: "my-bookings",
                hydrateFallbackElement: <LoadingSpinner />,
                Component: MyBookings,
            },
            {
                path: "blogs",
                Component: Blogs,
                hydrateFallbackElement: <LoadingSpinner />,
                loader: () => fetch('../blogs.json'),
            },
            {
                path: "doctor-details/:id",
                errorElement: <DocNotFound />,
                Component: DoctorDetails,
                hydrateFallbackElement: <LoadingSpinner />,
                loader: () => fetch('../doctors.json'),
            }
        ]
    }
])

export default router;