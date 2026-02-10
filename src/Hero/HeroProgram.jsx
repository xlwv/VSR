"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroProgram = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const programs = [
    {
      id: 1,
      image: "/assets/HP-1.webp",
      title: "Optimal Weight Package",
      description: "Designed to help you achieve your target weight naturally, this program combines...",
    },
    {
      id: 2,
      image: "/assets/HP-2.webp",
      title: "Diabetes Remission Package",
      description: "This program focuses on managing blood sugar levels and improving insulin sensitivity...",
    },
    {
      id: 3,
      image: "/assets/HP-3.webp",
      title: "Renew Your Gut Package",
      description: "Address issues like bloating, constipation, and IBS through carefully curated treatments",
    },
    {
      id: 4,
      image: "/assets/HP-4.webp",
      title: "Body & Mind Detox Package",
      description: "This program aims to reduce stress, calm your mind, and repair your body through...",
    },
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Underline animation
      gsap.from(underlineRef.current, {
        opacity: 0,
        scaleX: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Carousel controls
  const cardsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === programs.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? programs.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/HP-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Programs
          </h2>
          
          {/* Underline SVG */}
          <div 
            ref={underlineRef}
            className="flex justify-center mb-6"
          >
            <Image 
              src="/assets/SVG/below-gray.svg"
              alt=""
              width={200}
              height={20}
              className="w-48"
            />
          </div>
        </div>

        {/* Desktop: 4 Cards Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group"
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>

        {/* Tablet: 2 Cards Carousel */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {programs.slice(currentSlide, currentSlide + 2).map((program, index) => (
              <div
                key={program.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group"
              >
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 1 Card Carousel */}
        <div className="md:hidden">
          <div 
            ref={(el) => (cardsRef.current[0] = el)}
            className="group"
          >
            <ProgramCard program={programs[currentSlide]} />
          </div>
        </div>

        {/* Carousel Navigation (Mobile & Tablet) */}
        <div className="lg:hidden flex items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous program"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {programs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide 
                    ? 'w-8 bg-[#9c3f1a]' 
                    : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to program ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#9c3f1a] hover:bg-[#7f3214] flex items-center justify-center transition-colors"
            aria-label="Next program"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Program Card Component
const ProgramCard = ({ program }) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">
          {program.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {program.description}
        </p>
        <button className="call-btn">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default HeroProgram;