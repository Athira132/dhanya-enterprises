"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import HomeFaq from "@/components/HomeFaq";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
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

        {/* Brand Logos Strip */}
        <TrustedBrands />

        {/* About Section */}
        <About />

        {/* Services Showcase */}
        <Services />

        {/* Animated Counter Stats */}
        <Stats />

        {/* Portfolio & Case Studies */}
        <Portfolio />

        {/* Client Reviews */}
        <Testimonials />

        {/* Workflow Process Timeline */}
        <Process />

        {/* FAQ Accordion Section */}
        <HomeFaq />

        {/* Conversions Call to Action */}
        <CTA />

        {/* Form & Contact Details */}
        <Contact />
      </main>

      {/* Premium Dark Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
