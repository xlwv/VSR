import Link from "next/link";

const PageBanner = ({
  title = "",
  breadcrumbs = [],
  bgImage = "/assets/banner.webp",
}) => {
  return (
    <section
  className="relative flex h-[240px] w-full items-center bg-cover bg-center md:h-[320px] "
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
 <div className="w-full max-w-[1200px] mx-auto px-4">
        {/* INNER CONTENT – like col-md-8 offset-md-2 */}
        <div className="max-w-[800px]">
         <h1 className="pagebanner-title mb-4 md:mb-9 text-2xl md:text-[48px] font-normal leading-[57.6px] text-white">
  {title}
</h1>

<div className="pagebanner-breadcrumbs flex items-center text-base text-white">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="no-underline hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold">{item.label}</span>
              )}

              {index < breadcrumbs.length - 1 && (
<span className="mx-[30px] inline-block h-[10px] w-[10px] rotate-45 border-r-2 border-t-2 border-white"></span>
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
