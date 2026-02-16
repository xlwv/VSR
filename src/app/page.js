import HeroBanner from "../Hero/HeroBanner";
import HeroAbout from "../Hero/HeroAbout";
import HeroProgram from "../Hero/HeroProgram";
import HeroTestimonial from "../Hero/HeroTestimonial";
import HolisticTreatments from "@/components/HolisticTreatments";
import Gallery from "@/components/Gallery";
import ScrollStory from "@/components/ScrollStory";
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
  const testimonialData = [
    {
      thumbnail: "https://img.youtube.com/vi/BxkXBSAeG_8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/BxkXBSAeG_8",
    },
    {
      thumbnail: "https://img.youtube.com/vi/jxcP8N35RvY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jxcP8N35RvY",
    },
    {
      thumbnail: "https://img.youtube.com/vi/jH16xGuXPDY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jH16xGuXPDY",
    },
    {
      thumbnail: "https://img.youtube.com/vi/jxcP8N35RvY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jxcP8N35RvY",
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
      image: "/assets/g1.jpg",
      imageAlt: "Holistic Health Treatments",
      imageTitle: "Holistic Health Treatments",
      imageDescription: "Heal your mind, body, and soul with our wide array of natural therapies. The treatment covers gastrointestinal, cardiovascular, skin, respiratory",
      paragraphs: [] // Not used in discover layout with bullet points
    },
    {
      image: "/assets/g5.jpg",
      imageAlt: "Natural Therapies",
      imageTitle: "Natural Therapies",
      imageDescription: "Experience the healing power of nature through our advanced therapeutic treatments",
      paragraphs: []
    },
    {
      image: "/assets/g9.jpg",
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
            A HOLISTIC APPROACH
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
        showButtons={false}
      />
      {/* Gallery Component */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Title and Description */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="mb-4 text-black">
              Photo Gallery
            </h2>
            
            {/* Decorative SVG Divider */}
            <div className="flex justify-center my-4">
              <svg width="300" height="18" viewBox="0 0 280 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.8758 6.73622C25.8529 8.89154 24.7768 11.0469 24.6907 13.7195C24.6907 14.6678 24.906 15.0558 25.939 14.9696C30.2862 14.754 33.6864 12.0814 34.7194 7.81388C34.9777 6.82243 35.365 6.65 36.2259 6.6931C37.388 6.73621 139.755 6.6931 139.755 6.6931L139.751 6.01294L139.755 4.53778C139.755 4.53778 26.7998 4.14984 20.3435 4.75333C13.3278 5.35682 7.86151 11.8228 7.90455 18.8491C7.90455 19.7544 8.1628 20.013 9.06667 20.013C15.7812 20.013 21.7639 15.1851 23.0121 8.5036C23.2704 7.03798 23.7008 6.43446 25.2072 6.6931C25.939 6.82242 26.7137 6.6931 27.8328 6.6931M11.1757 17.6421C9.97054 17.7715 10.3149 16.9956 10.401 16.4352C11.0896 11.909 15.609 7.51214 20.1283 6.90865C20.817 6.82244 21.2044 6.86552 21.0322 7.59833C20.8601 11.909 15.5659 17.2111 11.1757 17.5991L11.1757 17.6421ZM27.5745 12.5125C26.9289 12.5125 27.058 12.1676 27.1441 11.7797C27.4885 9.92609 30.114 7.33971 31.9217 7.03796C32.2661 6.99486 32.6965 6.82243 32.6104 7.51214C32.6104 9.19329 29.2531 12.5125 27.5745 12.5125Z" fill="#A03D13" fillOpacity="0.5"/>
              <path d="M6.97868 6.98408C9.60421 6.89787 11.7563 6.03576 13.6071 4.31151C14.2527 3.75112 14.2527 3.27695 13.6071 2.63036C10.1638 -0.947478 3.66448 -0.861261 0.350283 2.80279C-0.209257 3.44938 -0.0370887 3.708 0.436368 4.22528C2.28715 6.03575 4.48227 6.89787 6.93563 6.98408M3.23407 3.40627C5.81656 1.68202 8.61425 1.68201 10.9815 3.53559C8.1408 5.25985 5.25702 5.17364 3.23407 3.40627Z" fill="#A03D13" fillOpacity="0.5"/>
              <path d="M251.635 6.72938C253.658 8.8847 254.734 11.04 254.82 13.7126C254.82 14.661 254.605 15.0489 253.572 14.9627C249.225 14.7472 245.824 12.0746 244.791 7.80704C244.533 6.81559 244.146 6.64316 243.285 6.68627C242.123 6.72937 139.755 6.68627 139.755 6.68627L139.76 6.0061L139.755 4.53094C139.755 4.53094 252.711 4.143 259.167 4.74649C266.183 5.34998 271.649 11.8159 271.606 18.8423C271.606 19.7475 271.348 20.0062 270.444 20.0062C263.73 20.0062 257.747 15.1783 256.499 8.49676C256.24 7.03115 255.81 6.42763 254.303 6.68627C253.572 6.81559 252.797 6.68627 251.678 6.68627M268.335 17.6353C269.54 17.7646 269.196 16.9887 269.11 16.4283C268.421 11.9022 263.902 7.5053 259.382 6.90181C258.694 6.8156 258.306 6.85869 258.479 7.5915C258.651 11.9021 263.945 17.2043 268.335 17.5922L268.335 17.6353ZM251.936 12.5057C252.582 12.5057 252.453 12.1608 252.367 11.7728C252.022 9.91925 249.397 7.33287 247.589 7.03113C247.245 6.98802 246.814 6.8156 246.9 7.5053C246.9 9.18645 250.258 12.5057 251.936 12.5057Z" fill="#A03D13" fillOpacity="0.5"/>
              <path d="M272.037 6.99043C269.411 6.90422 267.259 6.04211 265.409 4.31785C264.763 3.75747 264.763 3.2833 265.409 2.6367C268.852 -0.94113 275.351 -0.854914 278.665 2.80913C279.225 3.45573 279.053 3.71435 278.579 4.23162C276.728 6.04209 274.533 6.90422 272.08 6.99043M275.782 3.41262C273.199 1.68836 270.401 1.68836 268.034 3.54194C270.875 5.26619 273.759 5.17999 275.782 3.41262Z" fill="#A03D13" fillOpacity="0.5"/>
              </svg>

            </div>

            <p className="text-[#646464] font-swis para max-w-2xl mx-auto px-4">
              Take a break and rediscover your connection with nature as you heal yourself
            </p>
          </div>
        </div>
        
        {/* Gallery Component */}
        

        
        <Gallery images={galleryData} />
      </section>
      <HeroTestimonial 
        title="Doctor Videos"
        description=""
        testimonials={doctorData}
      />
    </main>
  );
}
