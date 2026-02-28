import { ExternalLink, Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';

const links = [
  {
    title: 'Show HN: A new way to build React apps',
    url: 'https://news.ycombinator.com',
    domain: 'news.ycombinator.com',
    date: '2 hours ago',
    tags: ['react', 'show-hn'],
  },
  {
    title: 'The architecture of a modern web application',
    url: 'https://lobste.rs',
    domain: 'lobste.rs',
    date: '5 hours ago',
    tags: ['architecture', 'web'],
  },
];

export default function Links() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-8">
      <section className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          &gt; tail -f /var/log/links.log
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#008F11]"
        >
          Aggregated feeds from HN and Lobsters.
        </motion.p>
      </section>

      <div className="space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className="group block border border-[#008F11] bg-black p-5 transition-all hover:border-[#00FF41] hover:bg-[#001100] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold leading-tight text-[#00FF41] group-hover:text-white transition-colors">
                  {link.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#008F11] group-hover:text-[#00FF41]">
                  <span className="flex items-center gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    {link.domain}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {link.date}
                  </span>
                  <div className="flex items-center gap-2">
                    <Tag className="h-3.5 w-3.5" />
                    <div className="flex gap-1">
                      {link.tags.map(tag => (
                        <span key={tag} className="border border-[#008F11] bg-black px-2 py-0.5 text-xs font-medium text-[#00FF41] group-hover:border-[#00FF41]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
