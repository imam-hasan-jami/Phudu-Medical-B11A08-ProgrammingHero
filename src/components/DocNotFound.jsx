import React from 'react';
import { Link } from 'react-router';

const DocNotFound = () => {
    return (
        <div className='bg-white max-w-[380px] mx-auto lg:max-w-[1440px] p-8 mt-10 rounded-2xl'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-extrabold mt-10'>No Doctor Found!</h1>
                <p className='mt-5 text-gray-500'>No Doctor Found For The Given ID</p>
                <Link to={"/"}>
                    <button className='bg-[#176AE5] text-white text-2xl font-semibold px-7 py-3 mt-14 mb-10 rounded-[99px] cursor-pointer'>View All Doctors</button>
                </Link>
            </div>
        </div>
    );
};

export default DocNotFound;