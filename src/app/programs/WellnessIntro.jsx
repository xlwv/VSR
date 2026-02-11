import Image from "next/image";

export default function BetterCareSection() {
  return (
<section className="w-full bg-white py-12 md:pt-[60px] md:pb-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="font-heading text-3xl md:text-[44px] leading-tight md:leading-[52.8px] text-gray-900 text-center max-w-[700px]">
          Better Care for a Better You!
        </h1>
        <p className="para font-body text-sm md:text-base leading-relaxed md:leading-[26px] text-[#404041] text-center max-w-[1000px] mt-4 md:mt-2">
          We believe that true wellness is the balance of mind, body, and spirit. Located in serene, nature-filled surroundings, our luxury boutique naturopathy retreat offers a transformative experience designed for those seeking the highest level of care. Indulge in personalized therapies, wellness programs, and the perfect escape from the hustle of everyday life.
        </p>
        <div className="w-full max-w-[1150px] h-[250px] md:h-[500px] rounded-2xl md:rounded-[24px] overflow-hidden mt-10 md:mt-2">
          <Image
            src="/assets/programs.webp"
            alt="Wellness Therapy"
            width={1200}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
<p className="para font-body text-sm md:text-base leading-relaxed md:leading-[26px] text-[#404041] text-center max-w-[900px] mt-4 md:mt-6">
  Our luxury retreat is reimagining the way you experience healing. Focusing on holistic treatments that are not just effective, but tailored to meet your individual needs, we combine the timeless power of nature with modern therapies to provide unparalleled care.
</p>
      </div>
    </section>
  );
}