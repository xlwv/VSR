import Gallery from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";
export default function Page() {
  const galleryData = [
    { src: "/assets/g1.jpg", alt: "Wellness Center Interior" },
    { src: "/assets/g2.jpg", alt: "Therapy Session" },
    { src: "/assets/g3.jpg", alt: "Organic Dining" },
    { src: "/assets/g4.jpg", alt: "Kitchen Staff" },
    { src: "/assets/g5.jpg", alt: "Treatment Facilities" },
    { src: "/assets/g6.jpg", alt: "Relaxation Room" },
    { src: "/assets/g7.jpg", alt: "Kitchen Staff" },
    { src: "/assets/g8.jpg", alt: "Treatment Facilities" },
    { src: "/assets/g9.jpg", alt: "Relaxation Room" },
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
