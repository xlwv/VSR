import Link from "next/link";

const PageBanner = ({
  title = "",
  breadcrumbs = [],
  bgImage = "/assets/banner.webp",
}) => {
  return (
    <section
      className="relative flex w-full items-center bg-cover bg-center 
                 h-[320px] sm:h-[400px] md:h-[440px] priority"
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
      <div className="container">
        <div>

          {/* Title */}
          <h1 className="mb-3 sm:mb-4 md:mb-9
                         text-xl sm:text-2xl md:text-[48px]
                         font-normal
                         leading-snug md:leading-[57.6px]
                         text-white">
            {title}
          </h1>

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center text-md sm:text-lg text-white">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex  no-underline items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="no-underline hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-regular  no-underline text-lg" >{item.label}</span>
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