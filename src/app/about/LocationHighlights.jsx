"use client";
import { useState } from "react";
import Image from "next/image";

const locations = [
  {
    title: "The Outer Ring Road",
    content: "50 km from the International Airport",
  },
  {
    title: "Airport",
    content: "50 km from the International Airport",
  },
  {
    title: "BITS Pilani",
    content: "30 km from Hyderabad",
  },
  {
    title: "Secunderabad Club",
    content: "22 km from the Airport",
  },
  {
    title: "Hyderabad city",
    content: "30 km from BITS Pilani",
  },
];

export default function LocationHighlights() {
  const [open, setOpen] = useState(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-[#0F1E3A]">
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

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Accordion */}
          <div className="rounded-2xl overflow-hidden border border-[#e4c9b9]">

            {locations.map((item, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className={`border-b border-[#e4c9b9] last:border-none ${
                    isOpen ? "bg-white" : "bg-[#f7efe9]"
                  }`}
                >
                  {/* Title */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-[18px] text-[#5a5a5a] font-medium">
                      {item.title}
                    </span>
                    <span className="text-[22px] text-[#9c3f22]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 text-[16px] text-[#777] bg-white">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm h-[350px]">
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
