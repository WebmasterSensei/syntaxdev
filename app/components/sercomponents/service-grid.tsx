"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "../partials/gsap";
import { LiquidGlassCard, useTilt } from "../partials/liquid-glass";

const SERVICES = [
    {
        icon: "🚀",
        title: "Web Development",
        description: "Custom web applications built with modern frameworks and best practices",
        features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]
    },
    {
        icon: "📱",
        title: "Mobile Solutions",
        description: "Cross-platform mobile applications for iOS and Android",
        features: ["React Native", "Flutter", "Native Performance", "App Store Deployment"]
    },
    {
        icon: "👀",
        title: "Custom System Development",
        description: " Need a tailor-made solution? I specialize in building modern web apps, APIs, and automation tools built for your business needs.",
        features: ["AWS/Azure", "DevOps", "CI/CD Pipelines", "Microservices"]
    }
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
    const tilt = useTilt(7);

    return (
        <LiquidGlassCard
            ref={tilt}
            data-glass-card
            sheen
            className="group rounded-[1.75rem] p-8 transition-transform duration-300"
        >
            <span className="glass-card mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
            </span>
            <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
            <p className="mb-6 leading-relaxed text-white/75">{service.description}</p>
            <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                    <span
                        key={f}
                        className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/70 backdrop-blur-sm"
                    >
                        {f}
                    </span>
                ))}
            </div>
        </LiquidGlassCard>
    );
}

export default function ServiceGrid() {
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const grid = gridRef.current;
            if (!grid) return;
            const cards = grid.querySelectorAll('[data-glass-card]');
            if (!cards.length) return;
            const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            if (reduced) {
                gsap.set(cards, { autoAlpha: 1 });
                return;
            }
            gsap.fromTo(
                cards,
                { autoAlpha: 0, y: 60, filter: "blur(8px)" },
                {
                    autoAlpha: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.12,
                    scrollTrigger: { trigger: grid, start: "top 82%" },
                }
            );
        },
        { scope: gridRef }
    );

    return (
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
    );
}