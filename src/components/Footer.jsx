export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-[#08080a] py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-lg text-zinc-900 dark:text-white">
            <span className="text-lime-500 dark:text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.4)]">DAF</span>_
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            © 2026 Damar Adin Firdaus. All rights reserved.
          </span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            aria-label="GitHub"
            className="text-zinc-500 hover:text-lime-600 dark:hover:text-lime-400 text-xs"
            href="https://github.com/FaramDox"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-lime-600 dark:hover:text-lime-400 text-xs"
            href="https://www.linkedin.com/in/damaradinfirdaus"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            aria-label="Instagram"
            className="text-zinc-500 hover:text-lime-600 dark:hover:text-lime-400 text-xs"
            href="https://www.instagram.com/faramdox.dev"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            aria-label="Back to top"
            className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 shadow-sm transition-colors cursor-pointer"
            href="#home"
            title="Back to top"
          >
            <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
