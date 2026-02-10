import HeroBanner from "../Hero/HeroBanner";
import HeroAbout from "../Hero/HeroAbout";
import HeroProgram from "../Hero/HeroProgram";
import HeroTestimonial from "../Hero/HeroTestimonial";
import HolisticTreatments from "@/components/HolisticTreatments";
export default function Page() {
  return (
    <main>
      <HeroBanner />
      <HeroAbout />
      <HeroProgram />
      <HeroTestimonial />
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
    </main>
  );
}
