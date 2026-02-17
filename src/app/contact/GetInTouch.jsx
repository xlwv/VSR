"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { submitLead } from "@/lib/submitLead";

export default function GetInTouch() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [authorised, setAuthorised] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields.");
      return;
    }

    if (!authorised) {
      alert("Please authorise VSR Vriksha Nature Cure Center to contact you.");
      return;
    }

    setIsSubmitting(true);

    const success = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      source: "Get In Touch",
      message: form.message,
    });

    if (success) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setAuthorised(false);
      router.push("/thank-you");
    } else {
      alert("Submission failed. Try again.");
    }

    setIsSubmitting(false);
  };

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

        {/* ── Form card: p-4 on mobile, p-8 on desktop ── */}
        <div className="rounded-2xl bg-[#FBEEE8] p-4 md:p-8">
          <h3 className="mb-6 text-[27px] text-[#212529]">
            Please reach out for any{" "}
            <span className="text-[#A03D13] text-[27px]">Queries</span>
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email ID*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              maxLength="10"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
              placeholder="Mobile No.*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />

            {/* ── Authorisation checkbox ── */}
            <label className="flex cursor-pointer items-start gap-3 pt-1 select-none">
              <div className="relative mt-[2px] flex-shrink-0">
                <input
                  type="checkbox"
                  checked={authorised}
                  onChange={(e) => setAuthorised(e.target.checked)}
                  className="peer sr-only"
                />
                {/* Custom checkbox box */}
                <div
                  className="
                    h-5 w-5 rounded-sm border-2 border-[#A03D13]
                    bg-white
                    flex items-center justify-center
                    peer-checked:bg-[#A03D13]
                    transition-colors duration-200
                  "
                >
                  {/* Tick — shown when checked */}
                  {authorised && (
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-[#212529] leading-snug">
                I, hereby authorise VSR Vriksha Nature Cure Center to contact me.
              </span>
            </label>

            {/* ── Submit: left-aligned on all screen sizes ── */}
            <div className="mt-4 flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#A03D13] px-8 py-2 text-sm text-white disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-10 text-[20px] text-[#212529]">
            <Image src="/assets/SVG/calendar.svg" alt="" width={25} height={30} />
            Monday to Sunday
          </div>

          <div className="flex items-center gap-10 text-[20px] text-[#212529]">
            <Image src="/assets/SVG/clock.svg" alt="" width={32} height={32} />
            7 AM to 7 PM
          </div>

          {/* ── Map: taller on mobile ── */}
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