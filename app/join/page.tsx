export default function Join() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Join GenAI Community</h1>
            <p className="text-lg mb-8">
                Become part of Perth's premier AI community. Connect with innovators, builders, and leaders shaping the future of artificial intelligence.
            </p>

            {/* Upcoming Events */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">📅 Upcoming Events</h2>
                <p className="text-lg mb-4">
                    Join us at our next event and connect with the community in person.
                </p>
                <a
                    href="/events/monthly"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    View Upcoming Events
                </a>
            </div>

            {/* Mailing List */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">📧 Join Our Mailing List</h2>
                <p className="text-lg mb-4">
                    Stay updated with the latest news and events from our AI community.
                </p>
                <form className="flex max-w-md">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 rounded-l-md border border-gray-300 focus:outline-none flex-1"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-2 rounded-r-md font-semibold hover:bg-blue-700 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Slack Community */}
            <div>
                <h2 className="text-2xl font-bold mb-4">💬 Join Our Slack Community</h2>
                <p className="text-lg mb-4">
                    Connect with fellow AI enthusiasts, share ideas, and collaborate in real-time.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                    </svg>
                    Join Slack
                </a>
            </div>
        </div>
    );
}
