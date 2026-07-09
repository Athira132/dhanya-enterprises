"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Websites", "Branding", "Marketing", "Social Media"];

  const projects = [
    {
      title: "Gourmet Garden Restaurant",
      category: "Social Media",
      image: "/images/portfolio_restaurant.jpg",
      result: "+145% Table Bookings",
      details: "Organic Content & Local Engagement",
    },
    {
      title: "Oakridge Luxury Villas",
      category: "Marketing",
      image: "/images/portfolio_real_estate.jpg",
      result: "62 Leads in 30 Days",
      details: "Targeted Meta Ads Campaigns",
    },
    {
      title: "Aspirant Elite Academy",
      category: "Websites",
      image: "/images/portfolio_education.jpg",
      result: "Fast & SEO Optimized",
      details: "Next.js Web Portal Development",
    },
    {
      title: "Dr. Mehta's Heart Care",
      category: "Social Media",
      image: "/images/portfolio_healthcare.jpg",
      result: "180+ Doctor Consults",
      details: "Local SEO & Credibility Growth",
    },
    {
      title: "ChronoLux Luxury Watches",
      category: "Websites",
      image: "/images/portfolio_ecommerce.jpg",
      result: "4.8x Ad Return (ROAS)",
      details: "High-Converting Shopify Store",
    },
    {
      title: "Vogue Maison Fashion",
      category: "Branding",
      image: "/images/portfolio_fashion.jpg",
      result: "1.2M+ Reach",
      details: "Premium Logo & Style Architecture",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              <span className="text-primary font-bold">Projects</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-4 tracking-tight">
                Our Work Portfolio
              </h1>
              <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed">
                Take a look at how we help diverse industries build high-converting e-commerce engines, local maps visibility, and corporate branding identity systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Content */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
            
            {/* Filter Categories Tabs */}
            <div className="flex flex-wrap gap-2.5 mb-12 border-b border-border-light pb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-[#F8F8F8] text-text-secondary hover:bg-primary/5 hover:text-primary border border-border-light"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={project.title}
                    className="bg-white border border-border-light rounded-[18px] overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group h-full"
                  >
                    <div>
                      {/* Image block */}
                      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-white/95 text-primary font-sans font-extrabold text-[10px] tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm z-20">
                          {project.result}
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-8">
                        <span className="font-sans font-bold text-[10px] text-primary uppercase tracking-widest block mb-2">
                          {project.category}
                        </span>
                        <h3 className="font-heading font-bold text-xl text-dark mb-2.5 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-sans text-sm text-text-secondary">
                          {project.details}
                        </p>
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <Link 
                        href="/contact"
                        className="w-full bg-[#F8F8F8] border border-border-light text-text-dark font-sans font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        Enquire About Similar Project
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

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
