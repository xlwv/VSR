"use client";

import BlogGrid from "@/components/BlogComponents/BlogGrid";
import PageBanner from "@/components/PageBanner";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { blogData } from "./blogsData";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      once: true,
      offset: 80,
      delay: 0,
      mirror: false,
    });
  }, []);

  return (
    <>
      <div
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

        <div data-aos="fade-up">
      <BlogGrid blogs={blogData} />
      </div>
    </>
  );
}
