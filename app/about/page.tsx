'use client'

import React from 'react';
import { Users, Zap, Target, Heart, Award, Sparkles } from 'lucide-react';
import Nav from '../components/nav';
import { VideoTextComponent } from '../components/partials/text-video';
import Footer from '../components/footer';
import CarouselStory from '../components/sercomponents/carousel';
import { AnimatedShinyComponent } from '../components/partials/buttons';
import Section from '../components/section';


export default function About() {
    const values = [
        {
            icon: Zap,
            title: "Innovation First",
            description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
        },
        {
            icon: Heart,
            title: "Customer Obsessed",
            description: "Your success drives everything we do. We're committed to exceeding expectations at every turn."
        },
        {
            icon: Target,
            title: "Purpose Driven",
            description: "We build with intention, creating meaningful products that solve real problems."
        },
        {
            icon: Award,
            title: "Excellence Always",
            description: "We maintain the highest standards in code quality, design, and user experience."
        }
    ];

    const stats = [
        { number: "10+", label: "Projects Delivered" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "5+", label: "Team Members" },
        { number: "1+", label: "Countries Served" }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-950 via-slate-950 to-blue-950">
            <Nav />

            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">

                    <VideoTextComponent text="NextDev." />

                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                            We're a team of passionate creators, engineers, and innovators building the future of digital experiences.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-cyan-400">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-lg">Forging tomorrow's technology, today</span>
                            <Sparkles className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-linear-to-br from-slate-950/50 via-blue-950/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:border-cyan-500/50">
                                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Story Section */}
                    <CarouselStory />


                    {/* Values Section */}
                    <div className="mb-32">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">What Drives Us</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {values.map((value, idx) => {
                                const Icon = value.icon;
                                return (
                                    <div key={idx} className="group bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-3 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                                                <Icon className="w-6 h-6 text-cyan-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                                <p className="text-slate-400 leading-relaxed">{value.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Team Section */}

                    <Section />

                    {/* CTA Section */}
                    <div className="bg-linear-to-r from-slate-950/50 to-blue-900/10 border border-slate-500/30 rounded-3xl p-12 text-center">
                        <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Let's collaborate and turn your vision into reality. We're here to help you succeed.
                        </p>
                        <a href="/contact">
                            <AnimatedShinyComponent text="Get in Touch" />
                        </a>
                        {/* <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                            Get in Touch
                        </button> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}