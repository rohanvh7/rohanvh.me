import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getAllPosts, PostMetadata } from '../utils/markdown';
import { FileText, Calendar } from 'lucide-react';

export default function Blog() {
  const [posts, setPosts] = useState<PostMetadata[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="mx-auto max-w-3xl space-y-8 py-8">
      <section className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          &gt; ls -l /var/www/blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#008F11]"
        >
          Personal logs and technical write-ups.
        </motion.p>
      </section>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group block border border-[#008F11] bg-black p-5 transition-all hover:border-[#00FF41] hover:bg-[#001100] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold leading-tight text-[#00FF41] group-hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {post.title}
                </h3>
                <p className="text-[#008F11] group-hover:text-[#00FF41] transition-colors">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-xs text-[#008F11] group-hover:text-[#00FF41] mt-4">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        {posts.length === 0 && (
          <div className="text-[#008F11] italic">No logs found.</div>
        )}
      </div>
    </div>
  );
}
