"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Member {
  name: string;
  image: string;
  alt: string;
}

const members: Member[] = [
  {
    name: "Coach Muhsin",
    image: "/images/team_muhsin.png",
    alt: "Coach Muhsin - Team Member",
  },
  {
    name: "Athira K",
    image: "/images/team_athira.jpg",
    alt: "Athira K - Team Member",
  },
  {
    name: "Shahana",
    image: "/images/team_shahana.jpg",
    alt: "Shahana - Team Member",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-gray-150">
      {/* Background glow backdrops */}
      <div className="absolute top-1/3 left-full -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-full translate-x-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3.5 max-w-3xl mx-auto mb-20">
          <span className="font-sans font-bold text-xs tracking-[3px] uppercase text-primary">
            OUR EXPERTISE
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-tight">
            Meet Our Team
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mt-1">
            The people behind Dhanya Enterprises, working together to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-border-light rounded-[18px] p-5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col w-full max-w-[320px] text-center"
            >
              {/* Image Portrait Container */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0 mb-6">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Member Name */}
              <h3 className="font-heading font-black text-xl text-dark group-hover:text-primary transition-colors leading-tight mb-2">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
