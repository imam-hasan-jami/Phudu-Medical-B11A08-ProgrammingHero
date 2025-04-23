import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px] flex justify-center items-center h-screen'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default LoadingSpinner;