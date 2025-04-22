import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const blogsData = useLoaderData();
    const [blogs, setBlogs] = useState(blogsData);

    return (
        <div>
            <div className="text-center">
                <h1 className='text-4xl font-extrabold mt-15'>Blogs</h1>
                <p className='text-gray-500 mt-5 mb-12'>
                    Let's explore some basic concept that will make you a good
                    developer
                </p>
            </div>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default Blogs;