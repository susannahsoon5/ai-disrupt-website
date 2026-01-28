import React from 'react';
import EventsList from '@/components/sections/EventsList';

const EventsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Upcoming and Past Events</h1>
            <EventsList />
        </div>
    );
};

export default EventsPage;