import Link from 'next/link';

export default function PastEvents() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Past Events</h1>
            <p className="text-lg mb-6">
                We have hosted monthly events throughout 2025, bringing together our community of founders, developers, and AI enthusiasts.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">2025 Events</h2>
            
            <div className="space-y-6">
                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/dec-2025-summit" className="text-blue-600 hover:text-blue-800">AI Disrupt Summit - December 2025</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">December 2025 • St Catherine's College</p>
                    <p className="text-lg mb-4">
                        Our flagship summit event bringing together the Perth AI community.
                    </p>
                    <Link href="/events/past/dec-2025-summit" className="text-blue-600 hover:underline">Read more →</Link>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/nov-2025-meetup" className="text-blue-600 hover:text-blue-800">Meetup - November 2025</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">November 2025</p>
                    <p className="text-lg mb-4">
                        Celebrating six months of impact, reflecting on achievements, and setting goals for 2026.
                    </p>
                    <Link href="/events/past/nov-2025-meetup" className="text-blue-600 hover:underline">Read more →</Link>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/oct-2025-drinks" className="text-blue-600 hover:text-blue-800">Meetup - October 2025</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">October 2025 • Curtin Entrepreneurs Hub</p>
                    <p className="text-lg mb-4">
                        Featured talk from David Smith on Easter Bunny.ai project covering agent workflows, LLM evaluation, and AI risk assessment.
                    </p>
                    <Link href="/events/past/oct-2025-drinks" className="text-blue-600 hover:underline">Read more →</Link>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/sep-2025-meetup" className="text-blue-600 hover:text-blue-800">Meetup - September 2025</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">September 2025</p>
                    <p className="text-lg mb-4">
                        AI builders vibe coding, demos, and celebration of community achievements including hackathon wins and start-up hires.
                    </p>
                    <Link href="/events/past/sep-2025-meetup" className="text-blue-600 hover:underline">Read more →</Link>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/sep-2025-ddd" className="text-blue-600 hover:text-blue-800">DDD Perth Booth 2025</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">September 2025 • DDD Perth Conference</p>
                    <p className="text-lg mb-4">
                        Build Club Perth booth at DDD Perth with 1,100+ attendees, prompting game, and community engagement.
                    </p>
                    <Link href="/events/past/sep-2025-ddd" className="text-blue-600 hover:underline">Read more →</Link>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/aug-2025-meetup" className="text-blue-600 hover:text-blue-800">Meetup - August 2025</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">August 2025 • Bloom Crawley</p>
                    <p className="text-lg mb-4">
                        Featured talks from Jeroen van Dalen on AI infrastructure and Mark McDonald on Google AI Studio with live demos.
                    </p>
                    <Link href="/events/past/aug-2025-meetup" className="text-blue-600 hover:underline">Read more →</Link>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/jul-2025-meetup" className="text-blue-600 hover:text-blue-800">Meetup - July 2025</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">July 2025 • Curtin University Library</p>
                    <p className="text-lg mb-4">
                        ~70 attendees with stellar speaker line-up including Mark McDonald (Google), speakers from WeMoney, Matilda, Veilnet, and more!
                    </p>
                    <Link href="/events/past/jul-2025-meetup" className="text-blue-600 hover:underline">Read more →</Link>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        <Link href="/events/past/jun-2025-meetup" className="text-blue-600 hover:text-blue-800">Perth Launch Event 🚀</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">June 2025 • Curtin University Library</p>
                    <p className="text-lg mb-4">
                        The official launch of Build Club Perth! Featured talks on AI Engineer role, live coding with Claude Code, and demos from sponsors.
                    </p>
                    <Link href="/events/past/jun-2025-meetup" className="text-blue-600 hover:underline">Read more →</Link>
                </div>
            </div>
        </div>
    );
}
