import Gallery from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";
export default function Page() {
  const galleryData = [
    { src: "/assets/g1.webp", alt: "Wellness centre Interior" },
    { src: "/assets/g2.webp", alt: "Therapy Session" },
    { src: "/assets/g3.webp", alt: "Organic Dining" },
    { src: "/assets/g4.webp", alt: "Kitchen Staff" },
    { src: "/assets/g5.webp", alt: "Treatment Facilities" },
    { src: "/assets/g6.webp", alt: "Relaxation Room" },
    { src: "/assets/g7.webp", alt: "Treatment Equipment" },
    { src: "/assets/g8.webp", alt: "Wellness centre" },
    { src: "/assets/g9.webp", alt: "Our Staff" },
    { src: "/assets/g10.webp", alt: "Swimming Pool" },
    { src: "/assets/g11.webp", alt: "Dining Hall" },
    { src: "/assets/g12.webp", alt: "Outdoor Relaxation Area" },
    { src: "/assets/g13.webp", alt: "Spa Treatment Room" },
  ];
  return (
    <main>
      <div className="pt-[70px]">
      <PageBanner
        title="Gallery"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
        bgImage="/assets/banner.webp"
      />
      <div className="mt-16 mb-14 ">
      <Gallery 
        title=""
        description=""
        images={galleryData}
      />
      </div>
      </div>
    </main>
  );
}
