import React from 'react';
import { LuCalendarHeart } from "react-icons/lu";

const BlogCard = ({ blog }) => {
    const { question, answer, date } = blog;

    return (
        <div className='max-w-[380px] mx-auto lg:max-w-[1440px]'>
            <div className='bg-white px-5 py-6 rounded-2xl mt-5'>
                <p className='text-xl font-bold'>{question}</p>
                <hr className="w-full border-t border-dashed border-gray-300 my-2 lg:my-5" />
                <p className='text-[#176AE5] font-semibold mb-2'>Answer:</p>
                <p className='text-xl'>{answer}</p>
                <hr className="w-full border-t border-dashed border-gray-300 my-2 lg:my-5" />
                <div className='flex items-center gap-2 text-gray-500'>
                    <LuCalendarHeart size={21} />
                    <p>Added at </p>
                    <p className='font-semibold'>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;