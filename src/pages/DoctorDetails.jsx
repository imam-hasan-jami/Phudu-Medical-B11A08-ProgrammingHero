import React from 'react';
import DoctorHeader from '../components/DoctorHeader';
import DoctorProfile from '../components/DoctorProfile';
import AppointmentBooking from '../components/AppointmentBooking';
// import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
    // const doctorsData = useLoaderData();
    // const { id } = useParams();
    // const singleDoctor = doctorsData.find(doctor => doctor.id === parseInt(id));

    // const { doctor_image, name, education, works_at, unique_registration_number, availability, consultation_fee } = singleDoctor || {};

    return (
        <div>
            <DoctorHeader />
            <DoctorProfile />
            <AppointmentBooking />
        </div>
    );
};

export default DoctorDetails;