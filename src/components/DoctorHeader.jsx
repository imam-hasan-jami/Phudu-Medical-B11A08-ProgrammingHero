import React from 'react';

const DoctorHeader = () => {
    return (
        <div className="bg-white max-w-[380px] mx-auto lg:max-w-[1440px] px-10 py-8 lg:px-40 lg:py-20 rounded-3xl mb-8">
            <h1 className='text-[24px] lg:text-[32px] font-extrabold text-center'>Doctor's Profile Details</h1>
            <p className='font-medium text-[#141414B3] text-[14px] lg:text-base text-center mt-4 lg:mt-2'>
                Regular consultations with healthcare professionals are
                essential for maintaining optimal health and preventing <br />
                potential medical issues before they become serious.
            </p>
        </div>
    );
};

export default DoctorHeader;