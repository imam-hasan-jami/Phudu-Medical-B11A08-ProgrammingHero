import React, { useEffect, useState } from 'react';
import MyAppointments from '../components/MyAppointments';
import NoAppointment from '../components/NoAppointment';
import { getBookedAppointments, removeAppointment } from '../utils';
import toast from 'react-hot-toast';
import FeeChart from '../components/FeeChart';

const MyBookings = () => {
    const [appointments, setAppointments] = useState([]);
    
    useEffect(() => {
        const storedAppointments = getBookedAppointments();
        setAppointments(storedAppointments);
    },[]);

    const handleRemoveAppointment = (id) => {
        const appointmentToRemove = appointments.find(app => app.id === id);
        const doctorName = appointmentToRemove?.name || "Doctor";

        removeAppointment(id);
        setAppointments(getBookedAppointments());

        toast.success(`Appointment with ${doctorName} cancelled successfully`);
    }

    return (
        <div>
            {
                appointments.length > 0 ? (
                    <div className='max-w-[380px] mx-auto lg:max-w-[1440px] lg:mt-25'>
                        <div className='mt-14 mb-25'>
                            <FeeChart appointments={appointments} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-4xl font-extrabold'>My Today Appointments</h1>
                            <p className='mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                        </div>
                        {
                            appointments.map(appointment => <MyAppointments key={appointment.id} appointment={appointment} handleRemoveAppointment={handleRemoveAppointment} />)
                        }
                    </div>
                ) : (
                    <NoAppointment />
                )
            }
        </div>
    );
};

export default MyBookings;