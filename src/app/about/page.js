"use client";

import PageBanner from "@/components/PageBanner";
import ScrollStory from "@/components/ScrollStory";
import Image from 'next/image';
import Amenities from "./Amenities";
import HolisticTreatments from "@/components/HolisticTreatments";
import Rejuvenation from "@/components/Rejuvenation";
import LocationHighlights from "./LocationHighlights";

export default function Page() {
  // Define your story slides data
  const aboutSlides = [
    {
      image: "/assets/g5.jpg",
      imageAlt: "Nature and wellness",
      imageTitle: "",
      imageDescription: "",
      paragraphs: [
        "Our mental & physical well-being is under constant stress from the impact of modern-day lifestyles. The negative energy and health issues build up and eventually lead to severe disorders.",
        "This is essentially an imbalance within our body. And more often than not, it is the drastic change in our way of life and being disconnected from nature that is at the root of the myriad health issues."
      ]
    },
    {
      image: "/assets/g12.jpg",
      imageAlt: "Mental wellness",
      imageTitle: "",
      imageDescription: "",
      paragraphs: [
        "Our mental is under constant stress from the impact of modern-day lifestyles. The negative energy and health issues build up and eventually lead to severe disorders.",
        "This is essentially an imbalance within our body. And more often than not, it is the drastic change in our way of life and being disconnected from nature that is at the root of the myriad health issues."
      ]
    },
    {
      image: "/assets/hero.webp",
      imageAlt: "Physical wellbeing",
      imageTitle: "",
      imageDescription: "",
      paragraphs: [
        "Physical well-being is under constant stress from the impact of modern-day lifestyles. The negative energy and health issues build up and eventually lead to severe disorders.",
        "This is essentially an imbalance within our body. And more often than not, it is the drastic change in our way of life and being disconnected from nature that is at the root of the myriad health issues."
      ]
    }
  ];

  const handleCtaClick = () => {
    // Your CTA logic here - navigate, open modal, etc.
    console.log("CTA clicked");
    // Example: router.push('/booking');
  };

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
        imageTransition="vertical" // Images slide vertically
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

      {/* Added relative positioning and z-index */}
      <section className="relative w-full overflow-hidden z-0">
        <div className="flex flex-col md:flex-row w-full">

          {/* IMAGE SIDE - Added z-0 to keep it below popup */}
          <div className="relative w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-auto md:min-h-[460px] z-0">
            <Image
              src="/assets/mission_vision.webp"
              alt="Girl silhouette with nature"
              fill
              priority
              className="object-cover object-[100%_center]"
            />
          </div>

          {/* CONTENT SIDE - Added z-0 */}
          <div
            className="relative w-full md:w-1/2 flex items-center md:min-h-[460px] z-0"
            style={{
              background: "linear-gradient(180deg, #EAEDDA 0%, #E6E7D7 100%)",
            }}
          >
            <div className="px-6 sm:px-8 md:pl-20 py-10 md:py-14 max-w-[520px]">

              <h3 className="sub-h2 font-serif text-[#2b2b2b]">
                Mission
              </h3>
              <Image
                src="/assets/SVG/below-right.svg"
                alt=""
                width={139}
                height={20}
                className="mt-2 mb-6"
              />

              <p className="para leading-[26px] sm:leading-[28px] text-[#555] mb-12 md:mb-14">
                To provide a complete rejuvenation and healing experience with
                the most innovative methods and advanced technology.
              </p>

              <h3 className="sub-h2 font-serif text-[#2b2b2b]">
                Vision
              </h3>
              <Image
                src="/assets/SVG/below-right.svg"
                alt=""
                width={139}
                height={20}
                className="mt-2 mb-6"
              />

              <p className="para leading-[26px] sm:leading-[28px] text-[#555]">
                To be Telangana&apos;s first nature cure centre of its kind,
                providing exceptional service.
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
          },
          {
            title: "Natural Therapies",
            description: "The use of natural elements and the power of nature through the latest technology and advanced equipment for therapeutic benefits.",
            image: "/assets/holistic_2.webp",
          },
        ]}
      />

      <Rejuvenation />
      <LocationHighlights />
    </main>
  );
}