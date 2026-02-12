import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="container h-full flex items-center px-5 sm:px-6">

        {/* Content Wrapper */}
        <div className="max-w-2xl text-white pt-28 sm:pt-32 md:pt-0">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 text-[#F4C430] leading-tight">
            VSR Vriksha
          </h1>

          {/* Subheading */}
          <h3 className="text-sm sm:text-base md:text-2xl mb-5 md:mb-6 font-light leading-relaxed">
            Telangana&apos;s First Premium Naturopathy Retreat
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 md:mb-8">
            <FaLocationDot className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <p className="text-sm sm:text-base para">
              Hyderabad
            </p>
          </div>

          {/* CTA */}
          <Link href="/booking">
            <button className="call-btn text-black">
              BOOK YOUR STAY
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
