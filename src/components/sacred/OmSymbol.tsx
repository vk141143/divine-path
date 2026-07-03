export function OmSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M50 78c-14 0-24-9-24-22 0-11 8-19 19-19 8 0 14 4 17 10l-6 4c-2-4-6-6-11-6-7 0-12 5-12 12s5 13 12 13c8 0 13-5 13-13v-3h12v3c0 13-8 21-20 21z"
        fill="currentColor"
      />
      <path d="M64 30c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7zm4 0c0 2 1 3 3 3s3-1 3-3-1-3-3-3-3 1-3 3z" fill="currentColor"/>
      <path d="M50 12c3 0 5 2 5 5v2h-4v-2c0-1 0-1-1-1s-1 0-1 1v2h-4v-2c0-3 2-5 5-5z" fill="currentColor"/>
      <path d="M30 22c1-2 3-2 5-1l16 8-2 4-16-8c-2-1-3-2-3-3z" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}

export function LotusMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M60 55c-15 0-28-8-32-20 4 2 10 3 15 2-6-4-10-11-10-19 6 4 13 7 20 8-3-6-4-13-3-20 5 6 9 13 10 21 1-8 5-15 10-21 1 7 0 14-3 20 7-1 14-4 20-8 0 8-4 15-10 19 5 1 11 0 15-2-4 12-17 20-32 20z" fill="currentColor"/>
    </svg>
  );
}

export function MandalaBorder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.9">
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="85" strokeDasharray="1 3"/>
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="55" strokeDasharray="2 2"/>
        <circle cx="100" cy="100" r="40" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 16;
          const x1 = 100 + Math.cos(a) * 55;
          const y1 = 100 + Math.sin(a) * 55;
          const x2 = 100 + Math.cos(a) * 85;
          const y2 = 100 + Math.sin(a) * 85;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8;
          const cx = 100 + Math.cos(a) * 70;
          const cy = 100 + Math.sin(a) * 70;
          return <circle key={i} cx={cx} cy={cy} r="6" />;
        })}
      </g>
    </svg>
  );
}

export function TempleBell({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line x1="30" y1="0" x2="30" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <g fill="currentColor">
        <ellipse cx="30" cy="32" rx="6" ry="3" opacity="0.9"/>
        <path d="M18 40c0-7 5-12 12-12s12 5 12 12v25c0 3-3 5-6 5H24c-3 0-6-2-6-5V40z" opacity="0.95"/>
        <ellipse cx="30" cy="72" rx="14" ry="3"/>
        <circle cx="30" cy="78" r="3"/>
      </g>
    </svg>
  );
}

export function ConchShell({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M50 15c20 0 35 15 35 35S70 85 50 85c-15 0-25-8-25-18 0-8 6-13 13-13 5 0 9 3 9 8 0 3-2 5-5 5-2 0-3-1-3-3h-4c0 4 3 7 7 7 5 0 9-4 9-9 0-7-6-12-13-12-11 0-19 8-19 20 0 15 13 27 31 27 22 0 39-17 39-39S72 11 50 11v4z"/>
    </svg>
  );
}
