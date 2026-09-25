"use client";
import { useRef } from 'react';
import { Star, Zap, Shield, Code, Rocket } from 'lucide-react';
import { BlurFadeText } from './partials/blurfade';
import { gsap, useGSAP } from './partials/gsap';
import { LiquidGlassCard, useTilt } from './partials/liquid-glass';

const FEATURES = [
    {
        icon: Zap,
        title: "Blazing Development",
        desc: "Transform ideas into reality faster with automation, clean code, and modern frameworks.",
    },
    {
        icon: Shield,
        title: "Secure by Design",
        desc: "Every project is built with security, stability, and scalability as top priorities.",
    },
    {
        icon: Star,
        title: "Developer Experience First",
        desc: "Crafted with passion for clean architecture, maintainability, and performance.",
    },
    {
        icon: Code,
        title: "Open Source Driven",
        desc: "We believe in community and transparency — building tools that empower developers everywhere.",
    },
    {
        icon: Rocket,
        title: "Future-Ready Solutions",
        desc: "Embracing AI, cloud-native systems, and next-gen tech to stay ahead of the curve.",
    },
];

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[number]; index: number }) {
    const tilt = useTilt(8);

    return (
        <LiquidGlassCard
            ref={tilt}
            data-glass-card
            sheen
            className="group rounded-[1.75rem] p-8 transition-transform duration-300"
        >
            <span className="glass-card mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-blue-300">
                <feature.icon className="h-7 w-7" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-white">{feature.title}</h3>
            <p className="text-white/70">{feature.desc}</p>
        </LiquidGlassCard>
    );
}

export default function Features() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                <BlurFadeText title="Features" subtitle="" />
            </h2>
            <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
                {FEATURES.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </div>
    )
}