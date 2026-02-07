'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Summit2025Photos() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsLoggedIn(authStatus === 'true');
    }, []);

    if (!isLoggedIn) {
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6">AI Disrupt Summit 2025 - Photo Gallery</h1>
                
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8 text-center">
                        <svg 
                            className="mx-auto h-20 w-20 text-blue-500 mb-4" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                            />
                        </svg>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Login Required</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Please login to view the AI Disrupt Summit 2025 photo gallery. Access exclusive event photos and relive the highlights from Perth's premier AI community gathering.
                        </p>
                        <a 
                            href="/login?redirect=/summit/2025-recap/photos"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                        >
                            Login to View Photos
                        </a>
                        <p className="mt-4 text-sm text-gray-600">
                            Don't have an account? <Link href="/join" className="text-blue-600 hover:text-blue-800 font-semibold">Join now</Link>
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <a 
                            href="/summit/2025-recap" 
                            className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                        >
                            ← Back to Summit 2025 Recap
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">AI Disrupt Summit 2025 - Photo Gallery</h1>
            
            <p className="text-lg mb-8 text-gray-700">
                Relive the highlights of AI Disrupt Summit 2025 through our photo gallery. From keynote presentations to networking moments, these images capture the energy and innovation of Perth's AI community.
            </p>

            {/* Placeholder for photos - grid layout ready */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Photos will be added here 
                Example structure:
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                        src="/genai-community/images/summit2025/photo1.jpg" 
                        alt="Summit moment" 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                */}
                
                {/* Placeholder message */}
                <div className="col-span-full text-center py-16 bg-gray-50 rounded-lg">
                    <svg 
                        className="mx-auto h-16 w-16 text-gray-400 mb-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                    </svg>
                    <p className="text-xl text-gray-600 font-medium">Photos coming soon!</p>
                    <p className="text-gray-500 mt-2">Check back later for event photos</p>
                </div>
            </div>

            {/* Back to recap link */}
            <div className="mt-12 text-center">
                <a 
                    href="/summit/2025-recap" 
                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                    ← Back to Summit 2025 Recap
                </a>
            </div>
        </div>
    );
}
