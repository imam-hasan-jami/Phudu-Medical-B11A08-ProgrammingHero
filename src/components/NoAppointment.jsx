import React from 'react';
import { Link } from 'react-router';

const NoAppointment = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px] lg: mt-25'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-extrabold'>You Haven't Booked Any Appointment Yet!</h1>
                <p className='font-medium mt-4'>Our platform connects you with verified, experienced doctors across various specialities - all at your convenience.</p>
                <Link to={"/"}>
                    <button className='bg-[#176AE5] text-white text-lg font-semibold px-5 py-3 rounded-xl mt-10 cursor-pointer'>Book An Appointment Now</button>
                </Link>
            </div>
        </div>
    );
};

export default NoAppointment;