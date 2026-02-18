"use client";

import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";

export default function PopupForm({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex justify-center overflow-y-auto bg-black/60 pt-[100px] pb-10">
      <div className="relative my-auto w-[95%] max-w-[520px] rounded-2xl bg-[#FBEEE8] p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-[#A03D13]"
        >
          ×
        </button>

        <ContactForm
          title="Book Your Stay"
          source="Popup Form"
          showAuthorisation={false}
          onSuccess={onClose}
        />
      </div>
    </div>
  );
}
