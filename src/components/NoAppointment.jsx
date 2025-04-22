import React from 'react';

const NoAppointment = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px] lg: mt-25'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-extrabold'>You Haven't Booked Any Appointment Yet!</h1>
                <p className='font-medium mt-4'>Our platform connects you with verified, experienced doctors across various specialities - all at your convenience.</p>
                <button className='bg-[#176AE5] text-white text-lg font-semibold px-5 py-3 rounded-xl mt-10'>Book An Appointment Now</button>
            </div>
        </div>
    );
};

export default NoAppointment;