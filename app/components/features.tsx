import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, ArrowRight, Star, Zap, Shield, Code, Rocket } from 'lucide-react';
import { BlurFadeText } from './partials/blurfade';

export default function Features() {
    const features = [
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

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                <BlurFadeText title="Features" subtitle="" />
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                        <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-400 transition-colors" />
                        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/70">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}