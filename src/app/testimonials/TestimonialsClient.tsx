"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import Script from "next/script";
import SubpageHero from "@/components/SubpageHero";

export default function TestimonialsClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Script Handling: Load Elfsight CDN exactly once and optimize Core Web Vitals */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload" 
      />

      <main className="flex-1">
        {/* Subpage Hero Section */}
        <SubpageHero
          titlePrefix="Client Success"
          titleHighlight="Stories"
          description="Trusted by Students, Businesses & Professionals. Read genuine feedback and live reviews fetched directly from our Google Business Profile."
          breadcrumbCategory="Testimonials"
        />

        {/* Testimonials List container */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
