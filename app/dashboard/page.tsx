import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg text-gray-700">Welcome to your dashboard! Here you can manage your profile, view community updates, and access resources.</p>
        </div>
    );
};

export default DashboardPage;