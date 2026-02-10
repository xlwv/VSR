"use client";
import Image from "next/image";

export default function HealthPackage({
  title,
  description,
  duration,
  benefits = [],
  includes = [],
  image,
  reverse = false,
}) {
  const renderList = (items) => (
     <ul className="space-y-2 md:space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 md:gap-3">
          <Image 
            src="/assets/check.svg" 
            width={24} 
            height={24} 
            alt="" 
            className="flex-shrink-0 mt-1"
          />
          <span className="text-[18px] text-[#404041]" style={{ fontFamily: '"Swis721 BT", sans-serif' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
  return (
<section className="w-full bg-white pt-4 pb-18">
      <div className={`max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-6 md:gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>  
        <div className="w-full lg:w-[520px] flex justify-center">
          <Image
            src={image}
            alt={title}
            width={520}
            height={520}
            className="w-full max-w-[450px] h-auto lg:w-[450px] lg:h-[400px] object-cover rounded-3xl lg:rounded-[24px]"
          />
        </div>
        <div className="w-full lg:w-[630px] space-y-4 md:space-y-5">
<div className="flex flex-col md:flex-row xl:items-center gap-3 md:gap-6">
  <span className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm w-[120px] h-[38px] sm:w-[142px] sm:h-[43px] border border-[#A54220] bg-[#A54220]/20 text-[#404041] md:order-2 xl:ml-10">
    {duration}
  </span>

  <h2 className="text-2xl sm:text-3xl xl:text-[34px] font-serif font-normal text-gray-900 md:order-1 xl:whitespace-nowrap">
    {title}
  </h2>
</div>
<p className="text-[18px] md:text-[15px] text-[#404041] leading-relaxed lg:max-w-[520px]" style={{ fontFamily: '"Swis721 BT", sans-serif' }}>
  {description}
</p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h3 className="text-[24px] font-serif mb-3 md:mb-4 text-gray-900">Benefits</h3>
              {renderList(benefits)}
            </div>
            <div>
              <h3 className="text-[24px] font-serif mb-3 md:mb-4 text-gray-900">Includes</h3>
              {renderList(includes)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}