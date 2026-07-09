"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Megaphone, 
  Share2, 
  Search, 
  Target, 
  FileText, 
  Mail, 
  Palette, 
  Code, 
  ShoppingBag, 
  Video, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Printer, 
  Layers 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".services-dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services", hasDropdown: true },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  const servicesList = [
    { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone },
    { name: "Social Media Marketing (SMM)", href: "/services/social-media-management", icon: Share2 },
    { name: "Search Engine Optimization (SEO)", href: "/services/digital-marketing", icon: Search },
    { name: "Google Ads (PPC)", href: "/services/digital-marketing", icon: Target },
    { name: "Meta Ads (Facebook & Instagram Ads)", href: "/services/digital-marketing", icon: Target },
    { name: "Content Marketing", href: "/services/digital-marketing", icon: FileText },
    { name: "Email Marketing", href: "/services/digital-marketing", icon: Mail },
    { name: "Branding & Graphic Design", href: "/services/logo-branding", icon: Palette },
    { name: "Website Design & Development", href: "/services/website-development", icon: Code },
    { name: "E-commerce Website Development", href: "/services/website-development", icon: ShoppingBag },
    { name: "Video Editing & Motion Graphics", href: "/services/graphic-design", icon: Video },
    { name: "Search Engine Marketing (SEM)", href: "/services/digital-marketing", icon: Search },
    { name: "WhatsApp Marketing", href: "/services/digital-marketing", icon: MessageSquare },
    { name: "Online Reputation Management (ORM)", href: "/services/digital-marketing", icon: ShieldCheck },
    { name: "Lead Generation", href: "/services/digital-marketing", icon: Users },
    { name: "Business Consulting", href: "/services/sales-marketing-training", icon: Briefcase },
    { name: "Printing Services", href: "/services/logo-branding", icon: Printer },
    { name: "Flex & Sign Board Works", href: "/services/logo-branding", icon: Layers },
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
              {/* Logo Icon */}
              <div className="relative h-7 sm:h-[34px] md:h-10 lg:h-[45px] aspect-[415/444] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-icon.png"
                  alt="Dhanya Enterprises Icon"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              {/* Brand Image */}
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
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative py-2 services-dropdown-container"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button
                        className="font-sans font-bold text-sm text-text-dark/80 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none"
                        aria-expanded={isDropdownOpen}
                      >
                        {link.name}
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 mt-3 w-[300px] max-h-[380px] overflow-y-auto bg-white border border-border-light rounded-xl shadow-xl z-50 p-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex flex-col gap-0.5"
                          >
                            {servicesList.map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setIsDropdownOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-dark/80 hover:text-[var(--brand-red)] hover:bg-[var(--brand-red)]/5 transition-all duration-200 group font-sans text-xs font-semibold"
                                >
                                  <IconComponent size={15} className="text-text-secondary/60 group-hover:text-[var(--brand-red)] transition-colors shrink-0" />
                                  <span className="truncate">{service.name}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-sans font-bold text-sm text-text-dark/80 hover:text-primary transition-colors relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
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
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col border-b border-border-light/50 py-1">
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="font-sans font-semibold text-lg text-text-dark py-2 flex items-center justify-between hover:text-primary transition-colors focus:outline-none"
                    >
                      <span>{link.name}</span>
                      <motion.span
                        animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isMobileDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden flex flex-col gap-0.5 pl-4 pb-2 max-h-[250px] overflow-y-auto scrollbar-none"
                        >
                          {servicesList.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => {
                                  setIsMobileDropdownOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-3 py-2.5 text-text-dark/75 hover:text-[var(--brand-red)] transition-colors font-sans text-sm font-semibold"
                              >
                                <IconComponent size={14} className="text-text-secondary/60 shrink-0" />
                                <span className="truncate">{service.name}</span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans font-semibold text-lg text-text-dark py-2 border-b border-border-light/50 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
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
