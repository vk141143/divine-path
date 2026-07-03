import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJWl86D1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_temple_default = "/assets/hero-temple-BJDrUo7H.jpg";
var mandala_bg_default = "/assets/mandala-bg-BTvYdXA5.jpg";
var scripture_gita_default = "/assets/scripture-gita-DWz5yQur.jpg";
var temple_card_default = "/assets/temple-card-DSMDoYrH.jpg";
function OmSymbol({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 78c-14 0-24-9-24-22 0-11 8-19 19-19 8 0 14 4 17 10l-6 4c-2-4-6-6-11-6-7 0-12 5-12 12s5 13 12 13c8 0 13-5 13-13v-3h12v3c0 13-8 21-20 21z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 30c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7zm4 0c0 2 1 3 3 3s3-1 3-3-1-3-3-3-3 1-3 3z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 12c3 0 5 2 5 5v2h-4v-2c0-1 0-1-1-1s-1 0-1 1v2h-4v-2c0-3 2-5 5-5z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 22c1-2 3-2 5-1l16 8-2 4-16-8c-2-1-3-2-3-3z",
				fill: "currentColor",
				opacity: "0.7"
			})
		]
	});
}
function LotusMotif({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 120 60",
		className,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M60 55c-15 0-28-8-32-20 4 2 10 3 15 2-6-4-10-11-10-19 6 4 13 7 20 8-3-6-4-13-3-20 5 6 9 13 10 21 1-8 5-15 10-21 1 7 0 14-3 20 7-1 14-4 20-8 0 8-4 15-10 19 5 1 11 0 15-2-4 12-17 20-32 20z",
			fill: "currentColor"
		})
	});
}
function MandalaBorder({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 200 200",
		className,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			stroke: "currentColor",
			strokeWidth: "0.6",
			fill: "none",
			opacity: "0.9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "95"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "85",
					strokeDasharray: "1 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "70"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "55",
					strokeDasharray: "2 2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "100",
					r: "40"
				}),
				Array.from({ length: 16 }).map((_, i) => {
					const a = i * Math.PI * 2 / 16;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: 100 + Math.cos(a) * 55,
						y1: 100 + Math.sin(a) * 55,
						x2: 100 + Math.cos(a) * 85,
						y2: 100 + Math.sin(a) * 85
					}, i);
				}),
				Array.from({ length: 8 }).map((_, i) => {
					const a = i * Math.PI * 2 / 8;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: 100 + Math.cos(a) * 70,
						cy: 100 + Math.sin(a) * 70,
						r: "6"
					}, i);
				})
			]
		})
	});
}
function TempleBell({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 60 100",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "30",
			y1: "0",
			x2: "30",
			y2: "30",
			stroke: "currentColor",
			strokeWidth: "1",
			opacity: "0.6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "currentColor",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "30",
					cy: "32",
					rx: "6",
					ry: "3",
					opacity: "0.9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M18 40c0-7 5-12 12-12s12 5 12 12v25c0 3-3 5-6 5H24c-3 0-6-2-6-5V40z",
					opacity: "0.95"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "30",
					cy: "72",
					rx: "14",
					ry: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "30",
					cy: "78",
					r: "3"
				})
			]
		})]
	});
}
function ConchShell({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className,
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 15c20 0 35 15 35 35S70 85 50 85c-15 0-25-8-25-18 0-8 6-13 13-13 5 0 9 3 9 8 0 3-2 5-5 5-2 0-3-1-3-3h-4c0 4 3 7 7 7 5 0 9-4 9-9 0-7-6-12-13-12-11 0-19 8-19 20 0 15 13 27 31 27 22 0 39-17 39-39S72 11 50 11v4z" })
	});
}
function seeded(seed) {
	const x = Math.sin(seed + 1) * 43758.5453123;
	return x - Math.floor(x);
}
function r4(n) {
	return Math.round(n * 1e4) / 1e4;
}
function DustParticles({ count = 24 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: Array.from({ length: count }).map((_, i) => {
			const s = (o) => seeded(i * 7 + o);
			const size = r4(2 + s(0) * 4);
			const left = r4(s(1) * 100);
			const delay = r4(s(2) * 18);
			const duration = r4(14 + s(3) * 10);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-0 rounded-full bg-gold/60 blur-[1px] animate-float-up",
				style: {
					left: `${left}%`,
					width: size,
					height: size,
					animationDelay: `${delay}s`,
					animationDuration: `${duration}s`
				}
			}, i);
		})
	});
}
function LotusPetals({ count = 10 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: Array.from({ length: count }).map((_, i) => {
			const s = (o) => seeded(i * 11 + o);
			const left = r4(s(0) * 100);
			const delay = r4(s(1) * 14);
			const duration = r4(12 + s(2) * 8);
			const size = r4(10 + s(3) * 14);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 20 20",
				className: "absolute top-0 text-lotus/70 animate-petal-fall",
				style: {
					left: `${left}%`,
					width: size,
					height: size,
					animationDelay: `${delay}s`,
					animationDuration: `${duration}s`
				},
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 2c3 4 3 8 0 16-3-8-3-12 0-16z",
					fill: "currentColor"
				})
			}, i);
		})
	});
}
function LightRays() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden mix-blend-overlay",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1/4 left-1/4 h-[140%] w-[30%] rotate-12 bg-gradient-to-b from-gold/40 via-gold/10 to-transparent blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1/4 right-1/3 h-[140%] w-[20%] -rotate-6 bg-gradient-to-b from-gold-soft/50 via-gold/10 to-transparent blur-3xl" })]
	});
}
var RIPPLE_DURATION = 930;
var SPIN_DURATION = 420;
function maxRippleRadius(ox, oy) {
	const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
	const vh = typeof window !== "undefined" ? window.innerHeight : 900;
	return Math.ceil(Math.hypot(Math.max(ox, vw - ox), Math.max(oy, vh - oy)) * 1.08);
}
function ThemeSwitcher() {
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [origin, setOrigin] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [iframeReady, setIframeReady] = (0, import_react.useState)(false);
	const moonBtnRef = (0, import_react.useRef)(null);
	const sunBtnRef = (0, import_react.useRef)(null);
	const timers = (0, import_react.useRef)([]);
	const after = (ms, fn) => {
		const id = setTimeout(fn, ms);
		timers.current.push(id);
	};
	const clearAll = () => {
		timers.current.forEach(clearTimeout);
		timers.current = [];
	};
	const onMoonClick = (0, import_react.useCallback)(() => {
		if (phase !== "idle") return;
		const rect = moonBtnRef.current.getBoundingClientRect();
		setOrigin({
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2
		});
		setIframeReady(false);
		setPhase("moon-spin");
		after(SPIN_DURATION, () => setPhase("ripple-to-light"));
		after(1350, () => setPhase("light-visible"));
	}, [phase]);
	const onSunClick = (0, import_react.useCallback)(() => {
		if (phase !== "light-visible") return;
		const rect = sunBtnRef.current.getBoundingClientRect();
		setOrigin({
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2
		});
		setPhase("sun-spin");
		after(SPIN_DURATION, () => setPhase("ripple-to-dark"));
		after(1350, () => {
			clearAll();
			setPhase("idle");
		});
	}, [phase]);
	const radius = maxRippleRadius(origin.x, origin.y);
	const rippleSize = radius * 2;
	const rippleStyle = (color, expanding) => ({
		position: "fixed",
		zIndex: 55,
		width: rippleSize,
		height: rippleSize,
		borderRadius: "50%",
		background: color,
		top: origin.y - radius,
		left: origin.x - radius,
		willChange: "transform",
		pointerEvents: "none",
		transform: expanding ? "scale(1)" : "scale(0)",
		transition: expanding ? `transform ${RIPPLE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)` : `transform ${RIPPLE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
		transformOrigin: "center center"
	});
	const btnBase = {
		position: "fixed",
		top: 24,
		right: 24,
		zIndex: 60,
		width: 44,
		height: 44,
		borderRadius: "50%",
		display: "grid",
		placeItems: "center",
		cursor: "pointer",
		border: "none",
		outline: "none",
		transition: "transform 0.2s ease, box-shadow 0.2s ease"
	};
	const isLightVisible = phase === "light-visible" || phase === "sun-spin" || phase === "ripple-to-dark";
	const showRippleToLight = phase === "ripple-to-light" || phase === "light-visible";
	const showRippleToDark = phase === "ripple-to-dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			ref: moonBtnRef,
			onClick: onMoonClick,
			"aria-label": "Switch to light theme",
			disabled: phase !== "idle",
			style: {
				...btnBase,
				background: "oklch(0.93 0.04 82 / 0.88)",
				boxShadow: "0 4px 20px oklch(0.78 0.14 82 / 0.25), 0 0 0 1px oklch(0.78 0.14 82 / 0.35) inset",
				color: "oklch(0.36 0.11 25)",
				opacity: isLightVisible ? 0 : 1,
				pointerEvents: isLightVisible ? "none" : "auto",
				animation: phase === "moon-spin" ? `icon-spin-glow ${SPIN_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards` : "none"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				width: "20",
				height: "20",
				fill: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
			})
		}),
		(phase === "moon-spin" || phase === "ripple-to-light" || phase === "light-visible") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			style: rippleStyle("linear-gradient(135deg, oklch(0.97 0.02 85) 0%, oklch(0.93 0.04 82) 60%, oklch(0.88 0.06 80) 100%)", showRippleToLight)
		}),
		phase !== "idle" && phase !== "moon-spin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: "https://lighthemee.netlify.app/",
			title: "Light Theme",
			onLoad: () => setIframeReady(true),
			"aria-hidden": !isLightVisible,
			style: {
				position: "fixed",
				inset: 0,
				zIndex: 40,
				width: "100%",
				height: "100%",
				border: "none",
				opacity: isLightVisible && iframeReady ? 1 : 0,
				pointerEvents: isLightVisible ? "auto" : "none",
				transition: "opacity 0.35s ease"
			}
		}),
		phase === "light-visible" && !iframeReady && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			style: {
				position: "fixed",
				inset: 0,
				zIndex: 45,
				display: "grid",
				placeItems: "center",
				background: "oklch(0.93 0.04 82)",
				pointerEvents: "none"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: 40,
				height: 40,
				borderRadius: "50%",
				border: "3px solid oklch(0.78 0.14 82 / 0.25)",
				borderTopColor: "oklch(0.78 0.14 82)",
				animation: "spin-loader 0.75s linear infinite"
			} })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			ref: sunBtnRef,
			onClick: onSunClick,
			"aria-label": "Return to Sanatana",
			disabled: phase !== "light-visible",
			style: {
				...btnBase,
				background: "oklch(0.97 0.02 85 / 0.88)",
				boxShadow: "0 4px 20px oklch(0.75 0.16 85 / 0.3), 0 0 0 1px oklch(0.78 0.14 82 / 0.4) inset",
				color: "oklch(0.52 0.14 75)",
				opacity: isLightVisible ? 1 : 0,
				pointerEvents: isLightVisible && phase === "light-visible" ? "auto" : "none",
				animation: phase === "sun-spin" ? `icon-spin-glow-sun ${SPIN_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards` : "none"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				width: "20",
				height: "20",
				fill: "currentColor",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					fill: "none"
				})]
			})
		}),
		(phase === "sun-spin" || phase === "ripple-to-dark") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			style: rippleStyle("linear-gradient(135deg, oklch(0.22 0.06 45) 0%, oklch(0.18 0.04 40) 50%, oklch(0.14 0.02 45) 100%)", showRippleToDark)
		})
	] });
}
function GoldRule({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-3 text-gold ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusMotif, { className: "h-3 w-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent" })
		]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-display text-[11px] uppercase tracking-[0.35em] text-bronze/80",
		children
	});
}
function SectionTitle({ kicker, title, sanskrit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-serif text-4xl italic text-primary md:text-5xl",
				children: title
			}),
			sanskrit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-devanagari text-lg text-bronze",
				children: sanskrit
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mt-5 mx-auto max-w-xs" })
		]
	});
}
function Phone({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative mx-auto w-[300px] ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-[46px] bg-brown p-2 shadow-carved",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-[46px] bg-gradient-to-b from-gold/40 via-transparent to-bronze/40 opacity-70 [mask:linear-gradient(#000,transparent_40%,transparent_60%,#000)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[38px] bg-parchment",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-brown" }), children]
			})]
		})
	});
}
function PhoneChrome({ title, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between px-5 pt-10 pb-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-bronze",
				"aria-label": "Back",
				children: "‹"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-base italic text-primary",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-bronze",
				children: right ?? "◦"
			})
		]
	});
}
function TabBar({ active = "Home" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-gold/30 bg-cream/60 px-3 py-3 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-around text-[10px] uppercase tracking-widest",
			children: [
				"Home",
				"Library",
				"Emotions",
				"Temples",
				"You"
			].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col items-center gap-1 ${active === it ? "text-primary" : "text-bronze/60"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${active === it ? "bg-gold" : "bg-bronze/30"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
			}, it))
		})
	});
}
function SanatanaHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-hidden bg-parchment",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSwitcher, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptureLibrary, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingManuscript, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emotions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplesEvents, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Premium, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-brown shadow-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg text-primary",
						children: "SANATANA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.3em] text-bronze/70",
						children: "Eternal wisdom"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden items-center gap-8 font-serif text-sm text-brown/80 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#dashboard",
						className: "hover:text-primary",
						children: "Dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#library",
						className: "hover:text-primary",
						children: "Library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#emotions",
						className: "hover:text-primary",
						children: "Emotions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#temples",
						className: "hover:text-primary",
						children: "Temples"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#premium",
						className: "hover:text-primary",
						children: "Premium"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-full border border-gold/60 bg-cream/60 px-5 py-2 font-serif text-sm italic text-primary shadow-carved backdrop-blur transition hover:bg-cream",
					children: "Begin Journey"
				})
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative isolate mx-auto max-w-7xl px-6 pb-16 pt-10 md:pb-24 md:pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative animate-rise",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempleBell, { className: "h-8 w-6 text-gold animate-sway" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Est. in wisdom · अनादि · अनंत" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-5xl leading-[1.05] text-primary md:text-7xl",
						children: [
							"Walk into the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-serif italic text-gradient-gold",
								children: "temple"
							}),
							",",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"wherever you are."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-devanagari text-2xl text-bronze md:text-3xl",
						children: "धर्मो रक्षति रक्षितः"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg font-serif text-lg leading-relaxed text-brown/80",
						children: "Sanatana is a sacred companion for the modern seeker — the Bhagavad Gita, the Ramayana, temple bells and morning aartis, gathered in one quiet, golden place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "group relative overflow-hidden rounded-full bg-gradient-gold px-8 py-3.5 font-serif text-base italic text-brown shadow-gold transition hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10",
								children: "Enter the Temple"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 opacity-0 transition group-hover:opacity-100 animate-shimmer" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex items-center gap-2 font-serif text-base italic text-primary underline-offset-4 hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-gold",
								children: "▶"
							}), "Watch the ritual"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-bronze/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10 languages" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "18 sacred texts" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1,200+ temples" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] overflow-hidden rounded-[32px] border border-gold/40 shadow-gold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_temple_default,
							alt: "Ancient Indian temple interior glowing with golden lamps at sunrise",
							width: 1536,
							height: 1920,
							className: "h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightRays, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DustParticles, { count: 30 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusPetals, { count: 6 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid h-40 w-40 place-items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MandalaBorder, { className: "absolute inset-0 h-full w-full text-gold-soft animate-rotate-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-20 w-20 place-items-center rounded-full bg-cream/90 text-primary shadow-glow backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-10 w-10" })
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-4 bottom-4 rounded-2xl border border-gold/40 bg-cream/90 p-4 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Today · Gita 2.47" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-devanagari text-base leading-snug text-primary",
									children: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-serif text-xs italic text-brown/80",
									children: "You have a right to your work — never to its fruits."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-4 -top-6 hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempleBell, { className: "h-24 w-14 text-gold animate-sway drop-shadow-[0_10px_20px_oklch(0.55_0.15_55_/_0.4)]" })
				})]
			})]
		})
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-y border-gold/30 bg-gradient-to-r from-cream via-sandstone/60 to-cream py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-25",
			style: {
				backgroundImage: `url(${mandala_bg_default})`,
				backgroundSize: "600px",
				backgroundPosition: "center",
				backgroundRepeat: "repeat"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConchShell, { className: "mx-auto h-10 w-10 text-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-serif text-2xl italic leading-relaxed text-primary md:text-3xl",
					children: "“May wisdom guide every step of your journey — from the first bell at dawn to the last diya at dusk.”"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mt-6 mx-auto max-w-md" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-6 text-left md:grid-cols-4",
					children: [
						["Ancient", "Rooted in scripture, translated with reverence."],
						["Divine", "Every verse curated by scholars and sadhus."],
						["Peaceful", "No ads, no noise — just the quiet of a temple."],
						["Timeless", "Wisdom of yesterday, written for today."]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xs uppercase tracking-[0.3em] text-bronze",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif italic text-brown/80",
						children: v
					})] }, k))
				})
			]
		})]
	});
}
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "dashboard",
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			kicker: "The Dashboard",
			title: "A morning aarti, on your home screen",
			sanskrit: "प्रातःस्मरणम्"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Phone, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between px-6 pt-3 text-[10px] text-brown/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "6:12 AM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "◐ ◐ ◐" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneChrome, {
					title: "जय श्री कृष्ण",
					right: "◔"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-xl italic text-primary",
						children: "Good morning, Arjun"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-brown/70",
						children: "May this day bring you peace and clarity."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-4 mt-4 rounded-2xl border border-gold/40 bg-gradient-to-br from-cream to-sandstone/70 p-4 shadow-carved",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Today's Verse · Gita 2.47" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-4 w-4 text-gold" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-devanagari text-sm leading-snug text-primary",
							children: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-[11px] italic text-brown/80",
							children: "Do your work with devotion, unattached to the fruits."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex-1 rounded-full bg-primary py-1.5 text-[10px] uppercase tracking-widest text-cream",
								children: "▶ Listen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex-1 rounded-full border border-gold/60 py-1.5 text-[10px] uppercase tracking-widest text-primary",
								children: "Reflect"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-4 mt-3 grid grid-cols-3 gap-2 text-center",
					children: [
						["45", "Streak"],
						["12", "Books"],
						["8", "Aartis"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-gold/30 bg-cream/70 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-lg text-primary",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] uppercase tracking-widest text-bronze",
							children: l
						})]
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-4 mt-3 rounded-2xl border border-gold/30 bg-cream/70 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Continue reading" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: scripture_gita_default,
							alt: "",
							width: 40,
							height: 40,
							className: "h-10 w-10 rounded-md object-cover",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-sm text-primary",
									children: "Ramayana · Yuddha Kanda"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-brown/70",
									children: "Chapter 18 · 62% complete"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 h-1 overflow-hidden rounded-full bg-sandstone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[62%] bg-gradient-gold" })
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-4 mt-3 flex items-center gap-3 rounded-2xl border border-gold/30 bg-gradient-to-r from-lotus/15 to-gold/10 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-lotus/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusMotif, { className: "h-5 w-6 text-lotus" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-sm text-primary",
						children: "Ekadashi · Today"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-brown/70",
						children: "Fasting begins at sunrise"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBar, { active: "Home" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: [
						["Daily Bhagavad Gita verse", "A curated shloka every morning — Sanskrit, transliteration, translation and audio recitation."],
						["Continue where you paused", "Your last chapter, waiting like a bookmark of dry banyan leaf."],
						["Aartis, festivals & prayer reminders", "Never miss Ekadashi, Purnima, or the temple bell at dawn."],
						["Streak & reading goals", "Consistency, gently — a garland of days rather than a scoreboard."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/50 bg-cream text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs",
								children: "✦"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-primary",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-base italic text-brown/80",
							children: d
						})] })]
					}, t))
				})
			})]
		})]
	});
}
var scriptures = [
	{
		name: "Bhagavad Gita",
		sub: "700 verses · 18 chapters",
		tag: "Divine Song"
	},
	{
		name: "Ramayana",
		sub: "7 Kandas · Valmiki",
		tag: "Epic"
	},
	{
		name: "Mahabharata",
		sub: "18 Parvas · Vyasa",
		tag: "Itihasa"
	},
	{
		name: "Srimad Bhagavatam",
		sub: "18,000 verses · 12 skandhas",
		tag: "Purana"
	},
	{
		name: "Upanishads",
		sub: "108 principal texts",
		tag: "Vedanta"
	},
	{
		name: "Shiva Purana",
		sub: "24,000 verses",
		tag: "Purana"
	},
	{
		name: "Yoga Sutras",
		sub: "196 sutras · Patanjali",
		tag: "Yoga"
	},
	{
		name: "Chanakya Niti",
		sub: "17 chapters",
		tag: "Wisdom"
	}
];
function ScriptureLibrary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "library",
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				kicker: "Scripture Library",
				title: "A shelf carved from sandalwood",
				sanskrit: "ग्रन्थालयः"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: scriptures.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-cream to-sandstone/70 p-5 shadow-carved transition hover:-translate-y-1 hover:shadow-gold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-8 -top-8 opacity-15 transition group-hover:opacity-30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MandalaBorder, { className: "h-40 w-40 text-bronze animate-rotate-slow" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full border border-gold/50 bg-cream px-3 py-0.5 text-[9px] uppercase tracking-widest text-bronze",
									children: s.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-serif text-2xl leading-tight text-primary",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-serif text-sm italic text-brown/70",
									children: s.sub
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display uppercase tracking-widest text-gold",
										children: "Read · Listen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary transition group-hover:translate-x-1",
										children: "→"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" })
					]
				}, s.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center font-serif text-sm italic text-brown/70",
				children: "Vedas · Upanishads · Puranas · Itihasas · Sutras · Niti-shastras · Kavyas"
			})
		]
	});
}
function ReadingManuscript() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-40",
			style: {
				backgroundImage: `url(${mandala_bg_default})`,
				backgroundSize: "800px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				kicker: "The Reading",
				title: "Turn the page of an ancient manuscript",
				sanskrit: "पत्रम् उद्घाटयतु"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-[24px] border-2 border-gold/50 bg-parchment p-8 shadow-carved md:p-12",
						children: [
							[
								"top-4 left-4",
								"top-4 right-4 rotate-90",
								"bottom-4 left-4 -rotate-90",
								"bottom-4 right-4 rotate-180"
							].map((pos) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusMotif, { className: `absolute h-4 w-8 text-gold ${pos}` }, pos)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-lg text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Bhagavad Gita · Chapter 12 · Bhakti Yoga" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-serif text-3xl italic text-primary",
										children: "Verse 13-14"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-devanagari text-2xl leading-relaxed text-primary",
										children: [
											"अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 font-serif text-lg italic leading-relaxed text-brown/85",
										children: "“One who bears no ill-will to any being, who is friendly and compassionate, free from the sense of ‘mine’ and ego, equal in joy and sorrow, and forgiving — such a devotee is dear to Me.”"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-wrap items-center justify-center gap-3 text-xs",
										children: [
											"Sanskrit",
											"Hindi",
											"English",
											"Tamil",
											"Telugu"
										].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full border px-3 py-1 font-serif italic ${l === "Sanskrit" ? "border-gold bg-gold/20 text-primary" : "border-gold/40 text-brown/70"}`,
											children: l
										}, l))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex items-center justify-center gap-4 text-primary",
										children: [
											"◀",
											"🔖",
											"▶ Listen",
											"✎ Notes",
											"▶"
										].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "rounded-full border border-gold/40 bg-cream px-4 py-2 font-serif text-sm italic shadow-carved",
											children: i
										}, i))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-6 left-1/2 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-5",
					children: [
						["Illuminated typography", "Sanskrit rendered in true Devanagari serif — as if written by lamp light."],
						["Bookmark, highlight, notes", "Every insight, kept like a pressed flower in a sacred book."],
						["Text-to-speech in 10 languages", "Close your eyes. Let a soft voice carry the verse."],
						["Commentary from great acharyas", "Shankara, Ramanuja, Prabhupada — side by side."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-gold/30 bg-cream/70 p-4 shadow-carved",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-lg text-primary",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif italic text-brown/80",
							children: d
						})]
					}, t))
				}) })]
			})]
		})]
	});
}
var emotions = [
	[
		"Anger",
		"क्रोध",
		"from bg-lotus/30 to-copper/20"
	],
	[
		"Fear",
		"भय",
		"from-peacock/25 to-bronze/15"
	],
	[
		"Love",
		"प्रेम",
		"from-lotus/30 to-gold/20"
	],
	[
		"Grief",
		"शोक",
		"from-bronze/20 to-brown/15"
	],
	[
		"Hope",
		"आशा",
		"from-gold/25 to-turquoise/20"
	],
	[
		"Stress",
		"चिन्ता",
		"from-copper/20 to-bronze/15"
	],
	[
		"Discipline",
		"संयम",
		"from-primary/15 to-gold/15"
	],
	[
		"Success",
		"सफलता",
		"from-gold/30 to-gold-soft/30"
	],
	[
		"Failure",
		"पराजय",
		"from-maroon/20 to-brown/15"
	],
	[
		"Confusion",
		"भ्रम",
		"from-peacock/20 to-lotus/15"
	],
	[
		"Forgiveness",
		"क्षमा",
		"from-turquoise/20 to-gold/15"
	],
	[
		"Devotion",
		"भक्ति",
		"from-lotus/25 to-gold/25"
	]
];
function Emotions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "emotions",
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				kicker: "Emotion Guide",
				title: "The Gita, for every feeling",
				sanskrit: "भावानुसारं ज्ञानम्"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-center font-serif italic text-brown/80",
				children: "Choose the storm inside your heart. Sanatana will open the exact verses, stories and meditations that Krishna offered for it — five thousand years ago, and still."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: emotions.map(([en, sk, grad]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: `group relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br ${grad} p-6 text-left shadow-carved transition hover:-translate-y-1 hover:shadow-gold`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-6 -right-6 opacity-20 transition group-hover:opacity-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusMotif, { className: "h-24 w-32 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-devanagari text-2xl text-primary",
								children: sk
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-serif text-xl italic text-brown",
								children: en
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2 font-display text-[10px] uppercase tracking-widest text-bronze",
								children: ["Open guidance ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
							})
						]
					})]
				}, en))
			})
		]
	});
}
function TemplesEvents() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "temples",
		className: "relative overflow-hidden py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sandstone/30 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				kicker: "Temples & Events",
				title: "A pilgrimage, on your palm",
				sanskrit: "तीर्थयात्रा"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative overflow-hidden rounded-3xl border border-gold/40 shadow-gold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: temple_card_default,
							alt: "South Indian temple gopuram at golden hour",
							width: 1024,
							height: 1024,
							className: "h-72 w-full object-cover",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-6 bottom-6 text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "2.1 km · Open until 9:00 PM" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-3xl italic",
									children: "ISKCON Bangalore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-serif italic opacity-90",
									children: "Live darshan · Aarti in 32 min"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-cream/90 text-primary shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-parchment p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 divide-x divide-gold/30 text-center",
								children: [
									["4.8 ★", "Rating"],
									["12", "Aartis today"],
									["Live", "Darshan"]
								].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-lg text-primary",
										children: n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-bronze",
										children: l
									})]
								}, l))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-serif italic text-brown/80",
								children: "Nearby temples, live aartis, festival calendars, donations — with directions and opening hours quietly at hand."
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-gold/40 bg-parchment p-6 shadow-carved",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl italic text-primary",
								children: "Upcoming events"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-bronze",
								children: "Nearby"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: [
								[
									"Gita Chanting",
									"Today · 6:00 PM",
									"ISKCON Bangalore",
									"▶"
								],
								[
									"Hanuman Chalisa Path",
									"Tomorrow · 7:00 AM",
									"Maruti Temple",
									"◆"
								],
								[
									"Bhagavatam Satsang",
									"May 12 · 5:30 PM",
									"Hare Krishna Hall",
									"❋"
								],
								[
									"Yoga & Meditation",
									"May 15 · 6:30 AM",
									"Vivekananda Kendra",
									"☸"
								],
								[
									"Annadanam Seva",
									"May 18 · 12:00 PM",
									"Sri Balaji Temple",
									"✿"
								]
							].map(([n, t, p, ic]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-4 rounded-2xl border border-gold/30 bg-cream/70 p-3 transition hover:bg-cream",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-brown font-serif text-lg",
										children: ic
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-serif text-base text-primary",
											children: n
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-brown/70",
											children: [
												t,
												" · ",
												p
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "→"
									})
								]
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-5 w-full rounded-full bg-primary py-3 font-serif italic text-cream shadow-carved",
							children: "Submit an event"
						})
					]
				})]
			})]
		})]
	});
}
var empires = [
	[
		"Maurya",
		"322–185 BCE",
		"Chandragupta · Ashoka · Chanakya"
	],
	[
		"Gupta",
		"320–550 CE",
		"The golden age of art & science"
	],
	[
		"Chola",
		"300 BCE–1279 CE",
		"Bronze, Brihadeeswara, oceans"
	],
	[
		"Vijayanagara",
		"1336–1646 CE",
		"Hampi, sacred stone, wisdom"
	],
	[
		"Maratha",
		"1674–1818 CE",
		"Shivaji · Swaraj · dharma"
	]
];
function History() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			kicker: "Ancient India",
			title: "Walk the timeline of Bharata",
			sanskrit: "भारतवर्षस्य इतिहासः"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent md:left-1/2 md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-10",
				children: empires.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[direction:rtl]" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:[direction:ltr]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl border border-gold/40 bg-gradient-to-br from-cream to-sandstone/70 p-6 shadow-carved",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-display text-[10px] uppercase tracking-widest text-cream",
									children: e[1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-2 font-serif text-2xl italic text-primary",
									children: [e[0], " Empire"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif italic text-brown/80",
									children: e[2]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex gap-2 text-[10px] uppercase tracking-widest text-bronze",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-gold/40 px-2 py-0.5",
											children: "Kings"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-gold/40 px-2 py-0.5",
											children: "Coins"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-gold/40 px-2 py-0.5",
											children: "Architecture"
										})
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})]
				}, e[0]))
			})]
		})]
	});
}
function Premium() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "premium",
		className: "relative overflow-hidden py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-temple opacity-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DustParticles, { count: 20 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotusPetals, { count: 8 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Sanatana Sanctum" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-serif text-4xl italic text-cream md:text-6xl",
						children: [
							"A ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-gold",
								children: "golden lamp"
							}),
							" that never dims."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl font-serif italic text-cream/85",
						children: "Sanctum is our premium membership — offline scriptures in ten languages, curated audiobooks, guided meditations, live darshans, and a private circle of seekers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-12 max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-3xl border border-gold p-[1.5px] shadow-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-gold opacity-90" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-[22px] bg-gradient-to-br from-brown to-primary p-8 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Sanctum · Annual" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-3xl italic text-gold-soft",
											children: "Sanatana Gold"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-10 w-10 text-gold animate-flicker" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-2 font-serif italic text-cream/90",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✦ Offline library in 10 languages" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✦ Full audio narration by classical vocalists" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✦ Live temple darshans, ad-free" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✦ Private satsang circle" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex items-end justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-4xl text-gold-soft",
											children: "₹1,999"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase tracking-widest text-cream/60",
											children: "per year · billed once"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "rounded-full bg-gradient-gold px-6 py-3 font-serif italic text-brown shadow-gold",
											children: "Light the lamp"
										})]
									})
								]
							})]
						})
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-gold/30 bg-gradient-to-b from-parchment to-sandstone/70 pt-16 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-brown shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmSymbol, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-primary",
								children: "SANATANA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.3em] text-bronze",
								children: "Eternal · Timeless"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm font-serif italic text-brown/80",
							children: "Read. Reflect. Realize. Your journey towards dharma begins here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex items-center gap-3 text-xs",
							children: [
								"EN",
								"हिं",
								"த",
								"తె",
								"ಕ",
								"മ",
								"ગુ",
								"म",
								"ব",
								"संस्कृत"
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-gold/40 px-2 py-0.5 font-serif text-brown",
								children: l
							}, l))
						})
					] }), [
						["Scriptures", [
							"Bhagavad Gita",
							"Ramayana",
							"Mahabharata",
							"Upanishads",
							"Puranas"
						]],
						["Journey", [
							"Dashboard",
							"Emotions",
							"Temples",
							"Events",
							"History"
						]],
						["Sanctum", [
							"Premium",
							"Downloads",
							"Languages",
							"Support",
							"Privacy"
						]]
					].map(([h, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xs uppercase tracking-[0.3em] text-bronze",
						children: h
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 font-serif italic text-brown/80",
						children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-primary",
							children: i
						}) }, i))
					})] }, h))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mt-12" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col items-center gap-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-devanagari text-lg text-primary",
							children: "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-sm italic text-brown/70",
							children: "From untruth, lead me to truth. From darkness, to light. From death, to immortality."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[10px] uppercase tracking-widest text-bronze/70",
							children: "© Sanatana · Crafted with devotion"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { SanatanaHome as component };
