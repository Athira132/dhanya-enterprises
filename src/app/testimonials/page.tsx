"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function TestimonialsPage() {
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
        {/* Banner Section */}
        <section className="relative pt-36 pb-20 bg-[#111111] text-white overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-gray-400 mb-6 tracking-wider uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-primary font-bold">Testimonials</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-4 tracking-tight">
                Client Success Stories
              </h1>
              <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed">
                Trusted by Students, Businesses & Professionals. Genuine feedback and live reviews fetched directly from our Google Business Profile.
              </p>
            </motion.div>
          </div>
        </section>

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
