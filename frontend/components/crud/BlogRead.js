import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';

const BlogRead = () => {
    return (
        <>
            <p>update delete blogs</p>
        </>
    );
};

export default BlogRead;