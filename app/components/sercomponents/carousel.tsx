import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function CarouselStory() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            year: "2020",
            title: "The Beginning",
            description: "Founded in 2020, SyntaXDev. emerged from a simple belief: technology should empower, not complicate. What started as a small team of three developers in a garage has grown into a global force driving digital transformation.",
            image: (
                <>
                    <img className='w-96 h-64 rounded-xl' src="/carousel/synt1.jpg" alt="" />
                </>
            )
        },
        {
            year: "2021",
            title: "Growth & Learning",
            description: "We've worked with startups disrupting industries and enterprises reimagining their futures. Each project teaches us something new, and we channel those lessons into creating better solutions for our clients.",
            image: (
                <>
                    <img className='w-96 h-64 rounded-xl' src="/carousel/synt2.jpg" alt="" />
                </>
            )
        },
        {
            year: "2025",
            title: "Today & Beyond",
            description: "Today, we're not just building software—we're crafting experiences that inspire, platforms that scale, and innovations that matter. Our journey continues with even bigger ambitions.",
            image: (
                <>
                    <img className='w-96 h-64 rounded-xl' src="/carousel/synt3.jpg" alt="" />
                </>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="min-h-screen p-8 flex items-center justify-center">
            <div className="mb-32 w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Our Story</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image Carousel */}
                        <div className="relative order-2 md:order-1 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                            {/* Background Blur */}
                            <div className="absolute inset-0 "></div>

                            {/* Main Carousel Container */}
                            <div className="relative  sm:p-8 aspect-square overflow-hidden ">
                                {/* Slides */}
                                <div className="relative h-full">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                                                    ? "opacity-100 scale-100"
                                                    : "opacity-0 scale-95"
                                                }`}
                                        >
                                            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                                                {/* Image Wrapper */}
                                                <div className="inline-block relative mb-6 sm:mb-8">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 rounded-full blur-xl opacity-50"></div>
                                                    <div className="relative p-6 sm:p-10 md:p-12">{slide.image}</div>
                                                </div>

                                                {/* Year */}
                                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                                    {slide.year}
                                                </div>

                                                {/* Title */}
                                                <div className="text-slate-400 text-xs sm:text-sm md:text-base uppercase tracking-wider mb-4">
                                                    {slide.title}
                                                </div>

                                                {/* Divider */}
                                                <div className="w-10 sm:w-12 md:w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Dots */}
                                <div className="absolute bottom-3 sm:bottom-4  left-1/2 -translate-x-1/2 flex gap-2">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                                    ? "w-6 sm:w-8 bg-gradient-to-r from-blue-400 to-blue-400"
                                                    : "w-2 bg-slate-600  hover:bg-slate-500 "
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>


                        {/* Text Content */}
                        <div className="relative order-1 md:order-2">
                            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    Founded in 2025, SyntaXDev. emerged from a simple belief: technology should empower, not complicate. What started as a small team of three developers in a garage has grown into a global force driving digital transformation.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    We've worked with startups disrupting industries and enterprises reimagining their futures. Each project teaches us something new, and we channel those lessons into creating better solutions for our clients.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    Today, we're not just building software—we're crafting experiences that inspire, platforms that scale, and innovations that matter.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
