"use client";

import { motion } from "framer-motion";


interface TeamMember {
  name: string;
  role: string;
  desc: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const members: TeamMember[] = [
  {
    name: "Sudheesh T S",
    role: "Founder & CEO",
    desc: "Visionary leader driving business strategy, client consulting, and corporate digital growth.",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
    email: "mailto:info@dhanyaenterprises.com",
  },
  {
    name: "Athira K",
    role: "Co-Founder & Director",
    desc: "Overseeing brand relations, delivery operations, and client success frameworks.",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
    email: "mailto:info@dhanyaenterprises.com",
  },
  {
    name: "Subhash T S",
    role: "Chief Technology Officer",
    desc: "Leading web engineering architectures, high-performance engines, and tech innovations.",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
    email: "mailto:info@dhanyaenterprises.com",
  },
  {
    name: "Aswathi K",
    role: "Senior Digital Strategist",
    desc: "Designing high-converting Google Search, Meta Ads, and digital marketing strategies.",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
    email: "mailto:info@dhanyaenterprises.com",
  },
  {
    name: "Sandhya T S",
    role: "Creative Design Lead",
    desc: "Crafting beautiful brand identity systems, typography guidelines, and UI/UX solutions.",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
    email: "mailto:info@dhanyaenterprises.com",
  },
  {
    name: "Sayooj T S",
    role: "Technical SEO Architect",
    desc: "Optimizing search indexes, crawling health, and local Google Business Profile visibility.",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
    email: "mailto:info@dhanyaenterprises.com",
  },
];

const PhotoPlaceholder = () => (
  <div className="w-full h-full bg-gradient-to-tr from-gray-50 to-gray-150 flex flex-col items-center justify-center relative group-hover:from-primary/5 group-hover:to-primary/10 transition-colors duration-500">
    {/* Design dots backdrop overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
    
    <div className="w-16 h-16 rounded-full bg-white border border-border-light flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:scale-105 transition-all duration-500 shadow-sm relative z-10">
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
    <span className="text-[9px] font-sans font-bold tracking-[2px] uppercase text-gray-400 mt-4 relative z-10 group-hover:text-primary/70 transition-colors">
      Photo Coming Soon
    </span>
  </div>
);

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

        {/* Members Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group bg-white/60 backdrop-blur-md border border-border-light rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Photo placeholder container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-border-light shrink-0">
                <PhotoPlaceholder />
              </div>

              {/* Text content details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <span className="font-sans font-bold text-[10px] tracking-wider uppercase text-primary bg-primary/5 px-2.5 py-1 rounded-md w-fit">
                    {member.role}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-dark group-hover:text-primary transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mt-1">
                    {member.desc}
                  </p>
                </div>

                {/* Social icons placeholders */}
                <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-gray-100">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      aria-label={`${member.name} Twitter Profile`}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={member.email}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
