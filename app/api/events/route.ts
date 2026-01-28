import { NextResponse } from 'next/server';

const events = [
  {
    id: 1,
    title: 'AI Community Meetup',
    date: '2023-11-15',
    format: 'In-Person',
    description: 'Join us for our monthly meetup to discuss the latest trends in AI.',
  },
  {
    id: 2,
    title: 'Webinar: The Future of AI',
    date: '2023-12-01',
    format: 'Online',
    description: 'A webinar featuring industry experts discussing the future of AI technology.',
  },
  {
    id: 3,
    title: 'Hackathon: Build with AI',
    date: '2024-01-20',
    format: 'Hybrid',
    description: 'Participate in our hackathon to create innovative AI solutions.',
  },
];

export async function GET() {
  return NextResponse.json(events);
}