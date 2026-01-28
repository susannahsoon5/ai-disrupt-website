import React from 'react';

const resources = [
  {
    category: 'Books',
    items: [
      { title: 'Artificial Intelligence: A Modern Approach', link: 'https://example.com/book1' },
      { title: 'Deep Learning', link: 'https://example.com/book2' },
    ],
  },
  {
    category: 'Online Courses',
    items: [
      { title: 'Machine Learning by Andrew Ng', link: 'https://example.com/course1' },
      { title: 'Deep Learning Specialization', link: 'https://example.com/course2' },
    ],
  },
  {
    category: 'Podcasts',
    items: [
      { title: 'AI Alignment Podcast', link: 'https://example.com/podcast1' },
      { title: 'The TWIML AI Podcast', link: 'https://example.com/podcast2' },
    ],
  },
];

const ResourcesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Learning Resources</h1>
      {resources.map((resource) => (
        <div key={resource.category} className="mb-4">
          <h2 className="text-2xl font-semibold">{resource.category}</h2>
          <ul className="list-disc pl-5">
            {resource.items.map((item) => (
              <li key={item.title}>
                <a href={item.link} className="text-blue-500 hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResourcesPage;