"use client";

import { motion } from "framer-motion";
import { Search, Compass, Zap, BarChart3, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      icon: <Search size={22} />,
      desc: "We research your business model, current digital presence, competitors, and target audience.",
    },
    {
      num: "02",
      title: "Strategy",
      icon: <Compass size={22} />,
      desc: "We build a customized marketing strategy detailing platforms, budgets, and clear KPIs.",
    },
    {
      num: "03",
      title: "Execution",
      icon: <Zap size={22} />,
      desc: "Our specialists launch campaigns, build landing pages, set up tracking, and publish content.",
    },
    {
      num: "04",
      title: "Optimization",
      icon: <BarChart3 size={22} />,
      desc: "We monitor data daily, A/B test ad creatives, and optimize target audience lists for high ROAS.",
    },
    {
      num: "05",
      title: "Growth",
      icon: <Rocket size={22} />,
      desc: "Scale the winning campaigns, grow your organic brand awareness, and enjoy consistent revenue.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
            Our Workflow
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-tight mb-4">
            How We Drive <span className="text-primary">Success</span>
          </h2>
          <p className="font-sans text-lg text-text-secondary">
            A structured, data-first step-by-step roadmap to scale your brand&apos;s digital footprints.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-1 bg-border-light z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-red-700"
            />
          </div>

          {/* Connecting Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-1 bg-border-light z-0">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary to-red-700"
            />
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex lg:flex-col gap-6 lg:gap-0 lg:text-center items-start lg:items-center group"
              >
                {/* Step Circle / Number */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-border-light flex items-center justify-center text-text-secondary font-heading font-extrabold text-lg transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:shadow-lg group-hover:shadow-primary/10 z-10 relative">
                    {step.num}
                  </div>
                  
                  {/* Floating Micro Icon */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary/10 text-primary border border-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-sm z-20">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:mt-6 flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-xl text-dark group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-text-secondary leading-relaxed max-w-xs lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
