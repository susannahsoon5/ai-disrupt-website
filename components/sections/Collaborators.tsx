'use client';

import React from 'react';
import Image from 'next/image';

const Collaborators: React.FC = () => {
    const collaborators = [
        { name: 'Build Club', logo: '/images/Build Club.png', url: 'https://buildclub.com.au' },
        { name: 'Bloom', logo: '/images/Bloom.png.png', url: 'https://bloom.org.au' },
        { name: 'WA Data Science Innovation Hub', logo: '/images/WADSIH logo.png.png', url: 'https://wadsih.org.au' },
        { name: 'Curtin Entrepreneurs', logo: '/images/Curtin Entreprenuers.png.png', url: 'https://entrepreneurs.curtin.edu.au' },
        { name: 'DDD Perth', logo: '/images/DDD Perth.png.png', url: 'https://dddperth.com' },
        { name: 'Roo MLAI', logo: '/images/Roo_MLAI.png', url: 'https://mlai.au' },
        { name: 'West Tech Fest', logo: '/images/West Tech Fest.svg', url: 'https://westtechfest.com.au' },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Collaborators</h2>
                <div className="flex flex-wrap justify-center items-center gap-8 px-4">
                    {collaborators.map((collaborator, index) => (
                        <a 
                            key={index} 
                            href={collaborator.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-40 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={collaborator.logo}
                                alt={collaborator.name}
                                fill
                                className="object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collaborators;
