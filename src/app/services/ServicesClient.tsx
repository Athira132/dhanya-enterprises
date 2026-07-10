"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Laptop, ShoppingBag, Search, Smartphone, Megaphone, Palette, Video, Users, MapPin, TrendingUp, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";

export default function ServicesClient() {
  const services = [
    {
      id: "website-design-development",
      title: "Website Design & Development",
      icon: <Laptop size={24} />,
      image: "/images/service_webdev.jpg",
      description: "Custom Next.js, React, and WordPress sites optimized for extreme loading speed, SEO, and visual excellence.",
      examples: [
        { name: "Mondari Group", badge: "Corporate", desc: "Multi-division Business Portal" },
        { name: "New Vishwas Furniture", badge: "Furniture", desc: "Custom Brand Showcase" }
      ],
    },
    {
      id: "ecommerce-website-development",
      title: "E-commerce Website Development",
      icon: <ShoppingBag size={24} />,
      image: "/images/service_ecommerce.jpg",
      description: "Sleek online storefronts with secure payment gateways, inventory sync, and seamless buyer checkouts.",
      examples: [
        { name: "New Vishwas Furniture", badge: "Furniture", desc: "Product-focused User Interface" },
        { name: "Classy Wood Interior", badge: "Interior", desc: "Catalog Ordering Gateway" }
      ],
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      icon: <Search size={24} />,
      image: "/images/service_seo.jpg",
      description: "Rank #1 on Google with advanced keyword strategies, technical audits, on-page edits, and authority backlinking.",
      examples: [
        { name: "Klay Ayurveda", badge: "Ayurveda", desc: "Calming Trustworthy Wellness SEO" },
        { name: "Alfa Travel Link", badge: "Travel", desc: "Search Optimized Package Funnels" }
      ],
    },
    {
      id: "mobile-app-marketing",
      title: "Mobile App Marketing",
      icon: <Smartphone size={24} />,
      image: "/images/service_appmarketing.jpg",
      description: "Increase app installs and user retention with structured App Store Optimization (ASO) and cost-efficient user acquisition.",
      examples: [
        { name: "Alfa Travel Link", badge: "Travel", desc: "Direct App Install Campaigns" }
      ],
    },
    {
      id: "meta-ads",
      title: "Meta Ads (Facebook & Instagram Advertising)",
      icon: <Megaphone size={24} />,
      image: "/images/service_metaads.jpg",
      description: "Target high-intent customers, create high-converting copy, and optimize ad layouts to scale lead generation.",
      examples: [
        { name: "Life Care Health Solutions", badge: "Healthcare", desc: "Meta conversions for Home Care" },
        { name: "Bloomax Residency", badge: "Hospitality", desc: "Targeted Meta Booking Ads" }
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: <Palette size={24} />,
      image: "/images/service_branding.jpg",
      description: "Premium visual assets including flyers, brochures, custom business profiles, brochures, and brand catalogs.",
      examples: [
        { name: "Mondari Group", badge: "Corporate", desc: "Sleek Corporate Profile Layouts" }
      ],
    },
    {
      id: "video-editing-motion-graphics",
      title: "Video Editing & Motion Graphics",
      icon: <Video size={24} />,
      image: "/images/service_videoediting.jpg",
      description: "Capture eyes with engaging daily Reels, professional video edits, text-animations, and premium branding motion assets.",
      examples: [
        { name: "Bloomax Residency", badge: "Hospitality", desc: "High-engagement Resort Reel edits" }
      ],
    },
    {
      id: "lead-generation-campaigns",
      title: "Lead Generation Campaigns",
      icon: <Users size={24} />,
      image: "/images/service_leads.jpg",
      description: "Scale B2B or B2C queries with advanced landing page forms, CRM automation, and targeted sales funnels.",
      examples: [
        { name: "Life Care Health Solutions", badge: "Healthcare", desc: "CRM-integrated Lead Pipelines" },
        { name: "Classy Wood Interior", badge: "Interior", desc: "Objection-free Query Funnels" }
      ],
    },
    {
      id: "local-seo-google-business-profile",
      title: "Local SEO & Google Business Profile Optimization",
      icon: <MapPin size={24} />,
      image: "/images/service_localseo.jpg",
      description: "Dominate local maps searches in your region and attract local walking customers directly to your storefront.",
      examples: [
        { name: "Klay Ayurveda", badge: "Ayurveda", desc: "GBP local ranking optimization" },
        { name: "Classy Wood Interior", badge: "Interior", desc: "Local Map Rankings Palakkad" }
      ],
    },
    {
      id: "marketing-strategy-consulting",
      title: "Marketing Strategy & Consulting",
      icon: <TrendingUp size={24} />,
      image: "/images/service_consulting.jpg",
      description: "Interactive consulting workshops, competitive research, and long-term scaling strategy for startups.",
      examples: [
        { name: "Mondari Group", badge: "Corporate", desc: "12-month Corporate Strategy Sync" }
      ],
    },
    {
      id: "marketplace-marketing",
      title: "Marketplace Marketing (Amazon, Flipkart, etc.)",
      icon: <Globe size={24} />,
      image: "/images/service_marketplace.jpg",
      description: "Optimize product listings, run cost-efficient marketplace Ads, and design A+ content to boost online store sales.",
      examples: [
        { name: "New Vishwas Furniture", badge: "Furniture", desc: "Store listing keywords audit" }
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Subpage Hero Section */}
        <SubpageHero
          titlePrefix="Digital Marketing That"
          titleHighlight="Delivers"
          description="Explore our full suite of professional Digital Marketing and Website Development services engineered to drive traffic, elevate visual brand identities, and convert organic clicks into customers."
          breadcrumbCategory="Services"
        />

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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Icon Container */}
                      <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary border border-border-light shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white z-20">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-10 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title */}
                        <h3 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Real Examples Showcase */}
                      {service.examples && service.examples.length > 0 && (
                        <div className="border-t border-gray-100 pt-4 mt-2">
                          <span className="text-[10px] font-sans font-bold text-primary uppercase tracking-wider block mb-2 select-none">
                            Completed Projects:
                          </span>
                          <div className="flex flex-col gap-2.5">
                            {service.examples.map((ex, idx) => (
                              <div key={idx} className="flex items-start justify-between gap-2 text-xs">
                                <div className="flex flex-col">
                                  <span className="font-sans font-semibold text-dark leading-tight">{ex.name}</span>
                                  <span className="font-sans text-[9px] text-text-secondary mt-0.5 leading-normal">{ex.desc}</span>
                                </div>
                                <span className="text-[8px] font-sans font-bold bg-[#F8F9FA] border border-gray-200/60 text-text-secondary px-2 py-0.5 rounded shrink-0">
                                  {ex.badge}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
