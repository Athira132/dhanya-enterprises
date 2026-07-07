"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
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
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
              Case Studies
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-none">
              Our Premium <span className="text-primary">Portfolio</span>
            </h2>
          </div>
          <p className="font-sans text-base text-text-secondary max-w-md">
            Discover how we help diverse industries establish digital leadership and hit massive growth benchmarks.
          </p>
        </div>

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
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[18px] overflow-hidden border border-border-light shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/10 group cursor-pointer relative"
              >
                {/* Image & Overlay Container */}
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Result Tag Overlay (Top Left) */}
                  <div className="absolute top-4 left-4 bg-primary text-white font-sans font-bold text-xs px-3.5 py-2 rounded-full shadow-md z-10">
                    {project.result}
                  </div>

                  {/* Dark Hover Overlay with "View Project" */}
                  <div className="absolute inset-0 bg-dark/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
                    >
                      <span className="font-sans font-bold text-sm text-white">View Project</span>
                      <ArrowUpRight size={16} className="text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Text Details */}
                <div className="p-6 relative z-10 bg-white">
                  <p className="font-sans font-bold text-[11px] text-primary uppercase tracking-widest mb-1.5">
                    {project.category}
                  </p>
                  <h3 className="font-heading font-bold text-lg text-dark leading-tight mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary">
                    {project.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
