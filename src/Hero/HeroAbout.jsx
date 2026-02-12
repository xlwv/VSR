"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const HeroAbout = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const loadVideo = () => {
    setVideoLoaded(true);
  };
    return (
        <>
        <div className="bg2">
        <section className="container py-8 flex flex-wrap  justify-center text-center">
            <div className="w-full md:w-[45%] grid-rows-3 flex md:grid-rows-6 justify-around py-5">
            <div >
                <h3 className="text-4xl home-stat">3000+</h3>
                <p className="text-[#646464] para">Clients Served</p>
            </div>
            <div>
                <h3 className="text-4xl home-stat">84000+</h3>
                <p className="text-[#646464] para">Therapies Delivered</p>
            </div>
            </div>
            <div className="w-full md:w-[45%] grid-rows-3 flex md:grid-rows-6 justify-around py-5">
            <div>
                <h3 className="text-4xl home-stat">70+</h3>
                <p className="text-[#646464] para">Ailments Cured</p>
            </div>
            <div>
                <h3 className="text-4xl home-stat">200+</h3>
                <p className="text-[#646464] para">Global Clientele</p>
            </div>
            </div>
        </section>
        </div>
        
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* About Label with Underline SVG */}
            <div className="inline-block">
              <h3 className="text-xl md:text-2xl uppercase tracking-wider text-gray-600 mb-2">
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

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#9c3f1a] leading-tight">
              VSR Vriksha Nature Cure Center
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="para">
                VSR Vriksha, a unit of Vangala Sanjeeva Reddy Foundation, is an integrated residential wellness center with all facilities and latest equipment that offers holistic health care services in Naturopathy, Physiotherapy, Yoga, and Meditation.
              </p>
              <p className="para">
                We firmly believe in the healing power of nature and provide personalized care to help guests achieve a harmonious balance between mind, body, and spirit. The therapies, meals, and daily routine are carefully curated to promote natural healing and rejuvenation, enabling guests to emerge healed and revitalized.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link href="/about">
              <button className="call-btn">
                KNOW MORE
              </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="relative yt-frame rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200">
              {!videoLoaded ? (
                // Video Thumbnail with Play Button (before click)
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={loadVideo}
                >
                  {/* YouTube Thumbnail - High Quality */}
                  <Image 
                    src="https://img.youtube.com/vi/8AySEJc0two/maxresdefault.jpg"
                    alt="The Story of Hyderabad's Most Premium Naturopathy Retreat"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center yt justify-center">
                   <Image src="/assets/SVG/youtube.svg" height={40} width={60}  alt="yt placeholder" />
                  </div>                  
                </div>
              ) : (
                // Actual YouTube iframe (after click)
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

        </div>
      </div>
    </section>
        </>
        );
    };

export default HeroAbout;
