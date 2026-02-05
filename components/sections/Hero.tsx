'use client';

import React from 'react';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/ai-disrupt-website' : '';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center overflow-hidden">
            
            {/* Background image with opacity */}
            <div className="absolute inset-0 opacity-30">
                <Image
                    src={`${basePath}/images/perth-skyline.png`}
                    alt="Perth Skyline"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="absolute left-20 top-1/4 transform -translate-y-1/2 rotate-12 w-72 h-72 z-10">          
                <Image
                    src={`${basePath}/images/quokka.jpg.png`}
                    alt="Quokka"
                    width={288}
                    height={288}
                    className="object-contain rounded-xl" 
                />
            </div>

            {/* Main content */}
            <div className="max-w-4xl z-10 px-6">
                <p className="font-body text-2xl mb-4"> 
                    Join the
                </p>
                <h1 className="font-heading text-7xl font-bold mb-6 whitespace-nowrap" style={{
                    textShadow: '-2px -2px 0 #374151, 2px -2px 0 #374151, -2px 2px 0 #374151, 2px 2px 0 #374151, 0 -2px 0 #374151, 0 2px 0 #374151, -2px 0 0 #374151, 2px 0 0 #374151'
                }}>
                    AI DISRUPT COMMUNITY
                </h1>
                <p className="font-body text-2xl mb-8">
                    Connect with like-minded individuals, share knowledge, and explore the future of AI together.
                </p>
                <a
                    href="/join"
                    className="inline-block bg-white text-blue-500 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition font-body text-xl"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default Hero;
