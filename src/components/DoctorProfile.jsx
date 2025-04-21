import React from 'react';
import profileImg from '../assets/doctor-sample.png'

const DoctorProfile = () => {
    return (
        <div className="bg-white max-w-[380px] mx-auto lg:max-w-[1440px] p-8 rounded-3xl mb-6">
            <div className="bg-white flex items-center gap-6 p-6 rounded-3xl">
                <img src={profileImg} alt="" />
                <div className="w-full">
                    <h1 className="text-[32px] font-extrabold">
                        Dr. Cameron Williamson
                    </h1>
                    <p className="text-[#0F0F0F99] text-[18px] font-medium mt-3">
                        MBBS, MD <br /> General Medicine, DNB
                    </p>
                    <p className="text-[#0F0F0F99] text-[18px] font-medium mt-3">
                        Working at
                    </p>
                    <h3 className="text-[18px] font-medium mt-1">
                        TMSS Medical College & Rafatullah Community Hospital,
                        Bogura
                    </h3>
                    <hr className="w-9/10 border-t border-dashed border-gray-300 my-2 lg:my-4" />
                    <div className="flex gap-2 mb-4.5">
                        <p className="lg:text-3xl text-[#0F0F0FB3]/70 font-medium">
                            ®
                        </p>
                        <p className="lg:text-[18px] text-[#0F0F0FB3]/70 font-medium">
                            Reg No: BD 12451254
                        </p>
                    </div>
                    <hr className="w-9/10 border-t border-dashed border-gray-300 my-2 lg:my-4" />
                    <div className="flex items-center gap-4">
                        <p className="font-bold">Availability</p>
                        <p className="bg-[#FFA0001A] text-[#FFA000] text-[14px] font-medium px-3.5 py-2 rounded-[99px] border-1 border-[#FFA000]/20">
                            Sunday
                        </p>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <p className='font-bold'>Consultation Fee:</p>
                        <p className='text-[#176AE5] font-extrabold'>Taka : 273  <span className='text-[#14141480] font-normal'>(incl. Vat)</span> <span className='font-normal'>Per consultation</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;