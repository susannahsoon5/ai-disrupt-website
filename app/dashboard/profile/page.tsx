import React from 'react';

const ProfilePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">User Information</h2>
                <p className="mb-2"><strong>Name:</strong> John Doe</p>
                <p className="mb-2"><strong>Email:</strong> john.doe@example.com</p>
                <p className="mb-2"><strong>Membership Tier:</strong> Gold</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Community Contributions</h2>
                <ul className="list-disc list-inside">
                    <li>Contributed to AI Research Discussions</li>
                    <li>Participated in Community Events</li>
                    <li>Shared Resources and Articles</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;