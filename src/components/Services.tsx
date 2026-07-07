"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, Code, Megaphone, GraduationCap, Palette, Share2, PenTool, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "digital-business-card",
      title: "Digital Business Card",
      price: "₹999",
      icon: <CreditCard size={24} />,
      image: "/images/portfolio_real_estate.jpg",
      description: "Create professional NFC and QR-enabled digital visiting cards to share contact info instantly.",
    },
    {
      id: "website-development",
      title: "Website Development",
      price: "₹1999+",
      icon: <Code size={24} />,
      image: "/images/portfolio_ecommerce.jpg",
      description: "Responsive websites for businesses, portfolios, schools, hospitals, and startups designed to convert.",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      price: "₹2999+",
      icon: <Megaphone size={24} />,
      image: "/images/portfolio_education.jpg",
      description: "Google Ads, Facebook Ads, Instagram Marketing, SEO, and Content Marketing that generate real leads.",
    },
    {
      id: "sales-marketing-training",
      title: "Sales & Marketing Training",
      price: "₹3999+",
      icon: <GraduationCap size={24} />,
      image: "/images/hero_team.jpg",
      description: "Professional and highly interactive training programs for individuals and sales teams.",
    },
    {
      id: "logo-branding",
      title: "Logo & Branding",
      price: "₹1499+",
      icon: <Palette size={24} />,
      image: "/images/portfolio_fashion.jpg",
      description: "Modern logo design, brand identity, brochures, and visual marketing collateral.",
    },
    {
      id: "social-media-management",
      title: "Social Media Management",
      price: "₹2499+",
      icon: <Share2 size={24} />,
      image: "/images/portfolio_restaurant.jpg",
      description: "Daily post creation, scheduling, audience engagement, and organic social growth strategies.",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      price: "₹999+",
      icon: <PenTool size={24} />,
      image: "/images/portfolio_healthcare.jpg",
      description: "Posters, flyers, banners, social media creatives, and print advertisements.",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-24 bg-[#F8F8F8] relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
            Our Offerings
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight mb-4">
            Grow Your Sales With Our <span className="text-primary">Services</span>
          </h2>
          <p className="font-sans text-lg text-text-secondary">
            Affordable, premium digital business solutions customized to build your brand and multiply conversions.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white border border-border-light rounded-[18px] overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 glow-red-card-hover group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-primary text-white font-sans font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10">
                    {service.price}
                  </div>
                  {/* Icon Container */}
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary border border-border-light shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white glow-red-icon z-20">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-10">
                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 pb-8">
                <Link
                  href={`/services/${service.id}`}
                  className="w-full bg-[#F8F8F8] border border-border-light text-text-dark font-sans font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300"
                >
                  Read More
                  <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
