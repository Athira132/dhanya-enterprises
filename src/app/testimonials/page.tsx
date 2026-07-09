"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Star, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Santhosh Kumar",
      role: "CEO, Malabar Retail Store",
      review: "Dhanya Enterprises transformed our digital footprint. Our store sales increased by 145% in 3 months! Their local SEO strategies and Google Ads setups are extremely effective.",
      stars: 5,
      date: "May 2026",
    },
    {
      name: "Athira Sasi",
      role: "Founder, Vogue Maison",
      review: "Our training workshop led by Dhanya Enterprises was outstanding. Our sales teams saw instant performance improvements. The branding materials they designed are state-of-the-art.",
      stars: 5,
      date: "June 2026",
    },
    {
      name: "Dr. K. Mehta",
      role: "Director, Heart Care Clinic",
      review: "Highly professional service. They built a lightning-fast clinic portal and optimized our Google Map listings. We now get steady patient appointments organically.",
      stars: 5,
      date: "April 2026",
    },
    {
      name: "Prakash Raj",
      role: "Marketing Head, Oakridge Groups",
      review: "We ran Facebook and Instagram lead campaigns with them and collected over 60 high-intent real estate buyers in just 30 days. The conversion tracking was pixel-perfect.",
      stars: 5,
      date: "March 2026",
    },
    {
      name: "Deepa Menon",
      role: "Principal, Aspirant Academy",
      review: "Their next-gen website design is fast, responsive, and easy to manage. The setup and domain mapping support they provided were exceptional.",
      stars: 5,
      date: "January 2026",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

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
                Read direct reviews from retail brands, clinical groups, and startup developers who trust Dhanya Enterprises to manage their web platforms and marketing ads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials List */}
        <section className="py-24 bg-white relative">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex flex-col gap-8">
              {testimonials.map((test, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-border-light rounded-[20px] p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start relative hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Decorative big quote icon */}
                  <div className="absolute right-8 top-8 opacity-[0.03] text-dark select-none pointer-events-none">
                    <Quote size={120} />
                  </div>

                  {/* Left Column: Author meta */}
                  <div className="w-full md:w-1/4 shrink-0 flex flex-col">
                    <h4 className="font-heading font-bold text-lg text-dark group-hover:text-primary transition-colors leading-snug mb-1">
                      {test.name}
                    </h4>
                    <span className="font-sans text-xs text-text-secondary font-medium block mb-3">
                      {test.role}
                    </span>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-2">
                      {[...Array(test.stars)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                      {test.date}
                    </span>
                  </div>

                  {/* Right Column: Review Text */}
                  <div className="flex-1 font-sans text-base text-text-secondary leading-relaxed pt-1 md:pt-0">
                    <p className="relative pl-6">
                      <span className="absolute left-0 top-0 text-primary font-serif text-3xl leading-none">&ldquo;</span>
                      {test.review}
                      <span className="text-primary font-serif text-3xl leading-none">&rdquo;</span>
                    </p>
                  </div>
                </motion.div>
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
