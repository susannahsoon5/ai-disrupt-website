const basePath = '/genai-community';

export default function Jun2025Meetup() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Build Club Perth - Launch Event 🚀</h1>
            <p className="text-gray-600 mb-6">June 2025 • Curtin University Library</p>
            
            <img 
                src={`${basePath}/images/2025-jun-hero.JPG`} 
                alt="Build Club Perth Launch Event at Curtin University Library" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold text-gray-800">
                    The turnout was amazing and the energy in the room was more than we could have hoped for!
                </p>
                
                <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🎉 Historic Moment</h2>
                    <p className="text-lg">
                        This was the official launch of Build Club Perth - a community dedicated to building AI passion projects and products!
                    </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎤 Opening Presentations</h2>
                    
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">The Need for Build Club Perth</p>
                            <p>Shared the vision for a Build Club community here in Perth and discussed the rise of the <strong>AI Engineer</strong> - a new role at the intersection of software development and AI.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Trish Radotic & Harry Walters - Mission & Vision</p>
                            <p>Outlined Build Club Perth's mission, vision, and exciting plans to scale the community!</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Stanley Chong - Old Meets New Tech</p>
                            <p>Brought in some vintage tech for contrast, then demonstrated cutting-edge technology with <strong>live coding using Anthropic's Claude Code</strong>!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎼 Sponsor Presentations</h2>
                    
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Alex Jenkins - WA Data Science Innovation Hub (WADSIH)</p>
                            <p className="mb-2">Alex showcased impressive demos including:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Music generation demo 🎼</li>
                                <li>Live emergency services application</li>
                            </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">WeMoney Team - Perth FinTech Start-up</p>
                            <p className="mb-2">Representatives from WeMoney joined us:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Michael Stephens</li>
                                <li>Joaquim Mackin</li>
                                <li>Chloe</li>
                                <li>April K.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">❤️ Community Love</h2>
                    <p className="text-lg mb-3">
                        Thank you everyone for your huge engagement on AI! We are excited to be part of this global community building AI passion projects and products.
                    </p>
                    <p className="font-semibold italic">
                        We 😍 the AI community!!
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🙏 Thank You!</h2>
                    
                    <p className="mb-3 font-semibold">Incredible Sponsors:</p>
                    <ul className="space-y-2 mb-4">
                        <li><strong>WA Data Science Innovation Hub (WADSIH)</strong> - for catering and support</li>
                        <li><strong>WeMoney</strong> - Perth FinTech start-up for donuts 🍩 and catering 🥐</li>
                    </ul>
                    
                    <p className="mb-2 font-semibold">Ever Reliable Crew:</p>
                    <ul className="space-y-1">
                        <li>Weixin Shao</li>
                        <li>Jim Hie Ling</li>
                        <li>Emerald Whiteman</li>
                        <li><strong>Jinwoo Kim</strong> - for incredible photography 📷</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🔜 What's Next</h2>
                    <p>
                        This was just the beginning! Watch this space for exciting collaborations and events planned for July and beyond.
                    </p>
                </div>

                <p className="text-lg italic text-center mt-8">
                    Building is hungry work - thanks to our sponsors for keeping everyone fueled!
                </p>
            </div>
            
            <div className="mt-8">
                <a href="/events/past" className="text-blue-600 hover:underline">← Back to Past Events</a>
            </div>
        </div>
    );
}
