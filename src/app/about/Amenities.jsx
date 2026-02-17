"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";

const amenities = [
  { title: "12 acres across 50 acres of farmland", icon: "/assets/clubhouse.png" },
  { title: "Tranquil residential nature cure centre", icon: "/assets/house.png" },
  { title: "Latest equipment for treatment", icon: "/assets/treatment.png" },
  { title: "Traditional yoga and meditation hall", icon: "/assets/yoga.png" },
  { title: "Personalized care customized treatment", icon: "/assets/care.png" },
  { title: "Stay in super-deluxe rooms", icon: "/assets/stay.png" },
  { title: "Organic fruits and vegetables as part of your diet", icon: "/assets/organic.png" },
  { title: "Swimming pool", icon: "/assets/pool.png" },
];

export default function Amenities() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif mb-2">
          A Serene Retreat For A Wholesome Experience
        </h2>

        <p className="para text-[#404041] mt-8 mb-4">
          Relish the Boundless Amenities
        </p>

        <Image
          src="/assets/SVG/below.svg"
          alt="Decorative line"
          width={279}
          height={60}
          className="mx-auto"
        />

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-14 mt-12">
          {(expanded ? amenities : amenities.slice(0, 8)).map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[88px] h-[88px] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={88}
                  height={88}
                  className="object-contain"
                />
              </div>

              <p className="mt-4 para text-gray-600 max-w-[260px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {!expanded && amenities.length > 8 && (
          <div className="mt-12">
            <Button
              text="VIEW MORE"
              variant="primary"
              onClick={() => setExpanded(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
}