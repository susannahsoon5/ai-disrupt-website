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
                    <a 
                        href="/summit/2026" 
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Learn About Summit 2026
                    </a>
                </div>
            </div>
        </div>
    );
}
