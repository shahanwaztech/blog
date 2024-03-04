'use client'
import React from 'react';
import { useParams } from 'next/navigation';

const BlogDetailView: React.FC<any> = () => {
    const {slug} = useParams();

    return (
        <div>{slug}</div>
    );
}

export default BlogDetailView;
