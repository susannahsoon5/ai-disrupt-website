import React from 'react';

const CommunityFeed: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Joining this community has transformed my understanding of AI!",
            author: "",
            role: "Academic Researcher"
        },
        {
            id: 2,
            quote: "I am genuinely impressed to see the level of collaboration and innovation within this community.",
            author: "",
            role: "Cloud Solutions Architect"
        },
        {
            id: 3,
            quote: "I've made invaluable connections through this community.",
            author: "",
            role: "Cyber Security Engineer"
        }
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What Our Community Says</h2>
                <div className="flex flex-wrap justify-center">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="max-w-xs mx-4 mb-6 p-6 bg-white rounded-lg shadow-md">
                            <p className="text-lg italic">"{testimonial.quote}"</p>
                            <p className="mt-4 font-semibold">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityFeed;