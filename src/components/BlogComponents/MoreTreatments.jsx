"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const MoreTreatments = ({ blogs = [], title = "More Treatments", linkPath = "services" }) => {

  useEffect(() => {
    console.log("MoreTreatments received blogs:", blogs);
    console.log("Total blogs count:", blogs.length);
  }, [blogs]);

  if (!blogs.length) {
    console.warn("⚠️ MoreTreatments: blogs array is empty");
    return null;
  }

  // 👉 Scroll exactly ONE card at a time
  const scrollByOneCard = (direction) => {
    const container = document.getElementById("more-treatments-scroll");
    if (!container) return;

    const firstCard = container.querySelector("a");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 24; // gap-6 = 24px

    container.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-14 md:mt-20">
      {/* ===== Header ===== */}
      <div className="mb-6 md:mb-1 flex items-center justify-between">
        <h2 className="font-heading  text-[22px] sm:text-[24px] md:text-[30px] leading-tight">
          {title}
        </h2>
        
        <div className="flex gap-3">
          {/* Left Arrow */}
          <button
            onClick={() => scrollByOneCard("left")}
            aria-label="Scroll left"
            className="flex h-9 w-9 items-center justify-center rounded-full m-1 ml-2 border border-[#A54220] text-[#A54220] hover:bg-[#A54220] hover:text-white transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollByOneCard("right")}
            aria-label="Scroll right"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A54220] text-[#A54220] m-1 hover:bg-[#A54220] hover:text-white transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <Image
          src="/assets/SVG/below-dark-half.svg"
          alt=""
          width={600}        // just for Next.js optimization
          height={20}        // just for aspect ratio
          className="
            mb-6
            w-[180px]
            sm:w-[220px]
            md:w-[60px]
            lg:w-[280px]
            h-auto
          "
        />



      {/* ===== Scroll Container ===== */}
      <div
        id="more-treatments-scroll"
        className="
          flex gap-6 pb-2
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          touch-pan-x
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/${linkPath}/${blog.slug}`}
            className="
              group flex-shrink-0
              w-full
              sm:w-[calc((100%-24px)/2)]
              lg:w-[calc((100%-48px)/3)]
              snap-start
            "
          >
            <div className="overflow-hidden bg-white">
              {/* Image */}
              <div
                className="
                  relative w-full overflow-hidden rounded-2xl
                  aspect-[5/6]
                "
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-swis font-body mt-3 !no-underline para text-[#333] leading-relaxed">
                {blog.title}

              </h3>
                              <span className="text-[#A54220]   text-lg ">Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoreTreatments;