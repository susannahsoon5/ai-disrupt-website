import React from 'react';

const features = [
  {
    title: 'Collaborative Learning',
    description: 'Join a community of AI enthusiasts and experts to share knowledge and resources.',
  },
  {
    title: 'Exclusive Events',
    description: 'Participate in workshops, webinars, and meetups tailored for AI learners and professionals.',
  },
  {
    title: 'Resource Sharing',
    description: 'Access a curated library of AI resources, including tutorials, articles, and tools.',
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with like-minded individuals and industry leaders to expand your professional network.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features of Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;