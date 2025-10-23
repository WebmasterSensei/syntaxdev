"use client"
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Docks } from "./partials/dock";


export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
            title: "Innovation Meets Design",
            subtitle: "Transform your digital experience"
        },
        {
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
            title: "Built for Tomorrow",
            subtitle: "Next-generation solutions"
        },
        {
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
            title: "Seamless Performance",
            subtitle: "Experience the difference"
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, slides.length]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black" />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4 animate-fade-in">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
                                {slide.subtitle}
                            </p>
                            {/* <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2 mx-auto">
                                Explore Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button> */}
                        </div>
                    </div>
                </div>
            ))}

            {/* Carousel Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3  backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-110"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3  backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-110"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 ">
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            setIsAutoPlaying(false);
                        }}
                        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                            }`}
                    />
                ))}
            </div>
            <div className="fixed bottom-5 left-0 w-full z-50">
                <Docks />
            </div>
        </div>
    )
}

