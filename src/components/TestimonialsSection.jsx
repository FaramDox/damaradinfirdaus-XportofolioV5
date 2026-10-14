import { useState, useEffect, useRef } from 'react';

const defaultTestimonials = [
  {
    id: 'default-1',
    quote:
      'Damar memiliki pemahaman arsitektur perangkat lunak yang sangat kuat. Kode yang ditulis sangat rapi, terstruktur, dan eksekusi sistem klinik berjalan tanpa hambatan.',
    name: 'Dr. Hendra Saputra',
    role: 'Koordinator Sistem, Klinik Polinela',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASeWbiMy1Z1k-UMhxxMPH6Sit8BDOCh9eNi0r3P7BYUm-8fDgPWsvs2NNcF-Px1Umj-wxtf0qAvKiJ4dT4EIjtqdyuvA4USN6DbmQ13CPzTrPhz6QAQZ8ArPKD_zf0QclO7VIXChTXhR0hnR0hjXAfOtVt0xrKccel5krUy4Xfb0C9c_QFqrut9mvvDoWf41jqesuJWjG4g0nalu-RzP-TfQ_XsGrlVW2OCDWmJ1e-WajGcpnVIJ0',
  },
  {
    id: 'default-2',
    quote:
      'Dashboard absensi yang dirancang Damar memudahkan pemantauan kehadiran harian di sekolah secara presisi dan realtime. Kemampuan problem-solvingnya luar biasa.',
    name: 'Rahmat Hidayat, S.Pd',
    role: 'Wakil Kesiswaan, SMAN 1 Seputih Banyak',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6etViYamhSj11eV52xB9awxWVt6ev3Yix5ol_vvZoBR61-6bU5LwtFseVi_Dvyn2zM47U9uq-COJeOT7JC9YrY8PXSGat4k369szqdZqjM-kpOA15_ydPkgDaUqepKYFSx-zljSWAMNlGv9mZuXCO1S4ao7fnBHIPBmmsWkPEkXwlq-GgBW6aprCTE-DoJHWVCw6--pZhXkCIjtVve06qhOk8mnFc8vxoILDqxgppszDE1tt0YfE',
  },
  {
    id: 'default-3',
    quote:
      'Kerja sama dengan Damar dalam proyek pengembangan sistem selalu efektif. Dia komunikatif, detail terhadap perancangan database, dan cepat tanggap dalam iterasi fitur.',
    name: 'Aulia Prasetyo',
    role: 'Lead Researcher, PhysiAble Project',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBye8bU8OkCstpyoJ5YHU2bmvOjF0YEpn61mb6GwlBgGzUQCJ2GH5YktcEE8Gz1LCLK4XD3q1MPJOjQYMheSbf48QRjNCZc-7kn4N8_fRdzaPNxflzHzSNONlHvQ9AqHnTkr5O7engfKWbf-aMjV3_TnarAVrPd4-9NMF1bbrszFQPcIvsULhLv6e_83pyMRbtoinNmvhGVVT_ALWUsMwP6c2IM2tq_LiWliRLRKvlJoHRChTsEvew',
  },
];

const STORAGE_KEY = 'portfolio-testimonials';

/* ─── Star Rating ─────────────────────────────────────────── */
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange && onChange(star)}
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={`text-2xl transition-colors ${
            star <= (hovered || value) ? 'text-lime-400' : 'text-zinc-600 dark:text-zinc-700'
          } ${onChange ? 'cursor-pointer' : 'cursor-default'}`}
          aria-label={`${star} bintang`}
          disabled={!onChange}
        >
          ★
        </button>
      ))}
    </div>
  );
}

/* ─── Avatar ──────────────────────────────────────────────── */
function getInitials(name) {
  return name.split(' ').slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('');
}

function Avatar({ src, name, size = 10 }) {
  const [err, setErr] = useState(false);
  if (src && !err) {
    return (
      <img
        alt={name}
        className={`w-${size} h-${size} rounded-full object-cover border border-zinc-300 dark:border-zinc-700 shrink-0`}
        src={src}
        onError={() => setErr(true)}
      />
    );
  }
  return (
    <div className={`w-${size} h-${size} rounded-full bg-lime-500/20 border border-lime-500/30 flex items-center justify-center shrink-0`}>
      <span className="text-lime-400 font-bold text-xs">{getInitials(name)}</span>
    </div>
  );
}

