import Image from "next/image";

export default function HolisticTreatments({ mainTitle, Description, sections = [] }) {
  return (
    <section
      className="relative w-full md:h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/holisticbg.webp')" }}
    >
      <div className="container mx-auto px-6 py-16">

        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl tracking-widest">
            {mainTitle}
          </h2>
          <Image src="/assets/SVG/below.svg" width={320} height={10} className="mx-auto mt-3" alt="" />
          <p>{Description}</p>
        </div>

        {sections.map((sec, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              i % 2 === 0 ? "mb-20" : "md:flex-row-reverse mb-20"
            }`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={sec.image}
                width={530}
                height={300}
                className="rounded-2xl w-full object-cover"
                alt=""
              />
            </div>

            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {sec.title}
              </h3>
              <p className="text-white/80 mb-5 max-w-md">
                {sec.description}
              </p>
              <button className="border border-white px-6 py-2 rounded-full text-white bg-transparent hover:bg-white hover:text-black transition duration-300">
                VIEW MORE
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
