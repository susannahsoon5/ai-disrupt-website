const basePath = '/genai-community';

export default function Nov2025Meetup() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Build Club Perth - November Recap</h1>
            <p className="text-gray-600 mb-6">November 2025</p>
            
            <img 
                src={`${basePath}/images/2025-nov-hero.jpeg`} 
                alt="Build Club Perth November 2025 Meetup" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold text-gray-800">
                    A celebration of six months of impact and planning for an exciting 2026!
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎉 Six Months of Success</h2>
                    <p className="mb-3">
                        This meetup was all about reflecting on our incredible journey over the past six months:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Hosted numerous community events and workshops</li>
                        <li>Connected members with start-up job opportunities</li>
                        <li>Helped community members find co-founders</li>
                        <li>Secured a dedicated room at Bloom</li>
                        <li>Organized our first full-day AI Disrupt Summit in December</li>
                    </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🏆 2026 Goals</h2>
                    <p className="mb-3">We're setting ambitious goals for the year ahead:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>More structured talks and hands-on building sessions</li>
                        <li>Comprehensive Gen AI tutorials</li>
                        <li>Focus on building products that generate revenue</li>
                        <li>Collaborations with industry partners and the national and global AI ecosystem</li>
                    </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">✅ Community Announcements</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">West Tech Fest</p>
                            <p>Build Club Perth will be hosting a booth! Student tickets available for $75, with special discounts for AI Disrupt Summit attendees.</p>
                        </div>
                        <div>
                            <p className="font-semibold">Curtin's Arrayah Residency</p>
                            <p>A real pop-up hacker house residency running alongside West Tech Fest.</p>
                        </div>
                        <div>
                            <p className="font-semibold">TradieScribe</p>
                            <p>Kyan Jones is looking for technical co-founders to join the team.</p>
                        </div>
                        <div>
                            <p className="font-semibold">Veilnet Workshop</p>
                            <p>Yifei Ren will be presenting "Your First AI Home Lab: Build It, Automate It, Securely Reach It" at the AI Disrupt Summit.</p>
                        </div>
                        <div>
                            <p className="font-semibold">WeMoney Summer Internship</p>
                            <p>Advertised at the meetup with an already huge response from our community!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🙌 Thank You!</h2>
                    <p className="mb-3">A huge shout-out to everyone who made this meetup and our community possible:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Summit Volunteers:</strong> Yasna, Grace, Maika, Oscar, Jay, and Luke for organizing volunteer roles</li>
                        <li><strong>WA Data Science Innovation Hub (WADSIH)</strong> for providing pizzas</li>
                        <li><strong>Matilda Digital Endometriosis Care</strong> for donuts</li>
                        <li><strong>Bloom</strong> for the wonderful Basement Space</li>
                        <li><strong>All attendees</strong> - both new folks and regulars - for your continued support!</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">📅 What's Next?</h2>
                    <p className="text-lg mb-2">
                        <strong>AI Disrupt Summit:</strong> Saturday, December 13th, 2025 (10am to Sundowner)
                    </p>
                    <p className="mb-3">
                        The summit program is locked in with talks, mini hackathon, start-up expo booths, and networking sundowner.
                    </p>
                    <p>
                        <strong>Monthly Build Club sessions</strong> will resume in February 2026!
                    </p>
                </div>

                <p className="text-lg italic text-center mt-8">
                    Here's to many more opportunities and friendships in our quest to learn, build, and share everything about building Gen AI products! 👏
                </p>
            </div>
            
            <div className="mt-8">
                <a href="/events/past" className="text-blue-600 hover:underline">← Back to Past Events</a>
            </div>
        </div>
    );
}
