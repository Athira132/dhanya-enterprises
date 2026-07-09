"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Heart, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
              <span className="text-primary font-bold">About Us</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-4 tracking-tight">
                About Dhanya Enterprises
              </h1>
              <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed">
                We are a premium digital marketing and software development agency based in Pattambi, Kerala. We scale local and national businesses through data-driven campaigns, high-converting code, and professional graphic guidelines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Narrative / History section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                Who We Are
              </span>
              <h2 className="font-heading font-black text-3xl text-dark mb-6 tracking-tight">
                Driving Modern Digital Leadership
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed mb-6">
                Dhanya Enterprises was established with a singular vision: to make premium marketing, design, and software engineering accessible, highly functional, and affordable for startups and established companies alike. Our team bridges the gap between creative visual artistry and data-driven marketing technologies.
              </p>
              <p className="font-sans text-text-secondary leading-relaxed">
                From our main branch located in Pattambi, Kerala, we collaborate closely with clients across diverse sectors—including real estate, e-commerce, healthcare, retail, and education—to construct tailored systems that automate brand visibility and lead pipeline acquisition.
              </p>
            </motion.div>

            {/* Core Values grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                {
                  icon: <ShieldCheck className="text-primary" size={24} />,
                  title: "Trust & Transparency",
                  desc: "We supply direct dashboards, transparent project scopes, and upfront package pricing with zero hidden charges."
                },
                {
                  icon: <Target className="text-primary" size={24} />,
                  title: "Results-First Execution",
                  desc: "Our campaigns are configured around concrete ROI targets—focusing on leads, calls, walk-ins, and checkout volume."
                },
                {
                  icon: <Heart className="text-primary" size={24} />,
                  title: "Lifetime Client Partnerships",
                  desc: "We provide hands-on technical guidance, training tutorials, and active retainer updates to support continuous business growth."
                }
              ].map((value, idx) => (
                <div key={idx} className="flex gap-4 p-6 border border-border-light rounded-[18px] bg-[#F8F8F8]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border-light flex items-center justify-center flex-shrink-0 shadow-sm">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-dark mb-1">{value.title}</h4>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Counter Stats Section */}
        <Stats />

        {/* Work Process timeline */}
        <Process />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
