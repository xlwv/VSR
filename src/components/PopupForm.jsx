"use client";

import { useEffect, useState } from "react";

export default function PopupForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Lock background scroll
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

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Data:", form);

    setForm({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex justify-center overflow-y-auto bg-black/60 pt-[100px] pb-10">
      {/* Modal */}
      <div className="relative my-auto w-[95%] max-w-[520px] rounded-2xl bg-[#FBEEE8] p-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-[#A03D13]"
          aria-label="Close"
        >
          ×
        </button>

        {/* Title */}
        <h3 className="mb-6 text-center text-[28px] font-medium text-[#A03D13]">
          Book Your Stay
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email ID*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile No.*"
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Message"
            className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="mx-auto block rounded-full bg-[#A03D13] px-10 py-3 text-sm text-white hover:opacity-90"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}