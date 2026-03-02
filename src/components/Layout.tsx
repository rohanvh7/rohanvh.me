import { Outlet, Link, useLocation } from 'react-router-dom';
import { Terminal, Link as LinkIcon, Home, Github, FileText } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono selection:bg-[#00FF41] selection:text-black">
      <header className="sticky top-0 z-40 border-b border-[#008F11] bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-[#00FF41] hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all">
            <Terminal className="h-6 w-6" />
            <span>rohanvh.me</span>
          </Link>
          <nav className="flex gap-2 sm:gap-4 flex-wrap justify-end">
            <Link
              to="/"
              className={`flex items-center gap-1.5 border border-[#008F11] px-4 py-2 text-sm font-medium transition-all ${
                location.pathname === '/'
                  ? 'bg-[#00FF41] text-black shadow-[0_0_10px_rgba(0,255,65,0.5)]'
                  : 'bg-black text-[#00FF41] hover:bg-[#008F11] hover:text-black'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">~/apps</span>
            </Link>
            <Link
              to="/blog"
              className={`flex items-center gap-1.5 border border-[#008F11] px-4 py-2 text-sm font-medium transition-all ${
                location.pathname.startsWith('/blog')
                  ? 'bg-[#00FF41] text-black shadow-[0_0_10px_rgba(0,255,65,0.5)]'
                  : 'bg-black text-[#00FF41] hover:bg-[#008F11] hover:text-black'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">~/blog</span>
            </Link>
            <Link
              to="/links"
              className={`flex items-center gap-1.5 border border-[#008F11] px-4 py-2 text-sm font-medium transition-all ${
                location.pathname === '/links'
                  ? 'bg-[#00FF41] text-black shadow-[0_0_10px_rgba(0,255,65,0.5)]'
                  : 'bg-black text-[#00FF41] hover:bg-[#008F11] hover:text-black'
              }`}
            >
              <LinkIcon className="h-4 w-4" />
              <span className="hidden sm:inline">~/links</span>
            </Link>
            <a
              href="https://github.com/rohanvh7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#008F11] px-4 py-2 text-sm font-medium transition-all bg-black text-[#00FF41] hover:bg-[#008F11] hover:text-black"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">~/github</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-6">
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-[#008F11] py-8 text-center text-sm text-[#008F11] space-y-2">
        <p>EOF. 🐈‍⬛</p>
        <p className="text-xs opacity-75">
          &lt;/&gt; Built with <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF41] hover:underline underline-offset-2 transition-colors">AI Studio</a>
          <span className="mx-2">|</span>
          Powered by React & Tailwind
        </p>
      </footer>
    </div>
  );
}
