"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/ui/animated-list"

interface Item {
    name: string
    description: string
    icon: string
    color: string
    time: string
}

let notifications = [
    {
        name: "Laravel",
        description: "Elegant PHP framework for web artisans",
        time: "June 2011",
        icon: "💎",
        color: "#FF2D20",
    },
    {
        name: "React",
        description: "Declarative UI library by Facebook",
        time: "March 2013",
        icon: "⚛️",
        color: "#61DAFB",
    },
    {
        name: "Vue",
        description: "The progressive JavaScript framework",
        time: "February 2014",
        icon: "🖖",
        color: "#42B883",
    },
    {
        name: "MySQL",
        description: "Open-source relational database system",
        time: "May 1995",
        icon: "🐬",
        color: "#00758F",
    },
    {
        name: "Supabase",
        description: "The open-source Firebase alternative",
        time: "January 2020",
        icon: "🧩",
        color: "#3ECF8E",
    },
    {
        name: "Flutter",
        description: "UI toolkit by Google for natively compiled apps",
        time: "May 2017",
        icon: "💙",
        color: "#02569B",
    },
    {
        name: "Docker",
        description: "Containerize and deploy applications easily",
        time: "March 2013",
        icon: "🐳",
        color: "#2496ED",
    },
    {
        name: "Ant Design",
        description: "Enterprise-class UI design system for React",
        time: "June 2015",
        icon: "🎨",
        color: "#0170FE",
    },
    {
        name: "Magic UI",
        description: "UI animation and component collection for modern apps",
        time: "2023",
        icon: "✨",
        color: "#9B5DE5",
    },
    {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        time: "November 2017",
        icon: "🌬️",
        color: "#38BDF8",
    },
    {
        name: "Nginx",
        description: "High-performance web server and reverse proxy",
        time: "October 2004",
        icon: "🚦",
        color: "#009639",
    },
    {
        name: "Apache",
        description: "Open-source web server powering the web",
        time: "April 1995",
        icon: "🔥",
        color: "#D22128",
    },
    {
        name: "PHP",
        description: "Server-side scripting language for web development",
        time: "June 1995",
        icon: "🐘",
        color: "#777BB4",
    },
    {
        name: "JavaScript",
        description: "The language of the web",
        time: "December 1995",
        icon: "🟨",
        color: "#F7DF1E",
    },
]


notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[100%] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-slate text-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-400">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    )
}

export function AnimatedListComponent({
    className,
}: {
    className?: string
}) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
                className
            )}
        >
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>

            <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
        </div>
    )
}
