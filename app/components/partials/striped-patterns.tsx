import { StripedPattern } from "@/components/magicui/striped-pattern"

export function StripedPatternComponent() {
  return (
    <div className="relative bg-green-50 flex h-full  w-full items-center justify-center overflow-hidden rounded-lg">
      <StripedPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
    </div>
  )
}
