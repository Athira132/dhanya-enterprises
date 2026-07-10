"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VirtualCardSection() {
  const vKardUrl = "https://www.vkard.pro/dhanya-enterprises";
  // High quality QR Code API link linking to the official vKard
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(vKardUrl)}`;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#F8F9FB] border-b border-gray-100">
      
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#E50914]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-red-100/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-4 max-w-3xl mb-16"
        >
          <span className="font-sans font-bold text-xs tracking-[3px] uppercase text-[#E50914]">
            CONNECT INSTANTLY
          </span>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#1A1A1A] tracking-tight">
            Connect with <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">Dhanya Enterprises</span>
          </h2>

          <p className="font-sans text-base text-[#666666] leading-relaxed mt-2 max-w-2xl">
            Access our official digital business card to save our contact details, connect through social media, explore our services, and reach us instantly.
          </p>
        </motion.div>

        {/* Premium CTA Card (Two columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl bg-white border border-gray-100 rounded-[24px] p-8 md:p-12 shadow-xl hover:shadow-2xl hover:shadow-[#E50914]/5 hover:border-[#E50914]/25 transition-all duration-300 transform hover:-translate-y-1.5 border-l-4 border-l-[#E50914] relative overflow-hidden"
        >
          {/* Subtle light background glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E50914]/2 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Side: Card Details */}
            <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left gap-6">
              
              <div className="flex items-center gap-4">
                {/* Custom Card Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#E50914]/5 border border-[#E50914]/10 flex items-center justify-center text-[#E50914] shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zM8.5 12C9 12 9.5 11.5 9.5 11s-.5-1-1-1-1 .5-1 1 .5 1 1 1zm0 3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7.5-6h-4v2h4V9zm0 4h-4v2h4v-2z"/>
                  </svg>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="font-heading font-black text-xl text-[#1A1A1A] leading-tight">
                    Dhanya Enterprises
                  </h3>
                  <span className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mt-0.5">
                    vKard Profile
                  </span>
                </div>
              </div>

              <p className="font-sans text-sm text-[#666666] leading-relaxed max-w-sm">
                Get full access to our mobile-friendly virtual business card. Save our direct contact file (VCF), send messages, and connect across all platforms.
              </p>

              <a
                href={vKardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#E50914] text-white font-sans font-bold text-sm tracking-wide rounded-[14px] shadow-md shadow-[#E50914]/10 hover:bg-[#b80710] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E50914]/20 transition-all duration-300 active:translate-y-0 text-center cursor-pointer"
              >
                Open Virtual Card
              </a>
            </div>

            {/* Right Side: QR Code scan section */}
            <div className="md:col-span-5 flex flex-col items-center gap-4 border-t border-gray-100 md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
              
              {/* QR Image Wrapper */}
              <div className="relative w-44 h-44 p-2 bg-white border border-gray-200/60 rounded-2xl shadow-inner flex items-center justify-center">
                <Image
                  src={qrCodeUrl}
                  alt="vKard QR Code"
                  width={160}
                  height={160}
                  priority
                  className="rounded-xl object-contain"
                />
              </div>

              <span className="font-sans text-xs text-gray-500 font-bold uppercase tracking-wider">
                Scan to Save Contact
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
