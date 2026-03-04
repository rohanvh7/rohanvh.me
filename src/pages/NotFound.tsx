import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <Terminal className="h-20 w-20 mx-auto text-[#00FF41] opacity-80" />
        <h1 className="text-6xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">404</h1>
        <p className="text-xl text-[#008F11] font-bold">&gt; ERR_FILE_NOT_FOUND</p>
        <p className="text-sm text-[#008F11] max-w-md mx-auto">
          The requested resource could not be located on this server. It may have been moved, deleted, or never existed.
        </p>
        <div className="pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-[#00FF41] bg-black px-6 py-2 text-sm font-medium text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-colors"
          >
            &gt; cd ~/
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
