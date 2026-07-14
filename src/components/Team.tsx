"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
  desc: string;
  skills: string[];
  featured?: boolean;
  socials: {
    instagram?: string;
    linkedin?: string;
    website?: string;
    email?: string;
  };
}

const members: TeamMember[] = [
  {
    name: "Athira K",
    role: "Full Stack Developer & Web Designer",
    image: "/images/team_athira.jpg",
    alt: "Athira K - Team Member",
    desc: "Creative Full Stack Developer focused on building modern, responsive, and high-performance websites. Experienced in React, Next.js, UI/UX design, and SEO-friendly web development while creating premium digital experiences for businesses.",
    skills: ["React.js", "Next.js", "Website Development", "UI/UX Design", "Frontend Development", "Backend Development", "SEO Optimization"],
    socials: {
      website: "https://www.aathi.dev/",
      email: "mailto:info@dhanyaenterprises.com",
    },
  },
  {
    name: "Coach Muhsin",
    role: "Digital Marketing Coach & AI Marketing Strategist",
    image: "/images/team_muhsin.png",
    alt: "Coach Muhsin - Team Member",
    desc: "Results-driven Digital Marketing Coach specializing in SEO, AI-powered marketing, branding, social media growth, and business strategy. Passionate about helping entrepreneurs and businesses build a powerful online presence through practical training and innovative digital solutions.",
    skills: ["Digital Marketing", "SEO", "Social Media Marketing", "AI Marketing", "Google Ads", "Branding Strategy", "Business Growth", "Lead Generation"],
    featured: true,
    socials: {
      instagram: "https://www.instagram.com/coach_muhsin",
      linkedin: "https://in.linkedin.com/in/coachmuhsin?utm_source=chatgpt.com",
      email: "mailto:info@dhanyaenterprises.com",
    },
  },
  {
    name: "Shahana",
    role: "Creative Designer & Content Creator",
    image: "/images/team_shahana.jpg",
    alt: "Shahana - Team Member",
    desc: "Creative professional specializing in social media content, poster design, short-form video editing, branding creatives, and visual storytelling. Passionate about creating engaging digital content that helps brands grow online.",
    skills: ["Social Media Management", "Poster Design", "Video Editing", "Reels Creation", "Canva", "Adobe Photoshop", "Brand Design", "Content Planning"],
    socials: {
      email: "mailto:info@dhanyaenterprises.com",
    },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 max-w-6xl mx-auto items-stretch justify-items-center">
          {members.map((member, index) => {
            const cardContent = (
              <div className={`h-full flex flex-col justify-between p-6 bg-white rounded-[18px] border transition-all duration-300 relative ${
                member.featured 
                  ? "border-transparent" 
                  : "border-border-light shadow-sm hover:shadow-xl hover:border-primary/20"
              }`}>
                {/* Featured Badge */}
                {member.featured && (
                  <span className="inline-flex items-center gap-1 bg-primary text-white text-[9px] font-sans font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full absolute -top-3.5 left-6 shadow-md z-20">
                    ⭐ Team Lead
                  </span>
                )}

                <div>
                  {/* Portrait Image */}
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0 mb-6 group-hover:scale-[1.01] transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Header metadata */}
                  <div className="flex flex-col gap-1 text-center">
                    <h3 className="font-heading font-bold text-xl text-dark group-hover:text-primary transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <span className="font-sans font-bold text-[10px] tracking-wider uppercase text-primary mb-3">
                      {member.role}
                    </span>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed mb-5 text-left">
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Skills & Socials Block */}
                <div>
                  {/* Skill rounded pills */}
                  <div className="flex flex-wrap gap-1 mb-5 justify-center">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-[9px] font-sans font-bold bg-[#F8F9FA] text-text-secondary border border-gray-200/60 px-2.5 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex items-center justify-center gap-3.5 pt-4 border-t border-gray-100">
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                        aria-label={`${member.name} Instagram`}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    )}
                    {member.socials.website && (
                      <a
                        href={member.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                        aria-label={`${member.name} Website`}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={member.socials.email}
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
              </div>
            );

            if (member.featured) {
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                  className="group p-[2px] bg-gradient-to-r from-primary to-red-500 rounded-[20px] shadow-lg shadow-primary/10 w-full max-w-[340px] lg:scale-105 lg:-translate-y-2 relative"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full"
                  >
                    {cardContent}
                  </motion.div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group w-full max-w-[320px] relative"
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
