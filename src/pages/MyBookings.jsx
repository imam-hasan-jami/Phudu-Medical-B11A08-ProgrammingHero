import React from 'react';
import MyAppointments from '../components/MyAppointments';
import NoAppointment from '../components/NoAppointment';

const MyBookings = () => {
    return (
        <div>
            <NoAppointment />
            <MyAppointments />
        </div>
    );
};

export default MyBookings;