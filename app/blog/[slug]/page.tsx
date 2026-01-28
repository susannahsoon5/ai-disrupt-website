import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostBySlug } from '../../../lib/api';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
        setLoading(false);
      };
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
};

export default BlogPost;