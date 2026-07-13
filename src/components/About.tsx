"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const points = [
    { title: "Experienced Team", desc: "Expert digital marketers and developers delivering results." },
    { title: "Affordable Pricing", desc: "Premium agency quality priced for startups and growing brands." },
    { title: "Customer Support", desc: "Dedicated support and proactive updates for all campaigns." },
    { title: "Creative Solutions", desc: "Bespoke strategies customized to your unique business goals." },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 right-full translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Company Image (Dummy) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-50">
            <Image
              src="/images/about-new.jpg"
              alt="About Dhanya Enterprises"
              fill
              className="object-contain"
            />
            {/* Visual glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-4 glass-card px-6 py-5 rounded-2xl shadow-lg border border-white/50 max-w-[200px] glow-red-icon">
            <h4 className="font-heading font-black text-3xl text-primary leading-none mb-1">8+</h4>
            <p className="font-sans text-xs text-text-secondary font-semibold uppercase tracking-wider">Years of Experience</p>
          </div>
        </motion.div>

        {/* Right: Copy & Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
              About Us
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-tight mb-4">
              About Dhanya Enterprises
            </h2>
            <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
              Dhanya Enterprises provides affordable digital services for businesses, entrepreneurs, and startups. We specialize in digital marketing, website development, branding, training, and digital business solutions.
            </p>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex gap-3 items-start p-4 rounded-xl bg-[#F8F8F8] border border-border-light hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-dark mb-0.5">
                    {point.title}
                  </h4>
                  <p className="font-sans text-xs text-text-secondary leading-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 inline-block text-center cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
