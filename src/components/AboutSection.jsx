export default function AboutSection() {
  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#0b0b0e] relative transition-colors duration-200" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-lime-400 font-semibold bg-lime-500/10 dark:bg-lime-400/10 px-3 py-1 rounded border border-lime-500/20 dark:border-lime-400/20">
            ABOUT ME
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-md dark:shadow-none">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-lime-500 dark:border-lime-400 z-20"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-lime-500 dark:border-lime-400 z-20"></div>
              <div className="overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-900 aspect-square max-w-md mx-auto relative group">
                <img
                  alt="Damar Adin Firdaus - Software Engineer Portrait"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  decoding="async"
                  height="448"
                  loading="lazy"
                  src="/damarganz.jpeg"
                  width="448"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Description & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug mb-6">
              I'm Damar Adin Firdaus, a developer who values{' '}
              <span className="text-lime-600 dark:text-[#A3E635]">clean code</span> and{' '}
              <span className="text-lime-600 dark:text-[#A3E635]">performance</span>.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
              Berdedikasi dalam membangun arsitektur perangkat lunak yang kokoh, aplikasi web full-stack berkinerja tinggi, dan perancangan basis data terstruktur. Berfokus pada penulisan kode modular, pemeliharaan sistem yang mudah, serta pengalaman pengguna yang intuitif dan responsif.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 hover:border-lime-500/40 transition-colors shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-mono text-2xl font-bold mb-1">
                  <span>&gt;_</span>
                  <span>3+</span>
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400">YEARS EXPERIENCE</div>
              </div>
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 hover:border-lime-500/40 transition-colors shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-mono text-2xl font-bold mb-1">
                  <span>&lt;/&gt;</span>
                  <span>10+</span>
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400">PROJECTS DELIVERED</div>
              </div>
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 hover:border-lime-500/40 transition-colors shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-mono text-2xl font-bold mb-1">
                  <svg className="w-6 h-6 stroke-lime-600 dark:stroke-lime-400 fill-none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 15l-2 5l-5-2l1-5" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                  <span>7+</span>
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400">CERTIFICATES &amp; BADGES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
