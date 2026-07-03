import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import heroTemple from "@/assets/hero-temple.jpg";
import mandalaBg from "@/assets/mandala-bg.jpg";
import scriptureGita from "@/assets/scripture-gita.jpg";
import templeCard from "@/assets/temple-card.jpg";
import { OmSymbol, LotusMotif, MandalaBorder, TempleBell, ConchShell } from "@/components/sacred/OmSymbol";
import { DustParticles, LotusPetals, LightRays } from "@/components/sacred/Ambient";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--6882a59b-08c0-494a-b19d-4b53babd52f2.lovable.app/og-image.jpg" },
    ],
  }),
  component: SanatanaHome,
});

/* ————————————————— Theme Switcher ————————————————— */

// Phase machine:
// idle → moon-spin → ripple-to-light → light-visible → sun-spin → ripple-to-dark → idle
type Phase =
  | "idle"
  | "moon-spin"
  | "ripple-to-light"
  | "light-visible"
  | "sun-spin"
  | "ripple-to-dark";

const RIPPLE_DURATION = 930;
const SPIN_DURATION   = 420;

// Diagonal of the viewport — guarantees full coverage from any origin
function maxRippleRadius(ox: number, oy: number) {
  const vw = typeof window !== "undefined" ? window.innerWidth  : 1440;
  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  return Math.ceil(Math.hypot(Math.max(ox, vw - ox), Math.max(oy, vh - oy)) * 1.08);
}

