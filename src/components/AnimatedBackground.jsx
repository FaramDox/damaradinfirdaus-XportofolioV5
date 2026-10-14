import { useMemo } from 'react';

const dots = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 96 + 2}%`,
  top: `${(i * 53) % 96 + 2}%`,
  size: 2 + (i % 3),
  duration: 4 + (i % 4),
  delay: (i * 0.4) % 3,
  desktopOnly: i > 6, // Show fewer dots on mobile to keep 60/120fps
}));

export default function AnimatedBackground() {
  const renderedDots = useMemo(
    () =>
      dots.map((dot) => (
        <span
          key={dot.id}
          className={`absolute rounded-full bg-lime-500/25 dark:bg-lime-400/20 ${
            dot.desktopOnly ? 'hidden md:block' : ''
          }`}
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animation: `float-dot ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
            willChange: 'transform, opacity',
          }}
        />
      )),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ contain: 'strict' }}
    >
      {renderedDots}

      {/* GPU-composited glowing ambient orbs */}
      <div
        className="absolute -top-36 -left-36 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-lime-500/10 dark:bg-lime-400/5 blur-2xl sm:blur-3xl animate-ambient-1"
        style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
      />
      <div
        className="absolute top-24 -right-36 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full bg-green-500/10 dark:bg-green-500/5 blur-2xl sm:blur-3xl animate-ambient-2"
        style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
      />
    </div>
  );
}
