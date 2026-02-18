"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function GetInTouch() {
  return (
    <section className="bg-white py-20">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-medium text-gray-800">Get In Touch</h2>

        <div className="mt-3 flex justify-center">
          <Image
            src="/assets/SVG/below.svg"
            alt=""
            width={220}
            height={12}
          />
        </div>
      </div>

      <div className="grid container gap-16 px-6 md:grid-cols-2">
        {/* Form card */}
        <div className="rounded-2xl bg-[#FBEEE8] p-4 md:p-8">
          <h3 className="mb-6 text-[27px] text-[#212529]">
            Please reach out for any{" "}
            <span className="text-[#A03D13] text-[27px]">Queries</span>
          </h3>

          <ContactForm
            source="Get In Touch"
            showAuthorisation={true}
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-10 text-[20px] text-[#212529]">
            <Image src="/assets/SVG/calendar.svg" alt="" width={25} height={30} />
            Monday to Sunday
          </div>

          <div className="flex items-center gap-10 text-[20px] text-[#212529]">
            <Image src="/assets/SVG/clock.svg" alt="" width={32} height={32} />
            7 AM to 7 PM
          </div>

          {/* Map */}
          <div className="mt-4 h-[320px] md:h-full overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps?q=VSR%20Vriksha%20Nature%20Cure%20Center&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
