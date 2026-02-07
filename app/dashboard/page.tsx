'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const DashboardPage: React.FC = () => {
    const [userEmail, setUserEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        const email = localStorage.getItem('userEmail');
        
        if (authStatus !== 'true') {
            router.push('/login');
        } else {
            setUserEmail(email || '');
        }
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
                <p className="text-lg text-gray-700 mb-4">Welcome back, {userEmail}!</p>
                <p className="text-gray-600 mb-6">Here you can manage your profile, view community updates, and access resources.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">🎯 Your Profile</h3>
                        <p className="text-sm text-gray-600">Manage your account settings and preferences</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">📅 Upcoming Events</h3>
                        <p className="text-sm text-gray-600">See events you're registered for</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">📸 Summit Media</h3>
                        <p className="text-sm text-gray-600">Access exclusive photos and videos</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">💬 Community</h3>
                        <p className="text-sm text-gray-600">Connect with other members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;