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
  
  // Highlighting key business terms automatically for SEO and EEAT compliance
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
      result = result.replace(regex, `<span class="text-[#FF4040] font-semibold">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <section className="relative pt-44 pb-28 bg-[#0B0B0B] text-white overflow-hidden border-b border-white/5">
      
      {/* LAYER 1 & 2: Radial Glow Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090909] to-[#111111] z-0" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/15 rounded-full blur-[250px] pointer-events-none z-0" />

      {/* LAYER 3: Dotted Matrix Digital Grid (Opacity < 8%) */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0" 
        style={{ 
          backgroundImage: `radial-gradient(rgba(255, 64, 64, 0.25) 1px, transparent 1px)`, 
          backgroundSize: "28px 28px" 
        }} 
      />

      {/* LAYER 4: Blurred red gradient circles (Top-left & Bottom-right) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[rgba(255,0,40,0.12)] rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[rgba(255,0,40,0.08)] rounded-full blur-[150px] pointer-events-none z-0" />

      {/* LAYER 5: Slowly Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#FF4040]/10 blur-xl pointer-events-none z-0"
          style={{
            width: i * 20 + 30,
            height: i * 20 + 30,
            left: `${i * 20 + 10}%`,
            top: `${i * 15 + 20}%`,
          }}
          animate={{
            x: [0, i * 15 - 30, 0],
            y: [0, i * 20 - 40, 0],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 5. Improved Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-sans font-bold text-gray-400 mb-8 tracking-widest uppercase">
          <Link href="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight size={10} className="text-gray-600 shrink-0" />
          <span className="hover:text-white transition-colors">{breadcrumbCategory}</span>
          <ChevronRight size={10} className="text-gray-600 shrink-0" />
          <span className="text-[#FF4040]">Dhanya Enterprises</span>
        </div>

        {/* Hero Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Accent Indicator */}
          <div className="lg:col-span-8 flex gap-6 items-start">
            
            {/* 7. Glowing red vertical line (Accent) */}
            <div className="w-1.5 h-32 bg-gradient-to-b from-[#FF2E2E] to-[#FF6A3D] rounded-full shadow-[0_0_15px_rgba(255,46,46,0.5)] shrink-0 self-stretch hidden sm:block" />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* 1. Large responsive premium heading */}
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-white tracking-tighter max-w-4xl text-left select-none">
                {titlePrefix}{" "}
                
                {/* 2. Highlighted word with premium gradient */}
                <span className="bg-gradient-to-r from-[#FF2E2E] to-[#FF6A3D] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,46,46,0.15)] relative inline-block group/highlight">
                  {titleHighlight}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6A3D] transition-all duration-300 group-hover/highlight:w-full" />
                </span>
              </h1>

              {/* 6. Description block */}
              <p className="font-sans text-lg sm:text-xl text-[#CFCFCF] leading-[1.7] max-w-[700px] mt-8">
                {highlightKeywords(description)}
              </p>

              {/* 4. Hero Highlight Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 p-5 sm:p-6 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[18px] flex flex-wrap items-center gap-x-6 gap-y-4 max-w-fit shadow-2xl relative overflow-hidden group hover:border-[#FF4040]/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF2E2E]/5 via-transparent to-transparent pointer-events-none" />
                
                <div className="flex gap-1 text-yellow-400 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="h-4 w-px bg-white/20 hidden md:block" />

                <span className="font-sans font-bold text-xs text-white uppercase tracking-wider shrink-0">
                  Trusted by Businesses
                </span>

                <div className="h-4 w-px bg-white/20 hidden lg:block" />

                <div className="flex flex-wrap gap-4 items-center">
                  {trustedHighlights.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="font-sans text-xs text-[#CFCFCF] flex items-center gap-1.5 font-medium"
                    >
                      <span className="text-[#FF4040] font-black font-sans">✔</span>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 8. Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs font-sans font-bold text-[#CFCFCF] tracking-widest uppercase flex flex-col items-center gap-1.5 cursor-pointer"
          >
            <span className="text-[#FF4040] text-sm">&darr;</span>
            Explore More
          </motion.span>
        </div>

      </div>
    </section>
  );
}
