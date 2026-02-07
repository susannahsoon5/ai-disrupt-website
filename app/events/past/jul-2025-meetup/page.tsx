const basePath = '/genai-community';

export default function Jul2025Meetup() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Build Club Perth - July Recap</h1>
            <p className="text-gray-600 mb-6">July 2025 • Curtin University Library</p>
            
            <img 
                src={`${basePath}/images/2025-jul-hero.jpeg`} 
                alt="Build Club Perth July 2025 at Curtin University Library" 
                className="w-full rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6 font-semibold text-gray-800">
                    Around 70 people spent their Tuesday evening with us - proving that GenAI is really taking hold!
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🎊 Diverse Community</h2>
                    <p className="mb-3">
                        The buzz and excitement was incredible! We had a truly diverse group:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Hard-core tech folks</li>
                        <li>Professionals from commerce, finance, mining, agriculture, and government</li>
                        <li>Students and industry professionals</li>
                        <li>Lots of entrepreneurs</li>
                        <li>Even an angel investor - all in one room!</li>
                    </ul>
                    <p className="mt-3 italic">
                        Time is precious - which is why we are super grateful for everyone who attended!
                    </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">🌟 Stellar Speaker Line-up</h2>
                    
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Mark McDonald - Google Deepmind</p>
                            <p>Developer Relations for Gemini API. Mark encouraged everyone to reach out for more info on Gemini support and education. Returning in Aug/Sept!</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Alex Jenkins - Emergency Management Hackathon</p>
                            <p>Wowed us with models for generating sheet music based on ControlNet, plus demoed tools like unmute.sh for semantic voice activity detection!</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Michael Stephens - WeMoney</p>
                            <p>Shared how AI is important to WeMoney's product, scalability, and customers. WeMoney is a social financial wellness platform founded right here in Perth!</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Mo Jaimangal - JupiterAI</p>
                            <p className="mb-2">Told his fascinating serial entrepreneur journey from dream role working on concept cars, to founding WeGuide, to his latest passion JupiterAI helping CEOs and business owners use GenAI.</p>
                            <p className="italic">Key lesson: Mo cares about making impact at scale for good.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Kevin Wernli (PhD) & Joanna Morris - Matilda</p>
                            <p>Presented Matilda app which enhances surgical outcomes through better pre/post-op care for endometriosis, powered by tech. They shared lots of start-up lessons leading to their success!</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Yifei Ren - Veilnet</p>
                            <p>Talked about his start-up Veilnet - an ephemeral network more secure than VPN. Early access available now! Yifei also shared many AI founder lessons.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="font-bold mb-2">Minh - Bloom LaunchLAB AI</p>
                            <p>Community Manager spreading the word on their AI start-up incubator in Perth. Applications were closing that week!</p>
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">✨ Amazing Networking</h2>
                    <p className="mb-3">
                        The networking with speakers was truly buzzing! The room was electric with conversations and opportunities being sparked.
                    </p>
                    <p className="italic">
                        Jinwoo did an excellent job capturing the evening in photos 📸
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">🙏 Thank You!</h2>
                    <ul className="space-y-2">
                        <li><strong>WA Data Science Innovation Hub (WADSIH)</strong> - for the pizzas 🍕</li>
                        <li><strong>Matilda Digital Endometriosis Care</strong> - for cinnamon rolls like you've never seen! 🥐</li>
                        <li><strong>WeMoney</strong> - huge thanks for their massive support behind the scenes. So happy to partner with you! 🥳</li>
                        <li><strong>Curtin University Library</strong> - for hosting us</li>
                    </ul>
                </div>

                <p className="text-lg italic text-center mt-8">
                    What an incredible evening of learning, sharing, and building community together!
                </p>
            </div>
            
            <div className="mt-8">
                <a href="/events/past" className="text-blue-600 hover:underline">← Back to Past Events</a>
            </div>
        </div>
    );
}
