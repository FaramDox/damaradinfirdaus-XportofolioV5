import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'testimonials', 'contact'];

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-[#f8fafc]/90 dark:bg-[#0d0d0d]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-900/80 transition-colors duration-200"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a
          aria-label="Home"
          className="flex items-center gap-1 font-mono font-bold text-2xl tracking-tight text-zinc-900 dark:text-white group"
          href="#"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lime-500 dark:text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(163,230,53,0.8)] transition-all">
            DAF
          </span>
          <motion.span
            className="text-lime-500 dark:text-lime-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            _
          </motion.span>
        </motion.a>

        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-wider">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-150 relative group"
              href={`#${link}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              {link.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-lime-500 dark:bg-lime-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <motion.a
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border border-lime-500/50 dark:border-lime-400/40 bg-white dark:bg-zinc-900/80 hover:border-lime-500 dark:hover:border-lime-400 hover:bg-lime-400/15 text-xs font-mono font-medium text-zinc-900 dark:text-white shadow-sm transition-all duration-200"
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(163,230,53,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>LET'S TALK</span>
            <span className="text-lime-500 dark:text-lime-400">↗</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
