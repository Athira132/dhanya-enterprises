"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import VirtualCardSection from "@/components/VirtualCardSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section Preview */}
        <About />

        {/* Premium Virtual Business Card Section */}
        <VirtualCardSection />

        {/* Services Showcase */}
        <Services />

        {/* Featured Portfolio & Projects */}
        <Portfolio />

        {/* Client Reviews */}
        <Testimonials />

        {/* Conversions Call to Action */}
        <CTA />
      </main>

      {/* Premium Dark Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
