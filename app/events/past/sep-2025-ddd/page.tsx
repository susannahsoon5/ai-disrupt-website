const basePath = '/genai-community';

export default function Sep2025DDD() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Build Club Perth at DDD Perth 2025</h1>
            <p className="text-gray-600 mb-6">September 2025 • DDD Perth Conference</p>
            
            <img 
                src={`${basePath}/images/2025-DDD-Perth-booth.jpeg`} 
                alt="Build Club Perth booth at DDD Perth 2025" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold text-gray-800">
                    DDD and the tech community never fail to impress!
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎪 Build Club Community Booth</h2>
                    <p className="mb-3">
                        This year, Build Club Perth had a community booth at DDD Perth, and it was a marvelous experience meeting so many members of the tech community - all <strong>1,100+ attendees</strong>!
                    </p>
                    <p className="mb-3">
                        At the booth, we shared our activities from the past few months and invited everyone to join us for our October meetup.
                    </p>
                    <p className="font-semibold mb-2">Booth Activities:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Interactive prompting game</li>
                        <li>Prize giveaway from Curtin Entrepreneurs</li>
                        <li>Community engagement and networking</li>
                    </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎤 Conference Highlights</h2>
                    <p className="mb-3">
                        We were so busy at the booth that we barely had time to check out the talks! However, we did manage to catch:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Rendle.dev's awesome locknote on AI</strong> - An inspiring closing presentation on AI developments</li>
                        <li><strong>Booth tours</strong> - Learning about the latest in AI, big tech, and emerging technologies</li>
                    </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🥰 The Best Part</h2>
                    <p className="mb-3">
                        The highlight of the day was soaking up the atmosphere and reconnecting with so many old friends and ex-students thriving in the software industry!
                    </p>
                    <p className="italic">
                        The Perth tech community continues to grow and inspire.
                    </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">👏 Thank You!</h2>
                    <p className="mb-3 font-semibold">Massive thanks to our booth volunteers who put in hardcore effort with prep and staffing:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Luke Saunders</li>
                        <li>Chao Cherng Lee</li>
                        <li>Jay Nicholson</li>
                        <li>Nicholas Jerrat</li>
                        <li>Jenish Pandya</li>
                        <li>And many other Build Club community members!</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🏆 Huge Appreciation</h2>
                    <p className="mb-3">
                        Enormous thanks to the <strong>DDD Perth organizers</strong> for this opportunity and their massive effort behind the scenes!
                    </p>
                    <p>
                        Thanks to all speakers, sponsors, booth exhibitors, and volunteers who made DDD Perth 2025 an incredible success!
                    </p>
                </div>

                <p className="text-lg italic text-center mt-8">
                    DDD Perth showcased the strength and passion of the Perth tech community. Looking forward to many more collaborations!
                </p>
            </div>
            
            <div className="mt-8">
                <a href="/events/past" className="text-blue-600 hover:underline">← Back to Past Events</a>
            </div>
        </div>
    );
}
