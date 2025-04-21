import React from 'react';
import { Link } from 'react-router';

const DoctorCard = ({ doctor }) => {
    const { id, doctor_image, name, experience, education, unique_registration_number, availability } = doctor || {};

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];

    const isAvailableToday = availability.includes(currentDay);

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm rounded-2xl">
                <figure className="px-5 lg:px-10 pt-5 lg:pt-10">
                    <img
                        src={doctor_image}
                        alt="Shoes"
                        className="w-[200px] lg:w-[250px] rounded-xl"
                    />
                </figure>
                <div className="px-10 pt-4">
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-2 mb-4'>
                        <p className={`text-[14px] ${isAvailableToday 
                            ? 'bg-[#09982F]/10 text-[#09982F] border-[#09982F]/10' 
                            : 'bg-[#FF3131]/10 text-[#FF3131] border-[#FF3131]/10'} 
                            rounded-[99px] border-1 px-3.5 py-2`}>
                            {isAvailableToday ? 'Available Today' : 'Not Available Today'}
                        </p>
                        <p className='text-[14px] bg-[#176AE5]/10 text-[#176AE5] rounded-[99px] border-1 border-[#176AE5]/10 px-3.5 py-2'>{experience}+ Years Experience</p>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-3">{name}</h2>
                    <p className='text-[16px] font-medium text-center text-[#0F0F0FB3]/70'>{education}</p>
                    <hr className="w-full mx-auto border-t border-dashed border-gray-300 my-2 lg:my-4" />
                    <div className='flex items-start justify-center gap-2 mb-4.5'>
                        <p className='lg:text-3xl text-[#0F0F0FB3]/70'>®</p>
                        <p className='lg:text-[18px] text-[#0F0F0FB3]/70'>Reg No: {unique_registration_number}</p>
                    </div>
                    <div className="flex justify-center mb-4 lg:mb-8">
                        <Link to={`/doctor-details/${id}`}>
                            <button className="btn bg-transparent rounded-[99px] border-1 border-[#176AE5] text-[#176AE5] text-[20px] w-full px-[20px] py-[12px]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;