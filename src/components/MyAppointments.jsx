import React from 'react';

const MyAppointments = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px] lg: mt-25'>
            <div>

            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-extrabold'>My Today Appointments</h1>
                <p className='mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            {/* appointment cards */}
            <div className='bg-white p-8 rounded-2xl mt-8'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-xl font-bold mb-3'>Dr. Cameron Williamson</h3>
                        <p className='text-lg font-medium text-[#0F0F0F99]'>MBBS, MD - General Medicine, DNB</p>
                    </div>
                    <div>
                        <p className='text-lg font-medium text-[#0F0F0F99]'>Appointment Fee : 950 Taka + Vat</p>
                    </div>
                </div>
                <hr className="w-full border-t border-dashed border-gray-300 my-2 lg:my-4" />
                <div className='flex justify-center items-center'>
                    <button className='bg-white border-1 border-[#FF0000] w-full px-5 py-3 rounded-[99px] text-[#FF0000] text-xl font-semibold'>Cancel Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;