import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"

export function TerminalComponent() {
    return (
        <Terminal>
            <TypingAnimation className="text-white">
                &gt; pnpm install discipline && pnpm install growth
            </TypingAnimation>

            <AnimatedSpan className="text-green-500">
                ✔ Compiling dreams into reality...
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Debugging excuses.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Importing consistency from 'daily-grind'.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Building patience.ts...
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Refactoring mindset to async/await success.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
                ✔ Running tests: passion ✓ persistence ✓ progress ✓
            </AnimatedSpan>

            <AnimatedSpan className="text-blue-500">
                <span>ℹ Updated 1 file:</span>
                <span className="pl-2">- heart.config.ts ❤️</span>
            </AnimatedSpan>

            <TypingAnimation className="text-white">
                Success! Developer mindset initialized.
            </TypingAnimation>

            <TypingAnimation className="text-white">
                You may now push to your future 🚀
            </TypingAnimation>
        </Terminal>

    )
}
