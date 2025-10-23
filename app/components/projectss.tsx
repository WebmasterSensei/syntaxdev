
import React from 'react';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import TextDivider from './partials/text-divider';
import { BlurFadeText } from './partials/blurfade';

interface Type {
    title: string,
    description: string,
    image: string,
    tags: string[],
    demoUrl: string,
    githubUrl: string,
    featured: boolean
}



const ProjectCard = ({ title, description, image, tags, demoUrl, githubUrl, featured }: Type) => (
    <div className="group text-white relative bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
        {featured && (
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">
                FEATURED
            </div>
        )}

        <div className=" relative overflow-hidden h-56 bg-linear-to-br from-purple-100 via-pink-100 to-blue-100">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            className="px-4 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>

        <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold  group-hover:text-purple-600 transition-colors duration-300">
                {title}
            </h3>

            <p className="text-gray-400 leading-relaxed line-clamp-2">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
                {tags.slice(0, 7).map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r  rounded-lg text-xs font-semibold border border-purple-100"
                    >
                        {tag}
                    </span>
                ))}
                {tags.length > 7 && (
                    <span className="px-3 py-1.5 border text-green-500 rounded-lg text-xs font-semibold">
                        +{tags.length - 7}
                    </span>
                )}
            </div>
        </div>
    </div>
);

const ProjectsSection = () => {
    const projects = [
        {
            title: "Gift Check Monitoring",
            description: "Next-gen computer vision platform with real-time object detection and advanced neural network processing capabilities.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            tags: ["Laravel 11", "Php 8", "Vue 3", "Mysql", "AntDesign", "JavaScript", "Tailwind", "Redis", "Ngnix", "Apache", "Reverb", "Pinia", "Pnpm"],
            demoUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            title: "Variance Monitoring",
            description: "Secure cryptocurrency wallet with multi-chain support, staking features, and real-time portfolio tracking.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
            tags: ["Code Igniter 3", "Php 7", "Java Script", "Html 5", "Bootstrap 5", "MySql"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            title: "Bank Reconcilation",
            description: "Collaborative design tool with real-time editing, version control, and AI-powered design suggestions.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
            tags: ["Laravel 10", "Php 8", "WebSocket", "Redis", "Nginx", "Apache", "MySql", "AntDesign", "Tailwind", "Pinia", "Pnpm"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            title: "Bad Order & Near Ex",
            description: "Smart fitness tracker with personalized workout plans, nutrition guidance, and progress analytics.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
            tags: ["Laravel 11", "MySql", "Reverb", "Vue 3", "AntDesign", "Tailwind", "Pinia", "Pnpm"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            title: "SWA",
            description: "Video streaming platform with adaptive bitrate, live chat, and content recommendation algorithms.",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
            tags: ["Laravel 11", "MySql", "Vue 3", "Pnpm"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            title: "Check Clearing",
            description: "Enterprise cloud storage solution with end-to-end encryption, team collaboration, and API access.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
            tags: ["Laravel 5", "JavaScript", "JQuery", "MySql", "SqlSrv"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            title: "Alturush",
            description: "Social media analytics dashboard with sentiment analysis, engagement metrics, and competitor tracking.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            tags: ["Laravel", "App", "Web", "Mysql", "Flutter", "Dart", "Npm"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            title: "Check Disbursment",
            description: "Interactive learning platform with virtual classrooms, gamification, and adaptive learning paths.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
            tags: ["Laravel 12", "React", "Tailwind", "MySQL", "SqlSrv"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br  py-20 px-4 sm:px-6 lg:px-12">
            <div className="max-w-[1600px] mx-auto">
                <div className='mb-10 text-center'>
                    {/* <TextDivider title="Projects" sub="This is what we are working on" /> */}
                    <BlurFadeText title="Our Projects" subtitle="This is what we are working on" />

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;