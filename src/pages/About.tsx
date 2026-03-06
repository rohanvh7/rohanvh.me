import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-8">
      <section className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] flex items-center gap-3"
        >
          &gt; whoami
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border border-[#008F11] bg-black p-6 space-y-4 shadow-[0_0_15px_rgba(0,255,65,0.1)]"
        >
          <div className="flex items-center gap-3 border-b border-[#008F11] pb-4 mb-4">
            <User className="h-6 w-6 text-[#00FF41]" />
            <h2 className="text-2xl font-bold text-[#00FF41]">Rohan Hatagine</h2>
          </div>
          
          <div className="space-y-4 text-[#008F11]">
            <p>
              <span className="text-white">Status:</span> Online
            </p>
            <p>
              <span className="text-white">Bio:</span> Loading...
            </p>
            <p className="italic opacity-75 pt-4">
              // More information will be added here soon.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
