import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const DoctorsContainer = ({ doctors }) => {
    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayDoctors(doctors);
        } else {
            setDisplayDoctors(doctors.slice(0, 6));
        }
    }, [doctors, showAll]);

    return (
        <div className="max-w-[380px] mx-auto lg:max-w-[1440px]">
            <h1 className="font-bold lg:font-extrabold text-3xl lg:text-[40px] text-center mb-4">
                Our Best Doctors
            </h1>
            <p className="text-center text-[14px] lg:text-base mb-6 lg:mb-8">
                Our platform connects you with verified, experienced doctors
                across various specialties — all at your convenience. Whether
                it's a <br /> routine checkup or urgent consultation, book
                appointments in minutes and receive quality care you can trust.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6">
                {displayDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>

            <div className="flex items-center justify-center mt-4 lg:mt-12">
                <button
                    type="submit"
                    onClick={() => {
                        setShowAll((prv) => !prv);
                        if (showAll) {
                            window.scrollTo(0, 860);
                        }
                    }}
                    className="btn bg-[#176AE5] rounded-[99px] font-jakarta-sans text-white text-[20px] px-[30px] py-[28px]"
                >
                    {showAll ? "View Less Doctors" : "View All Doctors"}
                </button>
            </div>
        </div>
    );
};

export default DoctorsContainer;