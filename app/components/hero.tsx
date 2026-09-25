"use client"
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap, useGSAP } from "./partials/gsap";
import {
    AuroraBackground,
    GlassParticle,
    LiquidBlob,
    LiquidGlassCard,
    AMBIENT_PATHS,
    WASH_PATHS,
} from "./partials/liquid-glass";

const SLIDES = [
    {
        image: "/carousel/bus1.jpg",
        title: "Innovation Meets Design",
        subtitle: "Transform your digital experience",
        accent: "#C8A96E",
    },
    {
        image: "/carousel/bus2.jpg",
        title: "Built for Tomorrow",
        subtitle: "Next-generation solutions",
        accent: "#6E9EC8",
    },
    {
        image: "/carousel/bus3.jpg",
        title: "Seamless Performance",
        subtitle: "Experience the difference",
        accent: "#9EC86E",
    },
];

// Module-level cache: persists across re-renders and fast navigation
const imageCache = new Map<string, HTMLImageElement>();

function preloadImage(url: string): Promise<void> {
    return new Promise((resolve) => {
        if (imageCache.has(url)) {
            resolve();
            return;
        }
        const img = new Image();
        img.onload = () => {
            imageCache.set(url, img);
            resolve();
        };
        img.onerror = () => resolve(); // don't block on error
        img.src = url;
    });
}

function SlideContent({ slide, index }: { slide: (typeof SLIDES)[number]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el) return;
            if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
                gsap.set(el, { autoAlpha: 1 });
                gsap.set([el.querySelector(".sc-accent"), el.querySelector(".sc-subtitle"), el.querySelector(".sc-title"), el.querySelector(".sc-cta")], { autoAlpha: 1 });
                return;
            }
            const tl = gsap.timeline({ delay: 0.2 });
            tl.fromTo(
                el,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.4, ease: "power2.out" }
            )
                .fromTo(
                    el.querySelector(".sc-accent"),
                    { scaleX: 0 },
                    { scaleX: 1, duration: 0.9, ease: "power3.inOut" },
                    0.05
                )
                .fromTo(
                    el.querySelector(".sc-subtitle"),
                    { autoAlpha: 0, y: 16 },
                    { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
                    0.1
                )
                .fromTo(
                    el.querySelector(".sc-title"),
                    { autoAlpha: 0, y: 28, filter: "blur(8px)" },
                    { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power4.out" },
                    0.15
                )
                .fromTo(
                    el.querySelector(".sc-cta"),
                    { autoAlpha: 0, y: 18 },
                    { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
                    0.3
                );
        },
        { scope: ref, dependencies: [index] }
    );

    return (
        <div ref={ref} className="opacity-0">
            {/* Accent bar */}
            <div
                className="sc-accent my-5 h-[3px] w-12 origin-left"
                style={{ background: slide.accent }}
            />

            {/* Subtitle */}
            <p
                className="sc-subtitle mb-3 text-xs uppercase tracking-[0.25em] text-white/70"
            >
                {slide.subtitle}
            </p>

            {/* Title */}
            <h1
                className="sc-title glass-text font-bold leading-[1.05]"
                style={{
                    fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                    maxWidth: "640px",
                }}
            >
                {slide.title}
            </h1>

            {/* CTA */}
            <div className="sc-cta mt-8">
                <button
                    className="group relative overflow-hidden rounded-full border px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300"
                    style={{ borderColor: slide.accent, color: slide.accent, letterSpacing: "0.2em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = slide.accent)}
                >
                    <span
                        className="absolute inset-0 origin-left scale-x-0 bg-white/10 transition-transform duration-300 group-hover:scale-x-100"
                        style={{ boxShadow: `inset 0 0 0 1px ${slide.accent}55` }}
                    />
                    <span className="relative flex items-center gap-2">
                        Explore Now
                        <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </button>
            </div>
        </div>
    );
}

/* Bottom "liquid" wave that spills into the page background */
function LiquidDivider() {
    const ref = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const el = ref.current;
            if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
            gsap.to(el, { xPercent: -50, duration: 22, ease: "none", repeat: -1 });
        },
        { scope: ref }
    );
    return (
        <div className="absolute inset-x-0 bottom-0 z-30 h-28 pointer-events-none overflow-hidden" aria-hidden>
            <div ref={ref} className="absolute -inset-x-0 top-0 flex h-28 w-[200%]">
                <Wave fill="rgba(2,6,23,0.55)" />
                <Wave fill="#020617" />
            </div>
        </div>
    );
}

function Wave({ fill }: { fill: string }) {
    const pathRef = useRef<SVGPathElement>(null);
    useGSAP(
        () => {
            const el = pathRef.current;
            if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
            gsap.fromTo(
                el,
                { attr: { d: WAVE_IN } },
                { attr: { d: WAVE_OUT }, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true }
            );
        },
        { scope: pathRef }
    );
    return (
        <svg viewBox="0 0 2880 112" preserveAspectRatio="none" className="h-full w-1/2 shrink-0">
            <path ref={pathRef} d={WAVE_IN} fill={fill} style={{ filter: "blur(2px)" }} />
        </svg>
    );
}

const WAVE_IN =
    "M0,60 C240,28 480,112 720,96 C960,80 1200,20 1440,36 C1680,52 1920,104 2160,92 C2400,80 2640,48 2880,60 L2880,112 L0,112 Z";
const WAVE_OUT =
    "M0,88 C240,104 480,40 720,52 C960,64 1200,108 1440,100 C1680,92 1920,52 2160,68 C2400,84 2640,96 2880,72 L2880,112 L0,112 Z";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [ready, setReady] = useState<boolean[]>(() =>
        SLIDES.map((s) => imageCache.has(s.image))
    );
    const [entered, setEntered] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const rootRef = useRef<HTMLDivElement>(null);
    const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const washPathRef = useRef<SVGPathElement | null>(null);
    const washSvgRef = useRef<SVGSVGElement | null>(null);
    const shineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const markReady = (index: number) =>
            setReady((prev) => { const n = [...prev]; n[index] = true; return n; });

        // Load first slide with priority, rest in parallel
        preloadImage(SLIDES[0].image).then(() => markReady(0));
        SLIDES.slice(1).forEach((s, i) =>
            preloadImage(s.image).then(() => markReady(i + 1))
        );

        const t = setTimeout(() => setEntered(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        autoPlayRef.current = setInterval(() => {
            goToSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5500);
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAutoPlaying]);

    function goToSlide(indexOrUpdater: number | ((prev: number) => number)) {
        setCurrentSlide((prev) => {
            const next =
                typeof indexOrUpdater === "function"
                    ? indexOrUpdater(prev)
                    : indexOrUpdater;
            setPrevSlideIndex(prev);
            setTimeout(() => setPrevSlideIndex(null), 1000);
            return next;
        });
    }

    const handlePrev = () => {
        setIsAutoPlaying(false);
        goToSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        goToSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const slide = SLIDES[currentSlide];

    useGSAP(
        () => {
            if (!entered) return;
            const root = rootRef.current;
            if (!root) return;

            // Cross-fade the slides
            SLIDES.forEach((_, i) => {
                const layer = layerRefs.current[i];
                if (!layer) return;
                gsap.to(layer, {
                    autoAlpha: i === currentSlide ? 1 : 0,
                    duration: 1.1,
                    ease: "power2.inOut",
                });
            });

            // Ken Burns drift on the active photo
            imgRefs.current.forEach((img, i) => {
                if (!img) return;
                gsap.killTweensOf(img);
                if (i === currentSlide) {
                    gsap.fromTo(img, { scale: 1.05 }, { scale: 1.14, duration: 7, ease: "none" });
                }
            });

            // A droplet of liquid glass pours across the frame
            const path = washPathRef.current;
            const svg = washSvgRef.current;
            if (path && svg && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
                gsap.killTweensOf(path);
                gsap.killTweensOf(svg);
                gsap.set(path, { attr: { d: WASH_PATHS.small } });
                gsap.set(svg, { autoAlpha: 0.9 });
                gsap.timeline()
                    .to(path, { attr: { d: WASH_PATHS.cover }, duration: 1.5, ease: "power2.in" }, 0)
                    .to(svg, { autoAlpha: 0, duration: 0.7, ease: "power2.out" }, 1.1);
            }

            // Radial "shine" flicker to accent color on each transition
            if (shineRef.current && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
                gsap.killTweensOf(shineRef.current);
                gsap.fromTo(
                    shineRef.current,
                    { autoAlpha: 0.5 },
                    { autoAlpha: 0, duration: 1.6, ease: "power2.out" }
                );
            }
        },
        { scope: rootRef, dependencies: [currentSlide, entered] }
    );

    return (
        <div ref={rootRef} className="relative h-screen w-full overflow-hidden bg-[#020617]">
            {/* Ambient liquid blobs + aurora light */}
            <AuroraBackground />
            <LiquidBlob
                paths={AMBIENT_PATHS}
                className="absolute -right-[22%] -top-[18%] h-[80vmax] w-[80vmax] text-white/[0.05]"
            />
            <LiquidBlob
                paths={AMBIENT_PATHS}
                duration={12}
                className="absolute -bottom-[28%] -left-[20%] h-[70vmax] w-[70vmax] text-white/[0.05]"
            />

            {/* Floating glass droplets */}
            <GlassParticle className="left-[12%] top-[22%] h-5 w-5" />
            <GlassParticle className="left-[22%] top-[68%] h-3 w-3" drift={18} />
            <GlassParticle className="right-[14%] top-[30%] h-4 w-4" drift={30} />

            {/* Slide layers */}
            {SLIDES.map((s, index) => (
                <div
                    key={index}
                    className="absolute inset-0"
                    ref={(el) => { layerRefs.current[index] = el; }}
                    style={{
                        opacity: index === currentSlide ? 1 : 0,
                        zIndex: index === currentSlide ? 3 : index === prevSlideIndex ? 2 : 1,
                    }}
                >
                    {/* Frosted cinematic overlays */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.35) 45%, rgba(2,6,23,0.1) 75%, rgba(2,6,23,0.3) 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background: `radial-gradient(120% 90% at 18% 82%, ${s.accent}26 0%, transparent 55%)`,
                            mixBlendMode: "screen",
                        }}
                    />
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            backdropFilter: "blur(1px) saturate(1.15)",
                            WebkitBackdropFilter: "blur(1px) saturate(1.15)",
                        }}
                    />
                    <img
                        ref={(el) => { imgRefs.current[index] = el; }}
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 h-full w-full object-cover will-change-transform"
                        style={{ transform: "scale(1.05)" }}
                    />
                </div>
            ))}

            {/* Liquid glass wash pouring across the frame on each transition */}
            <svg
                ref={washSvgRef}
                className="pointer-events-none absolute inset-0 z-[5] h-full w-full opacity-0"
                preserveAspectRatio="none"
                aria-hidden
            >
                <path
                    ref={washPathRef}
                    d={WASH_PATHS.small}
                    fill={slide.accent}
                    opacity={0.18}
                    style={{ filter: "blur(60px)" }}
                />
            </svg>

            {/* Radial shine that flickers with each slide */}
            <div
                ref={shineRef}
                className="pointer-events-none absolute left-1/2 top-1/2 z-[6] h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
                style={{
                    background: `radial-gradient(circle, ${slide.accent}14 0%, transparent 45%)`,
                    mixBlendMode: "screen",
                }}
                aria-hidden
            />

            {/* Slide counter */}
            <div className="absolute right-6 top-24 z-30 flex items-end gap-2 md:right-10">
                <LiquidGlassCard className="rounded-full px-4 py-2.5">
                    <span
                        className="text-2xl font-light leading-none md:text-3xl"
                        style={{ color: slide.accent }}
                    >
                        {String(currentSlide + 1).padStart(2, "0")}
                    </span>
                    <span className="mb-0.5 text-xs text-white/40">
                        / {String(SLIDES.length).padStart(2, "0")}
                    </span>
                </LiquidGlassCard>
            </div>

            {/* Main content — frosted glass panel */}
            <div className="absolute inset-x-0 bottom-32 z-20 md:bottom-36">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
                    <LiquidGlassCard
                        sheen
                        className="max-w-xl rounded-[2rem] p-7 md:p-10"
                    >
                        <SlideContent key={currentSlide} slide={slide} index={currentSlide} />
                    </LiquidGlassCard>
                </div>
            </div>

            {/* Side navigation */}
            <div className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex md:right-10">
                <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="glass-card flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="glass-card flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            <div className="absolute bottom-9 left-4 right-4 z-30 flex justify-center md:hidden">
                <div className="flex gap-3">
                    <button onClick={handlePrev} aria-label="Previous slide" className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-white">
                        <ChevronLeft size={16} />
                    </button>
                    <button onClick={handleNext} aria-label="Next slide" className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-white">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Bottom progress indicators */}
            <div className="absolute bottom-9 left-1/2 z-30 hidden -translate-x-1/2 md:block">
                <LiquidGlassCard className="flex items-center gap-4 rounded-full px-6 py-3.5">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                goToSlide(index);
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                            className="relative overflow-hidden rounded-full"
                            style={{
                                width: index === currentSlide ? "40px" : "16px",
                                height: "3px",
                                background:
                                    index === currentSlide
                                        ? slide.accent
                                        : "rgba(255,255,255,0.28)",
                                transition:
                                    "width 0.5s cubic-bezier(0.4,0,0.2,1), background 0.8s",
                                cursor: "pointer",
                                border: "none",
                                padding: 0,
                            }}
                        />
                    ))}
                </LiquidGlassCard>
            </div>

            {/* Liquid divider flowing into the next section */}
            <LiquidDivider />

            {/* Loading shimmer overlay */}
            {!ready[currentSlide] && (
                <div
                    className="absolute inset-0 z-40"
                    style={{
                        background: "linear-gradient(90deg, #020617 25%, #0b1220 50%, #020617 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.5s infinite",
                    }}
                />
            )}

            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </div>
    );
}