const basePath = process.env.NODE_ENV === 'production' ? '/ai-disrupt-website' : '';

export default function SummitVolunteers() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">The Engine Room: AI Disrupt Summit Volunteers</h1>
            <p className="text-gray-600 mb-8">December 2025</p>
            
            <img 
                src={`${basePath}/images/summit-volunteers.JPG`} 
                alt="AI Disrupt Summit 2025 Volunteer Team" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold">
                    Behind every successful event is a team of dedicated volunteers working tirelessly behind the scenes. At AI Disrupt Summit 2025, our volunteer team was nothing short of extraordinary.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Unsung Heroes</h2>
                <p className="mb-4">
                    While 180+ attendees experienced a seamlessly run summit, few knew about the incredible coordination happening behind the scenes. Our volunteer team handled everything from troubleshooting mini-dramas, getting speakers to locations on time, and improvising when sessions ran over, to making slide decks on-the-fly, taking photos and videos, recording interviews, managing the registration desk, helping startup booths, writing last-minute speaker bios, assisting with the hackathon, moving furniture, putting up signs, and even playing piano!
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Teamwork in Action</h2>
                <p className="mb-4">
                    What made this team remarkable wasn't just their skills—it was how they came together. Many had only met a month before the event, and some were meeting each other for the first time. Yet mid-morning on the day of the summit, something clicked. The team seamlessly coordinated, staying two steps (or five hundred!) ahead of every challenge that arose.
                </p>

                <p className="mb-4">
                    This is how real teamwork happens—people from different backgrounds coming together with a shared purpose and executing flawlessly under pressure.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Team</h2>
                <p className="mb-4">
                    Our volunteer team included talented individuals who helped with everything from on-the-day coordination to behind-the-scenes work like website development, marketing, slide deck creation, brand design, and more:
                </p>

                <p className="mb-6">
                    Yasna, Luke, Jay, Oscar, Maika, Qui, Evangeline, Jasmine, Mo, Aidan, Minh, Josh, Yifei, Weixin, Agata, Jinwoo, and Emerald.
                </p>

                <p className="mb-4">
                    We also had senior volunteers handling critical areas: Ash on AV, and others managing hackathon planning, finances, venue coordination, catering, and logistics.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Building Future Leaders</h2>
                <p className="mb-4">
                    For many of these volunteers, this was an invaluable early-career experience in event management, coordination, and teamwork at scale. The skills they developed and connections they made during this summit will serve them well in their future endeavors.
                </p>

                <p className="mb-4">
                    Watch out for these people in the future—they will do big things!
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Special Thanks</h2>
                <p className="mb-4">
                    Ever grateful to Jim Owens for his masterful photography that captured the energy and essence of the summit.
                </p>

                <p className="mt-8 text-lg font-semibold">
                    To all our volunteers: Thank you for being the engine room that made AI Disrupt Summit 2025 a phenomenal success! 🚀
                </p>
            </div>

            <div className="mt-8">
                <a href="/resources/blog" className="text-blue-600 hover:underline">← Back to Blog</a>
            </div>
        </div>
    );
}
