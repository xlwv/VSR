"use client";

import Image from "next/image";
import { useState } from "react";

const amenities = [
  { title: "12 acres across 50 acres of farmland", icon: "/assets/clubhouse.png" },
  { title: "Tranquil residential nature cure centre", icon: "/assets/clubhouse.png" },
  { title: "Latest equipment for treatment", icon: "/assets/clubhouse.png" },
  { title: "Traditional yoga and meditation hall", icon: "/assets/clubhouse.png" },
  { title: "Personalized care customized treatment", icon: "/assets/clubhouse.png" },
  { title: "Stay in super-deluxe rooms", icon: "/assets/clubhouse.png" },
  { title: "Organic fruits and vegetables as part of your diet", icon: "/assets/clubhouse.png" },
  { title: "Swimming pool", icon: "/assets/clubhouse.png" },
    { title: "Personalized care customized treatment", icon: "/assets/clubhouse.png" },
  { title: "Stay in super-deluxe rooms", icon: "/assets/clubhouse.png" },
  { title: "Organic fruits and vegetables as part of your diet", icon: "/assets/clubhouse.png" },
  { title: "Swimming pool", icon: "/assets/clubhouse.png" },
];

export default function Amenities() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-2">
          A Serene Retreat For A Wholesome Experience
        </h2>
       <p className="text-[18px] text-[#404041] mt-8 mb-4">Relish the Boundless Amenities</p>
<Image
  src="/assets/SVG/below.svg"
  alt="Decorative line"
  width={279}
  height={60}
  className="mx-auto"
 />
       <div
  className={`
    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-14
    transition-all duration-500 mt-8
    ${expanded ? "max-h-[1000px]" : "max-h-[380px]"}
    overflow-y-scroll hide-scroll
  `}
>
          {amenities.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[88px] h-[88px]  flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={112}
                  height={112}
                />
              </div>
              <p className="mt-4 text-[18] text-gray-600 max-w-[310px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-12 px-8 py-2 rounded-full bg-[#A54220] text-white text-sm tracking-wide hover:bg-orange-800"
          >
            VIEW MORE
          </button>
        )}
      </div>
    </section>
  );
}
