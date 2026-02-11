"use client";

import { useState } from "react";
import Image from "next/image";
import PopupForm from "./PopupForm";

const images = [
  { src: "/assets/circle2.webp", className: "col-start-4 row-start-1 -translate-y-12" },
  { src: "/assets/circle1.webp", className: "col-start-2 row-start-1 -translate-y-4" },
  { src: "/assets/circle6.webp", className: "col-start-1 row-start-2 -translate-x-16" },
  { src: "/assets/circle3.webp", className: "col-start-5 row-start-2 translate-x-16" },
  { src: "/assets/circle4.webp", className: "col-start-4 row-start-3 translate-y-6" },
  { src: "/assets/circle5.webp", className: "col-start-2 row-start-3 -translate-y-6" },
];

export default function RejuvenationGrid() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <section className="relative min-h-[900px] bg-gradient-to-b from-white to-[#f4e4db] flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl w-full px-6">

        {/* DESKTOP */}
        <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center text-center z-10 pointer-events-none">
          <h2 className="text-4xl font-serif text-[#0F1E3A] leading-snug">
            Step into a journey that redefines <br /> Rejuvenation.
          </h2>

          <button
            onClick={() => setOpenPopup(true)}
            className="pointer-events-auto mt-6 px-7 py-2.5 rounded-full bg-[#9c3f22] text-white text-sm tracking-wide hover:opacity-90 transition"
          >
            BOOK YOUR STAY
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-5 grid-rows-3 gap-10">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative w-[220px] h-[140px] rounded-2xl overflow-hidden shadow-lg ${img.className}`}
            >
              <Image src={img.src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0F1E3A] leading-snug">
            Step into a journey that redefines <br /> Rejuvenation.
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-[140px] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image src={img.src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

          <button
            onClick={() => setOpenPopup(true)}
            className="mt-4 px-6 py-2 rounded-full bg-[#9c3f22] text-white text-sm tracking-wide hover:opacity-90 transition"
          >
            BOOK YOUR STAY
          </button>
        </div>

        {/* POPUP FORM (ONLY ONCE) */}
        <PopupForm
          isOpen={openPopup}
          onClose={() => setOpenPopup(false)}
        />
      </div>
    </section>
  );
}
