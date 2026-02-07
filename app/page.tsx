import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Collaborators from '@/components/sections/Collaborators';
import CommunityFeed from '@/components/sections/CommunityFeed';
import EventsList from '@/components/sections/EventsList';
import NewsletterCTA from '@/components/sections/NewsletterCTA';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Collaborators />
      <CommunityFeed />
      <EventsList />
      <NewsletterCTA />
    </main>
  );
};

export default HomePage;