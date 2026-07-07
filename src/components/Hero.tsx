"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Star, Target, Users, ChevronRight } from "lucide-react";

export default function Hero() {
  const floatingBadgeVariants = (delay: number) => ({
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay: delay,
      },
    },
  });

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-white">
      {/* Decorative Background Elements - White with subtle abstract red gradient shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-100/20 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Copy & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Premium Digital Agency</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl leading-[1.1] text-dark tracking-tight">
            Grow Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">
              Digitally
            </span>{" "}
            with{" "}
            <span className="block mt-4 relative w-[240px] sm:w-[320px] md:w-[380px] lg:w-[440px] aspect-[633/276]">
              <Image
                src="/images/hero-brand.png"
                alt="Dhanya Enterprises Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
            We help businesses build their online presence through websites, branding, digital marketing, and business solutions that generate real results.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-hover text-white font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Get Started
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/#services"
              className="bg-white border border-border-light hover:border-primary/30 text-text-dark hover:text-primary font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 text-center hover:bg-primary/5 shadow-sm transform hover:-translate-y-0.5"
            >
              View Services
            </Link>
          </div>

          {/* Floating Statistics Badges */}
          <div className="grid grid-cols-3 gap-4 border-t border-border-light pt-8 mt-4">
            {[
              { label: "Happy Clients", value: "250+" },
              { label: "Projects Done", value: "400+" },
              { label: "Satisfaction", value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-heading font-black text-2xl md:text-3xl text-dark flex items-center gap-1.5">
                  <span className="text-primary text-sm sm:text-base">✔</span> {stat.value}
                </span>
                <span className="font-sans text-xs sm:text-sm text-text-secondary font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image + Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Hero Image Container */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/hero_team.jpg"
              alt="Dhanya Enterprises Workspace"
              fill
              priority
              className="object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
          </div>

          {/* Floating Glass Card 1: SEO Growth */}
          <motion.div
            variants={floatingBadgeVariants(0)}
            animate="animate"
            className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl flex items-center gap-3.5 shadow-lg border border-white/50"
          >
            <div className="p-2.5 bg-green-500/10 text-green-600 rounded-xl">
              <TrendingUp size={22} />
            </div>
            <div>
              <p className="font-sans text-[10px] text-text-secondary font-semibold uppercase tracking-wider">SEO Growth</p>
              <h4 className="font-heading font-black text-lg text-dark leading-tight">+235%</h4>
            </div>
          </motion.div>

          {/* Floating Glass Card 2: Rating */}
          <motion.div
            variants={floatingBadgeVariants(1.2)}
            animate="animate"
            className="absolute top-1/2 -right-8 glass-card p-4 rounded-2xl flex items-center gap-3.5 shadow-lg border border-white/50"
          >
            <div className="p-2.5 bg-yellow-500/10 text-yellow-500 rounded-xl">
              <Star size={22} fill="#eab308" className="text-yellow-500 fill-yellow-500" />
            </div>
            <div>
              <p className="font-sans text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Agency Rating</p>
              <h4 className="font-heading font-black text-lg text-dark leading-tight">4.9 / 5</h4>
            </div>
          </motion.div>

          {/* Floating Glass Card 3: ROI Campaign */}
          <motion.div
            variants={floatingBadgeVariants(0.6)}
            animate="animate"
            className="absolute -bottom-8 -left-2 glass-card p-4 rounded-2xl flex items-center gap-3.5 shadow-lg border border-white/50"
          >
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Target size={22} />
            </div>
            <div>
              <p className="font-sans text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Campaign ROI</p>
              <h4 className="font-heading font-black text-lg text-dark leading-tight">High Conversion</h4>
            </div>
          </motion.div>

          {/* Floating Glass Card 4: Reach */}
          <motion.div
            variants={floatingBadgeVariants(1.8)}
            animate="animate"
            className="absolute bottom-12 -right-6 glass-card p-4 rounded-2xl flex items-center gap-3.5 shadow-lg border border-white/50"
          >
            <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl">
              <Users size={22} />
            </div>
            <div>
              <p className="font-sans text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Social Reach</p>
              <h4 className="font-heading font-black text-lg text-dark leading-tight">1M+ Monthly</h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
