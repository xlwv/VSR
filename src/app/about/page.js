"use client";

import PageBanner from "@/components/PageBanner";
import ScrollStory from "@/components/ScrollStory";
import Image from 'next/image';
import Amenities from "./Amenities";
import HolisticTreatments from "@/components/HolisticTreatments";
import Rejuvenation from "@/components/Rejuvenation";
import LocationHighlights from "./LocationHighlights";

export default function Page() {
  const aboutSlides = [
    {
      image: "/assets/g5.webp",
      imageAlt: "Nature and wellness",
      imageTitle: "",
      imageDescription: "",
      paragraphs: [
        "Our story began with a quiet but powerful idea; that healing should feel natural, gentle, and deeply personal.",
        "After visiting several naturopathy centres across the country, our Chairperson, Mr. Vangala Sanjeeva Reddy, was moved by the transformative impact of nature-based healing. He envisioned creating a similar wellness retreat in Hyderabad.",
        "Telangana's first premium residential naturopathy retreat, a sanctuary to escape and restore wellbeing."
      ]
    },
    {
      image: "/assets/g12.webp",
      imageAlt: "Mental wellness",
      imageTitle: "",
      imageDescription: "",
      paragraphs: [
        "What started as a dream has now touched the lives of over 3,000 guests. Watching them find relief from long-standing health concerns continues to remind us why we began this journey.",
        "VSR Vriksha was designed as a retreat that carries the calm elegance of a boutique resort while offering the depth of a wellness centre. Nourishing meals, mindful routines, and thoughtfully curated therapies work in harmony with the tranquil surroundings."
      ]
    },
    {
      image: "/assets/hero.webp",
      imageAlt: "Physical wellbeing",
      imageTitle: "",
      imageDescription: "",
      paragraphs: [
        "Our story is still unfolding, and with each passing year it grows richer.",
        "Every guest who leaves feeling lighter, healthier, and more at peace becomes part of the journey we are building. We aspire to reach more people and continue refining a space where natural healing can thrive.",
        "As we look toward the future, we invite more people to walk this path with us and become part of a story that is rooted in care, compassion, and the enduring power of nature."
      ]
    }
  ];

  return (
    <main>
      <div className="pt-[70px]">
        <PageBanner
          title="About Us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      <ScrollStory
        slides={aboutSlides}
        layoutType="default"
        backgroundColor="#ffffff"
        heading="OUR STORY"
        imagePosition="left"
        imageTransition="vertical"
        decorativeImage="/assets/SVG/below-dark-half.svg"
        decorativeImageMobile="/assets/SVG/below-dark-half.svg"
        dotActiveColor="#a44a1f"
        dotInactiveColor="#4a4a4a"
        textColor="#000000"
        headingClassName="text-[#d4af37]"
        contentClassName="text-black"
        ctaText="BOOK YOUR STAY"
        ctaDescription="Awaken self-healing through the blend of science and timeless knowledge."
        ctaLink="/booking"
      />

      {/*
        FIX: Removed `z-0` from this section and its children.
        Adding z-0 (or any z-index) to a non-static element creates a new stacking context,
        which traps any fixed-position descendants (like PopupForm) beneath it —
        even if the popup has a very high z-index. Removing z-0 lets the popup
        escape to the root stacking context where its z-index works correctly.
      */}
      <section className="relative w-full overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">

          {/* Image side */}
          <div className="relative w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-auto md:min-h-[460px]">
            <Image
              src="/assets/mission_vision.webp"
              alt="Girl silhouette with nature"
              fill
              priority
              className="object-cover object-[100%_center]"
            />
          </div>

          {/* Content side */}
          <div
            className="relative w-full md:w-1/2 flex items-center md:min-h-[460px]"
            style={{
              background: "linear-gradient(180deg, #EAEDDA 0%, #E6E7D7 100%)",
            }}
          >
            <div className="px-6 sm:px-8 md:pl-20 py-10 md:py-14 max-w-[520px]">

              <h3 className="sub-h2 font-serif text-[#2b2b2b]">Mission</h3>
              <Image
                src="/assets/SVG/below-right.svg"
                alt=""
                width={139}
                height={20}
                className="mt-2 mb-6"
              />
              <p className="para leading-[26px] sm:leading-[28px] text-[#555] mb-12 md:mb-14">
                To deliver a transformative healing and rejuvenation experience through ancient knowledge, natural therapies and advanced technology.
              </p>

              <h3 className="sub-h2 font-serif text-[#2b2b2b]">Vision</h3>
              <Image
                src="/assets/SVG/below-right.svg"
                alt=""
                width={139}
                height={20}
                className="mt-2 mb-6"
              />
              <p className="para leading-[26px] sm:leading-[28px] text-[#555]">
                To be Telangana's first-of-its-kind nature cure centre, providing exceptional holistic healing and care.
              </p>

            </div>
          </div>
        </div>
      </section>

      <Amenities />

      <HolisticTreatments
        mainTitle={
          <>
            A Centre For <br />
            Holistic Treatment & Natural Therapies
          </>
        }
        Description=""
        sections={[
          {
            title: "Holistic Health Treatments",
            description: "A practise focused on complete treatment, focusing on the mental, spiritual, physical, and emotional aspects of an individual.",
            image: "/assets/holistic_1.webp",
            href: "/services?tab=treatments",
          },
          {
            title: "Natural Therapies",
            description: "The use of natural elements and the power of nature through the latest technology and advanced equipment for therapeutic benefits.",
            image: "/assets/holistic_2.webp",
            href: "/services?tab=therapies",
          },
        ]}
      />

      <Rejuvenation />
      <LocationHighlights />
    </main>
  );
}