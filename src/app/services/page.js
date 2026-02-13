"use client";

import PageBanner from "@/components/PageBanner";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import therapiesData from "./therapies.json";
import treatmentsData from "./treatments.json";
import Image from "next/image";
import Button from "@/components/Button";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("therapies");
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

  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab]);

  const allCards = activeTab === "therapies" ? therapiesData : treatmentsData;
  const displayCards = allCards.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
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

      {/* Container Only */}
      <div className="container py-8 md:py-12">

        {/* Tabs */}
        <div className="flex justify-center gap-4 md:mb-12 mb-8" data-aos="fade-up">
          {/* Therapies Tab */}
          <button
            onClick={() => setActiveTab("therapies")}
            className={`para px-8 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              activeTab === "therapies"
                ? "bg-[var(--brand-brown)] text-white cursor-default pointer-events-none" // Active: no hover
                : "bg-[#A542201A] border-2 border-[var(--brand-brown)] text-[var(--brand-brown)] hover:bg-[var(--brand-brown)] hover:text-white" // Inactive: has hover
            }`}
          >
            THERAPIES
          </button>

          {/* Treatments Tab */}
          <button
            onClick={() => setActiveTab("treatments")}
            className={`para px-8 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              activeTab === "treatments"
                ? "bg-[var(--brand-brown)] text-white cursor-default pointer-events-none" // Active: no hover
                : "bg-[#A542201A] border-2 border-[var(--brand-brown)] text-[var(--brand-brown)] hover:bg-[var(--brand-brown)] hover:text-white" // Inactive: has hover
            }`}
          >
            TREATMENTS
          </button>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          data-aos="fade-up"
        >
          {displayCards.map((card, index) => (
            <div
              key={card.id}
              className="bg-[#A542201A] rounded-3xl card-serv overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-55 overflow-hidden p-4">
                <Image
                  src={`/assets/${card.imageName}`}
                  alt={card.name}
                  height={60}
                  width={80}
                  className="w-full h-full object-cover img-serv rounded-[20px]"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                  {card.name}
                </h3>

                <p className="text-gray-600 mb-6 para line-clamp-3">
                  {card.description}
                </p>

                {/* Use Button component with outline variant */}
                <Button
                  text="VIEW MORE"
                  variant="outline"
                  href={`/services/${card.slug}`}
                  size="sm"
                  className="!text-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Global View More */}
        {visibleCount < allCards.length && (
          <div className="flex justify-center mt-12" data-aos="fade-up">
            <Button
              text="VIEW MORE"
              variant="primary"
              onClick={handleViewMore}
              className="px-10 py-3 text-base"
            />
          </div>
        )}
      </div>
    </>
  );
}