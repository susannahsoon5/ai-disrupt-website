import { getPostBySlug, Post } from '../../../lib/api';

export function generateStaticParams() {
  return [
    { slug: 'example-post' },
  ];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-4">
        <p>{post.content}</p>
      </div>
    </article>
  );
}