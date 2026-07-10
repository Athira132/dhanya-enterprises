"use client";

import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";

interface SubpageHeroProps {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  breadcrumbCategory: string;
  trustedHighlights?: string[];
}

export default function SubpageHero({
  titlePrefix,
  titleHighlight,
  description,
  breadcrumbCategory,
  trustedHighlights = ["Digital Marketing", "Website Development", "Graphic Design"],
}: SubpageHeroProps) {
  
  // Highlighting key business terms automatically for SEO and EEAT compliance in light theme
  const highlightKeywords = (text: string) => {
    const keywords = [
      "Digital Marketing",
      "Website Development",
      "Software Development",
      "Branding",
      "Kerala",
      "Google Ads",
      "Meta Ads",
      "SEO",
      "ASO"
    ];
    let result = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
      result = result.replace(regex, `<span class="text-[#E50914] font-semibold">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <section className="relative min-h-[75vh] flex items-center pt-48 pb-32 bg-[#FFFFFF] overflow-hidden border-b border-gray-100">
      
      {/* LAYER 1: Background team/branding image positioned on the right */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-cover bg-right lg:bg-center z-0" 
        style={{ backgroundImage: "url('/images/about-new.jpg')" }} 
      />

      {/* LAYER 2: White overlay (85% opacity) + slight blur (6px) for readability */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[6px] z-0" />

      {/* LAYER 3: Soft left-to-right white gradient to ensure left side text has 100% legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent z-0" />

      {/* LAYER 4: Soft red radial glow (low opacity 5%) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/5 rounded-full blur-[250px] pointer-events-none z-0" />

      {/* LAYER 5: Dotted Matrix Grid (Very low opacity < 3%) */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
        style={{ 
          backgroundImage: `radial-gradient(rgba(229, 9, 20, 0.25) 1px, transparent 1px)`, 
          backgroundSize: "28px 28px" 
        }} 
      />

      {/* LAYER 6: Subtle floating red gradient shapes with low opacity */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[rgba(229,9,20,0.04)] rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[rgba(229,9,20,0.03)] rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Slowly Floating Accent Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#E50914]/3 blur-xl pointer-events-none z-0"
          style={{
            width: i * 20 + 30,
            height: i * 20 + 30,
            left: `${i * 20 + 10}%`,
            top: `${i * 15 + 25}%`,
          }}
          animate={{
            x: [0, i * 15 - 30, 0],
            y: [0, i * 20 - 40, 0],
          }}
          transition={{
            duration: 22 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Breadcrumb section with minimal elegant light theme layout */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-sans font-bold text-gray-500 mb-8 tracking-widest uppercase">
          <Link href="/" className="hover:text-gray-900 transition-colors cursor-pointer">Home</Link>
          <ChevronRight size={10} className="text-gray-400 shrink-0" />
          <span className="hover:text-gray-900 transition-colors">{breadcrumbCategory}</span>
          <ChevronRight size={10} className="text-gray-400 shrink-0" />
          <span className="text-[#E50914]">Dhanya Enterprises</span>
        </div>

        {/* Hero Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Description, CTA, Card */}
          <div className="lg:col-span-8 flex gap-6 items-start">
            
            {/* Red Accent vertical line */}
            <div className="w-1.5 h-32 bg-gradient-to-b from-[#E50914] to-[#FF4D4D] rounded-full shadow-[0_0_15px_rgba(229,9,20,0.2)] shrink-0 self-stretch hidden sm:block" />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col w-full"
            >
              {/* Premium corporate style typography heading (Charcoal #1A1A1A) */}
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-[#1A1A1A] tracking-tight max-w-4xl text-left select-none">
                {titlePrefix}{" "}
                
                {/* Highlighted word using brand red and subtle hover line */}
                <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(229,9,20,0.05)] relative inline-block group/highlight">
                  {titleHighlight}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover/highlight:w-full" />
                </span>
              </h1>

              {/* 20-22px description using charcoal/gray #555555 */}
              <p className="font-sans text-xl sm:text-2xl text-[#555555] leading-[1.7] max-w-[700px] mt-8">
                {highlightKeywords(description)}
              </p>

              {/* Action layout combining Red button and glassmorphic badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                
                {/* Call-to-action red button */}
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#E50914] text-white font-sans font-bold text-sm tracking-wide rounded-[14px] shadow-lg shadow-[#E50914]/25 hover:bg-[#b80710] hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 cursor-pointer shrink-0"
                >
                  Get Free Consultation
                </Link>

                {/* Glassmorphic highlight card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-5 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-[18px] flex flex-wrap items-center gap-x-6 gap-y-3 max-w-fit shadow-sm relative overflow-hidden group hover:border-[#E50914]/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E50914]/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="flex gap-1 text-yellow-500 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  <div className="h-4 w-px bg-gray-200 hidden md:block" />

                  <span className="font-sans font-bold text-xs text-gray-800 uppercase tracking-wider shrink-0">
                    Trusted by Businesses
                  </span>

                  <div className="h-4 w-px bg-gray-200 hidden lg:block" />

                  <div className="flex flex-wrap gap-4 items-center">
                    {trustedHighlights.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="font-sans text-xs text-gray-600 flex items-center gap-1.5 font-medium"
                      >
                        <span className="text-[#E50914] font-black font-sans">✔</span>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Branded element aligned similarly to the reference layout */}
          <div className="lg:col-span-4 hidden lg:flex justify-end items-center relative h-full min-h-[300px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 bg-white/60 backdrop-blur-lg border border-gray-200/50 rounded-[24px] shadow-xl max-w-[280px] hover:border-[#E50914]/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[#E50914] font-heading font-black text-4xl mb-1">100%</div>
              <div className="text-gray-900 font-sans font-bold text-xs uppercase tracking-wider mb-2">Local Success Rate</div>
              <div className="text-gray-500 font-sans text-xs leading-relaxed">
                Empowering businesses across Pattambi, Kerala, with top-tier marketing campaigns.
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs font-sans font-bold text-gray-500 tracking-widest uppercase flex flex-col items-center gap-1.5 cursor-pointer"
          >
            <span className="text-[#E50914] text-sm">&darr;</span>
            Explore More
          </motion.span>
        </div>

      </div>
    </section>
  );
}
