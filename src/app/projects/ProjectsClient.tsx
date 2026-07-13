"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Subpage Hero Section */}
        <SubpageHero
          titlePrefix="Building Brands That"
          titleHighlight="Grow"
          description="Browse our portfolio of high-performing deployed websites, custom business engines, and brand catalogs built for exceptional search presence."
          breadcrumbCategory="Projects"
        />

        {/* Portfolio Content */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                  className="group bg-white/70 backdrop-blur-md border border-border-light rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col h-full relative"
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
                  <div className="p-6 flex flex-col justify-between flex-1 bg-white/70">
                    <div className="flex flex-col gap-3">
                      {/* Category Badge */}
                      <span className="font-sans font-bold text-[10px] tracking-wider uppercase text-primary bg-primary/5 px-2.5 py-1 rounded-md w-fit">
                        {project.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="font-heading font-bold text-lg text-dark group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Badges & CTAs */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[9px] font-sans font-bold bg-[#F8F9FA] text-text-secondary border border-gray-200/50 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-sans font-bold text-xs text-primary group-hover:text-primary-hover flex items-center gap-1.5 group-hover:underline transition-colors shrink-0">
                          Visit Website
                          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                        
                        {/* Conditional GitHub Link placeholder to meet requirements */}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-text-secondary transition-colors flex items-center justify-center"
                            aria-label="GitHub Repository"
                          >
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.article>
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
