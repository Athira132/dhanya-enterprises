"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Laptop, ShoppingBag, Search, Smartphone, Megaphone, Palette, Video, Users, MapPin, TrendingUp, Globe, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: "website-design-development",
      title: "Website Design & Development",
      icon: <Laptop size={24} />,
      image: "/images/portfolio_ecommerce.jpg",
      description: "Custom Next.js, React, and WordPress sites optimized for extreme loading speed, SEO, and visual excellence.",
    },
    {
      id: "ecommerce-website-development",
      title: "E-commerce Website Development",
      icon: <ShoppingBag size={24} />,
      image: "/images/portfolio_fashion.jpg",
      description: "Sleek online storefronts with secure payment gateways, inventory sync, and seamless buyer checkouts.",
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      icon: <Search size={24} />,
      image: "/images/portfolio_education.jpg",
      description: "Rank #1 on Google with advanced keyword strategies, technical audits, on-page edits, and authority backlinking.",
    },
    {
      id: "mobile-app-marketing",
      title: "Mobile App Marketing",
      icon: <Smartphone size={24} />,
      image: "/images/portfolio_healthcare.jpg",
      description: "Increase app installs and user retention with structured App Store Optimization (ASO) and cost-efficient user acquisition.",
    },
    {
      id: "meta-ads",
      title: "Meta Ads (Facebook & Instagram Advertising)",
      icon: <Megaphone size={24} />,
      image: "/images/portfolio_real_estate.jpg",
      description: "Target high-intent customers, create high-converting copy, and optimize ad layouts to scale lead generation.",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: <Palette size={24} />,
      image: "/images/portfolio_fashion.jpg",
      description: "Premium visual assets including flyers, brochures, custom business profiles, brochures, and brand catalogs.",
    },
    {
      id: "video-editing-motion-graphics",
      title: "Video Editing & Motion Graphics",
      icon: <Video size={24} />,
      image: "/images/portfolio_restaurant.jpg",
      description: "Capture eyes with engaging daily Reels, professional video edits, text-animations, and premium branding motion assets.",
    },
    {
      id: "lead-generation-campaigns",
      title: "Lead Generation Campaigns",
      icon: <Users size={24} />,
      image: "/images/hero_team.jpg",
      description: "Scale B2B or B2C queries with advanced landing page forms, CRM automation, and targeted sales funnels.",
    },
    {
      id: "local-seo-google-business-profile",
      title: "Local SEO & Google Business Profile Optimization",
      icon: <MapPin size={24} />,
      image: "/images/portfolio_real_estate.jpg",
      description: "Dominate local maps searches in your region and attract local walking customers directly to your storefront.",
    },
    {
      id: "marketing-strategy-consulting",
      title: "Marketing Strategy & Consulting",
      icon: <TrendingUp size={24} />,
      image: "/images/hero_team.jpg",
      description: "Interactive consulting workshops, competitive research, and long-term scaling strategy for startups.",
    },
    {
      id: "marketplace-marketing",
      title: "Marketplace Marketing (Amazon, Flipkart, etc.)",
      icon: <Globe size={24} />,
      image: "/images/portfolio_ecommerce.jpg",
      description: "Optimize product listings, run cost-efficient marketplace Ads, and design A+ content to boost online store sales.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative pt-36 pb-20 bg-[#111111] text-white overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-gray-400 mb-6 tracking-wider uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-primary font-bold">Services</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-4 tracking-tight">
                Our Digital <span className="text-primary">Services</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed">
                Explore our full suite of professional services engineered to drive traffic, elevate visual brand identities, and convert organic clicks into customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-border-light rounded-[18px] overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 group flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Icon Container */}
                      <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary border border-border-light shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white z-20">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-10">
                      {/* Title */}
                      <h3 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="px-8 pb-8">
                    <Link
                      href={`/services/${service.id}`}
                      className="w-full bg-[#F8F8F8] border border-border-light text-text-dark font-sans font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300"
                    >
                      Read More
                      <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
