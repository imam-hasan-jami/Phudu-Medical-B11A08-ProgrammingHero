import toast from "react-hot-toast";

export const getBookedAppointments = () => {
    const appointments = localStorage.getItem("appointments");
    if (appointments) return JSON.parse(appointments);
    return [];
};

export const bookAppointment = (doctor) => {
    const appointments = getBookedAppointments();
    const isExist = appointments.find(doc => doc.id === doctor.id);
    if (isExist) return toast.error("You have already booked this appointment");
    appointments.push(doctor);
    // toast.success("Appointment booked successfully");
    localStorage.setItem("appointments", JSON.stringify(appointments));
};

export const removeAppointment = (id) => {
    const appointments = getBookedAppointments();
    const remainingAppointments = appointments.filter(app => app.id !== id);
    localStorage.setItem("appointments", JSON.stringify(remainingAppointments));
    // toast.success("Appointment cancelled successfully");
};