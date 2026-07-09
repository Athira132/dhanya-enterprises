"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Website Design & Development", href: "/services/website-design-development" },
    { name: "E-commerce Website Development", href: "/services/ecommerce-website-development" },
    { name: "Search Engine Optimization (SEO)", href: "/services/seo" },
    { name: "Mobile App Marketing", href: "/services/mobile-app-marketing" },
    { name: "Meta Ads (Facebook & Instagram Advertising)", href: "/services/meta-ads" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Video Editing & Motion Graphics", href: "/services/video-editing-motion-graphics" },
    { name: "Lead Generation Campaigns", href: "/services/lead-generation-campaigns" },
    { name: "Local SEO & Google Business Profile Optimization", href: "/services/local-seo-google-business-profile" },
    { name: "Marketing Strategy & Consulting", href: "/services/marketing-strategy-consulting" },
    { name: "Marketplace Marketing (Amazon, Flipkart, etc.)", href: "/services/marketplace-marketing" },
  ];

  return (
    <footer className="bg-[#111111] text-gray-400 border-t border-white/5 relative">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Col */}
        <div className="flex flex-col gap-6">
          <Link href="/#home" className="flex items-center gap-3.5 group">
            <Image
              src="/images/logo-new.png"
              alt="Dhanya Enterprises Logo"
              width={60}
              height={60}
              className="h-14 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="font-heading font-black text-xl tracking-wider text-white leading-none flex flex-col">
              DHANYA
              <span className="text-[10px] font-black tracking-widest text-[var(--brand-red)] uppercase mt-0.5">
                ENTERPRISES
              </span>
            </span>
          </Link>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            A premium full-service digital marketing agency dedicated to growing brands, accelerating revenue, and establishing digital market leadership across India.
          </p>
          
          {/* Socials */}
          <div className="flex gap-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                ),
                href: "https://www.instagram.com/dhanyaenterprisesptb/"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                href: "https://www.facebook.com/dhanyaenterprisesptb"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                href: "https://www.linkedin.com/company/dhanyaenterprises/"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.004 2C6.48 2 2.008 6.48 2.008 12.004c0 1.895.53 3.666 1.45 5.195l-1.423 5.206 5.347-1.402a9.96 9.96 0 0 0 4.63 1.15c5.52 0 10.004-4.48 10.004-10.004C22.008 6.48 17.524 2 12.004 2zm5.72 13.918c-.237.665-1.373 1.282-1.89 1.34-.486.056-1.12.093-3.197-.773-2.656-1.107-4.32-3.832-4.453-4.009-.133-.177-.977-1.303-.977-2.484 0-1.18.608-1.763.823-2.003.216-.24.502-.3.67-.3.167 0 .334.002.479.01.15.008.349-.057.546.425.2.496.685 1.67.745 1.79.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49a7.08 7.08 0 0 0 1.284 1.597c.758.675 1.396 1.106 2.062 1.39.215.093.388.083.53-.08.17-.19.743-.863.943-1.16.2-.297.4-.25.67-.15.27.1.1.72 2.27 1.15.54.11.9.27 1.02.46.12.19.12.783-.117 1.448z"/>
                  </svg>
                ),
                href: "https://wa.me/919961992772?text=Hello%20Dhanya%20Enterprises,%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me."
              }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Col */}
        <div className="flex flex-col gap-6">
          <h4 className="font-heading font-bold text-base text-white tracking-wide">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Col */}
        <div className="flex flex-col gap-6">
          <h4 className="font-heading font-bold text-base text-white tracking-wide">
            Our Services
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-sm">
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Col */}
        <div className="flex flex-col gap-6">
          <h4 className="font-heading font-bold text-base text-white tracking-wide">
            Contact Details
          </h4>
          <ul className="flex flex-col gap-4 font-sans text-sm">
            <li className="flex gap-3 items-start">
              <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <a href="tel:+919961992772" className="hover:text-primary transition-colors leading-none">
                  +91 99619 92772 (CEO)
                </a>
                <a href="tel:+919961492772" className="hover:text-primary transition-colors leading-none">
                  +91 99614 92772 (Office)
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
              <a href="mailto:dhanyaenterprisesptb@gmail.com" className="hover:text-primary transition-colors leading-tight">
                dhanyaenterprisesptb@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
              <a
                href="https://maps.app.goo.gl/CcX7dnayUTSRZDFUA"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed text-gray-500 hover:text-primary transition-colors"
              >
                Hayath Complex, Opp. Police station, Pattambi, Kerala - 679303
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer / Copyright */}
      <div className="border-t border-white/5 py-8 text-center text-xs text-gray-600 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <p>© 2026 Dhanya Enterprises. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
