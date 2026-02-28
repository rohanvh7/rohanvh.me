import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const apps = [
  {
    name: 'Draw',
    url: 'https://draw.rohanvh.me',
  },
  {
    name: 'Write',
    url: 'https://notepad.rohanvh.me',
  },
  {
    name: 'Listen',
    url: 'https://radio.rohanvh.me',
  },
  {
    name: 'FMHY',
    url: 'https://fmhy.rohanvh.me',
  },
  {
    name: 'Code',
    url: 'https://snippets.rohanvh.me',
  },
];

export default function Home() {
  const [greeting, setGreeting] = useState<string | null>(null);

  const handleGreet = () => {
    const greetings = [
      "Hello, World!",
      "Access Granted.",
      "System Online.",
      "Welcome back, user.",
      "Initializing protocols...",
    ];
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
    setTimeout(() => setGreeting(null), 3000);
  };

  return (
    <div className="space-y-12 py-8">
      <section className="space-y-4">
        <div className="flex items-center gap-4 h-8">
          <motion.button
            onClick={handleGreet}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border border-[#00FF41] bg-black px-4 py-1.5 text-sm font-medium text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-colors cursor-pointer"
          >
            &gt; ./greet.sh
          </motion.button>
          <AnimatePresence>
            {greeting && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-sm text-white"
              >
                {greeting}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Rohan's <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Playground</span>
        </motion.h1>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {apps.map((app, index) => (
          <motion.a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className="group flex items-center justify-between border border-[#008F11] bg-black p-4 transition-all hover:border-[#00FF41] hover:bg-[#001100] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
          >
            <span className="text-lg font-bold text-[#00FF41] group-hover:text-white transition-colors">
              {app.name}
            </span>
            <div className="flex items-center gap-2 text-sm text-[#008F11] group-hover:text-[#00FF41]">
              <span className="hidden sm:inline">{app.url.replace('https://', '')}</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
