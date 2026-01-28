export default function MonthlyEvents() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-lg mb-6">
                We host a mix of events including monthly co-working meetups, casual cafe sessions, hands-on workshops, and networking drinks—all designed to build generative AI learning and founder culture in the AI Disrupt community. Whether you're looking to learn, collaborate, or connect with fellow builders, there's something for everyone. Check out our upcoming events and RSVP below!
            </p>
            
            <div className="flex justify-center mb-8">
                <iframe
                    src="https://luma.com/embed/calendar/cal-pG7wnq6kgPuxGeL/events"
                    width="100%"
                    height="450"
                    style={{ border: '1px solid #bfcbda88', borderRadius: '4px', maxWidth: '800px' }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                ></iframe>
            </div>
        </div>
    );
}
