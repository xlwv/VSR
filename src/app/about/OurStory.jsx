"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PopupForm from "@/components/PopupForm";
const CONTENT = [
  {
    p1: "Our mental & physical well-being is under constant stress from the impact of modern-day lifestyles. The negative energy and health issues build up and eventually lead to severe disorders.",
    p2: "This is essentially an imbalance within our body. And more often than not, it is the drastic change in our way of life and being disconnected from nature that is at the root of the myriad health issues."
  },
  {
    p1: "Our mental is under constant stress from the impact of modern-day lifestyles. The negative energy and health issues build up and eventually lead to severe disorders.",
    p2: "This is essentially an imbalance within our body. And more often than not, it is the drastic change in our way of life and being disconnected from nature that is at the root of the myriad health issues."
  },
  {
    p1: "Physical well-being is under constant stress from the impact of modern-day lifestyles. The negative energy and health issues build up and eventually lead to severe disorders.",
    p2: "This is essentially an imbalance within our body. And more often than not, it is the drastic change in our way of life and being disconnected from nature that is at the root of the myriad health issues."
  }
];

export default function OurStory() {
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!wrapperRef.current) return;

          const start = wrapperRef.current.offsetTop;
          const height = wrapperRef.current.offsetHeight - window.innerHeight;
          const scrollY = window.scrollY;

          if (scrollY >= start && scrollY <= start + height) {
            const progress = Math.min(Math.max((scrollY - start) / height, 0), 1);
            setActive(Math.round(progress * (CONTENT.length - 1)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, []);

  const handleDotClick = (index) => {
    if (isScrolling) return;
    
    setActive(index);
    setIsScrolling(true);

    if (wrapperRef.current) {
      const start = wrapperRef.current.offsetTop;
      const height = wrapperRef.current.offsetHeight - window.innerHeight;
      const target = start + (height / (CONTENT.length - 1)) * index;
      
      window.scrollTo({ top: target, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const renderSlides = (isMobile = false) => (
    <div
      className={`flex transition-transform duration-500 ease-out ${isMobile ? 'w-full' : ''}`}
      style={{ 
        transform: `translateX(-${active * 100}%)`,
        ...(isMobile && { willChange: 'transform' })
      }}
    >
      {CONTENT.map((item, i) => (
        <div key={i} className={isMobile ? "w-full flex-shrink-0" : "min-w-full"}>
          <p className={`text-gray-600 leading-7 ${isMobile ? 'mb-3 w-full' : 'mb-2'}`}>{item.p1}</p>
          <p className={`text-gray-600 leading-7 ${isMobile ? 'w-full' : ''}`}>{item.p2}</p>
        </div>
      ))}
    </div>
  );

  const renderDots = (isMobile = false) => (
    <div className={`flex gap-2 ${isMobile ? 'mt-8 justify-center' : 'mt-12'}`}>
      {CONTENT.map((_, i) => (
        <button
          key={i}
          onClick={() => handleDotClick(i)}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === active ? "w-10 bg-[#a44a1f]" : "w-2 bg-[#e6b8a2]"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div ref={wrapperRef} className="h-[150vh]">
      <section className="sticky top-0 max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-24  flex flex-col justify-center">
        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-16 overflow-hidden">
          <div className="flex-shrink-0">
            <div className="relative w-[500px] h-[353px] rounded-[24px] overflow-hidden">
              <Image src="/assets/ourstory.webp" alt="Our Story" fill priority />
            </div>
          </div>
          <div className="max-w-xl overflow-hidden">
            <h2 className="text-[24px] tracking-[0.2em] text-gray-700 mb-2">OUR STORY</h2>
            <div className="mb-6">
              <Image src="/assets/SVG/below-right.svg" alt="" width={200} height={12} />
            </div>
            {renderSlides()}
            {renderDots()}
          </div>
        </div>
        {/* MOBILE */}
        <div className="md:hidden">
          <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden mb-6"><Image src="/assets/ourstory.png" alt="Our Story" fill priority />
          </div>
          <h2 className="text-[20px] tracking-[0.2em] text-gray-700 mb-2">OUR STORY</h2>
          <div className="mb-4">
            <Image src="/assets/SVG/below-right.svg" alt="" width={160} height={10} />
          </div>
          <div className="w-full overflow-hidden">
            {renderSlides(true)}
          </div>
          {renderDots(true)}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-6">Awaken self-healing through the blend of science and timeless knowledge.</p>
   <button onClick={() => setOpenPopup(true)} className="bg-[#a44a1f] text-white px-8 py-3 rounded-full hover:bg-[#8a3d19] transition-colors">
        BOOK YOUR STAY
      </button>

      <PopupForm
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
        </div>
      </section>
    </div>
  );
}