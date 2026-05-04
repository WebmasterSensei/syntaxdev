"use client"
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [ready, setReady] = useState<boolean[]>(() =>
        SLIDES.map((s) => imageCache.has(s.image))
    );
    const [entered, setEntered] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">


            {/* Slide layers */}
            {SLIDES.map((s, index) => (
                <div
                    key={index}
                    className="absolute inset-0"
                    style={{
                        opacity: index === currentSlide ? 1 : 0,
                        transition: "opacity 1.2s cubic-bezier(0.4,0,0.2,1)",
                        zIndex: index === currentSlide ? 2 : index === prevSlideIndex ? 1 : 0,
                    }}
                >
                    {/* Cinematic gradient overlays */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 60%)",
                        }}
                    />
                    {/* Ken Burns zoom effect on active slide */}
                    <img
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            transform: index === currentSlide ? "scale(1.06)" : "scale(1.0)",
                            transition: "transform 6s ease-out",
                            transformOrigin: "center center",
                        }}
                    />
                </div>
            ))}

            {/* Slide number ticker */}
            <div
                className="absolute top-8 right-8 z-30 flex items-end gap-1"
                style={{ opacity: entered ? 1 : 0, transition: "opacity 1s 0.5s" }}
            >
                <span
                    className="text-white font-light"
                    style={{
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        color: slide.accent,
                        transition: "color 0.8s",
                    }}
                >
                    {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <span className="text-white/40 text-sm mb-1">/ {String(SLIDES.length).padStart(2, "0")}</span>
            </div>

            {/* Main content */}
            <div
                className="absolute inset-0 z-20 flex flex-col justify-end pb-24 pl-10 md:pl-20"
                style={{ pointerEvents: "none" }}
            >
                {/* Accent bar */}
                <div
                    style={{
                        width: entered ? "48px" : "0px",
                        height: "3px",
                        background: slide.accent,
                        transition: "width 0.8s 0.3s cubic-bezier(0.4,0,0.2,1), background 0.8s",
                        marginBottom: "1.25rem",
                    }}
                />

                {/* Subtitle */}
                <p
                    className="text-white/70 uppercase tracking-widest text-xs mb-3"
                    style={{
                        letterSpacing: "0.25em",
                        opacity: entered ? 1 : 0,
                        transform: entered ? "translateY(0)" : "translateY(12px)",
                        transition: "opacity 0.8s 0.4s, transform 0.8s 0.4s",
                    }}
                >
                    {slide.subtitle}
                </p>

                {/* Title */}
                <h1
                    className="text-white font-bold leading-none"
                    style={{
                        fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                        opacity: entered ? 1 : 0,
                        transform: entered ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.9s 0.25s, transform 0.9s 0.25s",
                        textShadow: "0 4px 32px rgba(0,0,0,0.5)",
                        maxWidth: "700px",
                    }}
                >
                    {slide.title}
                </h1>

                {/* CTA */}
                <div
                    style={{
                        marginTop: "2rem",
                        opacity: entered ? 1 : 0,
                        transform: entered ? "translateY(0)" : "translateY(12px)",
                        transition: "opacity 0.8s 0.6s, transform 0.8s 0.6s",
                        pointerEvents: "all",
                    }}
                >
                    <button
                        className="group relative overflow-hidden px-8 py-3 text-sm uppercase tracking-widest font-medium border"
                        style={{
                            borderColor: slide.accent,
                            color: slide.accent,
                            background: "transparent",
                            letterSpacing: "0.2em",
                            transition: "color 0.4s, border-color 0.8s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.color = "#000";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.color = slide.accent;
                        }}
                    >
                        <span
                            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            style={{ background: slide.accent }}
                        />
                        <span className="relative">Explore Now</span>
                    </button>
                </div>
            </div>

            {/* Side navigation */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
                <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                    style={{ backdropFilter: "blur(6px)" }}
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                    style={{ backdropFilter: "blur(6px)" }}
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Bottom progress indicators */}
            <div className="absolute bottom-8 left-10 md:left-20 z-30 flex gap-4 items-center">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsAutoPlaying(false);
                            goToSlide(index);
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                        className="relative overflow-hidden"
                        style={{
                            width: index === currentSlide ? "48px" : "20px",
                            height: "2px",
                            background: index === currentSlide ? slide.accent : "rgba(255,255,255,0.3)",
                            transition: "width 0.5s cubic-bezier(0.4,0,0.2,1), background 0.8s",
                            cursor: "pointer",
                            border: "none",
                            padding: 0,
                        }}
                    />
                ))}
            </div>

            {/* Loading shimmer overlay */}
            {!ready[currentSlide] && (
                <div
                    className="absolute inset-0 z-40"
                    style={{
                        background: "linear-gradient(90deg, #111 25%, #1e1e1e 50%, #111 75%)",
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