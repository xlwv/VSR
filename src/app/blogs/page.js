"use client";

import BlogGrid from "@/components/BlogComponents/BlogGrid";
import PageBanner from "@/components/PageBanner";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const blogData = [
  {
    title: "Yoga and Meditation Retreats: A Healing Journey for the Soul",
    image: "/assets/blog-grid-img1.png",
    slug: "yoga-and-meditation-retreats",
  },
  {
    title: "How Mental Health Plays a Role in Preventive Healthcare",
    image: "/assets/blog-grid-img2.png",
    slug: "mental-health-preventive-healthcare",
  },
  {
    title: "How Sleep Tourism Improves Mental Health and Well-being",
    image: "/assets/blog-grid-img3.png",
    slug: "sleep-tourism-mental-health",
  },
  {
    title: "Healing Centers and the Power of Nature: Why Eco Therapy Works",
    image: "/assets/blog-grid-img4.png",
    slug: "eco-therapy-healing-centers",
  },
  {
    title: "Stress and Diabetes: The Vicious Cycle and How to Break It",
    image: "/assets/blog-grid-img5.png",
    slug: "stress-and-diabetes",
  },
  {
    title:
      "Offering Specialised Wellness Retreats That Include Fitness, Mindfulness and Holistic Therapy",
    image: "/assets/blog-grid-img6.png",
    slug: "specialised-wellness-retreats",
  },
  {
    title: "Holistic Healing Through Nature and Mindfulness",
    image: "/assets/blog-grid-img1.png",
    slug: "holistic-healing-nature",
  },
  {
    title: "Why Wellness Retreats Are the Future of Healthcare",
    image: "/assets/blog-grid-img2.png",
    slug: "wellness-retreats-future",
  },
  {
    title: "Mind-Body Balance: The Key to Long-Term Health",
    image: "/assets/blog-grid-img3.png",
    slug: "mind-body-balance",
  },
];

export default function BlogPage() {
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
    <>
      {/* Page Banner */}
      <div
        data-aos="fade-up"
        className="mt-[69px] sm:mt-[72px] md:mt-[80px] lg:mt-[88px]"
      >
        <PageBanner
          title="Blogs"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blogs", href: "/blogs" },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      {/* Blog Grid */}
      <div data-aos="fade-up">
        <BlogGrid blogs={blogData} />
      </div>
    </>
  );
}
