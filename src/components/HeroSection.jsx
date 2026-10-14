import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const codeLines = [
  { num: '01', parts: [{ t: 'keyword', v: 'const' }, { t: 'space' }, { t: 'var', v: 'DamarAdin' }, { t: 'plain', v: ' = {' }] },
  { num: '02', parts: [{ t: 'plain', v: '  role: ' }, { t: 'string', v: "'Software Engineer'" }, { t: 'plain', v: ',' }] },
  { num: '03', parts: [{ t: 'plain', v: '  focus: [' }, { t: 'var', v: "'Frontend'" }, { t: 'plain', v: ', ' }, { t: 'var', v: "'Backend'" }, { t: 'plain', v: ', ' }, { t: 'var', v: "'Database'" }, { t: 'plain', v: '],' }] },
  { num: '04', parts: [{ t: 'plain', v: '  tech: [' }] },
  { num: '05', parts: [{ t: 'string', v: "  'PHP'" }, { t: 'plain', v: ', ' }, { t: 'string', v: "'Laravel'" }, { t: 'plain', v: ', ' }, { t: 'string', v: "'Java'" }, { t: 'plain', v: ',' }] },
  { num: '06', parts: [{ t: 'string', v: "  'Python'" }, { t: 'plain', v: ', ' }, { t: 'string', v: "'MySQL'" }, { t: 'plain', v: ', ' }, { t: 'string', v: "'Tailwind CSS'" }] },
  { num: '07', parts: [{ t: 'plain', v: '  ]' }] },
  { num: '08', parts: [{ t: 'plain', v: '};' }] },
  { num: '09', parts: [] },
  { num: '10', parts: [{ t: 'comment', v: '// Crafting efficient and scalable software systems.' }] },
];

const colorMap = { keyword: 'text-cyan-400', var: 'text-lime-300', string: 'text-orange-300', comment: 'text-zinc-500', plain: 'text-zinc-300', space: '' };

function TypingCode() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible >= codeLines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 120);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300">
      {codeLines.map((line, i) => (
        <motion.div
          key={line.num}
          initial={{ opacity: 0, x: -8 }}
          animate={i < visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <span className="text-zinc-600 select-none mr-3">{line.num}</span>
          {line.parts.map((p, j) => (
            <span key={j} className={colorMap[p.t]}>{p.v}</span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function TypewriterName() {
  const fullText = 'DAMAR ADIN FIRDAUS';
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Delay 300ms so hero entrance animation finishes smoothly
    const startTimer = setTimeout(() => setHasStarted(true), 300);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let timer;

    if (!isDeleting && text.length < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 75);
    } else if (!isDeleting && text.length === fullText.length) {
      // Hold full name for 4 seconds so visitor can read clearly
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 4000);
    } else if (isDeleting && text.length > 0) {
      // Crisp backspace
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, 35);
    } else if (isDeleting && text.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, hasStarted]);

  return (
    <div className="relative font-mono font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
      {/* Ghost layer to lock height & width precisely on every screen size: ZERO layout shift */}
      <span className="invisible opacity-0 pointer-events-none select-none block" aria-hidden="true">
        {fullText}
        <span className="inline-block ml-0.5">_</span>
      </span>

      {/* Visible typing layer superimposed */}
      <div className="absolute inset-0 top-0 left-0">
        <span className="text-zinc-900 dark:text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_0_14px_rgba(255,255,255,0.25)]">
          {text}
          <motion.span
            className="inline-block text-lime-500 dark:text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] ml-0.5 select-none"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
          >
            _
          </motion.span>
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 lg:py-36 overflow-hidden tech-grid-bg" id="home">
      <div className="cyber-globe-glow absolute -right-20 top-10 w-[600px] h-[600px] pointer-events-none rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.div
            className="inline-flex items-center gap-2 font-mono text-xs text-lime-600 dark:text-lime-400 mb-4 px-3 py-1 rounded-full bg-lime-500/10 dark:bg-lime-400/10 border border-lime-500/20 dark:border-lime-400/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>&lt; Hello, I'm /&gt;</span>
          </motion.div>

          <motion.h1
            className="mb-3 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="sr-only">Damar Adin Firdaus</span>
            <TypewriterName />
          </motion.h1>

          <motion.p
            className="font-mono text-xs sm:text-sm tracking-widest text-zinc-600 dark:text-zinc-400 uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SOFTWARE ENGINEER &amp; FULL-STACK DEVELOPER
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Membangun solusi aplikasi web dan sistem perangkat lunak yang efisien, handal, serta scalable dengan arsitektur bersih dan performa optimal.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              className="px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm rounded-lg transition-all duration-200 flex items-center gap-2 shadow-[0_0_25px_-5px_rgba(163,230,53,0.35)] cursor-pointer"
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px -5px rgba(163,230,53,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              <span>VIEW MY WORK</span>
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </motion.a>
            <motion.a
              className="px-6 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-lime-500 dark:hover:border-lime-400 text-zinc-900 dark:text-white font-medium text-sm rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer"
              download="CV Damar Adin Firdaus.pdf"
              href="./CV Damar Adin Firdaus_New.pdf"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>DOWNLOAD RESUME</span>
              <span className="text-xs">⤓</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 font-mono text-xs text-lime-600 dark:text-lime-400/90 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400 animate-ping" />
            <span>// AVAILABLE FOR FREELANCE &amp; FULL-TIME OPPORTUNITIES</span>
          </motion.div>
        </div>

        {/* Right terminal */}
        <motion.div
          className="lg:col-span-5 relative z-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div
            className="absolute -right-10 -bottom-10 w-64 h-64 border border-lime-500/30 dark:border-lime-500/20 rounded-full border-dashed pointer-events-none hidden sm:block"
            style={{ animation: 'spin 22s linear infinite', willChange: 'transform' }}
          />
          <motion.div
            className="w-full rounded-xl bg-[#111215] border border-zinc-300/80 dark:border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-sm"
            whileHover={{ boxShadow: '0 0 40px -10px rgba(163,230,53,0.2)' }}
          >
            <div className="bg-[#181a1f] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {['bg-red-500/80', 'bg-yellow-500/80', 'bg-green-500/80'].map((c) => (
                  <span key={c} className={`w-3 h-3 rounded-full ${c} inline-block`} />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <span>damar.adin@dev</span>
                <span className="w-2 h-2 rounded-full bg-lime-400" />
              </div>
              <div className="w-10" />
            </div>
            <TypingCode />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
