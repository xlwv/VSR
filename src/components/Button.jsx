"use client";

/**
 * Reusable Button Component with 4 variants
 *
 * VARIANTS:
 * 1. primary      - Brown background, white text (default)
 * 2. secondary    - Yellow background, black text
 * 3. outline      - Transparent with brown border
 * 4. outlineWhite - Transparent with white border (dark backgrounds)
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
  const isBookingButton =
    text.toLowerCase().includes("book your stay") ||
    text.toLowerCase().includes("book now");

  const handleClick = (e) => {
    if (disabled) return;

    if (isBookingButton) {
      e.preventDefault();
      // Fire a global custom event — PopupForm in page.js listens for this.
      // This means PopupForm is NEVER rendered inside Button, so it can never
      // be trapped inside a stacking context created by a parent section.
      window.dispatchEvent(new CustomEvent("open-booking-popup"));
      return;
    }

    if (onClick) onClick(e);
  };

  const sizeClasses = {
    sm: "px-6 py-2 text-xs md:text-sm",
    md: "px-8 py-2.5 text-sm md:text-base",
    lg: "px-10 py-3 text-base md:text-lg",
  };

  const variantClasses = {
    primary: `
      bg-[var(--brand-brown)]
      text-white
      border-none
      hover:bg-[#7f3214]
      hover:shadow-lg
      active:transform active:scale-95
    `,
    secondary: `
      bg-[var(--brand-yellow)]
      text-black
      border-none
      hover:bg-[#e6b829]
      hover:shadow-lg
      active:transform active:scale-95
    `,
    outline: `
      bg-transparent
      text-[var(--brand-brown)]
      border-2
      border-[var(--brand-brown)]
      hover:bg-[var(--brand-brown)]
      hover:text-white
      active:transform active:scale-95
    `,
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

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim().replace(/\s+/g, " ");

  if (href && !isBookingButton) {
    return (
      <a href={href} className={buttonClasses} onClick={handleClick} {...props}>
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;