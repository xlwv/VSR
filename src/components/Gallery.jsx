"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Gallery = ({ images = [], initialVisible = 6 }) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  // Check if all images are visible
  const allImagesVisible = visibleCount >= images.length;

  // Handle VIEW MORE click
  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, images.length));
  };

  useEffect(() => {
    // 1. Initialize Fancybox
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: {
        type: "modern",
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "thumbs", "close"],
        },
      },
    });

    // 2. GSAP Animations
    const ctx = gsap.context(() => {
      // Stagger Animate Images
      // Filter out null refs in case images array is smaller than ref array
      const validImageRefs = imagesRef.current.filter(el => el !== null);
      
      if (validImageRefs.length > 0) {
        gsap.from(validImageRefs, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        });
      }
    }, containerRef);

    // Cleanup
    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
      Fancybox.close();
      ctx.revert();
    };
  }, [visibleCount]); // Re-run when visible count changes

  // Get only visible images
  const visibleImages = images.slice(0, visibleCount);

  return (
    <section ref={containerRef} className="py-4 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-[1rem] cursor-pointer"
            >
              <a 
                href={img.src}
                data-fancybox="gallery"
                data-caption={img.alt}
                className="block w-full h-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                
                {/* Optional Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View More Button - Only show if there are more images */}
        {!allImagesVisible && (
          <div className="text-center">
            <Button 
              text="VIEW MORE" 
              variant="primary" 
              onClick={handleViewMore}
              className="px-8 py-3 text-sm tracking-wider uppercase" 
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;