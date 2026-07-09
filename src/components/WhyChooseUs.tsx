"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Marketing Experts",
      description: "Our core team has years of agency experience driving multi-channel growth campaigns.",
    },
    {
      title: "Data Driven Strategies",
      description: "We don't guess. We analyze market data, user behavior, and competitors to build campaigns.",
    },
    {
      title: "Affordable Pricing",
      description: "Get premium marketing agency outcomes customized specifically to match your business size.",
    },
    {
      title: "Fast Project Delivery",
      description: "We respect timelines and deliver marketing assets and campaigns on time, every time.",
    },
    {
      title: "Transparent Reporting",
      description: "Receive comprehensive reports weekly/monthly tracking absolute conversions, leads, and sales.",
    },
    {
      title: "Dedicated Support",
      description: "Your brand is our priority. We are always reachable for queries, updates, and optimization discussions.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Modern Workspace Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/about-new.jpg"
              alt="Dhanya Enterprises Workspace"
              fill
              className="object-cover"
              style={{ objectPosition: "center 10%" }}
            />
            {/* Visual glow backdrop overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
          </div>
          
          {/* Glass decorative overlay badge */}
          <div className="absolute -bottom-6 -right-4 glass-card px-6 py-5 rounded-2xl shadow-lg border border-white/50 max-w-[200px]">
            <h4 className="font-heading font-black text-3xl text-primary leading-none mb-1">5+</h4>
            <p className="font-sans text-xs text-text-secondary font-semibold uppercase tracking-wider">Years of Digital Innovation</p>
          </div>
        </motion.div>

        {/* Right Side: Title + Features */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
              Value Proposition
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight leading-tight">
              Why Choose Dhanya Enterprises?
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex gap-3.5 items-start p-4 rounded-2xl bg-white border border-border-light hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                {/* Custom Check Icon */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  ✔
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-heading font-bold text-base text-dark leading-snug">
                    {feature.title}
                  </h4>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
