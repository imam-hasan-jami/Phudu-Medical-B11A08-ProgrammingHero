import React from 'react';
import bannerImg from '../assets/banner-img-1.png';

const Hero = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1600px] lg:mx-auto lg:px-[160px] lg:py-[64px] bg-gradient-to-b from-white/0 to-white border-3 border-white rounded-[24px]'>
            <div>
                <h1 className='font-jakarta-sans text-5xl font-extrabold text-center mb-4'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='font-jakarta-sans font-medium text-center mb-6'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <form action="" className='flex items-center justify-center gap-4 mb-6'>
                <input className='p-[18px] bg-white stroke-[#D1D5DB] rounded-[99px] w-4/10 font-jakarta-sans text-[14px] border border-gray-300' type="text" placeholder='Search any doctor...'/>
                <input className='className="btn bg-[#176AE5] rounded-[99px] font-jakarta-sans font-bold text-white px-[30px] py-3 text-[20px]' type="submit" value="Search Now" />
            </form>

            <div className='lg:flex gap-6'>
                <img className='mb-6 lg:mb-0' src={bannerImg} alt="" />
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;