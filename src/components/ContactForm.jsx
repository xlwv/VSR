"use client";

import { useState } from "react";
import { submitLead } from "@/lib/submitLead";
import Button from "@/components/Button";

export default function ContactForm({
  title,
  source = "Website",
  showAuthorisation = true,
  onSuccess,
  className = "",
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [authorised, setAuthorised] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setErrorMessage("");
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
    if (showAuthorisation && !authorised) {
      newErrors.authorised = "Please authorise to proceed";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    const result = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      source,
      message: form.message,
      honeypot,
    });

    if (result.success) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setAuthorised(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } else {
      setErrorMessage("Please try again later.");
    }

    setIsSubmitting(false);
  };

  const inputClass =
    "text-black w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none";

  // ── Success state ──────────────────────────────────────────────
  if (submitted) {
    return (
      <div className={`${className} flex flex-col items-center justify-center py-10 text-center`}>
        <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-[#A03D13] mb-2">Thank You!</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Your enquiry has been received. Our team will get in touch with you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs text-[#A03D13] underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────
  return (
    <div className={className}>
      {title && (
        <h3 className="mb-6 text-center text-[28px] font-medium text-[#A03D13]">{title}</h3>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="company"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
        />
        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600 text-center">{errorMessage}</p>
          </div>
        )}

        <div>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" className={inputClass} />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email ID*" className={inputClass} />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            maxLength="10"
            onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
            placeholder="Mobile No.*"
            className={inputClass}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Message"
          className={inputClass}
        />

        {showAuthorisation && (
          <>
            <label className="flex cursor-pointer items-start gap-3 pt-1 select-none">
              <div className="relative mt-[2px] flex-shrink-0">
                <input
                  type="checkbox"
                  checked={authorised}
                  onChange={(e) => {
                    setAuthorised(e.target.checked);
                    setErrors({ ...errors, authorised: "" });
                  }}
                  className="peer sr-only"
                />
                <div className="h-5 w-5 rounded-sm border-2 border-[#A03D13] bg-white flex items-center justify-center peer-checked:bg-[#A03D13] transition-colors duration-200">
                  {authorised && (
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-[#212529] leading-snug">
                I, hereby authorise VSR Vriksha Nature Cure centre to contact me.
              </span>
            </label>
            {errors.authorised && <p className="text-xs text-red-600 mt-1">{errors.authorised}</p>}
          </>
        )}

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
  );
}