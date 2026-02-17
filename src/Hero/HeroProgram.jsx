"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Button from "@/components/Button";

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
      slug: "optimal-weight-package",
      image: "/assets/HP-1.webp",
      title: "Optimal Weight Package",
      description: "Designed to help you achieve your target weight naturally, this program combines...",
    },
    {
      id: 2,
      slug: "diabetes-remission-package",
      image: "/assets/HP-2.webp",
      title: "Diabetes Remission Package",
      description: "This program focuses on managing blood sugar levels and improving insulin sensitivity...",
    },
    {
      id: 3,
      slug: "renew-your-gut-package",
      image: "/assets/HP-3.webp",
      title: "Renew Your Gut Package",
      description: "Address issues like bloating, constipation, and IBS through carefully curated treatments",
    },
    {
      id: 4,
      slug: "body-mind-detox-package",
      image: "/assets/HP-4.webp",
      title: "Body & Mind Detox Package",
      description: "This program aims to reduce stress, calm your mind, and repair your body through...",
    },
    {
      id: 5,
      slug: "pain-management-package",
      image: "/assets/pain.webp",
      title: "Pain Management Package",
      description: "Whether you're dealing with arthritis, migraines, or muscular pain, this program is ...",
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
      <div className="absolute inset-0 bg-black/85 z-0" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 
            ref={titleRef}
            className="text-white mb-4"
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
            spaceBetween={24}
            slidesPerView={'auto'}
            centeredSlides={false}
            loop={false} /* Loop disabled */
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 24,
              },
              1024: {
                spaceBetween: 24,
              },
              1280: {
                spaceBetween: 24,
              },
            }}
          >
            {/* Added .sort() to ensure ID order 1, 2, 3... */}
            {programs
              .sort((a, b) => a.id - b.id) 
              .map((program, index) => (
                <SwiperSlide key={program.id} className="!w-auto">
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group h-full"
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
                    border border-[#ffffff80] 
                    hover:border-[#ffffff] 
                    transition-all duration-300 
                    shadow-xl
                    w-[310px] max-w-[620px] p-2 card-serv">

      {/* Image */}
      <div className="relative h-[220px] overflow-hidden img-serv rounded-t-[28px]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover rounded-2xl"
          loading="lazy"
          quality={85}
        />
      </div>

      {/* Content */}
      <div className="px-6 py-6 text-center flex flex-col justify-between h-[190px]">

        <div className="card-text">
          {/* Swis Font Override */}
          <h3
            className="text-white mb-3"
            style={{
              fontFamily: '"Swis721 BT", sans-serif',
              fontWeight: 500,
              fontSize: '18px',
            }}
          >
            {program.title}
          </h3>

          <p className="font-Swis721 text-gray-300 text-[14px] leading-[1.6] line-clamp-3">
            {program.description}
          </p>
        </div>

        <div className="mt-6">
          <Button 
            text="VIEW MORE" 
            variant="primary" 
            size="sm" 
            href={`/programs#${program.slug}`}
            className="!px-7 !py-2 !text-[13px]" 
          />
        </div>

      </div>
    </div>
  );
};

export default HeroProgram;