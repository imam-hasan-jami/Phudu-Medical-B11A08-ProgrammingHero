import React, { useState } from 'react';
import Hero from '../components/Hero';
import DoctorsContainer from '../components/DoctorsContainer';
import { useLoaderData } from 'react-router';
import Success from '../components/Success';
import toast from 'react-hot-toast';

const Home = () => {
    const doctorsData = useLoaderData();
    const [doctors, setDoctors] = useState(doctorsData);

    const handleSearch = (e, text) => {
        e.preventDefault();
        if (text === "") return setDoctors(doctorsData);
        const searchedDoctors = doctorsData.filter(
            (doctor) =>
                doctor.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
                doctor.speciality.toLowerCase().split(" ").includes(text.toLowerCase())
        );
        setDoctors(searchedDoctors);
        if (searchedDoctors.length === 0) {
            toast.error("No doctor found for the given name or speciality");
        }
    };

    return (
        <div>
            <Hero handleSearch={handleSearch} />
            <DoctorsContainer doctors={doctors} />
            <Success />
        </div>
    );
};

export default Home;