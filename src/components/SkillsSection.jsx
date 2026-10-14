const services = [
  {
    icon: <span className="font-mono font-bold text-lg">&lt;/&gt;</span>,
    title: 'Web Development',
    desc: 'Pengembangan aplikasi web dinamis dan skalabel menggunakan ekosistem modern Laravel, PHP murni, dan HTML/CSS.',
  },
  {
    icon: (
      <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect height="16" rx="2" width="18" x="3" y="4" />
        <path d="M3 10h18" />
        <path d="M7 7h.01M10 7h.01" />
      </svg>
    ),
    title: 'Frontend Engineering',
    desc: 'Membangun tampilan antarmuka interaktif, modern, dan sepenuhnya responsif dengan Tailwind CSS & JavaScript.',
  },
  {
    icon: (
      <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect height="7" rx="1" width="20" x="2" y="3" />
        <rect height="7" rx="1" width="20" x="2" y="14">
          <line x1="6" x2="6.01" y1="6.5" y2="6.5" />
          <line x1="6" x2="6.01" y1="17.5" y2="17.5" />
        </rect>
      </svg>
    ),
    title: 'Backend & API Development',
    desc: 'Membangun arsitektur server-side yang aman, RESTful API andal, serta integrasi layanan dengan PHP, Java, dan Python.',
  },
  {
    icon: (
      <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="1.8" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Database Design',
    desc: 'Perancangan skema relasional efisien, normalisasi basis data, dan optimalisasi query SQL (MySQL & MS SQL Server).',
  },
  {
    icon: (
      <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="12" x2="6" y1="9" y2="15" />
        <line x1="12" x2="18" y1="9" y2="15" />
      </svg>
    ),
    title: 'Network & Infrastructure',
    desc: 'Simulasi jaringan kompleks menggunakan Cisco Packet Tracer, konfigurasi multi-subnet, routing, serta Extended ACL.',
  },
  {
    icon: (
      <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="1.8" viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Software Architecture & UX',
    desc: 'Perancangan spesifikasi sistem komprehensif mencakup PRD, ERD, Use Case, dan desain wireframe alur pengguna.',
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/60 dark:bg-[#0d0d0d] transition-colors duration-200" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-lime-400 font-semibold bg-lime-500/10 dark:bg-lime-400/10 px-3 py-1 rounded border border-lime-500/20 dark:border-lime-400/20 inline-block">
            SKILLS &amp; SERVICES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl bg-white dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 hover:border-lime-500/50 dark:hover:border-lime-400/50 transition-all duration-200 group shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-lg bg-lime-50 dark:bg-zinc-900 border border-lime-200 dark:border-zinc-800 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-5 group-hover:scale-110 group-hover:border-lime-400/50 transition-all">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
