/* Ambient temple particles & light rays — pure CSS, no JS animation */
export function DustParticles({ count = 24 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 18;
        const duration = 14 + Math.random() * 10;
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-gold/60 blur-[1px] animate-float-up"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function LotusPetals({ count = 10 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 14;
        const duration = 12 + Math.random() * 8;
        const size = 10 + Math.random() * 14;
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="absolute top-0 text-lotus/70 animate-petal-fall"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
            aria-hidden
          >
            <path d="M10 2c3 4 3 8 0 16-3-8-3-12 0-16z" fill="currentColor"/>
          </svg>
        );
      })}
    </div>
  );
}

export function LightRays() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-overlay">
      <div className="absolute -top-1/4 left-1/4 h-[140%] w-[30%] rotate-12 bg-gradient-to-b from-gold/40 via-gold/10 to-transparent blur-2xl" />
      <div className="absolute -top-1/4 right-1/3 h-[140%] w-[20%] -rotate-6 bg-gradient-to-b from-gold-soft/50 via-gold/10 to-transparent blur-3xl" />
    </div>
  );
}
