const basePath = '/genai-community';

export default function Dec2025Summit() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">AI Disrupt Summit 2025: Perth's Largest AI Builder Event</h1>
            <p className="text-gray-600 mb-8">December 2025</p>
            
            <img 
                src={`${basePath}/images/dec-2025-summit.jpg`} 
                alt="AI Disrupt Summit 2025 at St Catherine's College" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold">
                    Build Club Perth x Bloom x Curtin Entrepreneurs brought together 180+ passionate AI builders, founders, startups, and investors for an unforgettable day at St Catherine's College, Curtin University.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">A Day of Innovation and Connection</h2>
                <p className="mb-4">
                    As part of West Tech Fest, AI Disrupt Summit 2025 showcased the exceptional talent and innovation within Perth's AI community. The event featured two simultaneous tracks across the stunning St Cat's dining hall and Bloom basement, creating an immersive experience for all attendees.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">What Made It Special</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li><strong>17 Expert Speakers</strong> – Covering technical AI, vibe-coding, ethics, future trends, founder stories, and investment</li>
                    <li><strong>Investment Panel</strong> – Insights from leading investors in the AI space</li>
                    <li><strong>Build Your Own AI Home Lab Workshop</strong> – Led by Yifei Ren</li>
                    <li><strong>Hackathon</strong> – Focused on elderly care and loneliness, with 5 awesome winning teams</li>
                    <li><strong>15 AI Startup Booths</strong> – Showcasing Perth's thriving AI ecosystem</li>
                    <li><strong>Networking Events</strong> – Morning breakfast and evening sundowner on a perfect balmy Perth evening</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">National Recognition</h2>
                <p className="mb-4">
                    The summit received tremendous support from the national ecosystem, including AI Disrupt Summit Sydney representatives Daniel Malkinson and Dr Sam Donegan, proving that Perth is up there with the world's best in AI innovation.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Expert Speakers</h2>
                <p className="mb-4">
                    Every talk was exceptional, delivered by some of WA's finest AI experts and builders including Melanie Johnston-Hollitt, Matthew Curnow, Akshat Agarwal, Nina Ajnira Karisik, Ryan Liebregts, Sean Oldenburger, Jacqueline Boaks, David Smith, Caitlin McKeown, Aidan Morgan, Jeroen van Dalen, Alex Jenkins, Munsif Hayat, John Marshall, Jasper Wong, Avi Santoso, Brian Foody, and Mo Jaimangal.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Community-Powered Success</h2>
                <p className="mb-4">
                    This event was made possible by an incredible team of volunteers: Yasna, Luke, Ashish Doshi, Agata, Evangeline, Maika, Jim Hie Ling, Jinwoo, Emerald, Jay, Oscar, Weixin, Jasmine, and Yifei. Special thanks to Jim Owens for his support.
                </p>

                <p className="mt-8 text-lg font-semibold">
                    The AI Disrupt Summit 2025 proved that Perth has an exceptional AI community—filled with talent, innovation, and the collaborative spirit needed to build world-class AI companies. 🚀
                </p>
            </div>

            <div className="mt-8">
                <a href="/resources/blog" className="text-blue-600 hover:underline">← Back to Blog</a>
            </div>
        </div>
    );
}
