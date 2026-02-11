import Gallery from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";
export default function Page() {
  const galleryData = [
    { src: "/assets/gallery-1.webp", alt: "Wellness Center Interior" },
    { src: "/assets/gallery-2.webp", alt: "Therapy Session" },
    { src: "/assets/gallery-3.webp", alt: "Organic Dining" },
    { src: "/assets/gallery-4.webp", alt: "Kitchen Staff" },
    { src: "/assets/gallery-5.webp", alt: "Treatment Facilities" },
    { src: "/assets/gallery-6.webp", alt: "Relaxation Room" },
  ];
  return (
    <main>
      <PageBanner
        title="Gallery"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
        bgImage="/assets/banner.webp"
      />
      <Gallery 
        title=""
        description=""
        images={galleryData}
      />
    </main>
  );
}
