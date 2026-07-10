"use client";

import { motion } from "framer-motion";

export default function SocialMediaSection() {
  const socialCards = [
    {
      name: "Instagram",
      subtitle: "Follow us for updates & creative content",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#E50914] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
      btnText: "Follow on Instagram",
      link: "https://www.instagram.com/dhanyaenterprisesptb?igsh=MTEwYnk5cGx4M3pscg=="
    },
    {
      name: "Facebook",
      subtitle: "Join our community and stay informed",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#E50914] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      btnText: "Visit Facebook",
      link: "https://www.facebook.com/dhanyaenterprisesptb"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#F8F9FB] border-b border-gray-100">
      
      {/* Decorative backdrop shapes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#E50914]/4 rounded-full blur-[120px] pointer-events-none z-0" />
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
            CONNECT WITH US
          </span>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#1A1A1A] tracking-tight">
            Follow Dhanya Enterprises<br className="hidden sm:inline" />
            Across <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">Social Media</span>
          </h2>

          <p className="font-sans text-base text-[#666666] leading-relaxed mt-2 max-w-2xl">
            Stay connected with Dhanya Enterprises for the latest updates, digital marketing insights, success stories, educational programs, and business announcements.
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {socialCards.map((card, idx) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white border border-gray-100 rounded-[20px] p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-[#E50914]/5 hover:border-[#E50914]/25 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle accent hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E50914]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-[#E50914]/5 border border-[#E50914]/10 flex items-center justify-center mb-6 group-hover:bg-[#E50914]/10 transition-colors duration-300">
                {card.icon}
              </div>

              {/* Text */}
              <h3 className="font-heading font-black text-2xl text-[#1A1A1A] mb-2">
                {card.name}
              </h3>
              
              <p className="font-sans text-sm text-[#666666] mb-8 max-w-[240px]">
                {card.subtitle}
              </p>

              {/* Action Button */}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#E50914] text-white font-sans font-bold text-sm tracking-wide rounded-[14px] shadow-md shadow-[#E50914]/10 hover:bg-[#b80710] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E50914]/20 transition-all duration-300 active:translate-y-0 text-center cursor-pointer mt-auto"
              >
                {card.btnText}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
