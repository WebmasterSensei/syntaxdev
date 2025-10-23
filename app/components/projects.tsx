import { BentoComponent } from "./partials/bentogrid";
import { BlurFadeText } from "./partials/blurfade";
import { IconCloudComponent } from "./partials/techstackiconcloud";
import { TerminalComponent } from "./partials/terminal";
import TextDivider from "./partials/text-divider";
import { VideoTextComponent } from "./partials/text-video";

export default function Projects() {
    return (
        <>
            <div className="min-h-screen mx-auto w-full max-w-7xl bg-linear-to-br  py-20 px-4 sm:px-6 lg:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className='mb-10 text-center'>
                        <TextDivider title="Our Projects" sub="this is what we are working on" />
                    </div>
                    <div >
                        <BentoComponent />
                    </div>
                    <div className="mt-10 mb-10">
                        <TextDivider title="Tech Stack" sub="We use this frameworks, language, databases" />

                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mb-5">
                            <div className="md:col-span-1p-4 rounded-xl flex justify-center items-center">
                                <IconCloudComponent />
                                {/* <LineShadowTextComponent title="Tech" sub="Stack" /> */}
                            </div>

                            <div className="md:col-span-2  p-4 rounded-xl">
                                <TerminalComponent />
                                {/* <AnimatedListComponent /> */}
                            </div>
                        </div>
                    </div>
                    {/* <VideoTextComponent text="SHEESH!" /> */}
                </div>
            </div>

        </>
    )
}