import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="bg-white py-20">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-medium text-gray-800">
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
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-2">
        {/* Form Card */}
        <div className="rounded-2xl bg-[#FBEEE8] p-8">
          <h3 className="mb-6 text-[27px] text-[#212529]">
            Please reach out for any{" "}
            <span className="text-[#A03D13] text-[27px]">Queries</span>
          </h3>

          <form className="space-y-4">
            {["Name*", "Email ID*", "Mobile No.*"].map((label) => (
              <input
                key={label}
                type="text"
                placeholder={label}
                className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none focus:border-[#A03D13] text-[#A03D13]"
              />
            ))}

            <textarea
              rows="4"
              placeholder="Message*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none focus:border-[#A03D13] text-[#A03D13]"
            />

            <label className="flex items-start gap-2 text-[14px] text-[#404041]">
  <input
    type="checkbox"
    className="mt-[3px] h-[14px] w-[14px] rounded border border-[#A03D13] accent-[#A03D13]"
  />
  I hereby authorise VSR Vriksha Nature Cure Center to contact me.
</label>

            <button
  type="submit"
  className="mx-auto mt-4 block rounded-full bg-[#A03D13] px-8 py-2 text-sm text-white hover:opacity-90"
>
  SUBMIT
</button>

          </form>
        </div>

        {/* Right Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-10 text-[24px] text-[#212529]">
            <Image src="/assets/SVG/calendar.svg" alt="" width={25} height={30} />
            Monday to Sunday
          </div>

          <div className="flex items-center gap-10 text-[24px] text-[#212529]">
            <Image src="/assets/SVG/clock.svg" alt="" width={32} height={32} />
            7 AM to 7 PM
          </div>

          {/* Map */}
          <div className="mt-4 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps?q=VSR%20Vriksha%20Nature%20Cure%20Center&output=embed"
              className="h-[280px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
