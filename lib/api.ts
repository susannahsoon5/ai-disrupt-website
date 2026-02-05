export interface Event {
  id: number;
  title: string;
  date: string;
  format: string;
  description: string;
}

export interface Post {
  slug: string;
  title: string;
  content: string;
  date?: string;
}

export async function getPostBySlug(slug: string | string[]): Promise<Post | null> {
  // Placeholder implementation - replace with actual data fetching
  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  
  // Example posts data
  const posts: Post[] = [
    { slug: 'example-post', title: 'Example Post', content: 'This is an example post.' },
  ];
  
  return posts.find(post => post.slug === slugStr) || null;
}