"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-primary to-red-700 rounded-[18px] p-8 md:p-16 text-center text-white overflow-hidden shadow-xl shadow-primary/20"
        >
          {/* Background Decorative Rings */}
          <div className="absolute top-0 right-0 w-80 h-80 border-4 border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          {/* Text Content */}
          <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Ready to Scale Your Business?
            </h2>
            <p className="font-sans text-white/90 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Let&apos;s build your digital presence, dominate your local search, and generate high-value customers. Schedule a chat with our experts today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mt-6">
              <Link
                href="/#contact"
                className="bg-white hover:bg-gray-50 text-primary font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Schedule Meeting
                <Calendar size={18} />
              </Link>
              <a
                href="tel:+919961992772"
                className="bg-[#C2040F] hover:bg-red-800 text-white border border-white/20 font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-inner cursor-pointer"
              >
                Call Now
                <Phone size={18} />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
