import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorProfile = () => {
    const doctorsData = useLoaderData();
    const { id } = useParams();
    const singleDoctor = doctorsData.find(doctor => doctor.id === parseInt(id));
    const { doctor_image, name, education, works_at, unique_registration_number, availability, consultation_fee } = singleDoctor || {};

    return (
        <div className="bg-white max-w-[380px] mx-auto lg:max-w-[1440px] p-4 lg:p-8 rounded-3xl mb-6">
            <div className="bg-white flex flex-col lg:flex-row items-center gap-6 p-3 lg:p-6 rounded-3xl">
                <img className='w-auto lg:w-[335px] h-[383px] rounded-2xl' src={doctor_image} alt="" />
                <div className="w-full">
                    <h1 className="text-[27px] lg:text-[32px] font-extrabold">
                        {name}
                    </h1>
                    <p className="text-[#0F0F0F99] text-[18px] font-medium mt-3">
                        {education}
                    </p>
                    <p className="text-[#0F0F0F99] text-[18px] font-medium mt-3">
                        Working at
                    </p>
                    <h3 className="text-[18px] font-medium mt-1">
                        {works_at}
                    </h3>
                    <hr className="w-9/10 border-t border-dashed border-gray-300 my-2 lg:my-4" />
                    <div className="flex gap-2 mb-4.5">
                        <p className="lg:text-3xl text-[#0F0F0FB3]/70 font-medium">
                            ®
                        </p>
                        <p className="lg:text-[18px] text-[#0F0F0FB3]/70 font-medium">
                            Reg No: {unique_registration_number}
                        </p>
                    </div>
                    <hr className="w-9/10 border-t border-dashed border-gray-300 my-2 lg:my-4" />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        <p className="font-bold">Availability</p>
                        {
                            availability.map((day, index) => (
                                
                                <p key={index} className="bg-[#FFA0001A] text-[#FFA000] text-[14px] font-medium px-3.5 py-2 rounded-[99px] border-1 border-[#FFA000]/20">
                                    {day}
                                </p>
                            ))
                        }
                    </div>
                    <div className='flex flex-col lg:flex-row gap-1 lg:gap-4 mt-4'>
                        <p className='font-bold'>Consultation Fee:</p>
                        <p className='text-[#176AE5] font-extrabold'>Taka : {consultation_fee}  <span className='text-[#14141480] font-normal'>(incl. Vat)</span> <span className='font-normal'>Per consultation</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;