"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

export default function ScrollStory({
  slides = [],
  backgroundColor = "white",
  sectionClassName = "",
  containerClassName = "",
  imageClassName = "",
  contentClassName = "",
  dotActiveColor = "#a44a1f",
  dotInactiveColor = "#e6b8a2",
  heading = "OUR STORY",
  headingClassName = "",
  decorativeImage = "/assets/SVG/below-right.svg",
  decorativeImageMobile = "/assets/stick.png",
  ctaText = "",
  ctaDescription = "",
  ctaLink = "",
  onCtaClick = null,
  imagePosition = "left",
  layoutType = "default",
  imageTransition = "horizontal",
  textColor = "#374151",
  showBulletPoints = false,
  bulletPoints = [],
}) {
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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
            setActive(Math.round(progress * (slides.length - 1)));
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
  }, [slides.length]);

  const handleDotClick = (index) => {
    if (isScrolling) return;
    setActive(index);
    setIsScrolling(true);
    if (wrapperRef.current) {
      const start = wrapperRef.current.offsetTop;
      const height = wrapperRef.current.offsetHeight - window.innerHeight;
      const target = start + (height / (slides.length - 1)) * index;
      window.scrollTo({ top: target, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const currentSlide = slides[active] || slides[0];

  const renderTextContent = (isMobile = false) => (
    <div
      className={`flex transition-transform duration-500 ease-out ${isMobile ? "w-full" : ""}`}
      style={{ transform: `translateX(-${active * 100}%)` }}
    >
      {slides.map((item, i) => (
        <div key={i} className={isMobile ? "w-full flex-shrink-0" : "min-w-full"}>
          {item.paragraphs?.map((para, idx) => (
            <p key={idx} className={`para mb-3 ${layoutType === "discover" ? "text-[#555]" : "text-gray-600 "}`}>
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
  );

  const renderDots = (isMobile = false) => (
    <div className={`flex gap-2 w-fit bg-[#f5f0ed] rounded-full p-3 ${isMobile ? "mt-8 justify-center" : "mt-12"}`}>
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => handleDotClick(i)}
          className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-10" : "w-2"}`}
          style={{ backgroundColor: i === active ? dotActiveColor : dotInactiveColor }}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  const renderImageSection = (isMobile = false) => {
    const imageWrapperClass = layoutType === "discover" 
      ? `${isMobile ? "w-full mb-6" : "w-[460px] flex-shrink-0"}` 
      : `${isMobile ? "w-full mb-6" : "w-[400px] flex-shrink-0"}`;

    const imageHeightClass = layoutType === "discover"
      ? `${isMobile ? "h-[280px]" : "h-[400px]"}`
      : `${isMobile ? "h-[240px]" : "h-[353px]"}`;

    return (
      <div className={imageWrapperClass}>
        <div className={`relative overflow-hidden rounded-[24px] ${imageHeightClass} ${imageClassName}`}>
          {imageTransition === "vertical" ? (
            // Fixed vertical image transition
            <div 
              className="relative w-full transition-transform duration-700 ease-out"
              style={{
                height: `${slides.length * 100}%`,
                transform: `translateY(-${(active / slides.length) * 100}%)`
              }}
            >
              {slides.map((slide, i) => (
                <div 
                  key={i} 
                  className="relative w-full"
                  style={{ height: `${100 / slides.length}%` }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt || heading}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            // Horizontal fade transition
            <Image
              src={currentSlide.image}
              alt={currentSlide.imageAlt || heading}
              fill
              priority
              className="object-cover transition-opacity duration-500"
            />
          )}
        </div>

        {(currentSlide.imageTitle || currentSlide.imageDescription) && (
          <div className="mt-4 px-1 h-[140px]">
            {currentSlide.imageTitle && (
              <h3 className={`font-semibold mb-2 ${layoutType === "discover" ? "text-[#A54220] text-[20px] sm:text-[24px] md:text-[28px]" : "text-gray-800"}`}>
                {currentSlide.imageTitle}
              </h3>
            )}
            {currentSlide.imageDescription && (
              <p className="text-gray-600 para text-[16px] sm:text-[18px] md:text-[20px]">
                {currentSlide.imageDescription}
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderDiscoverContent = () => (
    <div className="relative rounded-[32px] p-12 pl-4 max-w-[480px]">
      <div 
        className="bg-[#f5f0ed]" 
        style={{ 
          height: '370px', 
          width: '140px', 
          borderRadius: '25px', 
          color: 'rgba(160, 61, 19, 0.08)' 
        }}
      ></div>

      <div className="absolute" style={{ top: '100px', left: '70px', width: '500px' }}>
        <h2 
          className={`font-serif mb-8 tracking-wider ${headingClassName}`} 
          style={{ color: textColor }}
        >
          {heading}
        </h2>
        <ul className="space-y-6">
          {bulletPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <h3>
                <span className="text-[#A54220] text-xl mt-1">•</span>
                <span className="text-[#2b2b2b] tracking-wide uppercase pl-5 font-light md:text-[16px] lg:text-[18px] xl:text-[20px]">
                  {point}
                </span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
      {renderDots()}
    </div>
  );

  const renderCtaButton = () => {
    return (
      <Button
        text={ctaText}
        href={ctaLink}
        onClick={onCtaClick}
        variant="primary"
        className="!bg-[#a44a1f] !px-8 !py-3 hover:!bg-[#8a3d19]"
      />
    );
  };

  if (layoutType === "discover") {
    return (
      <div ref={wrapperRef} className="h-[200vh]" style={{ backgroundColor }}>
        <section
          className={`sticky top-0 container mx-auto py-12 md:py-14 lg:py-20 xl:py-18 min-h-screen flex flex-col justify-center ${sectionClassName}`}
        >
          <div className={`hidden lg:flex items-end flex-row gap-16 ${containerClassName} justify-between`}>
            {showBulletPoints ? renderDiscoverContent() : (
              <div className={`max-w-xl flex-1 ${contentClassName}`}>
                <h2 className={`tracking-[0.2em] mb-2 ${headingClassName}`} style={{ color: textColor }}>
                  {heading}
                </h2>
                <div className="mb-6">
                  <Image src={decorativeImage} alt="" width={200} height={12} />
                </div>
                {renderTextContent()}
                {renderDots()}
              </div>
            )}
            {renderImageSection()}
          </div>

          <div className="lg:hidden">
            {renderImageSection(true)}
            {showBulletPoints ? (
              <div className="bg-[#f5f0ed] rounded-[24px] p-6 resp">
                <h2 className={`font-serif mb-3 ${headingClassName}`} style={{ color: textColor }}>
                  {heading}
                </h2>
                <ul className="space-y-4 mb-6">
                  <h3>
                    {bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#A54220]">•</span>
                        <span className="text-[#2b2b2b]">{point}</span>
                      </li>
                    ))}
                  </h3>
                </ul>
                {renderDots(true)}
              </div>
            ) : (
              <>
                <h3 className={`tracking-[0.2em] mb-2 ${headingClassName}`} style={{ color: textColor }}>
                  {heading}
                </h3>
                <div className="mb-4">
                  <Image src={decorativeImageMobile} alt="" width={160} height={10} />
                </div>
                <div className="w-full overflow-hidden">{renderTextContent(true)}</div>
                {renderDots(true)}
              </>
            )}
          </div>

          {(ctaText || ctaDescription) && (
            <div className="text-center mt-6 md:mt-8 lg:mt-10">
              {ctaDescription && <p className="text-gray-500 mb-4 md:mb-5 para">{ctaDescription}</p>}
              {ctaText && renderCtaButton()}
            </div>
          )}
        </section>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="h-[150vh]">
      <section
        className={`sticky top-0 max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-10 lg:py-12 xl:py-14 min-h-screen flex flex-col justify-center ${sectionClassName}`}
        style={{ backgroundColor }}
      >
        <div className={`hidden lg:flex items-start ${imagePosition === "right" ? "flex-row-reverse" : ""} gap-16 overflow-hidden ${containerClassName}`}>
          {renderImageSection()}
          
          <div className={`max-w-xl flex-1 overflow-hidden mt-4 ${contentClassName}`}>
            <h3 className={`tracking-[0.2em] mb-2 ${headingClassName}`} style={{ color: textColor }}>
              {heading}
            </h3>
            <div className="mb-6">
              <Image src={decorativeImage} alt="" width={200} height={12} />
            </div>
            {renderTextContent()}
            {renderDots()}
          </div>
        </div>

        <div className="lg:hidden">
          {renderImageSection(true)}
          
          <h3 className={`tracking-[0.2em] mb-2 ${headingClassName}`} style={{ color: textColor }}>
            {heading}
          </h3>
          <div className="mb-4">
            <Image src={decorativeImageMobile} alt="" width={160} height={10} />
          </div>

          <div className="w-full overflow-hidden">{renderTextContent(true)}</div>
          {renderDots(true)}
        </div>

        {(ctaText || ctaDescription) && (
          <div className="text-center mt-6 md:mt-8 lg:mt-10">
            {ctaDescription && <p className="text-gray-500 mb-4 md:mb-5 para">{ctaDescription}</p>}
            {ctaText && renderCtaButton()}
          </div>
        )}
      </section>
    </div>
  );
}