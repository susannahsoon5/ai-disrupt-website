import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">AI Disrupt Community Perth 🚀</h1>
            <p className="text-lg mb-6">
                We are a community of passionate builders—founders, developers, and investors—learning generative AI and building start-up dreams together!
            </p>
            <p className="text-lg mb-6">
                We welcome everyone on any part of the journey—from seasoned developers to vibe coders, and from backgrounds in computing, engineering, business, health, and more!
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission 🎯</h2>
            <p className="text-lg mb-6">
                Our mission is to empower founders, builders, and innovators to go from zero to one—launching and scaling generative AI startups from Perth to the world! We provide a collaborative ecosystem where members can develop generative AI skills, find cofounders, build products, and create the next generation of successful AI companies.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Aims ✨</h2>
            <ul className="list-none mb-8 text-lg">
                <li>✅ Increase generative AI literacy and capability</li>
                <li>✅ Help members launch generative AI-powered startups and products</li>
                <li>✅ Help people find cofounders and build teams</li>
                {/* <li>🚀 Support Perth founders to attend top accelerators and programs</li> */}
                <li>✅ Foster collaboration between startups, corporates, and academia</li>
                <li>✅ Build successful AI companies that scale from Perth to the world</li>
                <li>✅ Unearth a unicorn in our community</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Our Values 💪</h2>
            <ul className="list-disc list-inside mb-8 text-lg">
                <li><strong>Ship Fast:</strong> We don't just learn—we build, launch, and iterate!</li>
                <li><strong>Community First:</strong> We support each other's success through collaboration and connection!</li>
                <li><strong>Inclusive Growth:</strong> Everyone is welcome to learn and contribute, regardless of experience level!</li>
                <li><strong>Impact-Driven:</strong> We focus on creating real-world value through AI innovation!</li>
                <li><strong>Ethical AI:</strong> We build responsibly, considering the broader impact of our work!</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Join Us! 🎉</h2>
            <p className="text-lg">
                Interested in being part of our community? Check out our <a href="/join" className="text-blue-500 underline">Join</a> page for more information on how to get involved!
            </p>
        </div>
    );
};

export default AboutPage;