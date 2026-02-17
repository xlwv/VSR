"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/submitLead";
import Button from "@/components/Button";

export default function PopupForm({ isOpen, onClose }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const success = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      source: "Popup Form",
      message: form.message,
    });

    if (success) {
      setForm({ name: "", email: "", phone: "", message: "" });
      onClose();
      router.push("/thank-you");
    } else {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex justify-center overflow-y-auto bg-black/60 pt-[100px] pb-10">
      <div className="relative my-auto w-[95%] max-w-[520px] rounded-2xl bg-[#FBEEE8] p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-[#A03D13]"
        >
          ×
        </button>

        <h3 className="mb-6 text-center text-[28px] font-medium text-[#A03D13]">
          Book Your Stay
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*"
              className="text-black w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email ID*"
              className="text-black w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              maxLength="10"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
              placeholder="Mobile No.*"
              className="text-black w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Message"
            className="text-black w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
          />

          <div className="flex justify-center">
            <Button
              text={isSubmitting ? "Submitting..." : "SUBMIT"}
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
}