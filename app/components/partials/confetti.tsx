"use client"

import { useRef } from "react"

import { Confetti, type ConfettiRef } from "@/components/ui/confetti"

export function ConfettiComponent() {
    const confettiRef = useRef<ConfettiRef>(null)

    return (
        <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
        
            <Confetti
                ref={confettiRef}
                className="absolute top-0 left-0 z-0 size-full"
                onMouseEnter={() => {
                    confettiRef.current?.fire({})
                }}
            />
        </div>
    )
}
