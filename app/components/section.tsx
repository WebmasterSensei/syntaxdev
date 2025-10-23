import { useEffect, useRef, useState } from "react";
import { AvatarCircle } from "./partials/avatars";
import { BlurFadeText } from "./partials/blurfade";
import { AnimatedListComponent } from "./partials/animated-lists";
import { LineShadowTextComponent } from "./partials/shift-fast";
import { StripedPatternComponent } from "./partials/striped-patterns";

export default function Section() {

    interface Avatar {
        imageUrl: string;
        profileUrl: string;
    }

    const usernames = ["WebmasterSensei", "San103", "hartzy0204", "gamaleCoding", "mariadevhub"];

    const [avatars, setAvatars] = useState<Avatar[]>([]);

    const fetchAvatars = async () => {
        const avatars = await Promise.all(
            usernames.map(async (username) => {
                const res = await fetch(`https://api.github.com/users/${username}`);
                const data = await res.json();

                console.log(data);
                return {
                    imageUrl: data.avatar_url,
                    profileUrl: data.html_url,
                    followers: data.followers,
                    following: data.following,
                    html_url: data.html_url,
                    name: data.name,
                    bio: data.bio,
                    blog: data.blog,
                };
            })
        );
        setAvatars(avatars);
    }

    useEffect(() => {
        fetchAvatars();
    }, [])

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-sky-500 to-indigo-600 blur-3xl opacity-30 rounded-3xl"></div>
           
            <div className="relative bg-linear-to-r from-slate-950/50 rounded-3xl p-12 md:p-16 text-center border-none shadow-1xl">
            {/* <StripedPatternComponent /> */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    We are ready to build the future
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Looking for creating your websites? Hire Us
                </p>

                <div className="mt-12">
                    <BlurFadeText title="Developers" subtitle="Meet Our Team" />
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto" >
                    {avatars.map((item: any, index) => (
                        <div
                            key={index}
                            onClick={() => window.open(item.blog, '_blank')}
                            className="cursor-pointer flex flex-col justify-between bg-blue-950/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/40 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 h-full"
                        >
                            {/* <StripedPatternComponent /> */}
                            <div>
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <img
                                        src={item.imageUrl}
                                        alt="Team Member"
                                        className="w-full h-full rounded-full object-cover border-4 border-blue-500/50"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 text-center">
                                    {item.name || "Unknown Dev"}
                                </h3>
                                <p className="text-blue-300 text-sm mb-3 text-center">
                                    {item.role || "Full Stack Developer"}
                                </p>

                                <p className="text-gray-400 text-sm leading-relaxed text-center">
                                    {item.bio || "No bio available."}
                                </p>
                            </div>

                            {/* Bottom followers/following section */}
                            <div className="flex justify-center gap-4 mt-auto pt-4">
                                <button className="flex-1 ">
                                    <p className="text-lg font-bold text-white mb-1">
                                        {item.followers ?? "1.2k"}
                                    </p>
                                    <p className="text-xs text-gray-300 uppercase tracking-wide">
                                        Followers
                                    </p>
                                </button>
                                <button className="flex-1">
                                    <p className="text-lg font-bold text-white mb-1">
                                        {item.following ?? "340"}
                                    </p>
                                    <p className="text-xs text-gray-300 uppercase tracking-wide">
                                        Following
                                    </p>
                                </button>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Optional: Keep AvatarCircle component below */}
                <div className="flex justify-center mt-12">
                    <div>
                        <p className="text-white">GitHubs</p>
                        <AvatarCircle />
                    </div>
                </div>

            </div>

        </div>
    )
}

// imageUrl":"https://avatars.githubusercontent.com/u/153508097?v=4","profileUrl":"https://github.com/WebmasterSensei"},{"imageUrl":"https://avatars.githubusercontent.com/u/106059541?v=4","profileUrl":"https://github.com/San103"},{"imageUrl":"https://avatars.githubusercontent.com/u/134903345?v=4","profileUrl":"https://github.com/hartzy0204