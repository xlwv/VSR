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
        <div className="rounded-2xl bg-[#FBEEE8] p-8">
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="mx-auto mt-4 block rounded-full bg-[#A03D13] px-8 py-2 text-sm text-white"
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-10 text-[20px] text-[#212529]">
            <Image src="/assets/SVG/calendar.svg" alt="" width={25} height={30} />
            Monday to Sunday
          </div>

          <div className="flex items-center gap-10 text-[20px] text-[#212529]">
            <Image src="/assets/SVG/clock.svg" alt="" width={32} height={32} />
            7 AM to 7 PM
          </div>

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