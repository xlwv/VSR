"use client";

import Image from "next/image";
import MoreTreatments from "@/components/BlogComponents/MoreTreatments";
import Button from "@/components/Button";
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
    <section className="bg-white py-10 md:py-20" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ===== PAGE TITLE ===== */}
        <h1 className="font-heading text-[24px] sm:text-[30px] md:text-[40px] leading-tight mb-8 md:mb-12">
          {data.title}
        </h1>

        {/* ===== INTRO SECTION ===== */}
        <div className="mb-12 md:mb-16 [&_a]:text-[var(--brand-brown)] [&_a]:underline overflow-hidden">

          {/* Image — floated left so text wraps around it */}
          <div className="relative float-left mr-6 mb-4 md:mr-8 md:mb-6 w-full sm:w-2/5 md:w-1/3 aspect-5/6 overflow-hidden rounded-2xl lg:max-h-[450px]">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 40vw, 33vw"
              className="object-cover object-center"
            />
          </div>

          {/* Intro Text — wraps around the floated image */}
          <p
            className="para! font-body text-[16px] md:text-[18px] font-normal leading-[1.9] text-[#333] "
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: data.intro }}
          />
        </div>

        {/* ===== CONTENT SECTIONS ===== */}
        <div className="space-y-10 md:space-y-14 [&_a]:text-[var(--brand-brown)] [&_a]:underline">
          {data.sections.map((section) => (
            <div key={section.heading}>

              <h2 className="font-heading text-[22px] sm:text-[26px] md:text-[35px] leading-tight mb-2 md:mb-4">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIndex) => (
                <p
                  key={`${section.heading}-${pIndex}`}
                  className="font-body text-[16px] md:text-[18px] para! font-normal leading-[1.9] text-[#333]"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Button text="Back to Blogs" variant="primary" className="!text-white !no-underline  " href="/blog" size="md" />
        </div>

        {/* ===== MORE TREATMENTS ===== */}
        <div data-aos="fade-up">
          <MoreTreatments blogs={data.allBlogs} linkPath="blog" />
        </div>

      </div>
    </section>
  );
};

export default IndividualBlogStructure;