import React from 'react';

const MyAppointments = ({ appointment, handleRemoveAppointment }) => {
    const { id, name, education, speciality, consultation_fee } = appointment;

    return (
        <div className='bg-white p-8 rounded-2xl mt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl font-bold mb-3'>{name}</h3>
                    <p className='text-lg font-medium text-[#0F0F0F99]'>{education}</p>
                    <p className='text-lg font-medium text-[#0F0F0F99]'>{speciality}</p>
                </div>
                <div>
                    <p className='text-lg font-medium text-[#0F0F0F99]'>Appointment Fee : {consultation_fee} Taka + Vat</p>
                </div>
            </div>
            <hr className="w-full border-t border-dashed border-gray-300 my-2 lg:my-4" />
            <div className='flex justify-center items-center'>
                <button onClick={() => handleRemoveAppointment(id)} className='bg-white border-1 border-[#FF0000] w-full px-5 py-3 rounded-[99px] text-[#FF0000] text-xl font-semibold cursor-pointer'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default MyAppointments;