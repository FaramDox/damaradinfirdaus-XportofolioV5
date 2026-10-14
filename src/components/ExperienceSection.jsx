const timeline = [
  {
    period: '2026 — Present',
    active: true,
    role: 'Software Engineering Student & Game Designer',
    org: 'Politeknik Negeri Lampung (Tim Hita Studio)',
    desc: 'Merancang arsitektur sistem, mekanisme permainan, dan skema basis data relasional, serta mengoordinasikan pengembangan proyek perangkat lunak interaktif di Tim Hita Studio.',
  },
  {
    period: '2026',
    active: false,
    role: 'Web Development & Database Specialist',
    org: 'Freelance & Academic Projects',
    desc: 'Mengembangkan aplikasi web kustom berbasis Laravel & PHP, perancangan skema relasional database teroptimasi, normalisasi data, serta integrasi endpoint API.',
  },
  {
    period: '2022 — 2023',
    active: false,
    role: 'Sekretaris OSIS',
    org: 'SMAN 1 Seputih Banyak',
    desc: 'Pengelolaan administrasi kearsipan digital sekolah, koordinasi kerja tim antar divisi, pembuatan proposal kegiatan, dan kepemimpinan program siswa.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/60 dark:bg-[#0d0d0d] transition-colors duration-200" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-lime-400 font-semibold bg-lime-500/10 dark:bg-lime-400/10 px-3 py-1 rounded border border-lime-500/20 dark:border-lime-400/20 inline-block">
            EXPERIENCE
          </h2>
        </div>
        <div className="relative pl-6 md:pl-0">
          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.period + item.role} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative group">
                <div
                  className={`md:col-span-3 font-mono text-xs flex items-center md:justify-end gap-3 pt-1 ${
                    item.active ? 'text-lime-600 dark:text-lime-400' : item.period === '2026' ? 'text-zinc-600 dark:text-zinc-400' : 'text-zinc-400 dark:text-zinc-500'
                  }`}
                >
                  <span>{item.period}</span>
                  <div
                    className={`w-3 h-3 rounded-full bg-white dark:bg-[#0d0d0d] border-2 hidden md:block ${
                      item.active
                        ? 'border-lime-500 dark:border-lime-400 ring-4 ring-lime-400/20'
                        : item.period === '2026'
                        ? 'border-zinc-400 dark:border-zinc-600'
                        : 'border-zinc-300 dark:border-zinc-700'
                    }`}
                  ></div>
                </div>
                <div className="md:col-span-9 p-6 rounded-xl bg-white dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 group-hover:border-lime-500/40 transition-colors shadow-sm dark:shadow-none">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{item.org}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
