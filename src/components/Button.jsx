"use client";

import { useState } from "react";
import PopupForm from "./PopupForm";

/**
 * Reusable Button Component with 4 variants
 * 
 * VARIANTS:
 * 1. primary - Brown background, white text (default - call-btn style)
 * 2. secondary - Yellow background, black text (for hero section)
 * 3. outline - Transparent with brown border, brown text
 * 4. outlineWhite - Transparent with white border, white text (for dark backgrounds)
 * 
 * @param {string} text - Button text
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'outlineWhite'
 * @param {function} onClick - Optional custom click handler
 * @param {string} href - Optional link URL
 * @param {string} className - Additional custom classes
 * @param {boolean} disabled - Disable button
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} type - 'button' | 'submit' | 'reset'
 */

const Button = ({
  text = "Button",
  variant = "primary",
  onClick,
  href,
  className = "",
  disabled = false,
  size = "md",
  type = "button",
  ...props
}) => {
  const [showPopup, setShowPopup] = useState(false);

  // Check if this is a "Book Your Stay" button
  const isBookingButton = 
    text.toLowerCase().includes("book your stay") || 
    text.toLowerCase().includes("book now");

  // Handle button click
  const handleClick = (e) => {
    if (disabled) return;

    // If it's a booking button, show popup
    if (isBookingButton) {
      e.preventDefault();
      setShowPopup(true);
      return;
    }

    // Otherwise, use custom onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  // Size variants
  const sizeClasses = {
    sm: "px-6 py-2 text-xs md:text-sm",
    md: "px-8 py-2.5 text-sm md:text-base",
    lg: "px-10 py-3 text-base md:text-lg",
  };

  // Variant styles based on your design system
  const variantClasses = {
    // PRIMARY: Brown background, white text (default call-btn)
    primary: `
      bg-[var(--brand-brown)] 
      text-white 
      border-none
      hover:bg-[#7f3214]
      hover:shadow-lg
      active:transform active:scale-95
    `,

    // SECONDARY: Yellow background, black text (hero button)
    secondary: `
      bg-[var(--brand-yellow)] 
      text-black 
      border-none
      hover:bg-[#e6b829]
      hover:shadow-lg
      active:transform active:scale-95
    `,

    // OUTLINE: Transparent with brown border and text
    outline: `
      bg-transparent 
      text-[var(--brand-brown)] 
      border-2 
      border-[var(--brand-brown)]
      hover:bg-[var(--brand-brown)] 
      hover:text-white
      active:transform active:scale-95
    `,

    // OUTLINE WHITE: Transparent with white border (for dark backgrounds)
    outlineWhite: `
      bg-transparent 
      text-white 
      border 
      border-white
      hover:bg-white 
      hover:text-black
      active:transform active:scale-95
    `,
  };

  // Base classes
  const baseClasses = `
    rounded-full 
    font-medium 
    transition-all 
    duration-300 
    cursor-pointer 
    inline-block 
    text-center
    whitespace-nowrap
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  // Combined classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // If href is provided and NOT a booking button, render as link
  if (href && !isBookingButton) {
    return (
      <>
        <a
          href={href}
          className={buttonClasses}
          onClick={handleClick}
          {...props}
        >
          {text}
        </a>
      </>
    );
  }

  // Otherwise render as button
  return (
    <>
      <button
        type={type}
        className={buttonClasses}
        onClick={handleClick}
        disabled={disabled}
        {...props}
      >
        {text}
      </button>

      {/* Show popup if this is a booking button */}
      {isBookingButton && showPopup && (
        <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};

export default Button;