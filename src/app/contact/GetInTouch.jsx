import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="bg-white py-16 md:py-24">

      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
            Get In Touch
          </h2>

          <div className="mt-3 flex justify-center">
            <Image
              src="/assets/SVG/below.svg"
              alt=""
              width={220}
              height={12}
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:gap-16 lg:gap-28 md:grid-cols-2 items-stretch">

          {/* Form Card */}
          <div className="rounded-2xl bg-[#FBEEE8] p-6 sm:p-8 md:p-10">
            <h3 className="mb-5 text-[22px] sm:text-[24px] md:text-[27px] text-[#212529]">
              Please reach out for any{" "}
              <span className="text-[#A03D13]">Queries</span>
            </h3>

            <form className="space-y-4 md:space-y-5">

              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none text-[#A03D13]"
              />

              <input
                type="email"
                placeholder="Email ID*"
                required
                className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none text-[#A03D13]"
              />

              <input
                type="tel"
                placeholder="Mobile No.*"
                pattern="[0-9]{10}"
                required
                className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none text-[#A03D13]"
              />

              <textarea
                rows="4"
                placeholder="Message*"
                required
                className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none text-[#A03D13]"
              />

              <label className="flex items-start gap-2 text-[13px] md:text-[14px] text-[#404041]">
                <input
                  type="checkbox"
                  required
                  className="mt-[3px] h-[14px] w-[14px] rounded border border-[#A03D13] accent-[#A03D13]"
                />
                I hereby authorise VSR Vriksha Nature Cure Center to contact me.
              </label>

              <button
                type="submit"
                className="mx-auto mt-6 block rounded-full bg-[#A03D13] px-10 py-1 text-sm text-white hover:opacity-90"
              >
                SUBMIT
              </button>

            </form>
          </div>

          {/* Right Info */}
          <div className="flex flex-col gap-6 md:gap-8 h-full">

            {/* Timing */}
            <div className="flex items-center gap-4 text-[16px] md:text-[20px] text-[#212529]">
              <Image src="/assets/SVG/calendar.svg" alt="" width={24} height={24} />
              Monday to Sunday
            </div>

            <div className="flex items-center gap-4 text-[16px] md:text-[20px] text-[#212529]">
              <Image src="/assets/SVG/clock.svg" alt="" width={24} height={24} />
              7 AM to 7 PM
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-sm min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:flex-1">
              <iframe
                src="https://www.google.com/maps?q=VSR%20Vriksha%20Nature%20Cure%20Center&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
