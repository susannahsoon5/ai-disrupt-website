'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Summit2025Videos() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsLoggedIn(authStatus === 'true');
    }, []);

    if (!isLoggedIn) {
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6">AI Disrupt Summit 2025 - Videos</h1>
                
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-8 text-center">
                        <svg 
                            className="mx-auto h-20 w-20 text-red-500 mb-4" 
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
                            Please login to watch AI Disrupt Summit 2025 videos. Access exclusive keynote presentations, panel discussions, and session recordings from the event.
                        </p>
                        <a 
                            href="/login?redirect=/summit/2025-recap/videos"
                            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
                        >
                            Login to Watch Videos
                        </a>
                        <p className="mt-4 text-sm text-gray-600">
                            Don't have an account? <Link href="/join" className="text-red-600 hover:text-red-800 font-semibold">Join now</Link>
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
            <h1 className="text-4xl font-bold mb-6">AI Disrupt Summit 2025 - Videos</h1>
            
            <p className="text-lg mb-8 text-gray-700">
                Watch keynote presentations, panel discussions, and highlights from AI Disrupt Summit 2025. Experience the insights and innovation shared by Perth's AI leaders and builders.
            </p>

            {/* Placeholder for videos - grid layout ready */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Videos will be added here 
                Example structure:
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video bg-gray-200">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/VIDEO_ID" 
                            title="Video title"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Video Title</h3>
                        <p className="text-gray-600">Video description</p>
                    </div>
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
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                        />
                    </svg>
                    <p className="text-xl text-gray-600 font-medium">Videos coming soon!</p>
                    <p className="text-gray-500 mt-2">Check back later for keynotes and session recordings</p>
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