/* ─── Card ────────────────────────────────────────────────── */
function TestimonialCard({ t }) {
  return (
    <div className="min-w-[300px] w-[340px] sm:w-[380px] flex-shrink-0 p-6 rounded-xl bg-white dark:bg-[#141414] glow-card border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-lime-500/30 dark:hover:border-lime-400/30 transition-colors shadow-sm dark:shadow-none select-none">
      <div>
        <div className="text-lime-500 dark:text-lime-400 font-serif text-4xl mb-3 leading-none">""</div>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">{t.quote}</p>
        {t.rating && (
          <div className="mb-4">
            <StarRating value={t.rating} />
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800/60">
        <Avatar src={t.avatar} name={t.name} size={10} />
        <div>
          <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">{t.name}</h4>
          <p className="text-[11px] text-zinc-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee Scroll ──────────────────────────────────────── */
function Marquee({ items }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const isVisibleRef = useRef(true);
  const SPEED = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // Observe visibility so rAF stops completely when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let rafId;
    rafId = requestAnimationFrame(() => {
      const half = track.scrollWidth / 2;

      const step = () => {
        if (!pausedRef.current && isVisibleRef.current) {
          posRef.current += SPEED;
          if (posRef.current >= half) posRef.current = 0;
          track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
        }
        animRef.current = requestAnimationFrame(step);
      };
      animRef.current = requestAnimationFrame(step);
    });

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, [items.length]);

  const doubled = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onTouchStart={() => { pausedRef.current = true; }}
      onTouchEnd={() => { pausedRef.current = false; }}
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-zinc-50/90 dark:from-[#0d0d0d]/90 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-zinc-50/90 dark:from-[#0d0d0d]/90 to-transparent" />

      <div ref={trackRef} className="flex gap-5 w-max will-change-transform">
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ─── Form ────────────────────────────────────────────────── */
const emptyForm = { name: '', role: '', quote: '', rating: 5 };

/* ─── Main Section ────────────────────────────────────────── */
export default function TestimonialsSection() {
  const [userTestimonials, setUserTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUserTestimonials(JSON.parse(stored));
    } catch {}
  }, []);

  const allTestimonials = [...defaultTestimonials, ...userTestimonials];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi.';
    if (!form.role.trim()) e.role = 'Posisi / perusahaan wajib diisi.';
    if (!form.quote.trim()) e.quote = 'Testimoni wajib diisi.';
    else if (form.quote.trim().length < 20) e.quote = 'Testimoni minimal 20 karakter.';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const newEntry = {
      id: `user-${Date.now()}`,
      name: form.name.trim(),
      role: form.role.trim(),
      quote: form.quote.trim(),
      rating: form.rating,
      avatar: null,
    };

    const updated = [...userTestimonials, newEntry];
    setUserTestimonials(updated);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}

    setForm(emptyForm);
    setErrors({});
    setShowForm(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
  }

  return (
    <section
      className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/60 dark:bg-[#0d0d0d] transition-colors duration-200"
      id="testimonials"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-lime-400 font-semibold bg-lime-500/10 dark:bg-lime-400/10 px-3 py-1 rounded border border-lime-500/20 dark:border-lime-400/20 self-start">
            TESTIMONIALS
          </span>
          <button
            onClick={() => { setShowForm((v) => !v); setErrors({}); }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-lime-500/40 dark:border-lime-400/40 text-lime-600 dark:text-lime-400 text-xs font-mono font-semibold hover:bg-lime-500/10 dark:hover:bg-lime-400/10 transition-colors self-start sm:self-auto"
          >
            {showForm ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Batal
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Tulis Testimoni
              </>
            )}
          </button>
        </div>

        {/* Success banner */}
        {submitted && (
          <div className="mb-8 p-4 rounded-xl border border-lime-500/30 bg-lime-500/10 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lime-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-lime-600 dark:text-lime-400 font-medium">Terima kasih! Testimoni kamu berhasil ditambahkan.</p>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="mb-12 p-6 rounded-xl bg-white dark:bg-[#141414] border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Tinggalkan Testimoni</h3>
            <p className="text-xs text-zinc-500 mb-6">Bagikan pengalamanmu bekerja sama dengan Damar.</p>
            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Nama <span className="text-lime-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Nama lengkap kamu"
                  className={`px-3 py-2.5 rounded-lg bg-zinc-50 dark:bg-[#1a1a1a] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:ring-2 focus:ring-lime-500/40 transition ${errors.name ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-700'}`}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Posisi / Perusahaan <span className="text-lime-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  placeholder="misal: CEO, PT. Maju Jaya"
                  className={`px-3 py-2.5 rounded-lg bg-zinc-50 dark:bg-[#1a1a1a] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:ring-2 focus:ring-lime-500/40 transition ${errors.role ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-700'}`}
                />
                {errors.role && <p className="text-xs text-red-500">{errors.role}</p>}
              </div>

              {/* Quote */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Testimoni <span className="text-lime-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={form.quote}
                  onChange={(e) => handleChange('quote', e.target.value)}
                  placeholder="Ceritakan pengalamanmu bekerja sama dengan Damar..."
                  className={`px-3 py-2.5 rounded-lg bg-zinc-50 dark:bg-[#1a1a1a] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:ring-2 focus:ring-lime-500/40 transition resize-none ${errors.quote ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-700'}`}
                />
                <div className="flex justify-between items-center">
                  {errors.quote ? <p className="text-xs text-red-500">{errors.quote}</p> : <span />}
                  <span className="text-xs text-zinc-400">{form.quote.length} karakter</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Rating</label>
                <StarRating value={form.rating} onChange={(v) => handleChange('rating', v)} />
              </div>

              {/* Actions */}
              <div className="sm:col-span-2 flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setForm(emptyForm); setErrors({}); }}
                  className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-lime-500 hover:bg-lime-400 text-black text-xs font-mono font-semibold transition"
                >
                  Kirim Testimoni
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Marquee */}
        <Marquee items={allTestimonials} />

        {userTestimonials.length > 0 && (
          <p className="text-center text-xs text-zinc-500 mt-6">
            {userTestimonials.length} testimoni dari pengunjung
          </p>
        )}
      </div>
    </section>
  );
}
