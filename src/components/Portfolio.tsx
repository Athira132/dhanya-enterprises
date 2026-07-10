"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "New Vishwas Furniture",
      url: "https://newvishwasfurniture.in/",
      category: "Furniture & Interiors",
      desc: "Premium furniture showroom website showcasing luxury home and office collections.",
      image: "/images/portfolio_furniture.png",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Alfa Travel Link",
      url: "https://alfatravellink.com/",
      category: "Travel & Tourism",
      desc: "Professional travel agency portal presenting global tours, visa assistance, and flight booking.",
      image: "/images/portfolio_travel.png",
      tech: ["React", "CSS3", "Next.js"],
    },
    {
      title: "Mondari Group",
      url: "https://mondarigroup.com/",
      category: "Corporate Business",
      desc: "Multi-divisional corporate enterprise website highlighting group services and values.",
      image: "/images/portfolio_corporate.png",
      tech: ["TypeScript", "Next.js", "Tailwind"],
    },
    {
      title: "Life Care Health Solutions",
      url: "https://lifecarehealthsolutions.com/",
      category: "Healthcare & Nursing",
      desc: "Patient-oriented platform presenting home nursing, clinical care, and support details.",
      image: "/images/portfolio_healthcare.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Bloomax Residency",
      url: "https://bloomaxresidency.com/",
      category: "Hotel & Residency",
      desc: "Elegant hospitality booking showcase outlining modern residency rooms and premium amenities.",
      image: "/images/portfolio_residency.png",
      tech: ["React", "Tailwind", "Vite"],
    },
    {
      title: "Classy Wood Interior",
      url: "https://classywoodinterior.com/",
      category: "Interior Design",
      desc: "Premium interior designers portfolio displaying custom home space architectures.",
      image: "/images/portfolio_interior.png",
      tech: ["Next.js", "Tailwind", "CSS Grid"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-sans font-bold text-xs tracking-[3px] uppercase text-primary">
              OUR WORKS
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-none">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="font-sans text-base text-text-secondary max-w-md leading-relaxed">
            Helping businesses grow through modern websites, digital branding, and SEO-focused development.
          </p>
        </div>

        {/* Portfolio Grid - 6 Selected Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
              className="group bg-white border border-border-light rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col h-full relative"
            >
              
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 border-b border-border-light shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} Homepage Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                
                {/* Visual Glassmorphic Accent Border */}
                <div className="absolute inset-0 border border-white/20 rounded-t-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent pointer-events-none" />
              </div>

              {/* Project Card Metadata details */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white/70 backdrop-blur-md">
                <div className="flex flex-col gap-3">
                  {/* Industry Badge */}
                  <span className="font-sans font-bold text-[10px] tracking-wider uppercase text-primary bg-primary/5 px-2.5 py-1 rounded-md w-fit">
                    {project.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-dark group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* One Line Description */}
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Visit Website CTA link */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-sans font-bold bg-[#F8F9FA] text-text-secondary border border-gray-200/50 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="font-sans font-bold text-xs text-primary group-hover:text-primary-hover flex items-center gap-1 group-hover:underline transition-colors shrink-0">
                    Visit Website
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
