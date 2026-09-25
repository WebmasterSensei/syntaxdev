"use client";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger } from "./partials/gsap";
import { LiquidGlassCard } from "./partials/liquid-glass";

const ROUTES = [
    { id: 1, nav: "Home", route: "/" },
    { id: 2, nav: "About", route: "/about" },
    { id: 3, nav: "Our Projects", route: "/projects" },
];

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navRef = useRef<HTMLDivElement>(null);
    const rowRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLSpanElement>(null);

    /* Entrance + scroll-driven tightening */
    useGSAP(
        () => {
            const el = navRef.current;
            if (!el) return;

            const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            if (!reduced) {
                gsap.fromTo(
                    el,
                    { yPercent: -140, autoAlpha: 0 },
                    { yPercent: 0, autoAlpha: 1, duration: 1, ease: "power3.out", delay: 0.1 }
                );
            }

            ScrollTrigger.create({
                start: () => 40,
                end: "max",
                onUpdate: (self) => {
                    const p = Math.min(1, self.progress * 3);
                    el.style.background = `linear-gradient(150deg, rgba(15,23,42,${0.45 + p * 0.5}), rgba(2,6,23,${0.5 + p * 0.5}))`;
                    el.style.borderColor = `rgba(255,255,255,${0.14 + p * 0.1})`;
                    el.style.boxShadow = `0 ${10 + p * 16}px ${20 + p * 30}px rgba(0,0,0,${0.25 + p * 0.5}), inset 0 1px 0 rgba(255,255,255,${0.2 + p * 0.15})`;
                },
            });
        },
        { scope: navRef }
    );

    /* Sliding liquid-droplet active indicator */
    useGSAP(
        () => {
            const row = rowRef.current;
            const droplet = indicatorRef.current;
            const parent = navRef.current;
            if (!row || !droplet || !parent) return;

            const links = Array.from(row.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));

            const place = (target: HTMLAnchorElement | null) => {
                let node = target;
                if (!node) {
                    node = links.find((l) => l.dataset.navLink === pathname) ?? links[0] ?? null;
                }
                if (!node) return;
                const rowRect = row.getBoundingClientRect();
                const r = node.getBoundingClientRect();
                gsap.to(droplet, {
                    x: r.left - rowRect.left,
                    width: r.width,
                    duration: 0.55,
                    ease: "power3.out",
                });
            };

            place(null);

            const onHover = (e: MouseEvent) => {
                const t = (e.target as HTMLElement).closest<HTMLAnchorElement>("[data-nav-link]");
                if (t) place(t);
            };
            const onLeave = () => place(null);
            const onResize = () => place(null);

            row.addEventListener("mouseover", onHover);
            row.addEventListener("pointerleave", onLeave);
            window.addEventListener("resize", onResize);

            return () => {
                row.removeEventListener("mouseover", onHover);
                row.removeEventListener("pointerleave", onLeave);
                window.removeEventListener("resize", onResize);
            };
        },
        { scope: navRef, dependencies: [pathname] }
    );

    return (
        <header className="fixed inset-x-0 top-4 z-50 px-4">
            <LiquidGlassCard
                ref={navRef}
                className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border-white/20 px-4 py-2.5 md:px-6"
            >
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2.5">
                    <span className="glass-card flex h-9 w-9 items-center justify-center rounded-full p-1.5">
                        <img src="/images/nextlogo.svg" alt="NextDev Logo" className="h-5 w-5" />
                    </span>
                    <span className="bg-linear-to-r from-teal-300 to-blue-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                        NextDev.
                    </span>
                </Link>

                {/* Desktop links + droplet */}
                <div ref={rowRef} className="relative hidden items-center md:flex">
                    <span
                        ref={indicatorRef}
                        aria-hidden
                        className="pointer-events-none absolute bottom-0 top-0 rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
                        style={{ left: 0, width: 40 }}
                    />
                    {ROUTES.map((item) => {
                        const isActive = pathname === item.route;
                        return (
                            <Link
                                key={item.id}
                                href={item.route}
                                data-nav-link={item.route}
                                className={`relative z-10 rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                                    isActive ? "text-white" : "text-white/75 hover:text-white"
                                }`}
                            >
                                {item.nav}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <a href="/contact" className="hidden md:block">
                        <button className="glass-card rounded-full px-5 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105">
                            Get Started
                        </button>
                    </a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </LiquidGlassCard>

            {/* Mobile dropdown */}
            {menuOpen && <MobileMenu pathname={pathname} />}
        </header>
    );
}

function MobileMenu({ pathname }: { pathname: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el) return;
            const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            if (reduced) {
                gsap.set(el, { autoAlpha: 1 });
                return;
            }
            gsap.fromTo(
                el,
                { autoAlpha: 0, y: -16 },
                { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }
            );
        },
        { scope: ref }
    );

    return (
        <div
            ref={ref}
            className="mx-auto mt-3 max-w-4xl rounded-3xl border border-white/20 bg-slate-950/40 p-4 opacity-0 backdrop-blur-2xl md:hidden"
            style={{ boxShadow: "0 24px 60px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.25)" }}
        >
            <div className="space-y-2">
                {ROUTES.map((item) => {
                    const isActive = pathname === item.route;
                    return (
                        <a
                            key={item.id}
                            href={item.route}
                            className={`block rounded-2xl px-4 py-3 text-lg transition-colors duration-300 ${
                                isActive
                                    ? "bg-white/10 text-white"
                                    : "text-white/75 hover:text-white"
                            }`}
                        >
                            {item.nav}
                        </a>
                    );
                })}
                <a href="/contact/">
                    <button className="mt-2 w-full rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 text-white">
                        Get Started
                    </button>
                </a>
            </div>
        </div>
    );
}