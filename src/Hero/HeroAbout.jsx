"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const HeroAbout = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const loadVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <div className="bg2">
        <section className="container py-8 flex flex-wrap justify-center text-center">
          <div className="w-full md:w-[45%] grid-rows-3 flex md:grid-rows-6 justify-around py-5">
            <div>
              <h3 className="home-stat">3000+</h3>
              <p className="text-[#646464] para">Clients Served</p>
            </div>
            <div>
              <h3 className="home-stat">84000+</h3>
              <p className="text-[#646464] para">Therapies Delivered</p>
            </div>
          </div>
          <div className="w-full md:w-[45%] grid-rows-3 flex md:grid-rows-6 justify-around py-5">
            <div>
              <h3 className="home-stat">70+</h3>
              <p className="text-[#646464] para">Ailments Cured</p>
            </div>
            <div>
              <h3 className="home-stat">200+</h3>
              <p className="text-[#646464] para">Global Clientele</p>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          {/* Main Grid Setup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:gap-y-6">
            
            {/* 1. Header Section (Label & Title) */}
            <div className="order-1 lg:col-start-1 lg:row-start-1 space-y-6">
              <div className="inline-block">
                <h3 className="uppercase tracking-wider text-gray-600 mb-2">
                  ABOUT
                </h3>
                <Image
                  src="/assets/SVG/below-right.svg"
                  alt=""
                  width={100}
                  height={10}
                  className="w-20"
                />
              </div>

              <h2 className="text-[#9c3f1a] leading-tight">
                VSR Vriksha Nature Cure Center
              </h2>
            </div>

            {/* 2. Video Section */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center relative">
              <div className="relative yt-frame rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200">
                {!videoLoaded ? (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={loadVideo}
                  >
                    <Image
                      src="/assets/thumbnail.png"
                      alt="The Story of Hyderabad's Most Premium Naturopathy Retreat"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center yt justify-center">
                      <Image
                        src="/assets/SVG/youtube.svg"
                        height={40}
                        width={60}
                        alt="yt placeholder"
                      />
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/8AySEJc0two?si=nzOf3DrPvuqoegMS&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>
            </div>

            {/* 3. Text Content & Button Section */}
            <div className="order-3 lg:col-start-1 lg:row-start-2 space-y-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="para">
                  VSR Vriksha, a unit of Vangala Sanjeeva Reddy Foundation, is an integrated residential wellness center with all facilities and latest equipment that offers holistic health care services in Naturopathy, Physiotherapy, Yoga, and Meditation.
                </p>
                <p className="para">
                  We firmly believe in the healing power of nature and provide personalized care to help guests achieve a harmonious balance between mind, body, and spirit. The therapies, meals, and daily routine are carefully curated to promote natural healing and rejuvenation, enabling guests to emerge healed and revitalized.
                </p>
              </div>

              <div>
                <Button text="KNOW MORE" variant="primary" href="/about" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;