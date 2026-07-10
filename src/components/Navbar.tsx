"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Laptop, 
  ShoppingBag, 
  Search, 
  Smartphone, 
  Megaphone, 
  Palette, 
  Video, 
  Users, 
  MapPin, 
  TrendingUp, 
  Globe 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const pathname = usePathname();

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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesList = [
    { name: "Website Design & Development", href: "/services/website-design-development", icon: Laptop },
    { name: "E-commerce Website Development", href: "/services/ecommerce-website-development", icon: ShoppingBag },
    { name: "Search Engine Optimization (SEO)", href: "/services/seo", icon: Search },
    { name: "Mobile App Marketing", href: "/services/mobile-app-marketing", icon: Smartphone },
    { name: "Meta Ads (Facebook & Instagram)", href: "/services/meta-ads", icon: Megaphone },
    { name: "Graphic Design", href: "/services/graphic-design", icon: Palette },
    { name: "Video Editing & Motion Graphics", href: "/services/video-editing-motion-graphics", icon: Video },
    { name: "Lead Generation Campaigns", href: "/services/lead-generation-campaigns", icon: Users },
    { name: "Local SEO & Google Profile", href: "/services/local-seo-google-business-profile", icon: MapPin },
    { name: "Marketing Strategy & Consulting", href: "/services/marketing-strategy-consulting", icon: TrendingUp },
    { name: "Marketplace Marketing", href: "/services/marketplace-marketing", icon: Globe },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/services")) return pathname.startsWith("/services");
    return pathname === href;
  };

  const getLinkClass = (href: string) => {
    const active = isActive(href);
    const base = "font-sans font-semibold text-[16px] transition-colors duration-300 relative group py-2 cursor-pointer flex items-center gap-1.5 focus:outline-none";
    return `${base} ${active ? "text-[#E50914]" : "text-[#222222] hover:text-[#E50914]"}`;
  };

  return (
    <>
      {/* Sticky Navigation Bar with Frosted Glass light background */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "py-3.5 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-black/5" 
            : "py-5.5 bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* Logo container */}
          <div className="flex items-center gap-3 z-10 shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-new.png"
                  alt="Dhanya Enterprises Icon"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              {/* Brand Text */}
              <span className="font-heading font-black text-lg sm:text-xl tracking-wider leading-none flex flex-col text-[#1A1A1A] group-hover:text-[#E50914] transition-colors">
                DHANYA
                <span className="text-[9px] font-black tracking-widest text-[#E50914] uppercase mt-0.5">
                  ENTERPRISES
                </span>
              </span>
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
                        className={getLinkClass(link.href)}
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
                            className="absolute left-1/2 -translate-x-1/2 mt-3 w-[320px] max-h-[420px] overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-2.5 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex flex-col gap-0.5"
                          >
                            {servicesList.map((service) => {
                              const IconComponent = service.icon;
                              const isServiceActive = pathname === service.href;
                              return (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setIsDropdownOpen(false)}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group font-sans text-xs font-semibold ${
                                    isServiceActive 
                                      ? "text-[#E50914] bg-[#E50914]/5 font-bold" 
                                      : "text-[#222222]/80 hover:text-[#E50914] hover:bg-[#E50914]/5"
                                  }`}
                                >
                                  <IconComponent 
                                    size={15} 
                                    className={`transition-colors shrink-0 ${
                                      isServiceActive 
                                        ? "text-[#E50914]" 
                                        : "text-gray-400 group-hover:text-[#E50914]"
                                    }`} 
                                  />
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
                    className={getLinkClass(link.href)}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#E50914] transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:block z-10">
            <Link
              href="/contact"
              className="bg-[#E50914] hover:bg-[#C80012] text-white font-sans font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-[#E50914]/20 hover:shadow-lg hover:shadow-[#E50914]/30 transform hover:-translate-y-0.5 inline-block cursor-pointer"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#222222] hover:text-[#E50914] transition-colors focus:outline-none z-10"
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
            className="fixed inset-x-0 top-[70px] z-40 bg-white shadow-xl border-t border-gray-100 lg:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col border-b border-gray-100 py-1">
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="font-sans font-semibold text-lg text-[#222222] py-2 flex items-center justify-between hover:text-[#E50914] transition-colors focus:outline-none"
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
                          className="overflow-hidden flex flex-col gap-0.5 pl-4 pb-2 max-h-[300px] overflow-y-auto scrollbar-none"
                        >
                          {servicesList.map((service) => {
                            const IconComponent = service.icon;
                            const isServiceActive = pathname === service.href;
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => {
                                  setIsMobileDropdownOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`flex items-center gap-3 py-2.5 transition-colors font-sans text-sm font-semibold ${
                                  isServiceActive 
                                    ? "text-[#E50914] bg-[#E50914]/5 px-2 rounded-lg" 
                                    : "text-[#222222]/80 hover:text-[#E50914]"
                                }`}
                              >
                                <IconComponent 
                                  size={14} 
                                  className={`shrink-0 ${isServiceActive ? "text-[#E50914]" : "text-gray-400"}`} 
                                />
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

              const isLinkActive = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans font-semibold text-lg py-2 border-b border-gray-100 transition-colors ${
                    isLinkActive ? "text-[#E50914] font-bold" : "text-[#222222] hover:text-[#E50914]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#E50914] hover:bg-[#C80012] text-white font-sans font-semibold text-center py-3.5 rounded-full mt-4 transition-all duration-300 shadow-md cursor-pointer"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
