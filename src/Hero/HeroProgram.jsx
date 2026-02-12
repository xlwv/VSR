"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroProgram = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const cardsRef = useRef([]);

  const programs = [
    {
      id: 1,
      image: "/assets/HP-1.webp",
      title: "Optimal Weight Package",
      description: "Designed to help you achieve your target weight naturally, this program combines...",
    },
    {
      id: 4, // Deliberately out of order in array to demonstrate the sort works
      image: "/assets/HP-4.webp",
      title: "Body & Mind Detox Package",
      description: "This program aims to reduce stress, calm your mind, and repair your body through...",
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
      id: 5,
      image: "/assets/HP-1.webp",
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

      // Cards stagger animation - sequential loading
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-10 overflow-hidden"
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
        <div className="text-center mb-8">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Programs
          </h2>
          
          {/* Underline SVG */}
          <div 
            ref={underlineRef}
            className="flex justify-center"
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

        {/* Swiper Carousel */}
        <div className="program-swiper-container">
          <Swiper
            className="!pt-3 !pb-12 !px-4" /* Fix for cutoff applied here */
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={false} /* Loop disabled */
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {/* Added .sort() to ensure ID order 1, 2, 3... */}
            {programs
              .sort((a, b) => a.id - b.id) 
              .map((program, index) => (
                <SwiperSlide key={program.id} className="flex justify-center">
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group h-full flex"
                >
                  <ProgramCard program={program} />
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .program-swiper-container .swiper-slide {
          height: auto;
          overflow: visible; 
        }
      `}</style>
    </section>
  );
};

// Program Card Component
const ProgramCard = ({ program }) => {
  return (
    <div className="bg-black/60 backdrop-blur-md 
                    rounded-[28px] 
                    border border-[#ffffff40] 
                    hover:border-[#ffffff80] 
                    transition-all duration-300 
                    shadow-xl
                    w-[310px] max-w-[620px] p-3">

      {/* Image */}
      <div className="relative h-[200px] overflow-hidden rounded-t-[28px]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          loading="lazy"
          quality={85}
        />
      </div>

      {/* Content */}
      <div className="px-6 py-6 text-center flex flex-col justify-between h-[230px]">

        <div>
          {/* Swis Font Override */}
          <h3
            className="text-white mb-3"
            style={{
              fontFamily: '"Swis721 BT", sans-serif',
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {program.title}
          </h3>

          <p className="font-Swis721 text-gray-300 text-[14px] leading-[1.6] line-clamp-3">
            {program.description}
          </p>
        </div>

        <div className="mt-6">
          <button className="call-btn !px-7 !py-2 !text-[13px]">
            VIEW MORE
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroProgram;