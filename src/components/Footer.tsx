"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    { name: "Digital Business Card", href: "/services/digital-business-card" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Sales & Marketing Training", href: "/services/sales-marketing-training" },
    { name: "Logo & Branding", href: "/services/logo-branding" },
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "Graphic Design", href: "/services/graphic-design" },
  ];

  return (
    <footer className="bg-[#111111] text-gray-400 border-t border-white/5 relative">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Col */}
        <div className="flex flex-col gap-6">
          <Link href="/#home" className="flex items-center gap-3.5 group">
            <Image
              src="/images/logo.png"
              alt="Dhanya Enterprises Logo"
              width={60}
              height={60}
              className="h-14 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="font-heading font-black text-xl tracking-wider text-white leading-none flex flex-col">
              DHANYA
              <span className="text-[10px] font-black tracking-widest text-[#E30613] uppercase mt-0.5">
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
                href: "#"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                href: "#"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                href: "#"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.517 2.266 2.268 3.51 5.28 3.505 8.484-.011 6.657-5.347 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.589 1.972 14.12 .949 11.49.949c-5.437 0-9.862 4.372-9.866 9.8.001 1.736.46 3.431 1.332 4.937L1.93 21.09l5.63-1.472c.007-.003.014-.007.021-.01-.007.003-.014.007-.021.01-.002-.001-.005-.003-.007-.004zM17.43 14.99c-.313-.157-1.853-.915-2.14-.997-.288-.083-.498-.124-.707.19-.208.313-.807.997-.99 1.205-.183.208-.367.229-.68.072-1.63-.818-2.766-1.536-3.86-3.418-.29-.497.29-.461.83-1.539.09-.18.04-.339-.02-.497-.06-.157-.498-1.205-.683-1.654-.18-.435-.36-.375-.497-.382-.128-.007-.275-.007-.423-.007s-.387.056-.59.278c-.203.222-.777.759-.777 1.85 0 1.09.794 2.145.905 2.296.11.15 1.56 2.38 3.78 3.34.528.228 1.01.378 1.353.488.53.169 1.01.145 1.393.088.427-.064 1.853-.759 2.115-1.492.263-.733.263-1.36.184-1.491-.08-.13-.29-.209-.6-.366z"/>
                  </svg>
                ),
                href: "https://wa.me/919840123456"
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
              <a href="tel:+919840123456" className="hover:text-primary transition-colors leading-tight">
                +91 98401 23456
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
              <a href="mailto:info@dhanyaenterprises.com" className="hover:text-primary transition-colors leading-tight">
                info@dhanyaenterprises.com
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
              <span className="leading-relaxed text-gray-500">
                Suite 405, Executive Chambers, MG Road, Bangalore - 560001
              </span>
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
