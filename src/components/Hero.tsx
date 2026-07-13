"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-white">
      {/* Decorative Background Elements - White with subtle abstract red gradient shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-100/20 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Side: Copy & Stats */}
        <div className="lg:col-span-6 flex flex-col gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Premium Digital Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="font-heading font-black text-[36px] sm:text-[48px] lg:text-[58px] xl:text-[60px] leading-[1.1] text-[#1A1A1A] tracking-[-1px]"
          >
            Accelerate <span className="text-[#E50914]">Business Growth</span> through <span className="text-[#E50914]">Digital Marketing</span> with <span className="text-[#E50914]">Dhanya Enterprises</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
          >
            We help businesses build their online presence through websites, branding, digital marketing, and business solutions that generate real results.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Get Started
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/#services"
              className="bg-white border border-border-light hover:border-primary/30 text-text-dark hover:text-primary font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 text-center hover:bg-primary/5 shadow-sm transform hover:-translate-y-0.5"
            >
              View Services
            </Link>
          </motion.div>

          {/* Floating Statistics Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
            className="grid grid-cols-3 gap-4 border-t border-border-light pt-8 mt-4"
          >
            {[
              { label: "Happy Clients", value: "250+" },
              { label: "Projects Done", value: "400+" },
              { label: "Satisfaction", value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-heading font-black text-2xl md:text-3xl text-dark flex items-center gap-1.5">
                  <span className="text-primary text-sm sm:text-base">✔</span> {stat.value}
                </span>
                <span className="font-sans text-xs sm:text-sm text-text-secondary font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Image with Floating Animation */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end w-full lg:pt-2">
          {/* Main Hero Image Container (Increased by 11.5% to 580px with Floating loops) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0]
            }}
            whileHover={{ scale: 1.02 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.8, ease: "easeOut" },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full max-w-[450px] lg:max-w-[580px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/10 border-4 border-white transition-shadow duration-300 cursor-pointer"
          >
            <Image
              src="/images/hero-new.png"
              alt="Dhanya Enterprises Workspace"
              fill
              priority
              className="object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
