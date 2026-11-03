'use client';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-emerald-200/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm shadow-emerald-100/40 dark:shadow-slate-950/60">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-emerald-500 via-green-600 to-red-500 p-2 rounded-xl text-white shadow-md shadow-emerald-500/20 ring-2 ring-white dark:ring-slate-900">
            <i className="fas fa-robot text-xl"></i>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none text-emerald-900 dark:text-white">
              Azzamgantenkgemink AI Asisten
            </h1>
            <p className="text-xs text-emerald-700 dark:text-emerald-300">
              Personal AI Companion
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-md border border-emerald-200 dark:border-slate-700 bg-white/60 hover:bg-emerald-50 dark:bg-slate-800/60 dark:hover:bg-slate-700 transition-colors text-emerald-800 dark:text-emerald-200 flex items-center justify-center"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="px-3 py-1.5 rounded-md border border-red-200 dark:border-slate-700 bg-red-50/80 dark:bg-slate-800/60 hover:bg-red-100 dark:hover:bg-slate-700 transition-colors text-red-700 dark:text-red-200 flex items-center justify-center"
            title="API Status"
          >
            <i className="fas fa-circle text-emerald-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
