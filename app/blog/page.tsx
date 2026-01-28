import React from 'react';

const BlogPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-lg mb-4">Welcome to our blog! Here, we share insights, updates, and stories from our AI community.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for blog posts */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-2xl font-semibold">Blog Post Title</h2>
                    <p className="text-gray-600">Short description of the blog post goes here.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-2xl font-semibold">Blog Post Title</h2>
                    <p className="text-gray-600">Short description of the blog post goes here.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-2xl font-semibold">Blog Post Title</h2>
                    <p className="text-gray-600">Short description of the blog post goes here.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;