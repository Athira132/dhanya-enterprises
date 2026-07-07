"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function HomeFaq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What digital services does Dhanya Enterprises provide?",
      a: "We specialize in Digital Business Cards (NFC/QR), Web Development (Next.js/React/WordPress), Digital Marketing (PPC, Google Ads, Meta Ads, SEO), Corporate and Sales Training, Logo Designing & Branding, Social Media Management, and general Graphic Design.",
    },
    {
      q: "Are your services budget-friendly for small startups?",
      a: "Yes, absolutely! Affordable pricing is one of our primary core values. We offer packages designed specifically for entrepreneurs, local shops, and emerging startups, starting from as low as ₹999 for Digital Business Cards and Graphic Designs.",
    },
    {
      q: "How fast can you launch a digital marketing campaign or website?",
      a: "A standard landing page or paid Google/Meta ad campaign is usually set up and launched within 24 to 48 hours. A complete custom corporate business website takes about 7 to 12 days to develop, test, and host.",
    },
    {
      q: "Do you offer physical NFC business cards?",
      a: "Yes, we print and ship high-quality custom PVC and laser-engraved metal NFC business cards with dynamic QR codes. These cards allow you to tap or scan to share your digital details instantly with no monthly fees.",
    },
    {
      q: "How does the training program work for corporate teams?",
      a: "Our Sales & Marketing Training is fully customizable. We conduct live bootcamps (online, offline, or hybrid) covering ad setups, objection handling, closing scripts, and CRM automation, customized directly to your business model.",
    },
    {
      q: "Where is your office located, and do you serve clients outside Pattambi?",
      a: "Our primary office is situated in Hayath Complex, Opp. Police station, Pattambi, Kerala. However, we serve clients remotely across all major cities in India and globally, providing video consultation syncs and transparent weekly reporting.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#F8F8F8] relative">
      <div className="max-w-4xl mx-auto px-6 z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
            FAQ
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-dark tracking-tight mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="font-sans text-base text-text-secondary">
            Find immediate answers to standard questions about our agency, tools, and pricing plans.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-border-light rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-sm md:text-base text-dark hover:text-primary transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="flex-shrink-0 ml-4 w-6 h-6 rounded-full bg-primary/5 text-primary flex items-center justify-center font-sans">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 border-t border-border-light/40 font-sans text-xs md:text-sm text-text-secondary leading-relaxed bg-[#FAFAFA]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
