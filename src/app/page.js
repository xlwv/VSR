import HeroBanner from "../Hero/HeroBanner";
import HeroAbout from "../Hero/HeroAbout";
import HeroProgram from "../Hero/HeroProgram";
import HeroTestimonial from "../Hero/HeroTestimonial";
import HolisticTreatments from "@/components/HolisticTreatments";
import Gallery from "@/components/Gallery";
import ScrollStory from "@/components/ScrollStory";
export default function Page() {
  const galleryData = [
    { src: "/assets/gallery-1.webp", alt: "Wellness Center Interior" },
    { src: "/assets/gallery-2.webp", alt: "Therapy Session" },
    { src: "/assets/gallery-3.webp", alt: "Organic Dining" },
    { src: "/assets/gallery-4.webp", alt: "Kitchen Staff" },
    { src: "/assets/gallery-5.webp", alt: "Treatment Facilities" },
    { src: "/assets/gallery-6.webp", alt: "Relaxation Room" },
  ];
  const testimonialData = [
    {
      name: "Mr. Raj Kapoor | Customer Testimonial",
      thumbnail: "https://img.youtube.com/vi/BxkXBSAeG_8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/BxkXBSAeG_8",
    },
    {
      name: "Mr. Vangala Sanjeeva Reddy, Chairperson",
      thumbnail: "https://img.youtube.com/vi/jxcP8N35RvY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jxcP8N35RvY",
    },
    {
      name: "Manyam Pichi Reddy | Customer Testimonial",
      thumbnail: "https://img.youtube.com/vi/jH16xGuXPDY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jH16xGuXPDY",
    },
    // ... add more items here
  ];

  const doctorData = [
    {
      name: "",
      thumbnail: "https://img.youtube.com/vi/ypkqFnrBmPU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/ypkqFnrBmPU",
    },
    {
      name: "",
      thumbnail: "https://img.youtube.com/vi/jCFQLJVjmyw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jCFQLJVjmyw",
    },
    {
      name: "",
      thumbnail: "https://img.youtube.com/vi/qiyhlhfwMGo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/qiyhlhfwMGo",
    },
    // ... add more items here
  ];
  const discoverSlides = [
    {
      image: "/assets/gallery-1.webp",
      imageAlt: "Holistic Health Treatments",
      imageTitle: "Holistic Health Treatments",
      imageDescription: "Heal your mind, body, and soul with our wide array of natural therapies. The treatment covers gastrointestinal, cardiovascular, skin, respiratory",
      paragraphs: [] // Not used in discover layout with bullet points
    },
    {
      image: "/assets/gallery-2.webp",
      imageAlt: "Natural Therapies",
      imageTitle: "Natural Therapies",
      imageDescription: "Experience the healing power of nature through our advanced therapeutic treatments",
      paragraphs: []
    },
    {
      image: "/assets/gallery-3.webp",
      imageAlt: "Wellness Programs",
      imageTitle: "Wellness Programs",
      imageDescription: "Customized programs designed for your complete transformation",
      paragraphs: []
    }
  ];
  return (
    <main>
      <HeroBanner />
      <HeroAbout />
      <HeroProgram />
      <HeroTestimonial 
        title="What Our Clients Think About Us"
        description="The results and our client testimonials speak volumes of our efforts in paving the way towards an illustrious legacy"
        testimonials={testimonialData}
      />
       <ScrollStory
        slides={discoverSlides}
        layoutType="discover"
        backgroundColor="#FAF7F5"
        heading="DISCOVER"
        imagePosition="right"
        imageTransition="vertical" // Images slide vertically
        showBulletPoints={true}
        bulletPoints={[
          "THE POWER OF NATURE",
          "THE POTENCY OF NATUROPATHY",
          "A NEW YOU AT VSR VRIKSHA"
        ]}
        dotActiveColor="#A54220"
        dotInactiveColor="#e6cbb8"
        textColor="#2b2b2b"
        ctaText=""
        ctaDescription=""
        ctaLink=""
      />
      <HolisticTreatments
        mainTitle={
          <>
            A Holistic Approach
          </>
        }
        Description="We leave no stone unturned in ensuring you get the best treatment and experience"
       sections={[
          {
            title: "ORGANIC FOOD",
            description: "Here, you can enjoy the most delicious fruits and vegetables without doubting the source. They are grown on our own farm and are free of any pesticides.",
            image: "/assets/Hero-Holi-1.webp",
          },
          {
            title: "YOGA AND MEDITATION",
            description: "Among the many facilities that we offer arethe Yoga and Meditation centers.You will be guided by the expertise of our highly experienced faculty.",
            image: "/assets/Hero-Holi-2.webp",
          },
          {
            title: "STATE-OF-THE-ART FACILITIES",
            description: "VSR employs cutting-edge technology to diagnose and treat a wide range of health issues. We spare no expense in procuring the highest quality equipment.",
            image: "/assets/Hero-Holi-3.webp",
          },
          {
            title: "MUSIC THERAPY",
            description: "We can proudly say that we are the only naturopathic center to introduce music therapy. We spare no effort in ensuring your wellbeing.",
            image: "/assets/Hero-Holi-4.webp",
          },          
        ]}
      />
      <Gallery 
        title="Photo Gallery"
        description="Take a break and rediscover your connection with nature as you heal yourself"
        images={galleryData}
      />
      <HeroTestimonial 
        title="Doctor Videos"
        description="The results and our client testimonials speak volumes of our efforts in paving the way towards an illustrious legacy"
        testimonials={doctorData}
      />
    </main>
  );
}
