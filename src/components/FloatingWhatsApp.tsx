"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Pulse effect */}
      <span className="absolute w-14 h-14 bg-green-500/30 rounded-full animate-ping" />
      
      <motion.a
        href="https://wa.me/919840123456?text=Hi,%20I%27m%20interested%20in%20a%20free%20consultation%20with%20Dhanya%20Enterprises."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors border border-white/20 glow-red-icon group cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.43 14.99c-.313-.157-1.853-.915-2.14-.997-.288-.083-.498-.124-.707.19-.208.313-.807.997-.99 1.205-.183.208-.367.229-.68.072-1.63-.818-2.766-1.536-3.86-3.418-.29-.497.29-.461.83-1.539.09-.18.04-.339-.02-.497-.06-.157-.498-1.205-.683-1.654-.18-.435-.36-.375-.497-.382-.128-.007-.275-.007-.423-.007s-.387.056-.59.278c-.203.222-.777.759-.777 1.85 0 1.09.794 2.145.905 2.296.11.15 1.56 2.38 3.78 3.34.528.228 1.01.378 1.353.488.53.169 1.01.145 1.393.088.427-.064 1.853-.759 2.115-1.492.263-.733.263-1.36.184-1.491-.08-.13-.29-.209-.6-.366zM12 .01c-6.61 0-11.95 5.34-11.95 11.95 0 2.1.54 4.14 1.59 5.95L0 24l6.16-1.69c1.75.96 3.72 1.46 5.72 1.46 6.61 0 11.95-5.34 11.95-11.95C23.95 5.35 18.61.01 12 .01zm0 21.98c-1.64 0-3.23-.44-4.83-1.45l-.62-.36-3.6 1.02.96-3.62-.36-.62C2.68 15.36 2.22 13.66 2.22 12c0-5.43 4.37-9.8 9.8-9.8 5.43 0 9.8 4.37 9.8 9.8 0 5.43-4.37 9.8-9.8 9.8z"/>
        </svg>

        {/* Hover label */}
        <div className="absolute right-16 bg-dark text-white text-xs font-sans font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-white/5">
          Chat With Us
        </div>
      </motion.a>
    </div>
  );
}
