/* Ambient temple particles & light rays — pure CSS, no JS animation */

// Deterministic pseudo-random: same seed → same value on server and client
function seeded(seed: number) {
  const x = Math.sin(seed + 1) * 43758.5453123;
  return x - Math.floor(x);
}

// Round to 4 decimal places so SSR and client produce identical strings
function r4(n: number) {
  return Math.round(n * 10000) / 10000;
}

export function DustParticles({ count = 24 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const s = (o: number) => seeded(i * 7 + o);
        const size     = r4(2 + s(0) * 4);
        const left     = r4(s(1) * 100);
        const delay    = r4(s(2) * 18);
        const duration = r4(14 + s(3) * 10);
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-gold/60 blur-[1px] animate-float-up"
            style={{
              left:              `${left}%`,
              width:             size,
              height:            size,
              animationDelay:    `${delay}s`,
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
        const s = (o: number) => seeded(i * 11 + o);
        const left     = r4(s(0) * 100);
        const delay    = r4(s(1) * 14);
        const duration = r4(12 + s(2) * 8);
        const size     = r4(10 + s(3) * 14);
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="absolute top-0 text-lotus/70 animate-petal-fall"
            style={{
              left:              `${left}%`,
              width:             size,
              height:            size,
              animationDelay:    `${delay}s`,
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
