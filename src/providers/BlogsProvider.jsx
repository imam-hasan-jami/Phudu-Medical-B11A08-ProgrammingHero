import React, { useState } from 'react';
import { BlogsContext } from './Contexts';

const BlogsProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    return (
        <BlogsContext.Provider value={{ blogs, setBlogs }}>
            { children }
        </BlogsContext.Provider>
    );
};

export default BlogsProvider;