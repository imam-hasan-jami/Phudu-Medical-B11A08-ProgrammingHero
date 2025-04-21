import React from "react";

const AppointmentBooking = () => {
    return (
        <div className="bg-white max-w-[380px] mx-auto lg:max-w-[1440px] p-8 rounded-3xl mb-20">
            <h1 className="text-2xl font-extrabold text-center">
                Book an Appointment
            </h1>
            <hr className=" border-t border-dashed border-gray-300 my-2 lg:my-4" />
            <div className="flex justify-between items-center">
                <p className="text-[18px] font-bold">Availability</p>
                <p className="bg-[#09982F]/10 text-[#09982F] text-[14px] font-medium border-[#09982F]/10 rounded-[99px] border-1 px-3.5 py-2">
                    Doctor Available Today
                </p>
            </div>
            <hr className=" border-t border-dashed border-gray-300 my-2 lg:my-4" />
            <p className="bg-[#FFA0001A] text-[#FFA000] text-[14px] font-medium w-7/10 px-4 py-2 rounded-[99px] border-1 border-[#FFA000]/20">
                ⓘ Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
            </p>
            <button className="btn bg-[#176AE5] rounded-[99px] w-full text-white text-[20px] px-[20px] py-[14px] mt-[40px] mb-6">Book Appointment Now</button>
        </div>
    );
};

export default AppointmentBooking;
