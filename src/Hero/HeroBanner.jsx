import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="container h-full flex items-center">
        <div className="max-w-2xl text-white">
          {/* Main Heading - Yellow Color */}
          <h1 className="text-4xl mt-15 md:text-5xl lg:text-6xl mb-4 text-[#F4C430]">
            VSR Vriksha
          </h1>
          
          {/* Subheading */}
          <h3 className="text-xl md:text-2xl mb-6 font-light">
            Telangana&apos;s First Premium Naturopathy Retreat
          </h3>
          
          {/* Location */}
          <div className="flex items-center gap-3 mb-8">
            <FaLocationDot className="w-5 h-5 mt-1 flex-shrink-0" />
            <p className="text-white text-lg">
              Hyderabad
            </p>
          </div>
          
          {/* CTA Button - Yellow */}
          <button className="call-btn">
            BOOK YOUR STAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
