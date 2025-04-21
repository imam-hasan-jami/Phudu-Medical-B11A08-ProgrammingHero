import successDoctor from "../assets/success-doctor.png"
import successPatients from "../assets/success-patients.png"
import successReview from "../assets/success-review.png"
import successStaffs from "../assets/success-staffs.png"
import CountUp from 'react-countup';

const Success = () => {
    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px] lg:mt-20 mb-12 lg:mb-20'>
            <h1 className='lg:text-[40px] lg:font-extrabold text-center mb-4'>We Provide Best Medical Services</h1>
            <p className='text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-12'>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successDoctor} alt="" />
                    <CountUp className='text-[64px] font-extrabold' start={0} end={199} suffix='+' duration={4} enableScrollSpy={true} scrollSpyDelay={500} scrollSpyOnce={true} />
                    <p className='text-2xl font-semibold'>Total Doctors</p>
                </div>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successPatients} alt="" />
                    <CountUp className='text-[64px] font-extrabold' start={100} end={467} suffix='+' duration={4} enableScrollSpy={true} scrollSpyDelay={500} scrollSpyOnce={true} />
                    <p className='text-2xl font-semibold'>Total Reviews</p>
                </div>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successReview} alt="" />
                    <CountUp className='text-[64px] font-extrabold' start={1200} end={1900} suffix='+' duration={4} enableScrollSpy={true} scrollSpyDelay={500} scrollSpyOnce={true} />
                    <p className='text-2xl font-semibold'>Patients</p>
                </div>
                <div className='flex flex-col items-center bg-white px-12 py-10 rounded-2xl'>
                    <img className='w-15' src={successStaffs} alt="" />
                    <CountUp className='text-[64px] font-extrabold' start={0} end={300} suffix='+' duration={4} enableScrollSpy={true} scrollSpyDelay={500} scrollSpyOnce={true} />
                    <p className='text-2xl font-semibold'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Success;