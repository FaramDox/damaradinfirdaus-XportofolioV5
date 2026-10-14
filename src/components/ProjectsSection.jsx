const projects = [
  {
    url: 'klinik-polinela.app',
    title: 'Klinik Polinela Web App',
    desc: 'Aplikasi manajemen klinik berbasis web untuk otomasi antrean pasien, rekam medis digital, dan operasional poliklinik secara terpadu.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    preview: (
      <div className="z-10 mt-auto bg-zinc-900/90 border border-zinc-800 p-3 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono text-lime-400">Antrean Pasien Live</span>
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono text-zinc-400 text-center">
          <div className="bg-black/50 p-1 rounded border border-zinc-800">A-024 (Poli Umum)</div>
          <div className="bg-black/50 p-1 rounded border border-zinc-800">B-012 (Gigi)</div>
          <div className="bg-black/50 p-1 rounded border border-zinc-800">Farmasi OK</div>
        </div>
      </div>
    ),
  },
  {
    url: 'absensi-sman1seputihbanyak.sch.id',
    title: 'Dashboard Absensi Siswa',
    desc: 'Sistem informasi dan dashboard absensi siswa otomatis dengan pelaporan realtime, rekapitulasi data presensi, dan log siswa di SMAN 1 Seputih Banyak.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    preview: (
      <div className="z-10 mt-auto bg-zinc-900/90 border border-zinc-800 p-3 rounded-lg text-zinc-300">
        <div className="flex justify-between items-center text-[10px] font-mono mb-2 text-zinc-400">
          <span>Tingkat Kehadiran Harian</span>
          <span className="text-lime-400 font-bold">98.4%</span>
        </div>
        <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
          <div className="bg-lime-400 h-full rounded-full w-[98%]"></div>
        </div>
        <div className="flex justify-between text-[8px] font-mono text-zinc-500 mt-2">
          <span>Siswa: 720</span>
          <span>Hadir: 709</span>
          <span>Izin/Sakit: 11</span>
        </div>
      </div>
    ),
  },
  {
    url: 'cisco-packet-tracer-infra',
    title: 'Network Architecture & Topologies',
    desc: 'Rancangan topologi jaringan multi-subnet & Extended Access Control List (ACL) menggunakan Cisco Packet Tracer dengan konfigurasi routing aman.',
    tags: ['Cisco Packet Tracer', 'Networking', 'Security'],
    preview: (
      <div className="z-10 mt-auto bg-zinc-900/90 border border-zinc-800 p-3 rounded-lg text-zinc-300">
        <div className="flex items-center justify-between text-[10px] font-mono mb-2 text-zinc-400">
          <span>Subnet &amp; ACL Topology</span>
          <span className="text-lime-400">ACTIVE</span>
        </div>
        <div className="grid grid-cols-3 gap-1 text-[8px] font-mono text-center">
          <div className="p-1 rounded bg-black/60 border border-lime-500/30 text-lime-400">Router-Core</div>
          <div className="p-1 rounded bg-black/60 border border-zinc-700 text-zinc-300">VLAN 10/20</div>
          <div className="p-1 rounded bg-black/60 border border-lime-500/30 text-lime-400">Ext-ACL Filter</div>
        </div>
      </div>
    ),
  },
  {
    url: 'hitastudio.github.io/Think-and-Code',
    title: 'ThinkAndCode',
    desc: 'Platform media belajar koding dan blog teknologi interaktif untuk berbagi tutorial pemrograman dasar serta tips software engineering.',
    tags: ['C#', 'C++', 'GDScript'],
    link: 'https://hitastudio.github.io/Think-and-Code/',
    image: './ssthinkandcode.png',
  },
  {
    url: 'hitastudio.github.io/Pasir-Biru',
    title: 'Web Desa Digital',
    desc: 'Portal sistem informasi desa terpadu untuk transparansi publik, publikasi berita/kegiatan warga, dan layanan administrasi surat online.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    link: 'https://hitastudio.github.io/Pasir-Biru/',
    image: './sswebdesa.png',
  },
  {
    url: 'faramdox.github.io/Portofolio-PerusahaanTeknologi-V1',
    title: 'Web Company Profile',
    desc: 'Website profil perusahaan profesional untuk menampilkan identitas bisnis, katalog layanan, portofolio proyek, dan formulir kontak klien.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap'],
    link: 'https://faramdox.github.io/Portofolio-PerusahaanTeknologi-V1/',
    image: './sswebperusahaan.png',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#0a0a0d] transition-colors duration-200" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-lime-400 font-semibold bg-lime-500/10 dark:bg-lime-400/10 px-3 py-1 rounded border border-lime-500/20 dark:border-lime-400/20 inline-block">
              FEATURED PROJECTS
            </h2>
          </div>
          <a className="group inline-flex items-center gap-1.5 text-xs font-mono text-lime-600 dark:text-lime-400 hover:underline" href="#projects">
            <span>VIEW ALL PROJECTS</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl bg-zinc-50 dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 hover:border-lime-500/50 dark:hover:border-lime-400/50 transition-all duration-300 flex flex-col overflow-hidden group shadow-sm dark:shadow-none"
            >
              <div className="relative bg-zinc-950 p-4 border-b border-zinc-200 dark:border-zinc-800 h-52 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono text-zinc-400">{p.url}</span>
                  <span className="text-[9px] font-mono bg-lime-400/20 text-lime-400 px-2 py-0.5 rounded border border-lime-400/30">FEATURED</span>
                </div>
                {p.image ? (
                  <a
                    href={p.link || '#projects'}
                    target={p.link ? '_blank' : undefined}
                    rel={p.link ? 'noopener noreferrer' : undefined}
                    className="absolute inset-0 block cursor-pointer"
                    title={p.link ? `Buka demo ${p.title}` : p.title}
                  >
                    <img
                      alt={p.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                      decoding="async"
                      loading="lazy"
                      src={p.image}
                    />
                  </a>
                ) : (
                  p.preview
                )}
                <div className="absolute inset-0 bg-radial from-lime-400/5 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">{p.title}</h3>
                    {p.link && (
                      <a
                        className="text-xs font-mono font-semibold text-lime-600 dark:text-lime-400 hover:underline flex items-center gap-1"
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Demo</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{p.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-1 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">{t}</span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_-3px_rgba(163,230,53,0.3)] hover:shadow-[0_0_20px_-2px_rgba(163,230,53,0.5)] cursor-pointer"
                      >
                        <span>Buka Live Demo</span>
                        <span>↗</span>
                      </a>
                    ) : (
                      <span className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-mono text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-900/60 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 select-none">
                        Demo internal / privat
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
