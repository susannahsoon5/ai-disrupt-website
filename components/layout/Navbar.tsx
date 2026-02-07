"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isSummitOpen, setIsSummitOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const summitRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        // Check authentication status
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus === 'true');

        const handleClickOutside = (event: MouseEvent) => {
            if (summitRef.current && !summitRef.current.contains(event.target as Node)) {
                setIsSummitOpen(false);
            }
            if (eventsRef.current && !eventsRef.current.contains(event.target as Node)) {
                setIsEventsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userEmail');
        setIsAuthenticated(false);
        router.push('/');
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    GenAI community
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                    <div className="relative inline-block" ref={eventsRef}>
                        <button
                            onClick={() => setIsEventsOpen(!isEventsOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            Events
                        </button>
                        {isEventsOpen && (
                            <div className="absolute top-full mt-2 bg-gray-700 rounded-md shadow-lg z-10 min-w-[150px]">
                                <Link href="/events/monthly" onClick={() => setIsEventsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600">
                                    Upcoming
                                </Link>
                                <Link href="/events/past" onClick={() => setIsEventsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600">
                                    Past Events
                                </Link>
                                <Link href="/events/workshops" onClick={() => setIsEventsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600">
                                    Workshops
                                </Link>
                                <Link href="/events/hackathons" onClick={() => setIsEventsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600">
                                    Hackathons
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/resources/blog" className="text-gray-300 hover:text-white">Blog</Link>
                    <Link href="/community-champions" className="text-gray-300 hover:text-white">Champions</Link>
                    <div className="relative inline-block" ref={summitRef}>
                        <button
                            onClick={() => setIsSummitOpen(!isSummitOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            Summit
                        </button>
                        {isSummitOpen && (
                            <div className="absolute top-full mt-2 bg-gray-700 rounded-md shadow-lg z-10 min-w-[150px]">
                                <Link href="/summit/2025" onClick={() => setIsSummitOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600">
                                    Summit 2025
                                </Link>
                                <Link href="/summit/2025-recap" onClick={() => setIsSummitOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600">
                                    Summit 2025 Recap
                                </Link>
                                <Link href="/summit/2026" onClick={() => setIsSummitOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600">
                                    Summit 2026
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    <Link href="/join" className="text-gray-300 hover:text-white">Join</Link>
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="text-gray-300 hover:text-white">Logout</button>
                    ) : (
                        <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;