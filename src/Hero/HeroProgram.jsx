"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Button from "@/components/Button";

import 'swiper/css';
import 'swiper/css/pagination';

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

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      className="relative py-12 md:py-20 overflow-hidden"
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
        <div className="text-center mb-8 md:mb-10">
          <h2 ref={titleRef} className="text-white mb-4">
            Programs
          </h2>

          <div ref={underlineRef} className="flex justify-center">
            <Image
              src="/assets/SVG/below-gray.svg"
              alt=""
              width={200}
              height={20}
              className="w-36 md:w-48"
            />
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="program-swiper-container">
          <Swiper
            className="!pt-3 !pb-6"
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            centredslides={false}
            loop={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // Dots only on mobile — disabled above 768px via breakpoints
            pagination={{
              clickable: true,
              el: '.program-pagination-dots',
              bulletClass: 'program-dot',
              bulletActiveClass: 'program-dot-active',
              renderBullet: (_, className) =>
                `<button class="${className}" aria-label="Go to slide"></button>`,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.3,
                spaceBetween: 10,
                centreedSlides: true,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 12,
                centreedSlides: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
                centreedSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 14,
                centreedSlides: false,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 14,
                centreedSlides: false,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 14,
                centreedSlides: false,
              },
            }}
          >
            {programs
              .sort((a, b) => a.id - b.id)
              .map((program, index) => (
                <SwiperSlide key={program.id}>
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="h-full"
                  >
                    <ProgramCard program={program} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Dots container — hidden on md+ via CSS below */}
          <div className="program-pagination-dots flex justify-center gap-2 mt-4" />
        </div>
      </div>

      <style jsx global>{`
        .program-swiper-container .swiper-slide {
          height: auto;
        }

        /* Dot base style */
        .program-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: width 0.3s ease, background-color 0.3s ease;
        }

        /* Active dot — pill shape in white */
        .program-dot-active {
          width: 28px;
          background-color: #ffffff;
        }

        /* Hide dots on md and above (≥768px) */
        @media (min-width: 768px) {
          .program-pagination-dots {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

// Program Card Component
const ProgramCard = ({ program }) => {
  return (
    <div className="bg-black/60 backdrop-blur-md
                    rounded-[24px]
                    border border-[#ffffff50]
                    hover:border-white
                    transition-all duration-300
                    shadow-xl
                    w-full p-2 card-serv
                    flex flex-col">

      {/* Image — aspect ratio instead of fixed height */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[20px] img-serv">
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
      <div className="px-4 sm:px-5 py-3 text-center flex flex-col flex-1 justify-between">
        <div>
          <h3
            className="text-white mt-1 mb-2 text-[16px] sm:text-[18px] leading-snug"
            style={{ fontFamily: '"Swis721 BT", sans-serif', fontWeight: 500 }}
          >
            {program.title}
          </h3>

          <p className="text-gray-300 text-[14px] sm:text-[16px] leading-relaxed line-clamp-3">
            {program.description}
          </p>
        </div>

        <div className="mt-5">
          <Button
            text="VIEW MORE"
            variant="primary"
            size="sm"
            href={`/programs#${program.slug}`}
            className="!px-6 !py-2 !text-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroProgram;