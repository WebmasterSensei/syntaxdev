import { VideoText } from "@/components/ui/video-text"

export function VideoTextComponent({ text }: { text: string }) {
    return (
        <div className="relative h-[200px] w-full overflow-hidden">
            <VideoText src="https://www.pexels.com/download/video/6964235/">
                {text}
            </VideoText>
        </div>
    )
}
