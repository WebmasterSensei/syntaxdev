import { VideoText } from "@/components/ui/video-text"

export function VideoTextComponent({ text }: { text: string }) {
    return (
        <div className="relative h-[200px] w-full overflow-hidden">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
                {text}
            </VideoText>
        </div>
    )
}
