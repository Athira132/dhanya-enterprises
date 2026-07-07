"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* Logo & Brand Name - Primary Visual Focus */}
          <div className="flex-shrink-0 z-10">
            <Link href="/#home" className="flex items-center gap-2.5 group">
              {/* New Logo Icon */}
              <div className="relative h-7 sm:h-[34px] md:h-10 lg:h-[45px] aspect-[415/444] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-icon.png"
                  alt="Dhanya Enterprises Icon"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              {/* Existing Brand Image */}
              <div className="relative h-10 sm:h-12 md:h-[54px] lg:h-[60px] aspect-[633/276] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/navbar-logo.png"
                  alt="Dhanya Enterprises Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Perfectly Centered Navigation (Desktop) */}
          <div className="hidden lg:flex items-center justify-center absolute inset-x-0 mx-auto w-fit">
            <div className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans font-bold text-sm text-text-dark/80 hover:text-primary transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:block z-10">
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-hover text-white font-sans font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 inline-block cursor-pointer"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-dark hover:text-primary transition-colors focus:outline-none z-10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-white shadow-xl border-t border-border-light lg:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans font-semibold text-lg text-text-dark py-2 border-b border-border-light/50 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary hover:bg-primary-hover text-white font-sans font-semibold text-center py-3.5 rounded-full mt-4 transition-all duration-300 shadow-md cursor-pointer"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
