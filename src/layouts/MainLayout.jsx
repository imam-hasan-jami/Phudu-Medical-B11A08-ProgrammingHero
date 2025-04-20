import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-543px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;