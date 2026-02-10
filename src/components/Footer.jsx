import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-800 to-orange-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column - Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">VSR Vriksha</h2>
          <p className="text-sm leading-relaxed opacity-90">
            A center for naturopathic treatment of myriad ailments. 
            Experience the healing power of nature amidst the pristine environs.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 pt-2">
            <Link 
              href="#" 
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm hover:text-orange-200 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-sm hover:text-orange-200 transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:text-orange-200 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-sm hover:text-orange-200 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-sm hover:text-orange-200 transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-orange-200 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            
            {/* Address */}
            <div className="flex gap-3">
              <FaLocationDot className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm">
                Irish Valley, Dharmaram Village, Near Bits Pilani campus, 
                Keesara Mandal, Medchal District, Shamirpet, Telangana - 501301
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex gap-3">
              <FaPhone className="w-5 h-5 flex-shrink-0" />
              <div className="text-sm">
                <a href="tel:+918431004444" className="hover:text-orange-200 transition-colors">
                  +91 84310 04444
                </a>
                {" | "}
                <a href="tel:+918905004444" className="hover:text-orange-200 transition-colors">
                  +91 89050 04444
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <FaEnvelope className="w-5 h-5 flex-shrink-0" />
              <a 
                href="mailto:contact@vsrvriksha.com" 
                className="text-sm hover:text-orange-200 transition-colors"
              >
                contact@vsrvriksha.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm opacity-80">
            © Copyright 2025 All Rights Reserved
          </p>
          <Link href="/privacy" className="text-sm hover:text-orange-200 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
