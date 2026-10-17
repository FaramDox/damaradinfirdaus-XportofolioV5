import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_tae164k';
const EMAILJS_TEMPLATE_ID = 'template_iiqvgij';
const EMAILJS_PUBLIC_KEY  = '4GKyZFEXfCg7laCeK';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      { from_name: form.name, from_email: form.email, project_type: form.projectType, message: form.message },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus('success');
      setForm({ name: '', email: '', projectType: '', message: '' });
    }).catch(() => setStatus('error'));
  };

  return (
    <section className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#0a0a0d] transition-colors duration-200" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-lime-600 dark:text-lime-400 font-semibold bg-lime-500/10 dark:bg-lime-400/10 px-3 py-1 rounded border border-lime-500/20 dark:border-lime-400/20">
            CONTACT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4 leading-tight">
              Let's build something amazing together.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Punya ide proyek sistem perangkat lunak, aplikasi web, atau ingin berdiskusi? Jangan ragu untuk menghubungi saya kapan saja.
            </p>
            <div className="space-y-5 text-xs font-mono">
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <span className="p-2.5 rounded-lg bg-lime-50 dark:bg-zinc-900 border border-lime-200 dark:border-zinc-800 text-lime-600 dark:text-lime-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
                <a className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors" href="mailto:mradinfirdaus@gmail.com">
                  mradinfirdaus@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <span className="p-2.5 rounded-lg bg-lime-50 dark:bg-zinc-900 border border-lime-200 dark:border-zinc-800 text-lime-600 dark:text-lime-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
                <span>Lampung, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <span className="p-2.5 rounded-lg bg-lime-50 dark:bg-zinc-900 border border-lime-200 dark:border-zinc-800 text-lime-600 dark:text-lime-400">
                  <span className="w-3.5 h-3.5 block rounded-full border-2 border-lime-500 dark:border-lime-400"></span>
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">Available for freelance &amp; full-time</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#141414] border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-2xl space-y-5"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2" htmlFor="name">Your Name</label>
                  <input
                    className="w-full bg-white dark:bg-[#181a1f] border border-zinc-300 dark:border-zinc-700/80 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500 dark:focus:ring-lime-400 transition-colors"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2" htmlFor="email">Your Email</label>
                  <input
                    className="w-full bg-white dark:bg-[#181a1f] border border-zinc-300 dark:border-zinc-700/80 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500 dark:focus:ring-lime-400 transition-colors"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2" htmlFor="projectType">Project Type</label>
                <select
                  className="w-full bg-white dark:bg-[#181a1f] border border-zinc-300 dark:border-zinc-700/80 rounded-lg px-4 py-3 text-sm text-zinc-800 dark:text-zinc-300 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500 dark:focus:ring-lime-400 transition-colors"
                  id="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type...</option>
                  <option value="web-app">Full-stack Web Application (Laravel / PHP)</option>
                  <option value="frontend">Frontend &amp; Responsive UI</option>
                  <option value="database">Database Architecture &amp; SQL Query Tuning</option>
                  <option value="networking">Network Infrastructure Simulation (Cisco)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full bg-white dark:bg-[#181a1f] border border-zinc-300 dark:border-zinc-700/80 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500 dark:focus:ring-lime-400 resize-none transition-colors"
                  id="message"
                  placeholder="Jelaskan kebutuhan proyek atau pesan Anda..."
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {status === 'success' && (
                <p className="text-lime-500 text-sm font-mono text-center">✓ Pesan terkirim! Saya akan segera membalas.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm font-mono text-center">✗ Gagal mengirim. Coba lagi atau email langsung.</p>
              )}
              <button
                className="w-full py-4 bg-lime-400 hover:bg-lime-300 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-glow-lime cursor-pointer font-mono"
                type="submit"
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                {status !== 'sending' && <span>→</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
