import { AnimatedBeamComponent } from "./partials/beam";
import { BlurFadeText } from "./partials/blurfade";
import { HighlighterComponent } from "./partials/text-highlighter";
import CallToAction from "./sercomponents/call-to-action";
import ServiceGrid from "./sercomponents/service-grid";

export default function Services() {
    return (
        <section id="services" className="relative overflow-hidden">
            {/* Background Elements */}
            {/* <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-slate-950 to-indigo-50" /> */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-20">
                    <BlurFadeText
                        title="Our Services"
                        subtitle="Comprehensive Solutions for Your Business Growth"
                    />
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We deliver cutting-edge solutions tailored to drive your business forward.
                        Our expertise spans across modern technologies and innovative strategies
                        designed to elevate your digital presence and operational efficiency.
                    </p>
                </div>

                {/* Main Services Grid */}
                <div className="mb-20 lg:mb-24">
                    <HighlighterComponent />
                </div>

                {/* Additional Services Showcase */}
                <div className="mb-20 lg:mb-24">
                    <ServiceGrid />
                </div>

                {/* Process Section */}
                <div className="mb-20 lg:mb-24">
                    <div className="text-center mb-12">
                        <BlurFadeText
                            title="Our Process"
                            subtitle="We follow a structured approach to ensure quality and efficiency in every project"
                        />
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-green-500 via-yellow-500 to-blue-500 hidden md:block">
                            <div className="absolute inset-0 bg-linear-to-b from-blue-900 via-blue-800 to-blue-700 animate-pulse"></div>
                        </div>

                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Analysis",
                                    desc: "Comprehensive requirement gathering, stakeholder interviews, and project analysis to understand your business objectives and technical requirements.",
                                    icon: "🔍",
                                    color: "blue"
                                },
                                {
                                    step: "02",
                                    title: "Strategy & Planning",
                                    desc: "Custom solution architecture, technology stack selection, project roadmap creation, and milestone planning for successful execution.",
                                    icon: "📋",
                                    color: "cyan"
                                },
                                {
                                    step: "03",
                                    title: "Execution & Development",
                                    desc: "Agile implementation with continuous integration, regular progress updates, and quality assurance throughout the development lifecycle.",
                                    icon: "⚡",
                                    color: "green"
                                },
                                {
                                    step: "04",
                                    title: "Support & Optimization",
                                    desc: "Ongoing maintenance, performance monitoring, regular updates, and continuous optimization to ensure long-term success.",
                                    icon: "🔄",
                                    color: "orange"
                                }
                            ].map((process, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-950 rounded-full z-10 hidden md:flex items-center justify-center group-hover:scale-150 transition-all duration-300">
                                        <div className="w-2 h-2  bg-blue-900 rounded-full"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-1 relative overflow-hidden">
                                            {/* Gradient Accent */}
                                            {/* <div className={`absolute top-0 left-0 w-1 h-full bg-${process.color}-500`}></div> */}

                                            {/* Header */}
                                            <div className="flex items-center mb-4">
                                                <div className={`w-12 h-12 bg-linear-to-br from-${process.color}-500 to-${process.color}-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                                    <span className="text-xl">{process.icon}</span>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-semibold text-white uppercase tracking-wide">Step {process.step}</span>
                                                    <h4 className="font-bold text-white text-lg">{process.title}</h4>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-400 leading-relaxed">{process.desc}</p>

                                            {/* Progress Indicator */}
                                            <div className="mt-4 flex items-center">
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`bg-linear-to-r from-${process.color}-500 to-${process.color}-600 h-2 rounded-full transition-all duration-1000`}
                                                        style={{ width: `${(index + 1) * 25}%` }}
                                                    ></div>
                                                </div>
                                                <span className="ml-3 text-sm font-medium text-gray-200">{((index + 1) * 25)}%</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-2/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}