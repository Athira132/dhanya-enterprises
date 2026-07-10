"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";

export default function CertificationsClient() {
  const credentials = [
    {
      title: "Google Ads Search Certification",
      issuer: "Google Agency Academy",
      id: "Credential ID: GGL-SRCH-9238",
      date: "Verified Active",
      description: "Validated proficiency in structuring, managing, and optimizing Google Search campaigns, bids, and keyword bidding systems.",
    },
    {
      title: "Google Ads Display Certification",
      issuer: "Google Agency Academy",
      id: "Credential ID: GGL-DSPL-1102",
      date: "Verified Active",
      description: "Proven expertise in developing high-converting display campaigns, target audiences, and remarketing setups.",
    },
    {
      title: "Meta Certified Digital Marketing Associate",
      issuer: "Meta Blueprint",
      id: "Credential ID: META-DMA-8849",
      date: "Verified Active",
      description: "Certified proficiency in Facebook and Instagram ad systems, Meta Pixel conversions API, and Custom Audiences matching.",
    },
    {
      title: "ISO 9001:2015 Certification",
      issuer: "Quality Management Systems",
      id: "Certificate No: QMS-9001-4458",
      date: "Verified Active",
      description: "Standardized quality control guidelines applied across all of our digital marketing delivery, web operations, and graphic designs.",
    },
    {
      title: "HubSpot Inbound Marketing Certification",
      issuer: "HubSpot Academy",
      id: "Credential ID: HUBS-INBND-3849",
      date: "Verified Active",
      description: "Certified competency in sales funnel design, marketing content strategy, customer conversion, and CRM automation.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Subpage Hero Section */}
        <SubpageHero
          titlePrefix="Verified Partner"
          titleHighlight="Credentials"
          description="Dhanya Enterprises is a certified, quality-driven digital marketing agency. We maintain verified credentials with major search and social advertising channels to secure high performance."
          breadcrumbCategory="Certifications"
        />

        {/* Credentials Grid */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white border border-border-light rounded-[18px] p-8 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Badge and verify label */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10">
                        <Award size={24} />
                      </div>
                      <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider">
                        <CheckCircle size={10} />
                        {cred.date}
                      </span>
                    </div>

                    {/* Meta */}
                    <h3 className="font-heading font-bold text-xl text-dark mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {cred.title}
                    </h3>
                    <span className="font-sans font-bold text-xs text-text-secondary uppercase tracking-wide block mb-1">
                      Issuer: {cred.issuer}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block mb-4">
                      {cred.id}
                    </span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-border-light/60">
                    <span className="font-sans font-semibold text-xs text-primary flex items-center gap-1">
                      Official Partner Verification Verified
                    </span>
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
