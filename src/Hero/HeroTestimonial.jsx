"use client";

import { useState } from "react";
import Image from "next/image";

// 1. Sub-component for Video Logic
const VideoCard = ({ videoUrl, thumbnail }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full">
      <div className="relative yt-frame rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200">
        {!videoLoaded ? (
          // Video Thumbnail with Play Button (before click)
          <div 
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setVideoLoaded(true)}
          >
            <Image 
              src={thumbnail}
              alt="Testimonial Thumbnail"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center yt justify-center">
              <Image src="/assets/SVG/youtube.svg" height={40} width={60} alt="Play Video" />
            </div>                  
          </div>
        ) : (
          // Actual YouTube iframe (after click)
          <iframe 
            width="100%" 
            height="100%" 
            src={`${videoUrl}?autoplay=1`}
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
  );
};

// 2. Main Component
const HeroTestimonial = ({ 
  title = "What Our Clients Think About Us",
  description = "The results and our client testimonials speak volumes of our efforts in paving the way towards an illustrious legacy",
  testimonials = []
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonialsPerView = 3;
  // Ensure we don't have 0 slides to avoid division by zero errors
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView) || 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerView,
    (currentIndex + 1) * testimonialsPerView
  );

  // If no testimonials are passed, you might want to hide the section or show a placeholder
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#FAF5F3]"> {/* Added a light bg for contrast */}
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#9c3f1a]">
            {title}
          </h2>
          
          {/* Underline SVG */}
          <div className="flex justify-center mb-6">
            <Image 
              src="/assets/SVG/below.svg"
              alt="Underline decoration"
              width={200}
              height={20}
              className="w-48"
            />
          </div>

          <p className="max-w-3xl mx-auto para text-gray-600">
            {description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-4">
              <VideoCard 
                videoUrl={testimonial.videoUrl} 
                thumbnail={testimonial.thumbnail} 
              />
              {/* Client name */}
              {testimonial.name && (
                <h4 className="text-center text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h4>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Controls (Only show if there are multiple slides) */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#9c3f1a] hover:bg-[#7f3214] flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous testimonials"
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
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'w-8 bg-[#9c3f1a]' 
                      : 'w-2 bg-gray-300 hover:bg-[#9c3f1a]/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#9c3f1a] hover:bg-[#7f3214] flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next testimonials"
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
        )}
      </div>
    </section>
  );
};

export default HeroTestimonial;