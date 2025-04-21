import React from 'react';
import bannerImg from '../assets/banner-img-1.png';

const Hero = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1600px] lg:mx-auto py-[30px] lg:px-[160px] lg:py-[64px] lg:mb-20 bg-gradient-to-b from-white/0 to-white border-3 border-white rounded-[24px]'>
            <div>
                <h1 className='font-jakarta-sans text-3xl lg:text-5xl font-extrabold text-center mb-4'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='font-jakarta-sans font-medium text-[14px] lg:text-base text-center mb-6 px-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <form action="" className='flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 mb-6'>
                <input className='p-[10px] lg:p-[18px] bg-white stroke-[#D1D5DB] rounded-[99px] w-9/10 lg:w-4/10 font-jakarta-sans text-[14px] border border-gray-300' type="text" placeholder='Search any doctor...'/>
                <input className='className="btn bg-[#176AE5] rounded-[99px] font-jakarta-sans font-bold text-white px-[30px] py-2 lg:py-3 text-base lg:text-[20px]' type="submit" value="Search Now" />
            </form>

            <div className='w-9/10 mx-auto lg:w-full lg:flex gap-6'>
                <img className='mb-6 lg:mb-0' src={bannerImg} alt="" />
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;