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
    <section className="py-16 md:py-14 bg-[#FAF5F3]"> {/* Added a light bg for contrast */}
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="para1 text-3xl md:text-4xl lg:text-3xl mb-4 text-[#1A1A1A]">
            {title}
          </h2>
          
          {/* Underline SVG */}
          <div className="flex justify-center mb-6">
            <svg width="200" height="19" viewBox="0 0 280 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8758 6.73622C25.8529 8.89154 24.7768 11.0469 24.6907 13.7195C24.6907 14.6678 24.906 15.0558 25.939 14.9696C30.2862 14.754 33.6864 12.0814 34.7194 7.81388C34.9777 6.82243 35.365 6.65 36.2259 6.6931C37.388 6.73621 139.755 6.6931 139.755 6.6931L139.751 6.01294L139.755 4.53778C139.755 4.53778 26.7998 4.14984 20.3435 4.75333C13.3278 5.35682 7.86151 11.8228 7.90455 18.8491C7.90455 19.7544 8.1628 20.013 9.06667 20.013C15.7812 20.013 21.7639 15.1851 23.0121 8.5036C23.2704 7.03798 23.7008 6.43446 25.2072 6.6931C25.939 6.82242 26.7137 6.6931 27.8328 6.6931M11.1757 17.6421C9.97054 17.7715 10.3149 16.9956 10.401 16.4352C11.0896 11.909 15.609 7.51214 20.1283 6.90865C20.817 6.82244 21.2044 6.86552 21.0322 7.59833C20.8601 11.909 15.5659 17.2111 11.1757 17.5991L11.1757 17.6421ZM27.5745 12.5125C26.9289 12.5125 27.058 12.1676 27.1441 11.7797C27.4885 9.92609 30.114 7.33971 31.9217 7.03796C32.2661 6.99486 32.6965 6.82243 32.6104 7.51214C32.6104 9.19329 29.2531 12.5125 27.5745 12.5125Z" fill="#A03D13"/>
            <path d="M6.97868 6.98408C9.60421 6.89787 11.7563 6.03576 13.6071 4.31151C14.2527 3.75112 14.2527 3.27695 13.6071 2.63036C10.1638 -0.947478 3.66448 -0.861261 0.350283 2.80279C-0.209257 3.44938 -0.0370887 3.708 0.436368 4.22528C2.28715 6.03575 4.48227 6.89787 6.93563 6.98408M3.23407 3.40627C5.81656 1.68202 8.61425 1.68201 10.9815 3.53559C8.1408 5.25985 5.25702 5.17364 3.23407 3.40627Z" fill="#A03D13"/>
            <path d="M251.635 6.72938C253.658 8.8847 254.734 11.04 254.82 13.7126C254.82 14.661 254.605 15.0489 253.572 14.9627C249.225 14.7472 245.824 12.0746 244.791 7.80704C244.533 6.81559 244.146 6.64316 243.285 6.68627C242.123 6.72937 139.755 6.68627 139.755 6.68627L139.76 6.0061L139.755 4.53094C139.755 4.53094 252.711 4.143 259.167 4.74649C266.183 5.34998 271.649 11.8159 271.606 18.8423C271.606 19.7475 271.348 20.0062 270.444 20.0062C263.73 20.0062 257.747 15.1783 256.499 8.49676C256.24 7.03115 255.81 6.42763 254.303 6.68627C253.572 6.81559 252.797 6.68627 251.678 6.68627M268.335 17.6353C269.54 17.7646 269.196 16.9887 269.11 16.4283C268.421 11.9022 263.902 7.5053 259.382 6.90181C258.694 6.8156 258.306 6.85869 258.479 7.5915C258.651 11.9021 263.945 17.2043 268.335 17.5922L268.335 17.6353ZM251.936 12.5057C252.582 12.5057 252.453 12.1608 252.367 11.7728C252.022 9.91925 249.397 7.33287 247.589 7.03113C247.245 6.98802 246.814 6.8156 246.9 7.5053C246.9 9.18645 250.258 12.5057 251.936 12.5057Z" fill="#A03D13"/>
            <path d="M272.037 6.99043C269.411 6.90422 267.259 6.04211 265.409 4.31785C264.763 3.75747 264.763 3.2833 265.409 2.6367C268.852 -0.94113 275.351 -0.854914 278.665 2.80913C279.225 3.45573 279.053 3.71435 278.579 4.23162C276.728 6.04209 274.533 6.90422 272.08 6.99043M275.782 3.41262C273.199 1.68836 270.401 1.68836 268.034 3.54194C270.875 5.26619 273.759 5.17999 275.782 3.41262Z" fill="#A03D13"/>
            </svg>

          </div>

          
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
              
            </div>
          ))}
        </div>

        {/* Navigation Controls (Only show if there are multiple slides) */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-11 h-10 rounded-full bg-[#9c3f1a] hover:bg-[#7f3214] flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous testimonials"
            >
              <svg 
                className="w-5 h-5 text-white" 
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
              className="w-11 h-10 rounded-full bg-[#9c3f1a] hover:bg-[#7f3214] flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next testimonials"
            >
              <svg 
                className="w-5 h-5 text-white" 
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