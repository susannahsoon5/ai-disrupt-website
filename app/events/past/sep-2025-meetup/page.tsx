const basePath = '/genai-community';

export default function Sep2025Meetup() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Build Club Perth - September Recap</h1>
            <p className="text-gray-600 mb-6">September 2025</p>
            
            <img 
                src={`${basePath}/images/2025-sept-hero.png`} 
                alt="Build Club Perth September 2025 Meetup" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold text-gray-800">
                    For a rainy evening - it was an amazing turnout of AI builders vibe coding and more!
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🛠️ Building & Demos</h2>
                    <p className="mb-3">
                        Thank you to all who came and built products and shared their demos! The energy was fantastic despite the rainy weather.
                    </p>
                    <p className="font-semibold">
                        Special welcome to all the newcomers joining the Build Club community!
                    </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎤 Featured Speaker</h2>
                    <p className="mb-3">
                        <strong>Haylee from Matilda</strong> shared her exciting and meaningful AI work, inspiring the community with insights into practical AI applications in healthtech.
                    </p>
                    <p className="italic">
                        A great example of AI making a real impact!
                    </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎉 Community Achievements</h2>
                    <p className="mb-3">We celebrated some awesome outcomes from the community:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>🏆 Hackathon wins</strong> - Several members had successful hackathon competitions!</li>
                        <li><strong>🚀 Start-up hires</strong> - Multiple community members landed positions in the start-up and scale-up space</li>
                        <li><strong>👏 Curtin Ignition</strong> - A few attended this exciting entrepreneurship event</li>
                        <li><strong>🇨🇭 Zurich deeptech workshop</strong> - Two members traveled to Switzerland for an intensive deeptech workshop</li>
                        <li><strong>📅 WTF satellite event</strong> - Planning underway for West Tech Fest satellite event</li>
                    </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">📣 Upcoming: DDD Perth</h2>
                    <p className="mb-3">
                        <strong>Join Build Club Perth at our booth at DDD Perth!</strong>
                    </p>
                    <p className="mb-2">📅 Saturday, September 20th</p>
                    <p className="mb-3">📍 Optus Stadium</p>
                    <p className="mb-3">
                        With over 1,500 developers attending, DDD Perth is Perth's largest community-run conference for the tech community.
                    </p>
                    <p className="font-semibold">
                        Don't miss out – get your tickets and join us there!
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🙌 Special Thanks</h2>
                    <p className="mb-3">
                        Huge thanks for support and mentoring from <strong>Aidan</strong>, <strong>Nicholas</strong>, and <strong>Thuushal</strong>!
                    </p>
                    <p className="mb-2 font-semibold">Supporting Organizations:</p>
                    <ul className="space-y-1">
                        <li>Curtin Commercialisation and Entrepreneurship</li>
                        <li>WA Data Science Innovation Hub (WADSIH)</li>
                        <li>Bloom</li>
                        <li>Lance East Office</li>
                        <li>Matilda Digital Endometriosis Care</li>
                        <li>WeMoney</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">📍 Coming in October</h2>
                    <p>
                        The next Build Club Perth event will be held at the <strong>Curtin Innovation Hub</strong> - more details to follow!
                    </p>
                </div>

                <p className="text-lg italic text-center mt-8">
                    A great evening of networking and community sharing - thank you everyone for your contribution! 
                </p>
            </div>
            
            <div className="mt-8">
                <a href="/events/past" className="text-blue-600 hover:underline">← Back to Past Events</a>
            </div>
        </div>
    );
}
