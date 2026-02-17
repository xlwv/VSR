"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Added useRouter
import Logo from "../../public/assets/SVG/logo.svg";
import Button from "@/components/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); // Initialize router

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Function to handle delayed navigation on mobile
  const handleMobileClick = (e, href) => {
    // Check if screen width is mobile (< 768px)
    if (window.innerWidth < 768) {
      e.preventDefault(); // Stop immediate navigation
      
      setTimeout(() => {
        setOpen(false);
        router.push(href);
      }, 500); // 0.5 sec delay
    } else {
      setOpen(false); // Immediate close for larger screens if triggered
    }
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex items-center justify-between !px-[6px] py-2">
          
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image src={Logo} alt="VSR Vriksha Logo" style={{ minWidth: "160px" }} width={150} height={50} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium nav-menu">
            {navLinks.map((link) => {
              const isActive = link.href === "/" 
                ? pathname === link.href 
                : pathname.startsWith(link.href);
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors text-[16px] group ${
                    isActive ? "text-[var(--brand-brown)] font-semibold" : "text-gray-600 hover:text-[var(--brand-brown)]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[var(--brand-brown)] transition-all duration-300 ease-in-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Call Button (DESKTOP ONLY) */}
          <div className="hidden lg:block">
            <Button text="+91 84310 04444" href="tel:+918431004444" variant="primary" />
          </div>

          {/* Hamburger (MOBILE ONLY) */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* ===== MOBILE OVERLAY (BLUR) ===== */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          lg:hidden
        `}
        onClick={() => setOpen(false)}
      />

      {/* ===== MOBILE SLIDER ===== */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="p-2 text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col items-center gap-2 mt-4 px-6">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
              ? pathname === link.href 
              : pathname.startsWith(link.href);
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleMobileClick(e, link.href)} // Applied delay function
                className={`flex justify-center w-full py-3 rounded-xl transition-all duration-200 para active:scale-95 active:bg-gray-100 group ${
                  isActive
                    ? "text-[var(--brand-brown)] font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[var(--brand-brown)]"
                }`}
              >
                <div className="relative inline-block">
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--brand-brown)] transition-all duration-300 ease-in-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
              </Link>
            );
          })}
        </nav>
        
        <div className="absolute bottom-10 w-full px-6 flex justify-center">
          <Button text="Call Now" href="tel:+918431004444" variant="primary" />
        </div>
      </div>
    </>
  );
};

export default Navbar;