import Image from "next/image";
import Link from "next/link";

const PageBanner = ({
  title = "",
  breadcrumbs = [],
  bgImage = "./assets/banner.webp",
}) => {
  return (
    <section className="relative flex w-full items-center h-[320px] sm:h-[400px] md:h-[440px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title || "Page Banner"}
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#401300] via-[rgba(64,19,0,0.5)] to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="container">
          <div>

            {/* Title */}
            <h2 className="mb-3 sm:mb-4 md:mb-9
                           text-xl sm:text-2xl md:text-[48px]
                           font-normal
                           leading-snug md:leading-[57.6px]
                           text-white">
              {title}
            </h2>

            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center text-md sm:text-lg text-white">
              {breadcrumbs.map((item, index) => (
                <span key={index} className="flex no-underline items-center">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="no-underline hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-regular no-underline text-lg">{item.label}</span>
                  )}

                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-3 sm:mx-4 md:mx-[30px] inline-block h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] rotate-45 border-r-2 border-t-2 border-white"></span>
                  )}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;