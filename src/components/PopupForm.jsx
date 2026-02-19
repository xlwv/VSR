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
  const [authorised, setAuthorised] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiFieldError, setApiFieldError] = useState("");

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

    if (!authorised) {
      newErrors.authorised = "Please authorise to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Determines if the API response is a field-level validation rejection
  // (not a duplicate, not a server/network error)
  const isApiFieldValidationError = (result, status) => {
    // Only treat 4xx responses as potential field errors
    if (!status || status < 400 || status >= 500) return false;

    const msg = (result?.message || "").toLowerCase();

    // Exclude duplicate-related messages
    const duplicateKeywords = ["duplicate", "already exists", "already registered", "already submitted"];
    if (duplicateKeywords.some((kw) => msg.includes(kw))) return false;

    // Must be a 4xx with a message to be a field validation error
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

    if (result.success && result.message === "Lead submitted successfully!") {
      setForm({ name: "", email: "", phone: "", message: "" });
      setAuthorised(false);
      onClose();
      router.push("/thank-you");
    } else if (isApiFieldValidationError(result, result.status)) {
      // Only surface field-level API validation errors to the user
      setApiFieldError(result.message);
    }
    // All other failures (duplicates, 500s, network errors) are silent — user is not shown an error

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex justify-center overflow-y-auto bg-black/60 pt-[100px] pb-10">
      <div className="relative my-auto w-[95%] max-w-[520px] rounded-2xl bg-[#FBEEE8] p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-[#A03D13] hover:text-[#7f3214] transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <h3 className="mb-6 text-center text-[28px] font-medium text-[#A03D13]">
          Book Your Stay
        </h3>

        {/* Only shown for API field validation errors */}
        {apiFieldError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600 text-center">{apiFieldError}</p>
          </div>
        )}

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

          {/* Authorisation Checkbox */}
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
                  className="
                    h-5 w-5 rounded-sm border-2 border-[#A03D13]
                    bg-white
                    flex items-center justify-center
                    peer-checked:bg-[#A03D13]
                    transition-colors duration-200
                  "
                >
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
                I, hereby authorise VSR Vriksha Nature Cure centre to contact me.
              </span>
            </label>
            {errors.authorised && (
              <p className="text-xs text-red-600 mt-1">{errors.authorised}</p>
            )}
          </div>

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