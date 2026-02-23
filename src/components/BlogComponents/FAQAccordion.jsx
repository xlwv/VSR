"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="font-heading text-[22px] sm:text-[26px] md:text-[35px] leading-tight mb-2 md:mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[var(--brand-brown)] flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 pt-2">
                <p
                  className="font-body text-[16px] md:text-[18px] font-normal leading-[1.9] text-[#333]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