function ThemeSwitcher() {
  const [phase, setPhase]         = useState<Phase>("idle");
  const [origin, setOrigin]       = useState({ x: 0, y: 0 });
  const [iframeReady, setIframeReady] = useState(false);
  const moonBtnRef = useRef<HTMLButtonElement>(null);
  const sunBtnRef  = useRef<HTMLButtonElement>(null);
  const timers     = useRef<ReturnType<typeof setTimeout>[]>([]);

  const after = (ms: number, fn: () => void) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };
  const clearAll = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  // Moon clicked → open light theme
  const onMoonClick = useCallback(() => {
    if (phase !== "idle") return;
    const rect = moonBtnRef.current!.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setIframeReady(false);
    setPhase("moon-spin");
    after(SPIN_DURATION, () => setPhase("ripple-to-light"));
    after(SPIN_DURATION + RIPPLE_DURATION, () => setPhase("light-visible"));
  }, [phase]);

  // Sun clicked → return to dark theme
  const onSunClick = useCallback(() => {
    if (phase !== "light-visible") return;
    const rect = sunBtnRef.current!.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setPhase("sun-spin");
    after(SPIN_DURATION, () => setPhase("ripple-to-dark"));
    after(SPIN_DURATION + RIPPLE_DURATION, () => { clearAll(); setPhase("idle"); });
  }, [phase]);

  const radius = maxRippleRadius(origin.x, origin.y);

  // Ripple circle: positioned so its center sits exactly at origin
  const rippleSize = radius * 2;
  const rippleStyle = (color: string, expanding: boolean): React.CSSProperties => ({
    position:  "fixed",
    zIndex:    55,
    width:     rippleSize,
    height:    rippleSize,
    borderRadius: "50%",
    background: color,
    top:       origin.y - radius,
    left:      origin.x - radius,
    willChange: "transform",
    pointerEvents: "none",
    transform: expanding ? "scale(1)" : "scale(0)",
    transition: expanding
      ? `transform ${RIPPLE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
      : `transform ${RIPPLE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    transformOrigin: "center center",
  });

  // Shared button base styles
  const btnBase: React.CSSProperties = {
    position:     "fixed",
    top:          24,
    right:        24,
    zIndex:       60,
    width:        44,
    height:       44,
    borderRadius: "50%",
    display:      "grid",
    placeItems:   "center",
    cursor:       "pointer",
    border:       "none",
    outline:      "none",
    transition:   "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const isLightVisible = phase === "light-visible" || phase === "sun-spin" || phase === "ripple-to-dark";
  const showRippleToLight = phase === "ripple-to-light" || phase === "light-visible";
  const showRippleToDark  = phase === "ripple-to-dark";

  return (
    <>
      {/* ─── Moon button (dark page) ─── */}
      <button
        ref={moonBtnRef}
        onClick={onMoonClick}
        aria-label="Switch to light theme"
        disabled={phase !== "idle"}
        style={{
          ...btnBase,
          background: "oklch(0.93 0.04 82 / 0.88)",
          boxShadow:  "0 4px 20px oklch(0.78 0.14 82 / 0.25), 0 0 0 1px oklch(0.78 0.14 82 / 0.35) inset",
          color:      "oklch(0.36 0.11 25)",
          opacity:    isLightVisible ? 0 : 1,
          pointerEvents: isLightVisible ? "none" : "auto",
          animation:  phase === "moon-spin"
            ? `icon-spin-glow ${SPIN_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`
            : "none",
        }}
      >
        {/* Moon SVG */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>

      {/* ─── Ivory ripple — expands to reveal light page ─── */}
      {(phase === "moon-spin" || phase === "ripple-to-light" || phase === "light-visible") && (
        <div
          aria-hidden
          style={rippleStyle(
            "linear-gradient(135deg, oklch(0.97 0.02 85) 0%, oklch(0.93 0.04 82) 60%, oklch(0.88 0.06 80) 100%)",
            showRippleToLight
          )}
        />
      )}

      {/* ─── Iframe — always mounted once opened, toggled via opacity ─── */}
      {phase !== "idle" && phase !== "moon-spin" && (
        <iframe
          src="https://lighthemee.netlify.app/"
          title="Light Theme"
          onLoad={() => setIframeReady(true)}
          aria-hidden={!isLightVisible}
          style={{
            position:      "fixed",
            inset:         0,
            zIndex:        40,
            width:         "100%",
            height:        "100%",
            border:        "none",
            opacity:       isLightVisible && iframeReady ? 1 : 0,
            pointerEvents: isLightVisible ? "auto" : "none",
            transition:    "opacity 0.35s ease",
          }}
        />
      )}

      {/* Loading spinner while iframe loads */}
      {(phase === "light-visible") && !iframeReady && (
        <div
          aria-hidden
          style={{
            position:    "fixed",
            inset:       0,
            zIndex:      45,
            display:     "grid",
            placeItems:  "center",
            background:  "oklch(0.93 0.04 82)",
            pointerEvents: "none",
          }}
        >
          <div style={{
            width:       40,
            height:      40,
            borderRadius: "50%",
            border:      "3px solid oklch(0.78 0.14 82 / 0.25)",
            borderTopColor: "oklch(0.78 0.14 82)",
            animation:   "spin-loader 0.75s linear infinite",
          }} />
        </div>
      )}

      {/* ─── Sun button (floats over iframe) ─── */}
      <button
        ref={sunBtnRef}
        onClick={onSunClick}
        aria-label="Return to Sanatana"
        disabled={phase !== "light-visible"}
        style={{
          ...btnBase,
          background: "oklch(0.97 0.02 85 / 0.88)",
          boxShadow:  "0 4px 20px oklch(0.75 0.16 85 / 0.3), 0 0 0 1px oklch(0.78 0.14 82 / 0.4) inset",
          color:      "oklch(0.52 0.14 75)",
          opacity:    isLightVisible ? 1 : 0,
          pointerEvents: isLightVisible && phase === "light-visible" ? "auto" : "none",
          animation:  phase === "sun-spin"
            ? `icon-spin-glow-sun ${SPIN_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`
            : "none",
        }}
      >
        {/* Sun SVG */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </button>

      {/* ─── Dark sacred ripple — expands to return to dark page ─── */}
      {(phase === "sun-spin" || phase === "ripple-to-dark") && (
        <div
          aria-hidden
          style={rippleStyle(
            "linear-gradient(135deg, oklch(0.22 0.06 45) 0%, oklch(0.18 0.04 40) 50%, oklch(0.14 0.02 45) 100%)",
            showRippleToDark
          )}
        />
      )}
    </>
  );
}

/* ————————————————— Small primitives ————————————————— */

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <LotusMotif className="h-3 w-6" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display text-[11px] uppercase tracking-[0.35em] text-bronze/80">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, sanskrit }: { kicker: string; title: string; sanskrit?: string }) {
  return (
    <div className="text-center">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-3 font-serif text-4xl italic text-primary md:text-5xl">
        {title}
      </h2>
      {sanskrit && (
        <p className="mt-2 font-devanagari text-lg text-bronze">{sanskrit}</p>
      )}
      <GoldRule className="mt-5 mx-auto max-w-xs" />
    </div>
  );
}

/* ————————————————— Phone frame ————————————————— */

function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-[300px] ${className}`}>
      <div className="relative rounded-[46px] bg-brown p-2 shadow-carved">
        <div className="absolute inset-0 rounded-[46px] bg-gradient-to-b from-gold/40 via-transparent to-bronze/40 opacity-70 [mask:linear-gradient(#000,transparent_40%,transparent_60%,#000)]" />
        <div className="relative overflow-hidden rounded-[38px] bg-parchment">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-brown" />
          {children}
        </div>
      </div>
    </div>
  );
}

function PhoneChrome({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 pt-10 pb-3">
      <button className="text-bronze" aria-label="Back">‹</button>
      <span className="font-serif text-base italic text-primary">{title}</span>
      <span className="text-bronze">{right ?? "◦"}</span>
    </div>
  );
}

function TabBar({ active = "Home" }: { active?: string }) {
  const items = ["Home", "Library", "Emotions", "Temples", "You"];
  return (
    <div className="border-t border-gold/30 bg-cream/60 px-3 py-3 backdrop-blur">
      <div className="flex items-center justify-around text-[10px] uppercase tracking-widest">
        {items.map((it) => (
          <div key={it} className={`flex flex-col items-center gap-1 ${active === it ? "text-primary" : "text-bronze/60"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${active === it ? "bg-gold" : "bg-bronze/30"}`} />
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————————————————— Page ————————————————— */

function SanatanaHome() {
  return (
    <main className="relative overflow-hidden bg-parchment">
      <ThemeSwitcher />
      <TopBar />
      <Hero />
      <Manifesto />
      <Dashboard />
      <ScriptureLibrary />
      <ReadingManuscript />
      <Emotions />
      <TemplesEvents />
      <History />
      <Premium />
      <Footer />
    </main>
  );
}

/* ————————————————— TopBar ————————————————— */

function TopBar() {
  return (
    <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-brown shadow-gold">
          <OmSymbol className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="font-display text-lg text-primary">SANATANA</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-bronze/70">Eternal wisdom</div>
        </div>
      </div>
      <nav className="hidden items-center gap-8 font-serif text-sm text-brown/80 md:flex">
        <a href="#dashboard" className="hover:text-primary">Dashboard</a>
        <a href="#library" className="hover:text-primary">Library</a>
        <a href="#emotions" className="hover:text-primary">Emotions</a>
        <a href="#temples" className="hover:text-primary">Temples</a>
        <a href="#premium" className="hover:text-primary">Premium</a>
      </nav>
      <div className="flex items-center gap-3">
        <button className="rounded-full border border-gold/60 bg-cream/60 px-5 py-2 font-serif text-sm italic text-primary shadow-carved backdrop-blur transition hover:bg-cream">
          Begin Journey
        </button>
      </div>
    </header>
  );
}

/* ————————————————— Hero ————————————————— */

function Hero() {
  return (
    <section className="relative isolate mx-auto max-w-7xl px-6 pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative animate-rise">
          <div className="mb-6 flex items-center gap-3">
            <TempleBell className="h-8 w-6 text-gold animate-sway" />
            <Kicker>Est. in wisdom · अनादि · अनंत</Kicker>
          </div>

          <h1 className="font-serif text-5xl leading-[1.05] text-primary md:text-7xl">
            Walk into the <em className="font-serif italic text-gradient-gold">temple</em>,<br />
            wherever you are.
          </h1>

          <p className="mt-3 font-devanagari text-2xl text-bronze md:text-3xl">
            धर्मो रक्षति रक्षितः
          </p>

          <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-brown/80">
            Sanatana is a sacred companion for the modern seeker — the Bhagavad Gita, the Ramayana,
            temple bells and morning aartis, gathered in one quiet, golden place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group relative overflow-hidden rounded-full bg-gradient-gold px-8 py-3.5 font-serif text-base italic text-brown shadow-gold transition hover:scale-[1.02]">
              <span className="relative z-10">Enter the Temple</span>
              <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100 animate-shimmer" />
            </button>
            <button className="flex items-center gap-2 font-serif text-base italic text-primary underline-offset-4 hover:underline">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-gold">▶</span>
              Watch the ritual
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-bronze/70">
            <span>10 languages</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>18 sacred texts</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>1,200+ temples</span>
          </div>
        </div>

        {/* Temple scene */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-gold/40 shadow-gold">
            <img
              src={heroTemple}
              alt="Ancient Indian temple interior glowing with golden lamps at sunrise"
              width={1536}
              height={1920}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent" />
            <LightRays />
            <DustParticles count={30} />
            <LotusPetals count={6} />

            {/* Om medallion */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative grid h-40 w-40 place-items-center">
                <MandalaBorder className="absolute inset-0 h-full w-full text-gold-soft animate-rotate-slow" />
                <div className="grid h-20 w-20 place-items-center rounded-full bg-cream/90 text-primary shadow-glow backdrop-blur">
                  <OmSymbol className="h-10 w-10" />
                </div>
              </div>
            </div>

            {/* Bottom verse card */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-gold/40 bg-cream/90 p-4 backdrop-blur">
              <Kicker>Today · Gita 2.47</Kicker>
              <p className="mt-1 font-devanagari text-base leading-snug text-primary">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
              </p>
              <p className="mt-1 font-serif text-xs italic text-brown/80">
                You have a right to your work — never to its fruits.
              </p>
            </div>
          </div>

          {/* Floating bell */}
          <div className="absolute -right-4 -top-6 hidden md:block">
            <TempleBell className="h-24 w-14 text-gold animate-sway drop-shadow-[0_10px_20px_oklch(0.55_0.15_55_/_0.4)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Manifesto strip ————————————————— */

function Manifesto() {
  return (
    <section className="relative border-y border-gold/30 bg-gradient-to-r from-cream via-sandstone/60 to-cream py-14">
      <div className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: `url(${mandalaBg})`, backgroundSize: "600px", backgroundPosition: "center", backgroundRepeat: "repeat" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <ConchShell className="mx-auto h-10 w-10 text-gold" />
        <p className="mt-5 font-serif text-2xl italic leading-relaxed text-primary md:text-3xl">
          &ldquo;May wisdom guide every step of your journey — from the first bell at dawn
          to the last diya at dusk.&rdquo;
        </p>
        <GoldRule className="mt-6 mx-auto max-w-md" />
        <div className="mt-6 grid grid-cols-2 gap-6 text-left md:grid-cols-4">
          {[
            ["Ancient", "Rooted in scripture, translated with reverence."],
            ["Divine", "Every verse curated by scholars and sadhus."],
            ["Peaceful", "No ads, no noise — just the quiet of a temple."],
            ["Timeless", "Wisdom of yesterday, written for today."],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-display text-xs uppercase tracking-[0.3em] text-bronze">{k}</div>
              <p className="mt-2 font-serif italic text-brown/80">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Dashboard mockup ————————————————— */

function Dashboard() {
  return (
    <section id="dashboard" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="The Dashboard" title="A morning aarti, on your home screen" sanskrit="प्रातःस्मरणम्" />

      <div className="mt-16 grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Phone>
          {/* status */}
          <div className="flex justify-between px-6 pt-3 text-[10px] text-brown/60">
            <span>6:12 AM</span><span>◐ ◐ ◐</span>
          </div>
          <PhoneChrome title="जय श्री कृष्ण" right="◔" />
          {/* welcome */}
          <div className="px-5">
            <div className="font-serif text-xl italic text-primary">Good morning, Arjun</div>
            <p className="text-xs text-brown/70">May this day bring you peace and clarity.</p>
          </div>

          {/* verse card */}
          <div className="mx-4 mt-4 rounded-2xl border border-gold/40 bg-gradient-to-br from-cream to-sandstone/70 p-4 shadow-carved">
            <div className="flex items-center justify-between">
              <Kicker>Today's Verse · Gita 2.47</Kicker>
              <OmSymbol className="h-4 w-4 text-gold" />
            </div>
            <p className="mt-2 font-devanagari text-sm leading-snug text-primary">
              कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
            </p>
            <p className="mt-1 font-serif text-[11px] italic text-brown/80">
              Do your work with devotion, unattached to the fruits.
            </p>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-full bg-primary py-1.5 text-[10px] uppercase tracking-widest text-cream">▶ Listen</button>
              <button className="flex-1 rounded-full border border-gold/60 py-1.5 text-[10px] uppercase tracking-widest text-primary">Reflect</button>
            </div>
          </div>

          {/* stats */}
          <div className="mx-4 mt-3 grid grid-cols-3 gap-2 text-center">
            {[["45", "Streak"],["12","Books"],["8","Aartis"]].map(([n, l]) => (
              <div key={l} className="rounded-xl border border-gold/30 bg-cream/70 py-2">
                <div className="font-serif text-lg text-primary">{n}</div>
                <div className="text-[9px] uppercase tracking-widest text-bronze">{l}</div>
              </div>
            ))}
          </div>

          {/* continue reading */}
          <div className="mx-4 mt-3 rounded-2xl border border-gold/30 bg-cream/70 p-3">
            <Kicker>Continue reading</Kicker>
            <div className="mt-2 flex items-center gap-3">
              <img src={scriptureGita} alt="" width={40} height={40} className="h-10 w-10 rounded-md object-cover" loading="lazy"/>
              <div className="flex-1">
                <div className="font-serif text-sm text-primary">Ramayana · Yuddha Kanda</div>
                <div className="text-[10px] text-brown/70">Chapter 18 · 62% complete</div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-sandstone">
                  <div className="h-full w-[62%] bg-gradient-gold" />
                </div>
              </div>
            </div>
          </div>

          {/* today's festival */}
          <div className="mx-4 mt-3 flex items-center gap-3 rounded-2xl border border-gold/30 bg-gradient-to-r from-lotus/15 to-gold/10 p-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-lotus/20">
              <LotusMotif className="h-5 w-6 text-lotus" />
            </div>
            <div>
              <div className="font-serif text-sm text-primary">Ekadashi · Today</div>
              <div className="text-[10px] text-brown/70">Fasting begins at sunrise</div>
            </div>
          </div>

          <div className="h-4" />
          <TabBar active="Home" />
        </Phone>

        <div className="space-y-6">
          <ul className="space-y-4">
            {[
              ["Daily Bhagavad Gita verse", "A curated shloka every morning — Sanskrit, transliteration, translation and audio recitation."],
              ["Continue where you paused", "Your last chapter, waiting like a bookmark of dry banyan leaf."],
              ["Aartis, festivals & prayer reminders", "Never miss Ekadashi, Purnima, or the temple bell at dawn."],
              ["Streak & reading goals", "Consistency, gently — a garland of days rather than a scoreboard."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/50 bg-cream text-gold">
                  <span className="text-xs">✦</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary">{t}</h3>
                  <p className="mt-1 font-serif text-base italic text-brown/80">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Library ————————————————— */

const scriptures = [
  { name: "Bhagavad Gita", sub: "700 verses · 18 chapters", tag: "Divine Song" },
  { name: "Ramayana", sub: "7 Kandas · Valmiki", tag: "Epic" },
  { name: "Mahabharata", sub: "18 Parvas · Vyasa", tag: "Itihasa" },
  { name: "Srimad Bhagavatam", sub: "18,000 verses · 12 skandhas", tag: "Purana" },
  { name: "Upanishads", sub: "108 principal texts", tag: "Vedanta" },
  { name: "Shiva Purana", sub: "24,000 verses", tag: "Purana" },
  { name: "Yoga Sutras", sub: "196 sutras · Patanjali", tag: "Yoga" },
  { name: "Chanakya Niti", sub: "17 chapters", tag: "Wisdom" },
];

function ScriptureLibrary() {
  return (
    <section id="library" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="Scripture Library" title="A shelf carved from sandalwood" sanskrit="ग्रन्थालयः" />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {scriptures.map((s, i) => (
          <article
            key={s.name}
            className="group relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-cream to-sandstone/70 p-5 shadow-carved transition hover:-translate-y-1 hover:shadow-gold"
          >
            <div className="absolute -right-8 -top-8 opacity-15 transition group-hover:opacity-30">
              <MandalaBorder className="h-40 w-40 text-bronze animate-rotate-slow" />
            </div>
            <div className="relative">
              <span className="inline-block rounded-full border border-gold/50 bg-cream px-3 py-0.5 text-[9px] uppercase tracking-widest text-bronze">
                {s.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-primary">{s.name}</h3>
              <p className="mt-1 font-serif text-sm italic text-brown/70">{s.sub}</p>
              <div className="mt-6 flex items-center justify-between text-xs">
                <span className="font-display uppercase tracking-widest text-gold">Read · Listen</span>
                <span className="text-primary transition group-hover:translate-x-1">→</span>
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
          </article>
        ))}
      </div>

      <p className="mt-10 text-center font-serif text-sm italic text-brown/70">
        Vedas · Upanishads · Puranas · Itihasas · Sutras · Niti-shastras · Kavyas
      </p>
    </section>
  );
}

/* ————————————————— Manuscript reading screen ————————————————— */

function ReadingManuscript() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: `url(${mandalaBg})`, backgroundSize: "800px" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle kicker="The Reading" title="Turn the page of an ancient manuscript" sanskrit="पत्रम् उद्घाटयतु" />

        <div className="mt-14 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          {/* Manuscript */}
          <div className="relative">
            <div className="relative rounded-[24px] border-2 border-gold/50 bg-parchment p-8 shadow-carved md:p-12">
              {/* corner ornaments */}
              {["top-4 left-4","top-4 right-4 rotate-90","bottom-4 left-4 -rotate-90","bottom-4 right-4 rotate-180"].map((pos) => (
                <LotusMotif key={pos} className={`absolute h-4 w-8 text-gold ${pos}`} />
              ))}
              <div className="mx-auto max-w-lg text-center">
                <Kicker>Bhagavad Gita · Chapter 12 · Bhakti Yoga</Kicker>
                <h3 className="mt-3 font-serif text-3xl italic text-primary">Verse 13-14</h3>
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

                <p className="font-devanagari text-2xl leading-relaxed text-primary">
                  अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।<br />
                  निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥
                </p>

                <p className="mt-6 font-serif text-lg italic leading-relaxed text-brown/85">
                  &ldquo;One who bears no ill-will to any being, who is friendly and compassionate,
                  free from the sense of &lsquo;mine&rsquo; and ego, equal in joy and sorrow, and forgiving —
                  such a devotee is dear to Me.&rdquo;
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
                  {["Sanskrit","Hindi","English","Tamil","Telugu"].map((l) => (
                    <span key={l} className={`rounded-full border px-3 py-1 font-serif italic ${l === "Sanskrit" ? "border-gold bg-gold/20 text-primary" : "border-gold/40 text-brown/70"}`}>{l}</span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-4 text-primary">
                  {["◀","🔖","▶ Listen","✎ Notes","▶"].map((i) => (
                    <button key={i} className="rounded-full border border-gold/40 bg-cream px-4 py-2 font-serif text-sm italic shadow-carved">{i}</button>
                  ))}
                </div>
              </div>
              {/* page shadow */}
              <div className="absolute inset-y-6 left-1/2 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent" />
            </div>
          </div>

          <div>
            <ul className="space-y-5">
              {[
                ["Illuminated typography", "Sanskrit rendered in true Devanagari serif — as if written by lamp light."],
                ["Bookmark, highlight, notes", "Every insight, kept like a pressed flower in a sacred book."],
                ["Text-to-speech in 10 languages", "Close your eyes. Let a soft voice carry the verse."],
                ["Commentary from great acharyas", "Shankara, Ramanuja, Prabhupada — side by side."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-gold/30 bg-cream/70 p-4 shadow-carved">
                  <h4 className="font-serif text-lg text-primary">{t}</h4>
                  <p className="mt-1 font-serif italic text-brown/80">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Emotions ————————————————— */

const emotions: [string, string, string][] = [
  ["Anger", "क्रोध", "from bg-lotus/30 to-copper/20"],
  ["Fear", "भय", "from-peacock/25 to-bronze/15"],
  ["Love", "प्रेम", "from-lotus/30 to-gold/20"],
  ["Grief", "शोक", "from-bronze/20 to-brown/15"],
  ["Hope", "आशा", "from-gold/25 to-turquoise/20"],
  ["Stress", "चिन्ता", "from-copper/20 to-bronze/15"],
  ["Discipline", "संयम", "from-primary/15 to-gold/15"],
  ["Success", "सफलता", "from-gold/30 to-gold-soft/30"],
  ["Failure", "पराजय", "from-maroon/20 to-brown/15"],
  ["Confusion", "भ्रम", "from-peacock/20 to-lotus/15"],
  ["Forgiveness", "क्षमा", "from-turquoise/20 to-gold/15"],
  ["Devotion", "भक्ति", "from-lotus/25 to-gold/25"],
];

function Emotions() {
  return (
    <section id="emotions" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="Emotion Guide" title="The Gita, for every feeling" sanskrit="भावानुसारं ज्ञानम्" />

      <p className="mx-auto mt-5 max-w-2xl text-center font-serif italic text-brown/80">
        Choose the storm inside your heart. Sanatana will open the exact verses, stories and
        meditations that Krishna offered for it — five thousand years ago, and still.
      </p>

      <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {emotions.map(([en, sk, grad]) => (
          <button
            key={en}
            className={`group relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br ${grad} p-6 text-left shadow-carved transition hover:-translate-y-1 hover:shadow-gold`}
          >
            <div className="absolute -bottom-6 -right-6 opacity-20 transition group-hover:opacity-40">
              <LotusMotif className="h-24 w-32 text-primary" />
            </div>
            <div className="relative">
              <div className="font-devanagari text-2xl text-primary">{sk}</div>
              <div className="mt-1 font-serif text-xl italic text-brown">{en}</div>
              <div className="mt-6 flex items-center gap-2 font-display text-[10px] uppercase tracking-widest text-bronze">
                Open guidance <span>→</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— Temples & Events ————————————————— */

function TemplesEvents() {
  return (
    <section id="temples" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sandstone/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Temples & Events" title="A pilgrimage, on your palm" sanskrit="तीर्थयात्रा" />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Temples card */}
          <article className="relative overflow-hidden rounded-3xl border border-gold/40 shadow-gold">
            <img src={templeCard} alt="South Indian temple gopuram at golden hour" width={1024} height={1024} className="h-72 w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-cream">
              <Kicker>2.1 km · Open until 9:00 PM</Kicker>
              <h3 className="mt-2 font-serif text-3xl italic">ISKCON Bangalore</h3>
              <p className="mt-1 font-serif italic opacity-90">Live darshan · Aarti in 32 min</p>
            </div>
            <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-cream/90 text-primary shadow-glow">
              <OmSymbol className="h-6 w-6" />
            </div>
            <div className="bg-parchment p-6">
              <div className="grid grid-cols-3 divide-x divide-gold/30 text-center">
                {[["4.8 ★","Rating"],["12","Aartis today"],["Live","Darshan"]].map(([n,l]) => (
                  <div key={l} className="px-2">
                    <div className="font-serif text-lg text-primary">{n}</div>
                    <div className="text-[10px] uppercase tracking-widest text-bronze">{l}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-serif italic text-brown/80">
                Nearby temples, live aartis, festival calendars, donations — with directions and
                opening hours quietly at hand.
              </p>
            </div>
          </article>

          {/* Events list */}
          <div className="rounded-3xl border border-gold/40 bg-parchment p-6 shadow-carved">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl italic text-primary">Upcoming events</h3>
              <span className="rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-bronze">Nearby</span>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                ["Gita Chanting","Today · 6:00 PM","ISKCON Bangalore","▶"],
                ["Hanuman Chalisa Path","Tomorrow · 7:00 AM","Maruti Temple","◆"],
                ["Bhagavatam Satsang","May 12 · 5:30 PM","Hare Krishna Hall","❋"],
                ["Yoga & Meditation","May 15 · 6:30 AM","Vivekananda Kendra","☸"],
                ["Annadanam Seva","May 18 · 12:00 PM","Sri Balaji Temple","✿"],
              ].map(([n,t,p,ic]) => (
                <li key={n} className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-cream/70 p-3 transition hover:bg-cream">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-brown font-serif text-lg">{ic}</div>
                  <div className="flex-1">
                    <div className="font-serif text-base text-primary">{n}</div>
                    <div className="text-[11px] text-brown/70">{t} · {p}</div>
                  </div>
                  <span className="text-primary">→</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full rounded-full bg-primary py-3 font-serif italic text-cream shadow-carved">
              Submit an event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— History timeline ————————————————— */

const empires = [
  ["Maurya","322–185 BCE","Chandragupta · Ashoka · Chanakya"],
  ["Gupta","320–550 CE","The golden age of art & science"],
  ["Chola","300 BCE–1279 CE","Bronze, Brihadeeswara, oceans"],
  ["Vijayanagara","1336–1646 CE","Hampi, sacred stone, wisdom"],
  ["Maratha","1674–1818 CE","Shivaji · Swaraj · dharma"],
];

function History() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="Ancient India" title="Walk the timeline of Bharata" sanskrit="भारतवर्षस्य इतिहासः" />

      <div className="relative mt-16">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent md:left-1/2 md:block" />
        <ol className="space-y-10">
          {empires.map((e, i) => (
            <li key={e[0]} className={`md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
              <div className="md:[direction:ltr]">
                <div className="relative rounded-2xl border border-gold/40 bg-gradient-to-br from-cream to-sandstone/70 p-6 shadow-carved">
                  <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-display text-[10px] uppercase tracking-widest text-cream">
                    {e[1]}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl italic text-primary">{e[0]} Empire</h3>
                  <p className="mt-2 font-serif italic text-brown/80">{e[2]}</p>
                  <div className="mt-4 flex gap-2 text-[10px] uppercase tracking-widest text-bronze">
                    <span className="rounded-full border border-gold/40 px-2 py-0.5">Kings</span>
                    <span className="rounded-full border border-gold/40 px-2 py-0.5">Coins</span>
                    <span className="rounded-full border border-gold/40 px-2 py-0.5">Architecture</span>
                  </div>
                </div>
              </div>
              <div />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ————————————————— Premium ————————————————— */

function Premium() {
  return (
    <section id="premium" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-temple opacity-90" />
      <DustParticles count={20} />
      <LotusPetals count={8} />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Kicker>Sanatana Sanctum</Kicker>
        <h2 className="mt-3 font-serif text-4xl italic text-cream md:text-6xl">
          A <em className="text-gradient-gold">golden lamp</em> that never dims.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-serif italic text-cream/85">
          Sanctum is our premium membership — offline scriptures in ten languages, curated
          audiobooks, guided meditations, live darshans, and a private circle of seekers.
        </p>

        <div className="mx-auto mt-12 max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-gold p-[1.5px] shadow-gold">
            <div className="absolute inset-0 bg-gradient-gold opacity-90" />
            <div className="relative rounded-[22px] bg-gradient-to-br from-brown to-primary p-8 text-left">
              <div className="flex items-start justify-between">
                <div>
                  <Kicker>Sanctum · Annual</Kicker>
                  <h3 className="mt-2 font-serif text-3xl italic text-gold-soft">Sanatana Gold</h3>
                </div>
                <OmSymbol className="h-10 w-10 text-gold animate-flicker" />
              </div>
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <ul className="space-y-2 font-serif italic text-cream/90">
                <li>✦ Offline library in 10 languages</li>
                <li>✦ Full audio narration by classical vocalists</li>
                <li>✦ Live temple darshans, ad-free</li>
                <li>✦ Private satsang circle</li>
              </ul>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <div className="font-display text-4xl text-gold-soft">₹1,999</div>
                  <div className="text-[10px] uppercase tracking-widest text-cream/60">per year · billed once</div>
                </div>
                <button className="rounded-full bg-gradient-gold px-6 py-3 font-serif italic text-brown shadow-gold">
                  Light the lamp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Footer ————————————————— */

function Footer() {
  return (
    <footer className="relative border-t border-gold/30 bg-gradient-to-b from-parchment to-sandstone/70 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-brown shadow-gold">
                <OmSymbol className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-lg text-primary">SANATANA</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-bronze">Eternal · Timeless</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm font-serif italic text-brown/80">
              Read. Reflect. Realize. Your journey towards dharma begins here.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs">
              {["EN","हिं","த","తె","ಕ","മ","ગુ","म","ব","संस्कृत"].map((l) => (
                <span key={l} className="rounded-full border border-gold/40 px-2 py-0.5 font-serif text-brown">{l}</span>
              ))}
            </div>
          </div>
          {[
            ["Scriptures", ["Bhagavad Gita","Ramayana","Mahabharata","Upanishads","Puranas"]],
            ["Journey", ["Dashboard","Emotions","Temples","Events","History"]],
            ["Sanctum", ["Premium","Downloads","Languages","Support","Privacy"]],
          ].map(([h, items]) => (
            <div key={h as string}>
              <div className="font-display text-xs uppercase tracking-[0.3em] text-bronze">{h as string}</div>
              <ul className="mt-4 space-y-2 font-serif italic text-brown/80">
                {(items as string[]).map((i) => (
                  <li key={i}><a href="#" className="hover:text-primary">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <GoldRule className="mt-12" />

        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <p className="font-devanagari text-lg text-primary">
            ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥
          </p>
          <p className="font-serif text-sm italic text-brown/70">
            From untruth, lead me to truth. From darkness, to light. From death, to immortality.
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-bronze/70">
            © Sanatana · Crafted with devotion
          </p>
        </div>
      </div>
    </footer>
  );
}
