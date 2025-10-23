"use client"

import { useTheme } from "next-themes"

import { LineShadowText } from "@/components/ui/line-shadow-text"
interface Type {
    title: string,
    sub: string,

}

export function LineShadowTextComponent({ title, sub }: Type) {
    const theme = useTheme()
    const shadowColor = theme.resolvedTheme === "dark" ? "black" : "white"
    return (
        <h1 className="text-5xl text-white leading-none font-semibold tracking-tighter text-balance sm:text-2xl md:text-4xl lg:text-5xl">
            {title}
            <LineShadowText className="italic" shadowColor={shadowColor}>
                {sub}
            </LineShadowText>
        </h1>
    )
}
