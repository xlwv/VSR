"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogGrid = ({ blogs = [], initialCount = 6 }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {blogs.slice(0, visibleCount).map((blog, index) => (
            <Link
              key={index}
              href={`/blogs/${blog.slug}`}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl bg-white">
                <div className="relative w-full h-[210px] sm:h-[230px] lg:h-[250px] overflow-hidden rounded-2xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="pt-4 px-1">
                 <h3 className="font-swis text-[13px] leading-relaxed text-gray-700">
                  {blog.title}
                  <span className="text-orange-700 ml-1">...Read More</span>
                </h3>

                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewMore}
              className="px-7 py-2 text-sm text-white bg-[#A54220] rounded-full hover:bg-[#8e3d1b] transition"
            >
              VIEW MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
