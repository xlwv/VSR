"use client";
import { useState } from "react";
import Image from "next/image";

const locations = [
  { title: "The Outer Ring Road", content: "50 km from the International Airport" },
  { title: "Airport", content: "50 km from the International Airport" },
  { title: "BITS Pilani", content: "30 km from Hyderabad" },
  { title: "Secunderabad Club", content: "22 km from the Airport" },
  { title: "Hyderabad city", content: "30 km from BITS Pilani" },
];

export default function LocationHighlights() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 md:py-22 bg-white">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl text-[#0F1E3A]">
            Location Highlights
          </h2>

          <Image
            src="/assets/SVG/below.svg"
            width={320}
            height={10}
            alt=""
            className="mx-auto mt-3"
          />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
                        gap-8 md:gap-10 lg:gap-20 items-stretch">

          {/* Accordion */}
          <div className="rounded-2xl overflow-hidden border border-[#e4c9b9] 
                          md:shadow-sm">

            {locations.map((item, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className={`border-b border-[#e4c9b9] last:border-none transition-all duration-300 ${
                    isOpen ? "bg-white" : "bg-[#f7efe9]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between 
                               px-5 md:px-6 py-4 md:py-5 text-left"
                  >
                    <span className="text-[16px] md:text-[17px] lg:text-[18px] 
                                     text-[#5a5a5a] font-medium">
                      {item.title}
                    </span>

                    <span className="text-[20px] md:text-[22px] text-[#9c3f22]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 
                                    text-[15px] md:text-[16px] 
                                    text-[#777] bg-white">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md h-full">

            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=VSR%20Vriksha%20Nature%20Cure%20Centre&output=embed"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
