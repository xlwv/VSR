import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-800 to-orange-900 text-white">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-serif font-semibold">
            VSR <span className="font-light">Vriksha</span>
          </h2>

          <p className="text-xl leading-relaxed text-white/90">
            A naturopathic wellness centre offering holistic care for a wide
            range of ailments. Experience the healing power of nature in
            serene, pristine surroundings.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[ 
              {
                href: "https://www.facebook.com/VSRNaturecure",
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/vsrvrikshanaturecurecenter/",
                icon: <FaInstagram />,
                label: "Instagram",
              },
              {
                href: "https://twitter.com/Official_VSR",
                icon: <FaXTwitter />,
                label: "Twitter",
              },
              {
                href: "https://www.linkedin.com/company/vsr-nature-cure-center/",
                icon: <FaLinkedinIn />,
                label: "LinkedIn",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition duration-300"
              >
                <span className="text-lg">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:pl-10">
          <h3 className="text-2xl font-serif mb-6">Quick Links</h3>

          <ul className="space-y-3 text-base">
            <li>
              <Link href="/about" className="hover:text-orange-200 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-orange-200 transition">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-200 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-orange-200 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-orange-200 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-200 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:pl-10">
          <h3 className="text-2xl font-serif mb-6">Contact Us</h3>

          <div className="space-y-5 text-base">

            {/* Address */}
            <div className="flex items-start gap-3">
              <FaLocationDot className="text-lg mt-2 flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/wwE1ef6rBD5QxqPd7"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:text-orange-200 transition"
              >
                Irish Valley, Dharmaram Village, Near Bits Pilani campus,
                Keesara Mandal, Medchal District, Shamirpet, Telangana - 501301
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <FaPhone className="text-lg mt-2 flex-shrink-0" />
              <div className="space-y-1">
                <a
                  href="tel:+918431004444"
                  className="block hover:text-orange-200 transition"
                >
                  +91 84310 04444
                </a>
                <a
                  href="tel:+918905004444"
                  className="block hover:text-orange-200 transition"
                >
                  +91 89050 04444
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg flex-shrink-0" />
              <a
                href="mailto:contact@vsrvriksha.com"
                className="hover:text-orange-200 transition"
              >
                contact@vsrvriksha.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-md text-white/80">
    
    {/* Copyright */}
    <p className="text-center md:text-left">
      © Copyright 2026 All Rights Reserved
    </p>

    {/* Privacy Policy */}
    <p
      
      className="text-center md:text-left">
      Privacy Policy
    </p>

  </div>
</div>
    </footer>
  );
};

export default Footer;