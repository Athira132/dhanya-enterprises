"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
}

const members: TeamMember[] = [
  { name: "Coach Muhsin" },
  { name: "Athira K" },
  { name: "Shahana" },
];

const NameAvatar = ({ name }: { name: string }) => {
  const initial = name.charAt(0);
  return (
    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary/5 to-primary/15 border border-primary/10 flex items-center justify-center text-primary font-heading font-black text-3xl shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:from-primary group-hover:to-red-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
      {initial}
    </div>
  );
};

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
            The passionate professionals behind Dhanya Enterprises, dedicated to delivering exceptional digital solutions.
          </p>
        </div>

        {/* Centered Members Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/60 backdrop-blur-md border border-border-light rounded-2xl p-8 hover:shadow-2xl hover:border-primary/20 transition-all duration-350 flex flex-col items-center gap-6 w-full max-w-[280px] text-center transform hover:-translate-y-1"
            >
              {/* Premium Circular Avatar */}
              <NameAvatar name={member.name} />

              {/* Member Name */}
              <h3 className="font-heading font-black text-xl text-dark group-hover:text-primary transition-colors leading-tight">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
