import React from 'react';
import DoctorHeader from '../components/DoctorHeader';
import DoctorProfile from '../components/DoctorProfile';
import AppointmentBooking from '../components/AppointmentBooking';

const DoctorDetails = () => {

    return (
        <div>
            <DoctorHeader />
            <DoctorProfile />
            <AppointmentBooking />
        </div>
    );
};

export default DoctorDetails;