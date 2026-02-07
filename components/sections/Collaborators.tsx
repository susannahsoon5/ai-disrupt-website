'use client';

import React from 'react';
import Image from 'next/image';

const basePath = '/genai-community';

const Collaborators: React.FC = () => {
    const collaborators = [
        { name: 'Build Club', logo: `${basePath}/images/build-club.png`, url: 'https://buildclub.com.au' },
        { name: 'Bloom', logo: `${basePath}/images/bloom.png`, url: 'https://bloom.org.au' },
        { name: 'WA Data Science Innovation Hub', logo: `${basePath}/images/wadsih-logo.png`, url: 'https://wadsih.org.au' },
        { name: 'Curtin Entrepreneurs', logo: `${basePath}/images/curtin-entrepreneurs.png`, url: 'https://entrepreneurs.curtin.edu.au' },
        { name: 'DDD Perth', logo: `${basePath}/images/ddd-perth.png`, url: 'https://dddperth.com' },
        { name: 'Roo MLAI', logo: `${basePath}/images/roo-mlai.png`, url: 'https://mlai.au' },
        { name: 'West Tech Fest', logo: `${basePath}/images/west-tech-fest.svg`, url: 'https://westtechfest.com.au' },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Supporters</h2>
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
