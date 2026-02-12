import Link from "next/link";

const PageBanner = ({
  title = "",
  breadcrumbs = [],
  bgImage = "/assets/banner.webp",
}) => {
  return (
    <section
      className="relative flex w-full items-center bg-cover bg-center 
                 h-[200px] sm:h-[240px] md:h-[320px]"
      style={{
        backgroundImage: `
          linear-gradient(
            270deg,
            rgba(64, 19, 0, 0) 0%,
            rgba(64, 19, 0, 0.5) 40.62%,
            #401300 100%
          ),
          url(${bgImage})
        `,
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="max-w-[800px]">

          {/* Title */}
          <h1 className="mb-3 sm:mb-4 md:mb-9
                         text-xl sm:text-2xl md:text-[48px]
                         font-normal
                         leading-snug md:leading-[57.6px]
                         text-white">
            {title}
          </h1>

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center text-sm sm:text-base text-white">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="no-underline hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold">{item.label}</span>
                )}

                {index < breadcrumbs.length - 1 && (
                  <span className="mx-3 sm:mx-4 md:mx-[30px] inline-block h-[8px] w-[8px] sm:h-[10px] sm:w-[10px] rotate-45 border-r-2 border-t-2 border-white"></span>
                )}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PageBanner;
