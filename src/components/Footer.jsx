import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-800 to-orange-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column - Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">VSR Vriksha</h2>
          <p className="para opacity-90">
            A center for naturopathic treatment of myriad ailments. 
            Experience the healing power of nature amidst the pristine environs.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 pt-2">
  <a
    href="https://www.facebook.com/VSRNaturecure"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
    aria-label="Facebook"
  >
    <FaFacebookF className="w-5 h-5" />
  </a>

  <a
    href="https://www.instagram.com/vsrvrikshanaturecurecenter/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
    aria-label="Instagram"
  >
    <FaInstagram className="w-5 h-5" />
  </a>

  <a
    href="https://twitter.com/Official_VSR"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
    aria-label="Twitter"
  >
    <FaXTwitter className="w-5 h-5" />
  </a>

  <a
    href="https://www.linkedin.com/company/vsr-nature-cure-center/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn className="w-5 h-5" />
  </a>
</div>

        </div>

        {/* Middle Column - Quick Links */}
        <div>
          <h3 className=" font-semibold mb-4">Quick links</h3>
          
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="opacity-90 hover:text-orange-200 transition-colors">
<p>
                About Us
              </p>
</Link>
            </li>
            <li>
              <Link href="/programs" className="opacity-90 hover:text-orange-200 transition-colors">
<p>
                Programs
              </p>
</Link>
            </li>
            <li>
              <Link href="/services" className="opacity-90 hover:text-orange-200 transition-colors">
<p>
                Services
              </p>
</Link>
            </li>
            <li>
              <Link href="/gallery" className="opacity-90 hover:text-orange-200 transition-colors">
<p>
                Gallery
              </p>
</Link>
            </li>
            <li>
              <Link href="/blog" className="opacity-90 hover:text-orange-200 transition-colors">
<p>
                Blogs
              </p>
</Link>
            </li>
            <li>
              <Link href="/contact" className="opacity-90 hover:text-orange-200 transition-colors">
<p>
                Contact Us
              </p>
</Link>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Info */}
        <div>
          <h3 className=" font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
             
            {/* Address */}
            <div className="flex gap-3">
              <FaLocationDot className="w-5 h-5 mt-1 flex-shrink-0" />
              <a href="https://maps.app.goo.gl/wwE1ef6rBD5QxqPd7" className="para">
                Irish Valley, Dharmaram Village, Near Bits Pilani campus, 
                Keesara Mandal, Medchal District, Shamirpet, Telangana - 501301
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex gap-3 items-start">
  <FaPhone className="w-5 h-5 mt-1 flex-shrink-0" />

  <div className="text-sm space-y-1">
    <a
      href="tel:+918431004444"
      className="block opacity-90 hover:text-orange-200 transition-colors"
    >
      +91 84310 04444
    </a>

    <a
      href="tel:+918905004444"
      className="block opacity-90 hover:text-orange-200 transition-colors"
    >
      +91 89050 04444
    </a>
  </div>
</div>


            {/* Email */}
            <div className="flex gap-3">
              <FaEnvelope className="w-5 h-5 flex-shrink-0" />
              <a 
                href="mailto:contact@vsrvriksha.com" 
                className="opacity-90 hover:text-orange-200 transition-colors"
              >
                contact@vsrvriksha.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="para w-full text-center opacity-80">
            © Copyright 2026 All Rights Reserved
          </p>
          {/* <Link href="/privacy" className="opacity-90 hover:text-orange-200 transition-colors">
            <p>
            Privacy Policy
          </p>
        </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;