const basePath = '/genai-community';

export default function Aug2025Meetup() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Build Club Perth - August Recap</h1>
            <p className="text-gray-600 mb-6">August 2025 • Bloom Crawley</p>
            
            <img 
                src={`${basePath}/images/2025-aug-hero.jpeg`} 
                alt="Build Club Perth August 2025 at Bloom Crawley" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold text-gray-800">
                    A vibrant gathering at Bloom Crawley - a wonderful space purpose-built for innovation!
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">📍 Venue Spotlight: Bloom Crawley</h2>
                    <p className="mb-3">
                        August Build Club Perth was hosted at <strong>Bloom Crawley</strong> - a fantastic venue purpose-built for innovation!
                    </p>
                    <p className="mb-3">
                        We had a very vibrant group of students, innovation specialists, and industry folks attend. The discussions were so engaging that people were still chatting for several hours!
                    </p>
                    <p className="italic">
                        So good to be in a room where everyone has such a huge love for tech and innovation ❤️💻
                    </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎤 Featured Speaker: Jeroen van Dalen</h2>
                    <p className="mb-3">
                        The legend himself - <strong>Jeroen van Dalen</strong> presented compelling data on the unbelievable scale and pace of capex infrastructure spending that AI is driving!
                    </p>
                    <p className="mb-3 font-semibold">Key Insights:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>AI infrastructure investment happening at unprecedented scale</li>
                        <li>Current spending still not enough to keep up with demand</li>
                        <li>Vision for a total shift in how Accelerator programs are designed</li>
                        <li>Bloom LaunchLAB AI approach: building more mature MVPs faster and pivoting more often</li>
                    </ul>
                    <p className="mt-3 italic">
                        Jeroen was so inspiring in his passion for supporting innovators in AI!
                    </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🌟 Special Guest: Mark McDonald</h2>
                    <p className="mb-3">
                        We were hugely grateful to have another legend - <strong>Mark McDonald</strong> - fresh off the back of <strong>Google I/O India 🇮🇳</strong>!
                    </p>
                    <p className="mb-3">
                        Mark shared hot takes on the latest <strong>Google AI Studio</strong> functionality targeted to the dev community.
                    </p>
                    <p className="font-semibold mb-2">Live Demos Included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Multimodal generation</strong> - text, image, audio, and video capabilities</li>
                        <li><strong>Imagen 4</strong> - high-quality image creation</li>
                        <li><strong>Gemini image editing</strong> - interactive voice and text image manipulation</li>
                        <li><strong>Veo 3</strong> - advanced video generation with audio and improved physics</li>
                        <li><strong>Lyria music generation</strong> - game soundtracks and more 🎵</li>
                        <li><strong>Gemini for app generation</strong> - developer tools</li>
                    </ul>
                    <p className="mt-3 font-semibold">
                        Super impressive and largely free! 🙌
                    </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎉 Community Updates</h2>
                    <div className="space-y-3">
                        <div>
                            <p className="font-semibold">🚀 Bird Drone at Zurich DeepTech Accelerator</p>
                            <p>Congrats to <strong>Harry Walters</strong> and <strong>Milan</strong> going to the DeepTech Accelerator with their 'Bird Drone' innovation in September!</p>
                        </div>
                        <div>
                            <p className="font-semibold">🏆 Matilda WAIOTY Awards Finalist</p>
                            <p>Congratulations to <strong>Matilda Digital Endometriosis Care</strong> for being a Finalist in the WAIOTY awards!</p>
                        </div>
                        <div>
                            <p className="font-semibold">💻 WeMoney Hackathon & New Office</p>
                            <p><strong>WeMoney</strong> shared awesome updates for their Hackathon and announced an exciting new office opening!</p>
                        </div>
                    </div>
                    <p className="mt-4 italic font-semibold">
                        Plus much more! Big things to come from this group…watch this space.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🙏 Thank You!</h2>
                    <p className="mb-3">
                        Massive thanks to <strong>Jeroen van Dalen</strong> and <strong>Mark McDonald</strong> for spending so much time with our community. The value you add is gold 🪙 and we are so grateful to you.
                    </p>
                    <p className="mb-2 font-semibold">Supporting Organizations:</p>
                    <ul className="space-y-1">
                        <li><strong>Bloom</strong> - for the fantastic venue at Bloom Crawley</li>
                        <li><strong>WA Data Science Innovation Hub (WADSIH)</strong> - for pizzas</li>
                        <li><strong>Matilda Digital Endometriosis Care</strong> - Sapphire Carter brought supersized donuts!</li>
                        <li><strong>WeMoney</strong> - for the team showing support time and again!</li>
                    </ul>
                </div>

                <p className="text-lg italic text-center mt-8">
                    So grateful to everyone who attended and contributed to such an engaging and inspiring evening!
                </p>
            </div>
            
            <div className="mt-8">
                <a href="/events/past" className="text-blue-600 hover:underline">← Back to Past Events</a>
            </div>
        </div>
    );
}
