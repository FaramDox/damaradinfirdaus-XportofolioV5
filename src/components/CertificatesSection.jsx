import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certs = [
  {
    title: 'Getting Started with Data',
    category: 'DATA SCIENCE & ANALYTICS',
    desc: 'Penguasaan konsep dasar analisis data, ekosistem big data modern, pengolahan informasi, dan pemanfaatan data untuk pengambilan keputusan strategis.',
    issuer: 'IBM SkillsBuild',
    date: '28 September 2026',
    image: '/sertifikat/Sertifikat Started With Data.png',
    badge: 'IBM SKILLSBUILD',
    verifyUrl: 'https://www.credly.com/badges/6367a41f-2961-4f17-bde5-1538bef18c94',
  },
  {
    title: 'MOOC Pelatihan UI/UX',
    category: 'UI/UX DESIGN & GOVERNMENT CREDENTIAL',
    desc: 'Lulus kualifikasi "Sangat Memuaskan" (17 Jam Pelajaran) diselenggarakan oleh Pusdiklat Kementerian Investasi dan Hilirisasi/BKPM, ditandatangani elektronik resmi oleh BSrE - BSSN.',
    issuer: 'Kementerian Investasi dan Hilirisasi / BKPM',
    credentialId: '8051/MOOC/KEMINVESHIL-BKPM/2026',
    date: '16 September 2026',
    image: '/sertifikat/sertifikat pelatihan ui ux.png',
    badge: 'KEMINVESHIL / BKPM',
  },
  {
    title: 'Mahir Membuat Website dengan Laravel 9',
    category: 'BACKEND & WEB DEVELOPMENT',
    desc: 'Pengembangan arsitektur backend MVC modern, integrasi database, REST API, sistem autentikasi, dan routing aplikasi berbasis framework Laravel 9.',
    issuer: 'Coding Studio Flexy',
    date: '06 Oktober 2026',
    image: '/sertifikat/sertifikat mahir membuat website dengan laravel 9.png',
    badge: 'CODING STUDIO',
  },
  {
    title: 'Fundamental Front-End Web Development II',
    category: 'FRONTEND DEVELOPMENT',
    desc: 'Penguasaan struktur antarmuka web interaktif, responsive design lintas perangkat, DOM manipulation, dan integrasi UI modern.',
    issuer: 'Coding Studio Flexy',
    date: '03 Desember 2025',
    image: '/sertifikat/sertifikat frontend web development.jpeg',
    badge: 'CODING STUDIO',
  },
  {
    title: 'Fundamental Database MySQL',
    category: 'DATABASE & DATA MODELING',
    desc: 'Perancangan basis data relasional, normalisasi tabel, indexing performa, dan penguasaan sintaks query SQL (DDL & DML).',
    issuer: 'Coding Studio Flexy',
    date: '01 September 2026',
    image: '/sertifikat/sertifikat fundamental database mysql.png',
    badge: 'CODING STUDIO',
  },
  {
    title: 'Fundamental Algoritma',
    category: 'COMPUTER SCIENCE & LOGIC',
    desc: 'Pondasi logika algoritma pemrograman komputasional, alur instruksi terstruktur, dan efisiensi problem solving perangkat lunak.',
    issuer: 'Coding Studio Flexy',
    date: '17 Juli 2025',
    image: '/sertifikat/sertifikat fundamental agoritma.jpeg',
    badge: 'CODING STUDIO',
  },
  {
    title: 'Free Class - Intro to Cyber Security',
    category: 'SECURITY & NETWORK PROTECTION',
    desc: 'Dasar konsep keamanan sistem siber, analisis ancaman digital, proteksi kerahasiaan informasi, dan mitigasi vulnerability.',
    issuer: 'Coding Studio',
    date: '31 Juli 2025',
    image: '/sertifikat/sertifikat class cyber security.jpeg',
    badge: 'CODING STUDIO',
  },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#090a0d] relative transition-colors duration-200" id="certificates">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-lime-400 font-semibold bg-lime-500/10 dark:bg-lime-400/10 px-3 py-1 rounded border border-lime-500/20 dark:border-lime-400/20 inline-block mb-3">
              CERTIFICATES &amp; CREDENTIALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
              Sertifikasi &amp; Lisensi Resmi
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            TOTAL: <span className="text-lime-600 dark:text-lime-400 font-bold">{certs.length} SERTIFIKAT TERVERIFIKASI</span>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <motion.div
              key={c.title}
              className="rounded-xl bg-zinc-50 dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 hover:border-lime-500/50 dark:hover:border-lime-400/50 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer shadow-sm dark:shadow-lg"
              onClick={() => setSelectedCert(c)}
              whileHover={{ y: -4 }}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] bg-zinc-100 dark:bg-[#0c0d10] overflow-hidden border-b border-zinc-200 dark:border-zinc-800/80">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
                  src={c.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 dark:from-[#141414] via-transparent to-black/20 opacity-80 group-hover:opacity-30 transition-opacity" />

                {/* Hover Click to Enlarge Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-full bg-lime-400 text-black text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(163,230,53,0.6)]">
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>LIHAT SERTIFIKAT</span>
                  </span>
                </div>

                {/* Issuer Pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700 text-lime-400 font-medium">
                    {c.badge}
                  </span>
                </div>

                {/* Date Pill */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-zinc-800 text-zinc-300">
                    {c.date}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-lime-600 dark:text-lime-400/90 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 dark:bg-lime-400 animate-pulse" />
                    <span>VERIFIED CREDENTIAL</span>
                    {c.credentialId && (
                      <span className="text-zinc-500 ml-auto truncate max-w-[150px]">
                        #{c.credentialId.split('/')[0]}
                      </span>
                    )}
                    {c.verifyUrl && (
                      <span className="text-lime-600 dark:text-lime-300/80 ml-auto flex items-center gap-1 text-[10px]">
                        CREDLY VERIFIED ↗
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="truncate max-w-[85%]">{c.issuer}</span>
                  <span className="text-lime-600 dark:text-lime-400 group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="relative max-w-4xl w-full bg-white dark:bg-[#141414] border border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-2xl"
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#181a1f]">
                <div>
                  <span className="text-[10px] font-mono text-lime-600 dark:text-lime-400 uppercase tracking-widest font-semibold">
                    {selectedCert.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-tight">
                    {selectedCert.title}
                  </h4>
                  {selectedCert.credentialId && (
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block mt-0.5">
                      Nomor: {selectedCert.credentialId}
                    </span>
                  )}
                </div>
                <button
                  aria-label="Tutup"
                  className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors font-mono cursor-pointer"
                  onClick={() => setSelectedCert(null)}
                  type="button"
                >
                  ✕
                </button>
              </div>

              {/* Modal Image */}
              <div className="p-4 sm:p-6 bg-zinc-100 dark:bg-[#0a0a0c] flex items-center justify-center max-h-[75vh] overflow-auto">
                <img
                  alt={selectedCert.title}
                  className="max-h-[68vh] w-auto max-w-full rounded-lg shadow-xl object-contain border border-zinc-300 dark:border-zinc-800"
                  decoding="async"
                  src={selectedCert.image}
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3.5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#141414] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <div>
                  <span className="text-zinc-500">Penerbit: </span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-medium">{selectedCert.issuer}</span>
                  <span className="mx-2 text-zinc-300 dark:text-zinc-600">|</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{selectedCert.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  {selectedCert.verifyUrl && (
                    <a
                      className="px-3 py-1.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-600 dark:text-blue-300 hover:bg-blue-600/25 transition-colors flex items-center gap-1 text-[11px]"
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Verifikasi di Credly</span>
                      <span>↗</span>
                    </a>
                  )}
                  <a
                    className="text-lime-600 dark:text-lime-400 hover:underline flex items-center gap-1 font-semibold"
                    download
                    href={selectedCert.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Buka Gambar Asli</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
