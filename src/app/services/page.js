"use client";

import PageBanner from "@/components/PageBanner";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import therapiesData from "./therapies.json";
import treatmentsData from "./treatments.json";
import Image from "next/image";
export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("therapies");
  // 1. New state to control number of visible cards (start with 6)
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      once: true,
      offset: 80,
      delay: 0,
      mirror: false,
    });
  }, []);

  // 2. Reset the visible count back to 6 whenever the tab changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab]);

  const allCards = activeTab === "therapies" ? therapiesData : treatmentsData;
  
  // 3. Slice the data to show only the visible count
  const displayCards = allCards.slice(0, visibleCount);

  // 4. Function to handle "View More" click
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); // Load 6 more cards
  };

  return (
    <>
      <div className="mt-[69px] sm:mt-[72px] md:mt-[80px] lg:mt-[88px]">
        <PageBanner
          title="Services"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: activeTab === "therapies" ? "Therapies" : "Treatments", href: "/services" },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      {/* Tab Buttons */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex justify-center gap-4 mb-12" data-aos="fade-up">
          <button
            onClick={() => setActiveTab("therapies")}
            className={`px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              activeTab === "therapies"
                ? "call-btn"
                : "bg-transparent border-2 border-[var(--brand-brown)] text-[var(--brand-brown)] hover:bg-[var(--brand-brown)] hover:text-white"
            }`}
          >
            THERAPIES
          </button>
          <button
            onClick={() => setActiveTab("treatments")}
            className={`px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              activeTab === "treatments"
                ? "call-btn"
                : "bg-transparent border-2 border-[var(--brand-brown)] text-[var(--brand-brown)] hover:bg-[var(--brand-brown)] hover:text-white"
            }`}
          >
            TREATMENTS
          </button>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          {displayCards.map((card, index) => (
            <div
              key={card.id}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden p-4">
                <Image
                  src={`/assets/${card.imageName}`}
                  alt={card.name}
                  height={60} width={80} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-[20px]"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                  {card.name}
                </h3>
                <p className="text-gray-600 mb-6 para line-clamp-3">
                  {card.description}
                </p>

                {/* View More Button (Card Level) */}
                <a
                  href={`/services/${card.slug}`}
                  className="inline-block px-6 py-2.5 border-2 border-[var(--brand-brown)] text-[var(--brand-brown)] rounded-full text-sm font-medium hover:bg-[var(--brand-brown)] hover:text-white transition-all duration-300"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Global View More Button - Only show if there are more cards to display */}
        {visibleCount < allCards.length && (
          <div className="flex justify-center mt-12" data-aos="fade-up">
            <button 
              onClick={handleViewMore}
              className="call-btn px-10 py-3 text-base cursor-pointer hover:shadow-lg transition-all"
            >
              VIEW MORE
            </button>
          </div>
        )}
      </div>
    </>
  );
}