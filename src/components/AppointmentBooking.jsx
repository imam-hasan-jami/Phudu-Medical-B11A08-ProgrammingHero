import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { bookAppointment, getBookedAppointments } from "../utils";
import toast from "react-hot-toast";

const AppointmentBooking = () => {
    const doctorsData = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const singleDoctor = doctorsData.find(doctor => doctor.id === parseInt(id));
    const { name, availability } = singleDoctor || {};
    const [isBooked, setIsBooked] = useState(false);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];

    const isAvailableToday = availability.includes(currentDay);

    useEffect(() => {
        const bookedAppointments = getBookedAppointments();
        const alreadyBooked = bookedAppointments.find(app => app.id === singleDoctor.id);
        setIsBooked(alreadyBooked);
    }, [singleDoctor]);

    const handleBookAppointment = () => {
        if (!isAvailableToday) {
            toast.error(
                `${name} is not available today. Please check back another day.`
            );
        } else if (isBooked) {
            toast.error(`You have already booked an appointment with ${name}`);
        } else {
            bookAppointment(singleDoctor);
            setIsBooked(true);
            navigate("/my-bookings");
            toast.success(`Appointment with ${name} booked successfully`);
        }
    };

    const getButtonStyle = () => {
        if (isBooked) {
            return "bg-green-600";
        }
        return isAvailableToday ? "bg-[#176AE5]" : "bg-gray-500 cursor-not-allowed";
    }

    const getButtonText = () => {
        if (isBooked) {
            return "Appointment Booked Successfully";
        }
        return isAvailableToday ? "Book Appointment Now" : "Appointment Can't Be Booked Now";
    }

    return (
        <div className="bg-white max-w-[380px] mx-auto lg:max-w-[1440px] p-4 lg:p-8 rounded-3xl mb-20">
            <h1 className="text-2xl font-extrabold text-center">
                Book an Appointment
            </h1>
            <hr className=" border-t border-dashed border-gray-300 my-2 lg:my-4" />
            <div className="flex justify-between items-center">
                <p className="text-[18px] font-bold">Availability</p>
                <p
                    className={`text-[14px] font-medium ${
                        isAvailableToday
                            ? "bg-[#09982F]/10 text-[#09982F] border-[#09982F]/10"
                            : "bg-[#FF3131]/10 text-[#FF3131] border-[#FF3131]/10"
                    }
                                rounded-[99px] border-1 px-3.5 py-2`}
                >
                    {isAvailableToday
                        ? "Doctor Available Today"
                        : "Doctor Not Available Today"}
                </p>
            </div>
            <hr className=" border-t border-dashed border-gray-300 my-2 lg:my-4" />
            <p className="bg-[#FFA0001A] text-[#FFA000] text-[14px] font-medium lg:w-7/10 p-6 lg:px-4 lg:py-2 mt-4 rounded-2xl lg:rounded-[99px] border-1 border-[#FFA000]/20">
                ⓘ Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
            </p>
            <button
                onClick={handleBookAppointment}
                className={`${getButtonStyle()} cursor-pointer rounded-2xl lg:rounded-[99px] w-full text-white text-[18px] px-[20px] py-[14px] mt-[40px] mb-6`}
            >
                {getButtonText()}
            </button>
        </div>
    );
};

export default AppointmentBooking;