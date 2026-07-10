"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Business Websites",
    "Healthcare",
    "Interior & Furniture",
    "Travel & Tourism",
    "Hospitality",
    "Wellness",
  ];

  const projects = [
    {
      title: "New Vishwas Furniture",
      url: "https://newvishwasfurniture.in/",
      category: "Interior & Furniture",
      badge: "Interior & Furniture Website",
      desc: "Designed and developed a modern furniture business website showcasing premium home and office furniture collections with SEO optimization, responsive layouts, enquiry forms, and product-focused user experience.",
      features: ["Business Website", "Product Showcase", "SEO Optimized", "Responsive Design", "Lead Generation"],
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      gradient: "from-[#8B4513] to-[#D2B48C]", // Warm furniture wood tone
    },
    {
      title: "Alfa Travel Link",
      url: "https://alfatravellink.com/",
      category: "Travel & Tourism",
      badge: "Travel & Tourism Website",
      desc: "Developed a professional travel agency website featuring tour packages, visa services, transportation assistance, enquiry forms, and conversion-focused landing pages.",
      features: ["Travel Booking", "Lead Capture", "Mobile Friendly", "Fast Loading", "SEO Ready"],
      tech: ["React", "CSS3", "Next.js"],
      gradient: "from-sky-400 to-blue-600", // Bright travel sky blue
    },
    {
      title: "Mondari Group",
      url: "https://mondarigroup.com/",
      category: "Business Websites",
      badge: "Corporate Website",
      desc: "Built a premium corporate website representing multiple business divisions with a modern UI, company profile, service presentation, and strong brand identity.",
      features: ["Corporate Website", "Business Profile", "Professional Design", "Responsive", "SEO Optimized"],
      tech: ["TypeScript", "Next.js", "Tailwind"],
      gradient: "from-slate-700 to-slate-900", // Dark corporate sleek gray
    },
    {
      title: "Life Care Health Solutions",
      url: "https://lifecarehealthsolutions.com/",
      category: "Healthcare",
      badge: "Healthcare Website",
      desc: "Designed a healthcare solutions platform highlighting medical services, patient support, healthcare information, and trust-building content with a user-friendly interface.",
      features: ["Healthcare Website", "Service Showcase", "Appointment CTA", "Mobile Friendly", "SEO Optimized"],
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      gradient: "from-teal-400 to-emerald-600", // Calming wellness green/teal
    },
    {
      title: "Bloomax Residency",
      url: "https://bloomaxresidency.com/",
      category: "Hospitality",
      badge: "Hotel & Hospitality Website",
      desc: "Developed an elegant hospitality website showcasing rooms, amenities, booking information, location details, and customer-friendly navigation.",
      features: ["Hotel Website", "Room Showcase", "Booking Enquiry", "Responsive", "Fast Loading"],
      tech: ["React", "Tailwind", "Vite"],
      gradient: "from-rose-500 to-red-600", // Premium resort rose red
    },
    {
      title: "Klay Ayurveda",
      url: "https://klayurveda.com/",
      category: "Wellness",
      badge: "Ayurveda & Wellness Website",
      desc: "Created a wellness-focused website presenting Ayurvedic treatments, natural healthcare solutions, wellness programs, and consultation services with a calming, trustworthy design.",
      features: ["Healthcare", "Wellness", "Consultation", "Mobile Friendly", "SEO Ready"],
      tech: ["React", "Tailwind", "Framer Motion"],
      gradient: "from-emerald-500 to-teal-800", // Herbal green wellness gradient
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => {
        if (activeCategory === "Business Websites") return project.category === "Business Websites" || project.category === "Corporate Websites";
        return project.category === activeCategory;
      });

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-sans font-bold text-xs tracking-[3px] uppercase text-primary">
              OUR WORKS
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-none">
              Web Design & <span className="text-primary">Development</span>
            </h2>
          </div>
          <p className="font-sans text-base text-text-secondary max-w-md leading-relaxed">
            Helping businesses grow through modern websites, digital branding, and SEO-focused development.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border-light pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-[#F8F9FA] text-text-secondary hover:bg-primary/5 hover:text-primary border border-border-light/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-gradient-to-tr from-gray-100/50 to-gray-200/50 p-[1px] rounded-2xl hover:from-primary/20 hover:to-red-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1.5"
              >
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full">
                  
                  {/* Simulated Browser Frame Preview */}
                  <figure className="relative w-full aspect-[16/10] bg-[#F1F3F5] rounded-t-2xl border-b border-gray-100 overflow-hidden flex flex-col shrink-0">
                    {/* Browser Head Bar */}
                    <div className="h-8 bg-gray-50 border-b border-gray-150 px-3 flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="ml-4 flex-1 max-w-[200px] h-4.5 bg-white border border-gray-200/60 rounded text-[9px] text-gray-400 flex items-center px-2 select-none truncate">
                        {project.url.replace("https://", "")}
                      </div>
                    </div>

                    {/* Browser Live Preview Container */}
                    <div className={`flex-1 bg-gradient-to-tr ${project.gradient} p-5 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                      {/* Decorative glows */}
                      <div className="absolute top-[-30%] right-[-20%] w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none z-0" />
                      <div className="absolute bottom-[-20%] left-[-15%] w-32 h-32 bg-white/15 rounded-full blur-xl pointer-events-none z-0" />

                      <div className="flex items-center justify-between z-10 shrink-0">
                        <span className="text-[9px] font-bold tracking-[2px] uppercase bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                          {project.badge}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      </div>

                      <div className="flex flex-col gap-2 z-10 my-auto">
                        <figcaption className="font-heading font-black text-lg md:text-xl leading-tight tracking-tight text-white select-none">
                          {project.title}
                        </figcaption>
                        <div className="w-10 h-[2.5px] bg-white/80 rounded" />
                      </div>

                      <div className="flex flex-wrap gap-1 z-10 shrink-0">
                        {project.features.slice(0, 3).map((f, i) => (
                          <span key={i} className="text-[8px] bg-white/10 backdrop-blur-md px-2 py-0.5 rounded font-sans uppercase font-bold tracking-wide">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </figure>

                  {/* Text Details & Buttons */}
                  <div className="p-6 flex flex-col flex-1 bg-white justify-between gap-5">
                    <div className="flex flex-col gap-3">
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[10px] font-sans font-bold bg-primary/5 text-primary border border-primary/10 px-2.5 py-0.5 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Redirect Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-4 py-3 bg-[#F8F9FA] hover:bg-primary text-text-dark hover:text-white font-sans font-bold text-xs rounded-xl shadow-sm border border-gray-100 hover:border-primary transition-all duration-300 cursor-pointer"
                    >
                      Visit Website
                      <ArrowUpRight size={14} className="opacity-80" />
                    </a>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
