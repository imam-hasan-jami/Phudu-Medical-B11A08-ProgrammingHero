import React, { useState } from 'react';
import Hero from '../components/Hero';
import DoctorsContainer from '../components/DoctorsContainer';
import { useLoaderData } from 'react-router';
import Success from '../components/Success';

const Home = () => {
    const doctorsData = useLoaderData();
    const [doctors, setDoctors] = useState(doctorsData);


    return (
        <div>
            <Hero />
            <DoctorsContainer doctors={doctors} />
            <Success />
        </div>
    );
};

export default Home;