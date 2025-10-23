import { AnimatedListComponent } from "./partials/animated-lists";
import { BlurFadeText } from "./partials/blurfade";
import { MarqueeComponent } from "./partials/marquee";
import { LineShadowTextComponent } from "./partials/shift-fast";

export default function Partners() {
    return (
        <>
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-7">
                    <BlurFadeText title="Partners" subtitle="This is our partners" />
                </div>
                <MarqueeComponent />
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mb-5 mt-20">
                    <div className="md:col-span-1p-4 rounded-xl flex justify-center items-center">
                        <LineShadowTextComponent title="Tech" sub="Stack" />
                    </div>

                    <div className="md:col-span-2 bg-slate-950/20 p-4 rounded-xl">
                        <AnimatedListComponent />
                    </div>
                </div>
            </div>

        </>
    )
}