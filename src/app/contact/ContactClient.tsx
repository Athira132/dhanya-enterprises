"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Contact from "@/components/Contact";
import SubpageHero from "@/components/SubpageHero";

export default function ContactClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Subpage Hero Section */}
        <SubpageHero
          titlePrefix="Let's Build Something"
          titleHighlight="Great"
          description="Connect with our digital agency branch in Kerala. Submit your business goals below to schedule a free project planning consult session."
          breadcrumbCategory="Contact"
        />

        {/* Contact Form and Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
