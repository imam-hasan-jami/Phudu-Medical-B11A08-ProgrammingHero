import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px] min-h-screen'>
            <Navbar />
            <div className='flex flex-col justify-center items-center mt-35'>
                <p className='text-2xl text-[#176AE5] font-semibold'>OOPS...</p>
                <h1 className='text-[180px] text-[#176AE5] font-bold mt-[-40px]'>404</h1>
                <h1 className='text-[40px] text-[#176AE5] font-bold mt-[-30px]'>Page Not Found</h1>
                <Link to={"/"}>
                    <button className='bg-[#176AE5] text-white text-2xl px-5 py-3 rounded-[99px] mt-14 cursor-pointer'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;