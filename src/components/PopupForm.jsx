"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/submitLead";
import Button from "@/components/Button";

export default function PopupForm({ isOpen, onClose }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [authorised, setAuthorised] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiFieldError, setApiFieldError] = useState("");

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset form whenever popup reopens
  useEffect(() => {
    if (isOpen) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setAuthorised(false);
      setApiFieldError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setApiFieldError("");
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
    if (!authorised) newErrors.authorised = "Please authorise to proceed";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isApiFieldValidationError = (result, status) => {
    if (!status || status < 400 || status >= 500) return false;
    const msg = (result?.message || "").toLowerCase();
    const dups = ["duplicate", "already exists", "already registered", "already submitted"];
    if (dups.some((kw) => msg.includes(kw))) return false;
    return !!result?.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setApiFieldError("");

    const result = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      source: "Website",
      message: form.message,
    });

    if (result.success) {
      onClose();
      router.push("/thank-you");
    } else if (isApiFieldValidationError(result, result.status)) {
      setApiFieldError(result.message);
    }

    setIsSubmitting(false);
  };

  const inputClass =
    "text-black w-full rounded-md border border-[#A03D13] bg-white px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#A03D13] transition-colors";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflowY: "auto",
        paddingTop: "100px",
        paddingBottom: "40px",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          position: "relative",
          width: "95%",
          maxWidth: "520px",
          borderRadius: "1rem",
          backgroundColor: "#FBEEE8",
          padding: "2rem",
          marginBottom: "auto",
          flexShrink: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "1.75rem",
            lineHeight: 1,
            color: "#A03D13",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>

        <h3 className="mb-6 text-center text-[28px] font-medium text-[#A03D13]">
          Book Your Stay
        </h3>

        {apiFieldError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600 text-center">{apiFieldError}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <div>
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
                <div
                  className="h-5 w-5 rounded-sm border-2 border-[#A03D13] flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: authorised ? "#A03D13" : "white" }}
                >
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
          </div>

          <div className="flex justify-center pt-1">
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