import Link from 'next/link';

export default function Summit2025Recap() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">AI Disrupt Summit 2025 Recap</h1>
            
            <div className="prose max-w-none">
                <p className="text-lg mb-6">
                    On December 5, 2025, Build Club Perth x Bloom x Curtin Entrepreneurs brought together 180+ passionate AI builders, founders, startups, and investors for an unforgettable day at St Catherine's College, Curtin University.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Event Highlights</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">🎤 Keynotes & Talks</h3>
                        <p>Thought-provoking presentations from leading AI practitioners sharing their insights on the future of AI development and innovation.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">🛠 Hands-on Workshops</h3>
                        <p>Interactive sessions where builders got their hands dirty with cutting-edge AI tools and techniques.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">🚀 Startup Showcase</h3>
                        <p>Local AI startups demonstrated their innovative solutions and connected with potential investors and collaborators.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">💡 Hackathon</h3>
                        <p>A collaborative hackathon focused on solving real-world problems with AI technology.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">By the Numbers</h2>
                <ul className="list-disc list-inside mb-6 text-lg space-y-2">
                    <li>180+ attendees from across Western Australia</li>
                    <li>25+ speakers and workshop facilitators</li>
                    <li>15+ startup booths</li>
                    <li>Full-day hackathon with multiple teams</li>
                </ul>

                <div className="flex flex-wrap gap-4 justify-center my-8">
                    <Link 
                        href="/login" 
                        className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        View Photo Gallery
                    </Link>
                    <Link 
                        href="/login" 
                        className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Watch Videos
                    </Link>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Community Impact</h2>
                <p className="text-lg mb-6">
                    AI Disrupt Summit 2025 brought together Perth's AI ecosystem for meaningful connections, knowledge sharing, and collaboration. The event reinforced Western Australia's position as a growing hub for AI innovation and entrepreneurship.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="mb-4">
                        A huge thank you to all attendees, speakers, volunteers, and sponsors who made AI Disrupt Summit 2025 a success.
                    </p>
                    <p className="font-semibold">
                        See you at AI Disrupt Summit 2026!
                    </p>
                </div>

                <div className="text-center mt-8">
                    <Link 
                        href="/summit/2026" 
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Learn About Summit 2026
                    </Link>
                </div>
            </div>
        </div>
    );
}
