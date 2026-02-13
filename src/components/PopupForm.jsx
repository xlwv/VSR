"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PopupForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted (for portal)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

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

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onClick={(e) => {
        // Close when clicking backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Modal */}
      <div 
        className="relative w-full max-w-[520px] rounded-2xl bg-[#FBEEE8] p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl text-[#A03D13] hover:text-[#7f3214] transition-colors leading-none"
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
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#A03D13]/20"
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
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#A03D13]/20"
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
              className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#A03D13]/20"
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
            className="w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#A03D13]/20 resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="para mx-auto block rounded-full bg-[#A03D13] px-10 py-3 text-sm text-white hover:opacity-90 transition-opacity"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );

  // Render using portal to ensure it's at the top of the DOM tree
  return createPortal(modalContent, document.body);
}