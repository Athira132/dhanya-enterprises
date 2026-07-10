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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-8 w-full"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Premium Digital Agency</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl leading-[1.1] text-dark tracking-tight">
            Grow Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">
              Digitally
            </span>{" "}
            with <span className="text-[#E30613]">Dhanya Enterprises</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
            We help businesses build their online presence through websites, branding, digital marketing, and business solutions that generate real results.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link
              href="/#contact"
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
          </div>

          {/* Floating Statistics Badges */}
          <div className="grid grid-cols-3 gap-4 border-t border-border-light pt-8 mt-4">
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
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7 relative flex justify-center lg:justify-end w-full lg:pt-2"
        >
          {/* Main Hero Image Container (Increased by 25%) */}
          <div className="relative w-full max-w-[450px] lg:max-w-[620px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-300">
            <Image
              src="/images/hero-new.png"
              alt="Dhanya Enterprises Workspace"
              fill
              priority
              className="object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
