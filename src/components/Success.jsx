import React from 'react';
import successDoctor from "../assets/success-doctor.png"
import successPatients from "../assets/success-patients.png"
import successReview from "../assets/success-review.png"
import successStaffs from "../assets/success-staffs.png"
const Success = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px] lg:mt-20 lg:mb-20'>
            <h1 className='lg:text-[40px] lg:font-extrabold text-center mb-4'>We Provide Best Medical Services</h1>
            <p className='text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-12'>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successDoctor} alt="" />
                    <h1 className='text-[64px] font-extrabold'>199+</h1>
                    <p className='text-2xl font-semibold'>Total Doctors</p>
                </div>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successPatients} alt="" />
                    <h1 className='text-[64px] font-extrabold'>467+</h1>
                    <p className='text-2xl font-semibold'>Total Reviews</p>
                </div>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successReview} alt="" />
                    <h1 className='text-[64px] font-extrabold'>1900+</h1>
                    <p className='text-2xl font-semibold'>Patients</p>
                </div>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successStaffs} alt="" />
                    <h1 className='text-[64px] font-extrabold'>300+</h1>
                    <p className='text-2xl font-semibold'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Success;