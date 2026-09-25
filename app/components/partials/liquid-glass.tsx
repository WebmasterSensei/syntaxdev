"use client";

import { forwardRef, useRef, type HTMLAttributes, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "./gsap";

/* ------------------------------------------------------------
   Blob path generator
   Produces organic blob paths with an identical command
   structure so GSAP can seamlessly morph the `d` attribute.
   ------------------------------------------------------------ */
export function blobPath(
  cx: number,
  cy: number,
  radius: number,
  points = 10,
  tension = 0.4,
): string {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2 - Math.PI / 2;
    pts.push([cx + Math.cos(a) * radius, cy + Math.sin(a) * radius]);
  }
  let d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  for (let i = 0; i < points; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % points];
    const c = pts[(i + 2) % points];
    const c1 = [b[0] - (b[0] - a[0]) * tension, b[1] - (b[1] - a[1]) * tension];
    const c2 = [b[0] + (c[0] - b[0]) * tension, b[1] + (c[1] - b[1]) * tension];
    d += ` C${c1[0].toFixed(2)} ${c1[1].toFixed(2)} ${c2[0].toFixed(2)} ${c2[1].toFixed(2)} ${b[0].toFixed(2)} ${b[1].toFixed(2)}`;
  }
  return d + "Z";
}

/** Hero slide-transition wash: a droplet that pours out to cover the frame. */
export const WASH_PATHS = {
  small: blobPath(50, 52, 9),
  cover: blobPath(50, 50, 170),
};

/** Ambient drifting blobs used behind glass panels. */
export const AMBIENT_PATHS = [
  blobPath(50, 50, 34, 10, 0.4),
  blobPath(52, 48, 42, 10, 0.32),
  blobPath(48, 52, 30, 10, 0.46),
];

/* ------------------------------------------------------------
   LiquidGlassCard — the shared frosted surface
   ------------------------------------------------------------ */
export interface LiquidGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  sheen?: boolean;
}

export const LiquidGlassCard = forwardRef<
  HTMLDivElement,
  LiquidGlassCardProps
>(({ className, sheen, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("glass-card", sheen && "sheen-sweep", className)}
    {...props}
  >
    {children}
  </div>
));
LiquidGlassCard.displayName = "LiquidGlassCard";

/* ------------------------------------------------------------
   AuroraBackground — drifting blurred color blobs behind glass
   ------------------------------------------------------------ */
export interface AuroraBlob {
  top: string;
  left: string;
  size: string;
  color: string;
}

export function AuroraBackground({
  className,
  blobs,
}: {
  className?: string;
  blobs?: AuroraBlob[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const items: AuroraBlob[] = blobs ?? [
    { top: "-18%", left: "-10%", size: "45vmax", color: "rgba(99,102,241,0.45)" },
    { top: "18%", left: "55%", size: "40vmax", color: "rgba(6,182,212,0.35)" },
    { top: "55%", left: "-8%", size: "42vmax", color: "rgba(168,85,247,0.32)" },
    { top: "62%", left: "58%", size: "36vmax", color: "rgba(244,114,182,0.25)" },
    { top: "78%", left: "30%", size: "30vmax", color: "rgba(34,211,238,0.22)" },
  ];

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
        return;
      const balls = el.querySelectorAll<HTMLDivElement>(".aurora-blob");
      const drift = (b: HTMLDivElement) => {
        gsap.to(b, {
          x: gsap.utils.random(-70, 70),
          y: gsap.utils.random(-60, 60),
          scale: gsap.utils.random(1, 1.3),
          rotation: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(7, 13),
          ease: "sine.inOut",
          onComplete: () => drift(b),
        });
      };
      balls.forEach(drift);
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {items.map((b, i) => (
        <div
          key={i}
          className="aurora-blob absolute rounded-full blur-[90px] will-change-transform"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 35% 35%, ${b.color}, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------
   LiquidBlob — a surface that continuously morphs its silhouette
   ------------------------------------------------------------ */
export function LiquidBlob({
  paths,
  className,
  duration = 9,
}: {
  paths: string[];
  className?: string;
  duration?: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const el = pathRef.current;
      if (
        !el ||
        paths.length < 2 ||
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      )
        return;
      let i = 0;
      const morph = () => {
        i = (i + 1) % paths.length;
        gsap.to(el, {
          attr: { d: paths[i] },
          duration,
          ease: "sine.inOut",
          onComplete: morph,
        });
      };
      morph();
    },
    { scope: pathRef },
  );

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path ref={pathRef} d={paths[0]} fill="currentColor" />
    </svg>
  );
}

/* ------------------------------------------------------------
   GlassParticle — a small floating droplet of glass
   ------------------------------------------------------------ */
export function GlassParticle({
  className,
  drift = 26,
}: {
  className?: string;
  drift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
        return;
      const y = gsap.utils.random(drift * 0.5, drift);
      const x = gsap.utils.random(-drift, drift);
      gsap.fromTo(
        el,
        { y: -y, x: 0, autoAlpha: 0 },
        {
          y,
          x,
          autoAlpha: 0.85,
          duration: gsap.utils.random(6, 11),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "glass-particle absolute rounded-full border border-white/25 bg-white/10 backdrop-blur-md",
        className,
      )}
    />
  );
}

/* ------------------------------------------------------------
   useTilt — subtle 3D tilt on pointer move
   ------------------------------------------------------------ */
export function useTilt<T extends HTMLElement = HTMLDivElement>(
  max = 8,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
        return;
      gsap.set(el, { transformPerspective: 900, willChange: "transform" });
      const xTo = gsap.quickTo(el, "rotationX", {
        duration: 0.5,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(el, "rotationY", {
        duration: 0.5,
        ease: "power3.out",
      });
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo(((e.clientY - r.top) / r.height - 0.5) * -max);
        yTo(((e.clientX - r.left) / r.width - 0.5) * max);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
    },
    { scope: ref },
  );

  return ref;
}