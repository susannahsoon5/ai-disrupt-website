export default function Blog() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-lg mb-6">
                Read the latest insights, tutorials, and stories from the AI Disrupt Community.
            </p>
            
            <div className="space-y-6">
                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-2">
                        <a href="/resources/blog/summit-volunteers" className="text-blue-600 hover:text-blue-800">The Engine Room: AI Disrupt Summit Volunteers</a>
                    </h2>
                    <p className="text-gray-600 mb-2">December 2025</p>
                    <p className="text-lg mb-4">
                        Behind every successful event is an extraordinary team working tirelessly behind the scenes.
                    </p>
                    <a href="/resources/blog/summit-volunteers" className="text-blue-600 hover:underline">Read more →</a>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-2">
                        <a href="/resources/blog/birddrone-to-switzerland-accelerator" className="text-blue-600 hover:text-blue-800">BirdDrone to Switzerland Accelerator</a>
                    </h2>
                    <p className="text-gray-600 mb-2">January 2026</p>
                    <p className="text-lg mb-4">
                        An inspiring journey from Perth to Switzerland's leading tech accelerator program.
                    </p>
                    <a href="/resources/blog/birddrone-to-switzerland-accelerator" className="text-blue-600 hover:underline">Read more →</a>
                </div>
            </div>
        </div>
    );
}
