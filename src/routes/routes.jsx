import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

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
            }
        ]
    }
])

export default router;