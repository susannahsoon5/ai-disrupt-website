const basePath = '/genai-community';

export default function Oct2025Drinks() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Build Club Perth - October Recap</h1>
            <p className="text-gray-600 mb-6">October 2025</p>
            
            <img 
                src={`${basePath}/images/2025-oct-hero.jpeg`} 
                alt="Build Club Perth October 2025 Meetup at Curtin Entrepreneurs Hub" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold text-gray-800">
                    Another stellar turnout at the fantastic Curtin Entrepreneurs Hub!
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">📍 New Venue!</h2>
                    <p className="mb-3">
                        This month, Build Club Perth was held at the awesome <strong>Curtin Entrepreneurs Hub</strong> - a fantastic facility for founders to meet and collaborate.
                    </p>
                    <p className="text-gray-700">
                        Special thanks to <strong>Danelle Cross</strong> and <strong>Anna Lee</strong> for hosting us!
                    </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🐰 Featured Talk: Easter Bunny Bunny.ai</h2>
                    <p className="mb-3">
                        <strong>David Smith</strong> delivered an incredible talk about his Easter Bunny project. David is an excellent speaker who brought the perfect mix of technical depth, humor, and casual insight.
                    </p>
                    <p className="font-semibold mb-2">Topics Covered:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Agent workflows and orchestration</li>
                        <li>LLM evaluation</li>
                        <li>LLM as a judge</li>
                        <li>AI risk assessment</li>
                    </ul>
                    <p className="mt-3 italic">
                        David continues to be a hugely inspiring role model for the community!
                    </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎉 Community Updates</h2>
                    <div className="space-y-3">
                        <div>
                            <p className="font-semibold">DDD Perth Recaps</p>
                            <p>Community members shared their experiences from the DDD Perth conference.</p>
                        </div>
                        <div>
                            <p className="font-semibold">Zurich Deeptech Innovation Academy</p>
                            <p>Harry and Milan recapped their inspiring trip to Zurich's Deeptech Innovation Academy.</p>
                        </div>
                        <div>
                            <p className="font-semibold">Bloom LaunchLAB AI Completion</p>
                            <p>John shared his experiences completing the Bloom LaunchLAB AI accelerator program.</p>
                        </div>
                        <div>
                            <p className="font-semibold">West Tech Fest Satellite Event</p>
                            <p>Exciting plans announced for a WTF satellite event - more details to come!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">📣 Community Shoutout</h2>
                    <p className="mb-3">
                        <strong>Bloom LaunchLAB 2025 Finale</strong> - Friday, October 10th!
                    </p>
                    <p className="mb-2">
                        Everyone was encouraged to attend and hear founder pitches. A great opportunity for those thinking of applying for the February cohort to see what's in store!
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🙌 Special Thanks</h2>
                    <ul className="space-y-2">
                        <li><strong>WA Data Science Innovation Hub (WADSIH)</strong> for providing pizzas</li>
                        <li><strong>Matilda</strong> for delicious cinnamon buns</li>
                        <li><strong>Curtin Entrepreneurs Hub</strong> for the fantastic venue</li>
                        <li><strong>All attendees</strong> - regulars and new faces alike!</li>
                    </ul>
                </div>

                <p className="text-lg italic text-center mt-8">
                    Great to see HCI students from a few years back who will be contributing to the ecosystem. Looking forward to building together! 
                </p>
            </div>
            
            <div className="mt-8">
                <a href="/events/past" className="text-blue-600 hover:underline">← Back to Past Events</a>
            </div>
        </div>
    );
}
