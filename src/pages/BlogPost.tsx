import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, Post } from '../utils/markdown';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then(data => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return <div className="py-8 text-[#00FF41] animate-pulse">Loading log entry...</div>;
  }

  if (!post) {
    return (
      <div className="py-8 space-y-4">
        <h1 className="text-2xl font-bold text-red-500">Error 404: Log not found</h1>
        <Link to="/blog" className="text-[#008F11] hover:text-[#00FF41] underline underline-offset-4">
          &lt;- Return to /var/www/blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-3xl py-8 space-y-8"
    >
      <Link to="/blog" className="inline-flex items-center gap-2 text-[#008F11] hover:text-[#00FF41] transition-colors">
        <ArrowLeft className="h-4 w-4" />
        cd ..
      </Link>
      
      <header className="space-y-4 border-b border-[#008F11] pb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-[#008F11]">
          <Calendar className="h-4 w-4" />
          <time>{post.date}</time>
        </div>
      </header>

      <div className="markdown-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </motion.article>
  );
}
