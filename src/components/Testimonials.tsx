"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      {/* Decorative background glow overlay */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Script Handling: Load Elfsight CDN exactly once and optimize Core Web Vitals */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
            Testimonials
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-tight mb-4">
            Trusted by Students, Businesses & Professionals
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Read genuine customer feedback and verified Google Reviews from our local business profile.
          </p>
        </div>

        {/* Elfsight Widget Responsive Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full md:w-[90%] xl:w-[85%] bg-white rounded-[18px] shadow-sm border border-border-light/80 p-2.5 sm:p-4 overflow-hidden"
        >
          {/* Elfsight Widget Mount Point */}
          <div 
            className="elfsight-app-de173f0d-0a44-479a-833c-80cfe166df54" 
            data-elfsight-app-lazy 
          />
        </motion.div>

      </div>
    </section>
  );
}
