import { Highlighter } from "@/components/ui/highlighter"

export function HighlighterComponent() {
    return (
        <div className="text-center">
            <p className="leading-relaxed text-white">
                We aim to{" "}
                <Highlighter action="underline" color="#FF9800">
                    build scalable and modern systems
                </Highlighter>{" "}
                through{" "}
                <Highlighter  action="highlight" color="#134686">
                    clean code, smart design, and innovation
                </Highlighter>
                .
            </p>
        </div>

    )
}
