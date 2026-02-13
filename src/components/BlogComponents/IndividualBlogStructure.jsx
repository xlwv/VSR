"use client";

import Image from "next/image";
import Link from "next/link";
import MoreTreatments from "@/components/BlogComponents/MoreTreatments";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IndividualBlogStructure = ({ data }) => {
  if (!data) return null;

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-sine",
      once: true,
      offset: 40,
      delay: 50,
    });
  }, []);

  return (
    <section className="bg-white py-10 md:py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ===== PAGE TITLE ===== */}
        <h1 className="font-heading text-[24px] sm:text-[30px] md:text-[40px] leading-tight mb-8 md:mb-12">
          {data.title}
        </h1>

        {/* ===== INTRO SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-8 md:gap-12 mb-12 md:mb-16 items-start">
          
          {/* Image */}
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Intro Text + Back Button */}
          <div>
            <p
              className="para! font-body text-[15px] sm:text-[16px] font-normal leading-[1.9] text-[#333]"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{ __html: data.intro }}
            />

            <div className="mt-4 flex justify-end">
              <Link
                href="/blogs"
                className="para inline-flex items-center gap-2 rounded-full bg-[#A54220] px-5 py-2 text-sm text-white hover:bg-[#8e3d1b] transition whitespace-nowrap"
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
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* ===== CONTENT SECTIONS ===== */}
        <div className="space-y-10 md:space-y-14">
          {data.sections.map((section) => (
            <div key={section.heading}>

              <h2 className="font-heading text-[22px] sm:text-[26px] md:text-[35px] leading-tight mb-4 md:mb-6">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIndex) => (
                <p
                  key={`${section.heading}-${pIndex}`}
                  className="para! mb-5 font-body text-[15px] sm:text-[16px] font-normal leading-[1.9] text-[#333]"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* ===== MORE TREATMENTS ===== */}
        <div data-aos="fade-up">
          <MoreTreatments blogs={data.allBlogs} />
        </div>

      </div>
    </section>
  );
};

export default IndividualBlogStructure;