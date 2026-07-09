"use client";

import { use, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon, Plus, Minus, ArrowLeft } from "lucide-react";

// Full data mapping for all 11 services
const servicesData: Record<
  string,
  {
    title: string;
    subtitle: string;
    price: string;
    image: string;
    about: string;
    whoNeedsIt: string[];
    benefits: string[];
    whyUs: string;
    packages: {
      name: string;
      price: string;
      description: string;
      features: string[];
      popular?: boolean;
    }[];
    posters: {
      title: string;
      desc: string;
      bg: string;
      tag: string;
    }[];
    faqs: { q: string; a: string }[];
  }
> = {
  "website-design-development": {
    title: "Website Design & Development",
    subtitle: "Custom Next.js, React, and WordPress sites optimized for extreme loading speed, SEO, and visual excellence.",
    price: "Starting at ₹9,999",
    image: "/images/portfolio_ecommerce.jpg",
    about: "In the digital age, your website is your virtual storefront. At Dhanya Enterprises, we build modern Next.js, React, and WordPress sites optimized for extreme loading speeds, SEO, and visual excellence. We handle everything from design mocks to hosting configuration, ensuring your website serves as a highly efficient marketing funnel that converts visitors into customers.",
    whoNeedsIt: [
      "Startup Founders & SMBs",
      "Corporate Brands & Businesses",
      "Consultants & Professionals",
      "Retailers & Service Providers"
    ],
    benefits: [
      "Ultra-fast loading speed and core web vitals optimization.",
      "Mobile-responsive layouts optimized for all modern device sizes.",
      "SEO-friendly codebase layout for quick organic ranking search index.",
      "Direct WhatsApp, call click integrations, and custom forms."
    ],
    whyUs: "Dhanya Enterprises merges premium visual design with clean, high-performance coding frameworks. We offer lifetime hosting support and full project handovers.",
    packages: [
      {
        name: "Basic Brand Page",
        price: "₹9,999",
        description: "1 Page layout with modern design elements, static assets, and essential contact buttons.",
        features: [
          "1 Custom Responsive Page",
          "Basic On-Page SEO setup",
          "WhatsApp & Phone Integrations",
          "Domain Mapping & Launch Support",
          "1 Year Dashboard Support"
        ]
      },
      {
        name: "Business Website",
        price: "₹19,999",
        description: "Complete multi-page profile website for companies and agencies.",
        features: [
          "5 Dynamic Designed Pages",
          "Custom UI Design & Copywriting",
          "Contact & Query Forms",
          "Page Speed Optimization",
          "Google Maps & Analytics Integration",
          "3 Months Revision Warranty"
        ],
        popular: true
      },
      {
        name: "Enterprise Portal",
        price: "₹34,999",
        description: "High-performance React/Next.js dynamic application with full custom layout.",
        features: [
          "Custom React/Next.js Architecture",
          "CMS Integration (WordPress/Strapi)",
          "Advanced Lead Dashboard",
          "Top-Tier Security & SSL",
          "Speed CDN Configuration",
          "1 Year Priority Tech Support"
        ]
      }
    ],
    posters: [
      { title: "Custom Code", desc: "Next.js performance optimization", bg: "from-red-500 to-red-800", tag: "Frontend" }
    ],
    faqs: [
      { q: "Do you design custom templates?", a: "Yes, we design all websites from scratch matching your brand guidelines and wireframes." },
      { q: "Will my website load fast on mobile devices?", a: "We optimize all images, script loads, and code structures to guarantee excellent loading performance." },
      { q: "Do you offer domain registration and web hosting?", a: "We help you select and purchase your domain and configure secure hosting environments during launch." }
    ]
  },
  "ecommerce-website-development": {
    title: "E-commerce Website Development",
    subtitle: "Sleek online storefronts with secure payment gateways, inventory sync, and seamless buyer checkouts.",
    price: "Starting at ₹19,999",
    image: "/images/portfolio_fashion.jpg",
    about: "Bring your retail store online with a powerful e-commerce platform. Dhanya Enterprises designs secure, lightning-fast shopping sites utilizing Shopify, WooCommerce, or custom Next.js configurations. From cart optimizations and secure payment gateways (Razorpay, Stripe) to simple inventory trackers, we make online selling simple and profitable.",
    whoNeedsIt: [
      "Retail Brand Owners",
      "D2C Startups",
      "Wholesalers & Distributors",
      "Local Boutique Stores"
    ],
    benefits: [
      "Optimized single-page checkouts to minimize abandoned carts.",
      "Fully integrated secure payment methods and automated invoices.",
      "Mobile-friendly shop displays tailored for mobile buyers.",
      "Comprehensive dashboard to track sales, orders, and stocks."
    ],
    whyUs: "We focus on user experience and speed to maximize conversion rates. Our team provides detailed dashboard training and payment gateway approval support.",
    packages: [
      {
        name: "Starter Shop",
        price: "₹19,999",
        description: "Begin online sales with a sleek Shopify or WooCommerce storefront.",
        features: [
          "Up to 20 Products Listing",
          "Razorpay Payment Gateway Setup",
          "Shopify/WooCommerce Engine",
          "Order Tracking Dashboard",
          "Basic Analytics Reporting"
        ]
      },
      {
        name: "Growth E-com",
        price: "₹34,999",
        description: "A complete feature-packed e-commerce engine to scale sales.",
        features: [
          "Up to 100 Products Listing",
          "Custom Coupon & Discount Codes",
          "Automatic Shipping Integration",
          "Advanced Customer Admin Panels",
          "Abandoned Cart Recovery Setup",
          "Multi-payment Options Support"
        ],
        popular: true
      },
      {
        name: "Enterprise Shop",
        price: "₹59,999",
        description: "Custom-built headless next-generation e-commerce engine.",
        features: [
          "Unlimited Product Catalog",
          "Custom Next.js Headless Engine",
          "Multi-currency & Global Checkout",
          "CRM & Order ERP Sync",
          "Premium Speed CDN Config",
          "Lifetime Core Security Setup"
        ]
      }
    ],
    posters: [
      { title: "Secure Cart", desc: "Stripe & Razorpay integrated checkouts", bg: "from-red-600 to-red-950", tag: "E-com Engine" }
    ],
    faqs: [
      { q: "Which platforms do you use for E-commerce?", a: "We primarily build on Shopify and WooCommerce, and use custom headless Next.js layouts for large enterprises." },
      { q: "Is payment gateway integration included?", a: "Yes, we integrate payment pipes like Razorpay, Stripe, and UPI APIs during site setup." },
      { q: "Can I manage inventory myself?", a: "We build intuitive admin dashboards and provide training videos so you can update products easily." }
    ]
  },
  "seo": {
    title: "Search Engine Optimization (SEO)",
    subtitle: "Rank #1 on Google with advanced keyword strategies, technical audits, on-page edits, and authority backlinking.",
    price: "Starting at ₹7,999/mo",
    image: "/images/portfolio_education.jpg",
    about: "Be seen where your customers are searching. Our search engine optimization services elevate your organic search rankings on Google, Bing, and other search engines. We handle technical SEO (site speed, schema markup, crawlability), on-page content optimization, targeted keyword mapping, and white-hat domain authority backlinking campaigns.",
    whoNeedsIt: [
      "Local Services & Contractors",
      "E-commerce Stores",
      "Corporate Brands & Businesses",
      "Content Creators & Blogs"
    ],
    benefits: [
      "Consistent daily organic search traffic without paying for ads.",
      "Improved site authority and crawl optimization for search bots.",
      "Higher trust and brand credibility in local markets.",
      "Long-term compounding return on marketing investment."
    ],
    whyUs: "We use strictly white-hat search optimization principles and supply comprehensive monthly keyword ranking and traffic audit reports.",
    packages: [
      {
        name: "Basic SEO Audit",
        price: "₹7,999/mo",
        description: "Essential keyword research and technical on-page setup.",
        features: [
          "In-Depth Keyword Research",
          "Meta Tag & Title Optimization",
          "10 Target Keyword Trackers",
          "Google Search Console Setup",
          "Monthly Technical SEO Audit"
        ]
      },
      {
        name: "Rank Booster",
        price: "₹14,999/mo",
        description: "Aggressive link building and content optimization campaigns.",
        features: [
          "Technical Schema SEO Markup",
          "5 Quality Domain Backlinks/mo",
          "30 Target Keyword Trackers",
          "Competitor Keyword Auditing",
          "Monthly Progress & Traffic Reports",
          "Content Editing Suggestions"
        ],
        popular: true
      },
      {
        name: "Market Leader",
        price: "₹24,999/mo",
        description: "Full-scale SEO management with continuous content generation.",
        features: [
          "Full SEO Content Retainer",
          "15 High-DA Backlinks/mo",
          "60 Target Keyword Trackers",
          "Custom SEO Schema Integrations",
          "Continuous Speed Optimization reviews",
          "Dedicated SEO Account Manager"
        ]
      }
    ],
    posters: [
      { title: "Organic Scale", desc: "Rank #1 on targeted keywords", bg: "from-red-600 to-red-800", tag: "Search Engine" }
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Typically, organic SEO changes take 3 to 6 months to start moving keyword rankings noticeably on search indexes." },
      { q: "Do you guarantee #1 ranking on Google?", a: "No ethical agency can guarantee specific positions due to Google algorithm updates, but we use proven white-hat methodologies to rank target pages." },
      { q: "What is the difference between On-Page and Off-Page SEO?", a: "On-Page refers to changes made directly on your site content, while Off-Page involves acquiring links from other domains to boost authority." }
    ]
  },
  "mobile-app-marketing": {
    title: "Mobile App Marketing",
    subtitle: "Increase app installs and user retention with structured App Store Optimization (ASO) and cost-efficient user acquisition.",
    price: "Starting at ₹11,999",
    image: "/images/portfolio_healthcare.jpg",
    about: "Launching an app is only the first step. To succeed, you need steady installs and high retention rates. Dhanya Enterprises designs specialized App Store Optimization (ASO) strategies for iOS App Store and Google Play Store to drive organic visibility, alongside targeted App Install Campaigns on Meta and Google Ads to acquire users at the lowest cost.",
    whoNeedsIt: [
      "Mobile App Startups",
      "SaaS & Software Companies",
      "Local Business App Owners",
      "Game Developers"
    ],
    benefits: [
      "Optimized app titles, tags, and screenshots to double conversion rates.",
      "Lower Cost-Per-Install (CPI) via targeted lookalike campaign funnels.",
      "In-app event tracking setups to identify bottlenecks and user drops.",
      "Structured rating and review acquisition campaigns."
    ],
    whyUs: "We blend creative ASO graphic assets with data-driven paid advertising to scale app store installations efficiently.",
    packages: [
      {
        name: "Store Optimization",
        price: "₹11,999",
        description: "ASO optimization pack to boost organic App Store rankings.",
        features: [
          "ASO Keyword Mapping",
          "5 Sleek Screenshot Designs",
          "App Store Metadata Setup",
          "1 App Listing Submission review",
          "Competitor ASO Analysis"
        ]
      },
      {
        name: "App Launch Booster",
        price: "₹24,999",
        description: "ASO setups combined with targeted paid user acquisition.",
        features: [
          "Complete ASO Optimization pack",
          "Meta/Google Install Ads Setup",
          "Conversion Pixel API Tracking",
          "2 Weeks Campaign Management",
          "Ad creative assets creation",
          "Weekly Install Analytics reports"
        ],
        popular: true
      },
      {
        name: "Enterprise App Scale",
        price: "₹44,999",
        description: "Complete growth plan for apps seeking scale and retention.",
        features: [
          "Continuous ASO Retainer support",
          "Google + Meta + Apple Search Ads",
          "In-App SDK Analytics Integration",
          "Targeted Retargeting Campaigns",
          "User retention funnel optimization",
          "Dedicated UA Growth Manager"
        ]
      }
    ],
    posters: [
      { title: "App Scale", desc: "High conversion app store optimizations", bg: "from-red-500 to-red-900", tag: "ASO Strategy" }
    ],
    faqs: [
      { q: "What is ASO?", a: "ASO stands for App Store Optimization, which involves tweaking your store descriptions, title tags, and screenshots to rank higher in store searches." },
      { q: "How do you track app installations?", a: "We configure Mobile Measurement Partners (MMPs) or Firebase SDKs to accurately attribute installations to campaigns." },
      { q: "Which platforms do you run ad campaigns on?", a: "We run app promotion campaigns on Google Ads, Meta Ads (Instagram/Facebook), and Apple Search Ads." }
    ]
  },
  "meta-ads": {
    title: "Meta Ads (Facebook & Instagram Advertising)",
    subtitle: "Target high-intent customers, create high-converting copy, and optimize ad layouts to scale lead generation.",
    price: "Starting at ₹9,999/mo",
    image: "/images/portfolio_real_estate.jpg",
    about: "Put your brand in front of millions of active users. Dhanya Enterprises structures and manages highly targetable Meta Ads (Facebook & Instagram Ads) customized to drive direct leads, store sales, and visual awareness. We engineer high-converting ad copies, design interactive visual assets, and set up pixel conversion tracking to ensure every rupee spent translates into business growth.",
    whoNeedsIt: [
      "D2C Brands & Retailers",
      "Real Estate Realtors",
      "Educational Institutes",
      "Service Providers & Agencies"
    ],
    benefits: [
      "Surgical targeting matching exact customer age, interest, and region.",
      "Highly-engaging visual creatives optimized for modern mobile feeds.",
      "Direct leads and sales tracking via Meta Pixel integration.",
      "Retargeting campaigns to convert previous site visitors."
    ],
    whyUs: "We design premium ad creatives and continuously test variables (audience, copy, graphics) to lower your customer acquisition costs.",
    packages: [
      {
        name: "Ad Campaign Setup",
        price: "₹9,999/mo",
        description: "Essential setup package for new advertisers on Meta.",
        features: [
          "Campaign Structure Setup",
          "Meta Pixel API Integration",
          "5 Custom Graphic Ad Creatives",
          "Target Audience Research",
          "1 Week Campaign Auditing"
        ]
      },
      {
        name: "Lead Gen Scale",
        price: "₹19,999/mo",
        description: "Ongoing campaign management to generate high volumes of queries.",
        features: [
          "Meta Pixel + Conversion API Setup",
          "12 Custom Graphic Ad Creatives/mo",
          "Daily Campaign Optimization reviews",
          "Retargeting & Lookalike Audience mapping",
          "Ad copywriting and testing",
          "Weekly Performance Reports"
        ],
        popular: true
      },
      {
        name: "Enterprise Growth",
        price: "₹34,999/mo",
        description: "Full-scale multi-funnel growth plan for high budget scales.",
        features: [
          "Unlimited Active Campaigns",
          "Video Editing for Ad Reels included",
          "Sales Lead Funnel Optimization",
          "Meta CAPI Advanced Integration",
          "A/B Landing Page testing",
          "Priority Strategy Consultation"
        ]
      }
    ],
    posters: [
      { title: "Meta Growth", desc: "High ROAS lead and sale generation", bg: "from-red-600 to-red-950", tag: "Paid Social" }
    ],
    faqs: [
      { q: "Do you provide the images and videos for the ads?", a: "Yes, our in-house creative design team compiles and designs all image banners and edited video ads." },
      { q: "What advertising budget is required?", a: "You pay the ad spend directly to Meta. We recommend starting with a minimum of ₹500/day to test audiences effectively." },
      { q: "How do you track sales from Facebook Ads?", a: "We set up the Meta Pixel and Conversions API on your website to trace user checkout events back to the ads." }
    ]
  },
  "graphic-design": {
    title: "Graphic Design",
    subtitle: "Premium visual assets including flyers, brochures, custom business profiles, brochures, and brand catalogs.",
    price: "Starting at ₹4,999",
    image: "/images/portfolio_fashion.jpg",
    about: "High-quality graphics build immediate trust. Dhanya Enterprises designs premium graphics, brochures, catalog folders, and social media flyers that reflect your brand's unique identity. We ensure every canvas aligns with modern typography guidelines, color theories, and clean layout patterns to drive customer action and visual engagement.",
    whoNeedsIt: [
      "Corporate Marketing Teams",
      "Restaurants & Local Cafes",
      "Event Organizers",
      "E-commerce Sellers"
    ],
    benefits: [
      "Pixel-perfect, high-resolution vector assets ready for print and screen.",
      "Consistent brand layouts across all print and social banners.",
      "Fast turnaround times to meet immediate event launch dates.",
      "Professional typesetting using modern premium font families."
    ],
    whyUs: "Our design team has rich experience in color balance, typographic layouts, and brand visual styling to guarantee stunning outputs.",
    packages: [
      {
        name: "Essential Design",
        price: "₹4,999",
        description: "Fast graphic assets package for small social promotions.",
        features: [
          "5 Custom Social Creatives",
          "1 Print-Ready Flyer Design",
          "High-Resolution Export Files",
          "Source Vector Files included",
          "3 Review rounds"
        ]
      },
      {
        name: "Professional Branding",
        price: "₹9,999",
        description: "Branding collateral upgrade package for growing companies.",
        features: [
          "15 Custom Social Banners",
          "4-Page Corporate Brochure Layout",
          "Custom Vector Icon Assets",
          "Print-Ready Layout Formats",
          "Unlimited Revision rounds",
          "Dedicated Graphic Designer"
        ],
        popular: true
      },
      {
        name: "Corporate Retainer",
        price: "₹19,999/mo",
        description: "Monthly design partnership for active marketing setups.",
        features: [
          "35 Custom Social Creatives/mo",
          "Full Print Brochure & Banners pack",
          "Brand Guidelines Alignment setup",
          "Priority 24-hour turnaround",
          "Dedicated Account Art Director",
          "Weekly Creative Sync Calls"
        ]
      }
    ],
    posters: [
      { title: "Visual Balance", desc: "Stunning vector graphics", bg: "from-red-500 to-red-850", tag: "Design Lab" }
    ],
    faqs: [
      { q: "What vector file formats do you deliver?", a: "We provide designs in EPS, AI, PDF, Figma, SVG, and high-resolution PNG/JPG formats." },
      { q: "Do you offer physical printing services?", a: "We provide print-ready layouts configured for offset and digital printers, and handle print fulfillment under local request." },
      { q: "What is your revision turnaround time?", a: "Revision loops are usually completed within 12 to 24 hours depending on complexity." }
    ]
  },
  "video-editing-motion-graphics": {
    title: "Video Editing & Motion Graphics",
    subtitle: "Capture eyes with engaging daily Reels, professional video edits, text-animations, and premium branding motion assets.",
    price: "Starting at ₹7,999",
    image: "/images/portfolio_restaurant.jpg",
    about: "Video is the highest-performing content medium online. Dhanya Enterprises produces premium video edits, engaging Instagram Reels, TikTok video layouts, corporate explainers, and slick motion graphics. We compile raw shots, refine audio quality, inject trendy text animations, and add color-grading overlays to construct viral-worthy videos that build audiences.",
    whoNeedsIt: [
      "Social Media Creators",
      "D2C Retail Brands",
      "Real Estate Developers",
      "Educational Institutes"
    ],
    benefits: [
      "Engaging sound design, trending music overlays, and subtitles.",
      "Higher engagement and watch-time metrics on social algorithms.",
      "Professional motion transitions and dynamic intro graphics.",
      "Branded logo animation and watermark overlays."
    ],
    whyUs: "We analyze trending social media editing structures to design dynamic, fast-paced videos that hook viewers in the first 3 seconds.",
    packages: [
      {
        name: "Reels Booster",
        price: "₹7,999/mo",
        description: "Start growing your Instagram with dynamic short videos.",
        features: [
          "5 Short Reels (Under 60s)",
          "Sleek Subtitles & Audio Effects",
          "Pro Color Grading",
          "Royalty-free Background Music",
          "2 Revision rounds"
        ]
      },
      {
        name: "Content Retainer",
        price: "₹14,999/mo",
        description: "Steady stream of reels and video layouts for businesses.",
        features: [
          "12 Custom Short Reels/mo",
          "1 Long Explainer Video (Under 5m)",
          "Slick Transitions & Text Animations",
          "Thumbnail Covers included",
          "Unlimited Revision rounds",
          "Priority 48-hour delivery"
        ],
        popular: true
      },
      {
        name: "Enterprise Producer",
        price: "₹29,999/mo",
        description: "Complete video production support for digital channels.",
        features: [
          "25 Custom Short Reels/mo",
          "3 Long Corporate Explainer Videos",
          "Custom Motion Intros & Logo Outros",
          "Premium Subtitle animations",
          "Weekly Script-sync calls",
          "Priority 24-hour turnaround"
        ]
      }
    ],
    posters: [
      { title: "Viral Motion", desc: "Trendy subtitles and motion effects", bg: "from-red-600 to-red-900", tag: "Post Production" }
    ],
    faqs: [
      { q: "Do you write scripts for the videos?", a: "Yes, we draft short hook scripts and conceptual concepts for marketing Reels." },
      { q: "Can I send raw footage recorded from my smartphone?", a: "Yes, smartphones shoot excellent high-res video. We polish smartphone footage into professional content." },
      { q: "Is royalty-free music included?", a: "Yes, we use verified licensing pipelines to guarantee your videos won't suffer copyright mute flags." }
    ]
  },
  "lead-generation-campaigns": {
    title: "Lead Generation Campaigns",
    subtitle: "Scale B2B or B2C queries with advanced landing page forms, CRM automation, and targeted sales funnels.",
    price: "Starting at ₹14,999/mo",
    image: "/images/hero_team.jpg",
    about: "Stop waiting for customers; actively acquire them. Dhanya Enterprises creates custom Lead Generation Campaigns utilizing multi-channel funnels (Google Search, Meta Ads, Landing Pages). We build highly converting landing pages, set up lead capture forms, configure automated email notifications, and connect lead pipes directly to your CRM, ensuring your sales team gets a consistent stream of qualified, hot leads.",
    whoNeedsIt: [
      "Real Estate Agencies",
      "B2B SaaS Businesses",
      "Insurance & Financial Advisors",
      "Educational Centers"
    ],
    benefits: [
      "Steady flow of highly qualified buyers interested in your services.",
      "Automated email/SMS follow-up alerts to maximize contact rates.",
      "Optimized high-conversion landing page layouts.",
      "Measurable Cost-Per-Lead (CPL) statistics for clear ROI mapping."
    ],
    whyUs: "We build the entire funnel—from the visual ad to the lead capture page and autoresponder—so you only focus on closing deals.",
    packages: [
      {
        name: "Setup & Launch",
        price: "₹14,999",
        description: "Complete funnel architecture build and initial campaign launch.",
        features: [
          "1 High-Converting Landing Page",
          "Meta/Google Ad Campaign Setup",
          "Secure CRM Integration",
          "Form Setup & Autoresponder Email",
          "1 Week Campaign Monitoring"
        ]
      },
      {
        name: "Lead Engine",
        price: "₹24,999/mo",
        description: "Continuous optimization and A/B testing to lower lead costs.",
        features: [
          "2 Custom Landing Pages Built",
          "Google Search + Meta Ad Campaigns",
          "A/B Conversion Testing",
          "Lead Quality Scoring Automations",
          "10 Custom Ad Creatives/mo",
          "Weekly Lead Count Reports"
        ],
        popular: true
      },
      {
        name: "Enterprise Pipeline",
        price: "₹44,999/mo",
        description: "Aggressive multi-channel lead acquisition and email nurturing.",
        features: [
          "Unlimited Lead Funnels Built",
          "All Copywriting Retainer tasks",
          "5-Step Automated Email Drip setups",
          "Meta Pixel + Google Conversion setups",
          "Weekly Funnel Optimization reviews",
          "Dedicated Funnel Manager"
        ]
      }
    ],
    posters: [
      { title: "Query Stream", desc: "Consistent hot leads routed to your sales desk", bg: "from-red-500 to-red-900", tag: "Lead Tech" }
    ],
    faqs: [
      { q: "What is a dynamic landing page?", a: "It is a highly optimized single-page website focused entirely on getting a visitor to fill out a contact form." },
      { q: "Can leads be routed directly to my sales CRM?", a: "Yes, we connect form endpoints to systems like HubSpot, Zoho, Google Sheets, or Zapier APIs." },
      { q: "What counts as a 'qualified' lead?", a: "We customize form fields (budget, business size, needs) to filter out low-intent queries." }
    ]
  },
  "local-seo-google-business-profile": {
    title: "Local SEO & Google Business Profile Optimization",
    subtitle: "Dominate local maps searches in your region and attract local walking customers directly to your storefront.",
    price: "Starting at ₹5,999/mo",
    image: "/images/portfolio_real_estate.jpg",
    about: "When locals search for products or services near them, your business should be the first choice. At Dhanya Enterprises, we specialize in local SEO and Google Business Profile (GBP / Google My Business) optimization. We manage local listings, optimize profile descriptions, set up geo-tagged images, manage local review strategies, and boost local map visibility to direct maps searches straight to your shop doorstep.",
    whoNeedsIt: [
      "Retail Storefronts & Showrooms",
      "Local Service Providers (Plumbers, Builders)",
      "Clinics, Salons & Restaurants",
      "Offices serving specific localities"
    ],
    benefits: [
      "Immediate map discovery on local searches like 'near me'.",
      "Increased local store walk-ins and direct phone inquiries.",
      "Higher review count and local buyer trust.",
      "Cost-efficient way to capture local customer intent."
    ],
    whyUs: "We are local search marketing specialists. We optimize your profiles based on Google's map rank algorithms to rank you in the top local 3-pack.",
    packages: [
      {
        name: "Basic Profile Setup",
        price: "₹5,999",
        description: "Google verification and keyword map structure setup.",
        features: [
          "Google Business verification help",
          "Keyword Listing Optimization",
          "15 Geo-tagged Photo Uploads",
          "10 Local Citation Site Listings",
          "Basic Review QR Code flyer"
        ]
      },
      {
        name: "Local Domination",
        price: "₹11,999/mo",
        description: "Continuous listings maintenance to stay ahead of local rivals.",
        features: [
          "Active GBP Dashboard management",
          "30 Local Citation Site Listings/mo",
          "Structured Local Review Strategy",
          "GBP Posts & FAQ setup monthly",
          "Local map rank audit reports",
          "Spam business listing cleanup"
        ],
        popular: true
      },
      {
        name: "Multi-Location Scale",
        price: "₹21,999/mo",
        description: "Map rank domination for franchises with multiple branches.",
        features: [
          "Up to 3 Profiles Managed",
          "Local backlink acquisitions",
          "Local Schema SEO markup scripts",
          "Integrated map directions analytics",
          "Review auto-reply dashboard setup",
          "Priority account support"
        ]
      }
    ],
    posters: [
      { title: "Map Rank", desc: "Top local 3-pack map positioning", bg: "from-red-600 to-red-850", tag: "Local Search" }
    ],
    faqs: [
      { q: "What is the Google local 3-pack?", a: "It is the set of three local business map listings that Google highlights right below search queries." },
      { q: "Do reviews affect map search rankings?", a: "Yes, the velocity, rating score, and keyword contents of Google reviews significantly affect map rankings." },
      { q: "How do you handle listing suspensions?", a: "We guide you through compliance audits to submit clean appeals to Google's support dashboard." }
    ]
  },
  "marketing-strategy-consulting": {
    title: "Marketing Strategy & Consulting",
    subtitle: "Interactive consulting workshops, competitive research, and long-term scaling strategy for startups.",
    price: "Starting at ₹14,999",
    image: "/images/hero_team.jpg",
    about: "A campaign without a strategy is a waste of budget. Dhanya Enterprises offers professional marketing strategy consulting. We run interactive workshops for business founders, analyze competitor campaigns, define target buyer personas, select optimal marketing channels, and outline a detailed 12-month scaling plan to help you grow your brand predictably and avoid costly mistakes.",
    whoNeedsIt: [
      "Startup Founders & Business Owners",
      "Corporate Sales Directors",
      "Traditional Brands moving online",
      "Product Launch Teams"
    ],
    benefits: [
      "Clear step-by-step roadmap to align team and spend budget.",
      "Deep competitor campaign analysis and keyword positioning maps.",
      "Identified high-ROI channels to focus campaigns.",
      "Optimized marketing messaging to stand out from competitors."
    ],
    whyUs: "Led by certified marketing consultants with deep industry experience across B2B and B2C markets. We deliver practical roadmaps, not bloated reports.",
    packages: [
      {
        name: "Strategy Session",
        price: "₹14,999",
        description: "In-depth one-on-one consulting call to scope marketing strategies.",
        features: [
          "2-Hour Dedicated Strategy Call",
          "Competitor Campaign Auditing",
          "Growth Channel mapping recommendations",
          "1-Page Blueprint Growth Guide",
          "1 Week follow-up email support"
        ]
      },
      {
        name: "Core Scaling Roadmap",
        price: "₹29,999",
        description: "Full research dossier and action plan for business growth.",
        features: [
          "Two 2-Hour Strategy Sessions",
          "Deep Competitor Campaign Analysis",
          "Detailed 12-Month Campaign Roadmap",
          "Target Persona Research Dossier",
          "Standard Operating Procedures (SOPs)",
          "30 Days of Slack/WhatsApp support"
        ],
        popular: true
      },
      {
        name: "Full Advisory Retainer",
        price: "₹54,999/mo",
        description: "Ongoing executive marketing advisor retainer for startups.",
        features: [
          "Weekly strategy sync calls (60m)",
          "Marketing Team Training Session",
          "Campaign setup auditing reviews",
          "Conversion Funnel UX optimization",
          "Continuous messaging adjustments",
          "Priority 24/7 text support access"
        ]
      }
    ],
    posters: [
      { title: "Growth Blueprints", desc: "Actionable 12-month scaling roadmaps", bg: "from-red-500 to-red-900", tag: "Consultancy" }
    ],
    faqs: [
      { q: "What does the 12-month strategy report contain?", a: "It maps target audiences, suggests exact ad channels, estimates costs, designs copywriting angles, and sets conversion metrics." },
      { q: "Do you execute the campaigns as well?", a: "Yes, we offer execution retainers (SEO, Ads, Dev) and consult with your internal teams if you have them." },
      { q: "How do you analyze competitor campaigns?", a: "We track active competitor ad copies, search volumes, and backlink strategies using premium analysis suites." }
    ]
  },
  "marketplace-marketing": {
    title: "Marketplace Marketing (Amazon, Flipkart, etc.)",
    subtitle: "Optimize product listings, run cost-efficient marketplace Ads, and design A+ content to boost online store sales.",
    price: "Starting at ₹12,999/mo",
    image: "/images/portfolio_ecommerce.jpg",
    about: "Scale your e-commerce brand inside the world's largest shopping search engines. Dhanya Enterprises optimizes and manages your presence on marketplace portals like Amazon, Flipkart, Myntra, and others. We run marketplace keyword listing optimizations, design premium A+ content (EBC layouts), set up sponsored product ads, and manage feedback loops to maximize product review scores.",
    whoNeedsIt: [
      "E-commerce Brand Sellers",
      "Manufacturers & Distributors",
      "Local Product Creators",
      "D2C Startup Brands"
    ],
    benefits: [
      "Higher search rankings inside Amazon & Flipkart search boxes.",
      "Lower ACoS (Advertising Cost of Sales) via targeted sponsored ads.",
      "Higher conversion rates using A+ graphic descriptions.",
      "Optimized review strategies to boost product scores."
    ],
    whyUs: "We understand e-commerce algorithms. Our team blends catalog design, keyword copywriting, and advertising to scale your online marketplace sales.",
    packages: [
      {
        name: "Catalog Launch",
        price: "₹12,999",
        description: "SEO optimization setup for new products on marketplaces.",
        features: [
          "Up to 10 Product Listing builds",
          "SEO Title & Bullet copywriting",
          "Backend Search Terms keyword list",
          "Image graphic sizing checks",
          "Initial Store setup validation"
        ]
      },
      {
        name: "Growth Retainer",
        price: "₹24,999/mo",
        description: "Active advertising and listing enhancements to multiply sales.",
        features: [
          "Ongoing Listing Optimization",
          "5 Custom A+ Content (EBC) layouts",
          "Sponsored Ads Campaign setup",
          "ACoS Optimization reviews",
          "Competitor listing monitoring",
          "Monthly Ads ROI reports"
        ],
        popular: true
      },
      {
        name: "Brand Leader",
        price: "₹44,999/mo",
        description: "Complete growth plan to dominate marketplace search grids.",
        features: [
          "Unlimited Listing Management",
          "Premium Brand Store Design built",
          "Multi-portal Ads (Amazon + Flipkart)",
          "ACoS optimization & negative keywords",
          "Feedback loop review acquisition strategy",
          "Priority catalog support"
        ]
      }
    ],
    posters: [
      { title: "Marketplace Ads", desc: "Lower ACoS and higher product rankings", bg: "from-red-600 to-red-950", tag: "Marketplace Engine" }
    ],
    faqs: [
      { q: "What is A+ Content or EBC?", a: "A+ Content (Enhanced Brand Content) allows brand registry sellers to add rich images, text grids, and tables to product pages." },
      { q: "What is a good ACoS target?", a: "ACoS varies by category, but we aim to achieve a target of 15% to 25% to maximize store profit margins." },
      { q: "Do you manage marketplace logistics?", a: "We optimize listing pages and ads, while you handle product inventory, warehousing, and parcel shipping (FBA/FBM)." }
    ]
  }
};

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Retrieve service data, fallback to website-design-development if invalid slug
  const service = servicesData[id] || servicesData["website-design-development"];

  // Accordion active index state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Lightbox index state for gallery posters preview
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Contact form submission state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        businessName: "",
        message: "",
      });
    }, 1500);
  };

  const handlePrevPoster = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? service.posters.length - 1 : lightboxIndex - 1);
  };

  const handleNextPoster = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === service.posters.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner Section */}
        <section className="relative pt-36 pb-20 bg-[#111111] text-white overflow-hidden">
          {/* Decorative background glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-800/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-gray-400 mb-6 tracking-wider uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-gray-600" />
              <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-primary font-bold">{service.title}</span>
            </div>

            {/* Back to Home Link */}
            <Link 
              href="/#services" 
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-white/70 hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft size={14} className="transform transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Services
            </Link>

            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading font-black text-3xl sm:text-5xl leading-tight text-white mb-4 tracking-tight">
                {service.title}
              </h1>
              <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed">
                {service.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* About the Service Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: About Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div>
                <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                  Service Overview
                </span>
                <h2 className="font-heading font-black text-2xl md:text-3xl text-dark mb-4 tracking-tight">
                  What is this service?
                </h2>
                <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                  {service.about}
                </p>
              </div>

              {/* Who Needs It */}
              <div className="bg-[#F8F8F8] border border-border-light rounded-[18px] p-6">
                <h4 className="font-heading font-bold text-base text-dark mb-4 uppercase tracking-wider">
                  Who is this for?
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.whoNeedsIt.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-center font-sans text-sm text-text-dark font-medium">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Side: Benefits & Visual Accent */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8 lg:sticky lg:top-28"
            >
              {/* Benefits */}
              <div className="bg-white border border-border-light rounded-[18px] p-6 shadow-sm">
                <h4 className="font-heading font-bold text-base text-dark mb-4 uppercase tracking-wider">
                  Key Benefits
                </h4>
                <ul className="flex flex-col gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start font-sans text-sm text-text-secondary leading-relaxed">
                      <Check size={16} className="text-primary flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Visual Showcase (Posters Gallery if any exist) */}
        {service.posters.length > 0 && (
          <section className="py-24 bg-[#F8F8F8] relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                  Creative Portfolio
                </span>
                <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-dark tracking-tight mb-4">
                  Layout & Ad Demonstrations
                </h2>
                <p className="font-sans text-base text-text-secondary">
                  Take a look at sample graphic models, visual structures, and layouts designed by our production lab.
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="flex flex-wrap justify-center gap-8">
                {service.posters.map((poster, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setLightboxIndex(index)}
                    className={`relative w-full max-w-[280px] aspect-[4/5] bg-gradient-to-br ${poster.bg} rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg cursor-pointer group overflow-hidden`}
                  >
                    <span className="bg-white/20 border border-white/25 text-white font-sans font-bold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit">
                      {poster.tag}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-red-200 transition-colors">{poster.title}</h4>
                      <p className="font-sans text-[11px] text-text-secondary">{poster.tag}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* Packages Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                Transparent Pricing
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-dark tracking-tight mb-4">
                Service Packages
              </h2>
              <p className="font-sans text-base text-text-secondary">
                Select a budget option customized to match your project size. Get upfront prices with zero hidden costs.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {service.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`border rounded-[18px] p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    pkg.popular
                      ? "border-primary shadow-xl shadow-primary/5 bg-white scale-102 z-10"
                      : "border-border-light shadow-sm bg-white hover:border-primary/20"
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-sans font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h4 className="font-heading font-bold text-xl text-dark mb-1">{pkg.name}</h4>
                    <p className="font-sans text-xs text-text-secondary mb-6">{pkg.description}</p>
                    
                    {/* Price */}
                    <div className="mb-6 flex items-baseline gap-1">
                      <span className="font-heading font-black text-4xl text-dark">{pkg.price}</span>
                      <span className="font-sans text-xs text-text-secondary font-medium">/ package</span>
                    </div>

                    {/* Features List */}
                    <ul className="flex flex-col gap-3.5 border-t border-border-light/70 pt-6">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start font-sans text-sm text-text-dark">
                          <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#enquiry"
                    className={`w-full font-sans font-bold text-sm text-center py-3.5 rounded-xl mt-8 transition-all duration-300 inline-block ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-lg"
                        : "bg-[#F8F8F8] border border-border-light text-text-dark hover:bg-primary/5 hover:text-primary hover:border-primary/20"
                    }`}
                  >
                    Select Plan
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose This Service section (Icon cards) */}
        <section className="py-24 bg-[#F8F8F8] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                Quality Metrics
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-dark tracking-tight mb-4">
                Our Service Standards
              </h2>
              <p className="font-sans text-base text-text-secondary">
                We maintain agency-grade standards to ensure your digital tools perform beautifully.
              </p>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Affordable Pricing", desc: "No bloated corporate overheads. We price for results." },
                { title: "Fast Delivery", desc: "Timelines defined upfront. We respect launch deadlines." },
                { title: "Professional Quality", desc: "Pixel-perfect designs and modern clean architectures." },
                { title: "Expert Team", desc: "Campaigns setup by certified marketers with rich experience." },
                { title: "24/7 Customer Support", desc: "Proactive communication and dedicated account reviews." },
                { title: "Satisfaction Guaranteed", desc: "We align drafts with your revisions until it matches." }
              ].map((std, idx) => (
                <div key={idx} className="bg-white border border-border-light rounded-[18px] p-6 shadow-sm flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    ✔
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-dark mb-1">{std.title}</h4>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{std.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Work Process Timeline (Animated) */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                How It Works
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-dark tracking-tight mb-4">
                Work Process Timeline
              </h2>
              <p className="font-sans text-base text-text-secondary">
                A simple 6-step collaborative pipeline from initial onboarding to project handover.
              </p>
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
              {/* Decorative connecting line for desktop */}
              <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-border-light -z-10" />

              {[
                { step: "Step 1", title: "Enquiry", desc: "Submit details in the form below." },
                { step: "Step 2", title: "Consultation", desc: "15 min call to detail scope." },
                { step: "Step 3", title: "Planning", desc: "Draft proposals & wireframes." },
                { step: "Step 4", title: "Design/Dev", desc: "Hands-on execution phase." },
                { step: "Step 5", title: "Review", desc: "Incorporate client revisions." },
                { step: "Step 6", title: "Delivery", desc: "Launch and hand over assets." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Bubble */}
                  <div className="w-14 h-14 bg-white border-2 border-border-light text-text-dark font-sans font-black rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white shadow-sm shadow-primary/5">
                    {idx + 1}
                  </div>
                  
                  {/* Meta */}
                  <span className="font-sans font-bold text-[10px] text-primary uppercase tracking-widest mb-1">{item.step}</span>
                  <h4 className="font-heading font-bold text-sm text-dark mb-1.5">{item.title}</h4>
                  <p className="font-sans text-[11px] text-text-secondary leading-normal max-w-[150px]">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Accordion FAQ Section */}
        <section id="faq" className="py-24 bg-[#F8F8F8] relative">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                Got Questions?
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-dark tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="font-sans text-base text-text-secondary">
                Find clear responses to common inquiries regarding our deliverables and workflows.
              </p>
            </div>

            {/* FAQ Accordion Grid */}
            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-border-light rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-sm md:text-base text-dark hover:text-primary transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="flex-shrink-0 ml-4 w-6 h-6 rounded-full bg-primary/5 text-primary flex items-center justify-center font-sans">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="p-5 pt-0 border-t border-border-light/40 font-sans text-xs md:text-sm text-text-secondary leading-relaxed bg-[#FAFAFA]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Enquiry Form Section */}
        <section id="enquiry" className="py-24 bg-white relative">
          <div className="max-w-3xl mx-auto px-6">
            
            <div className="bg-[#F8F8F8] border border-border-light rounded-[18px] p-8 md:p-12 shadow-sm relative">
              <div className="text-center mb-8">
                <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                  Quick Consult
                </span>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-dark mb-2">
                  Request a Free Consultation
                </h3>
                <p className="font-sans text-xs md:text-sm text-text-secondary">
                  Complete the form below and we will contact you within 24 hours to align on pricing.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="enquiry-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-sans text-xs font-semibold text-text-secondary">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                          placeholder="Rahul Sharma"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="font-sans text-xs font-semibold text-text-secondary">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                          placeholder="+91 99619 92772"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-sans text-xs font-semibold text-text-secondary">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                          placeholder="rahul@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="businessName" className="font-sans text-xs font-semibold text-text-secondary">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                          placeholder="Sharma Retail"
                        />
                      </div>
                    </div>

                    {/* Pre-filled Service Required */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-xs font-semibold text-text-secondary">
                        Service Required
                      </label>
                      <input
                        type="text"
                        disabled
                        value={`${service.title} (${service.price})`}
                        className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 bg-gray-200/80 text-gray-600 font-semibold focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-sans text-xs font-semibold text-text-secondary">
                        Message / Goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="font-sans text-sm border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white resize-none"
                        placeholder="Tell us what you want to accomplish..."
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary-hover disabled:bg-primary/70 text-white font-sans font-bold text-sm py-4 rounded-xl transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? "Sending..." : "Enquire Now"}
                      </button>
                      <a
                        href="https://wa.me/919961992772?text=Hello%20Dhanya%20Enterprises,%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20BA56] text-white font-sans font-bold text-sm py-4 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        WhatsApp Direct
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="consult-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check size={28} />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-dark">Consultation Requested!</h4>
                    <p className="font-sans text-xs md:text-sm text-text-secondary max-w-sm">
                      Thank you for contacting Dhanya Enterprises. Our service specialists will call you back within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-primary hover:text-primary-hover font-sans font-semibold text-xs mt-3 underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Lightbox Modal (For mock poster preview) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Stop closing on clicking poster body
              className="relative w-full max-w-[450px] aspect-[4/5] bg-gradient-to-br from-red-600 to-red-950 p-10 text-white rounded-3xl flex flex-col justify-between shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors focus:outline-none"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={handlePrevPoster}
                className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors focus:outline-none hidden md:block"
                aria-label="Previous poster"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNextPoster}
                className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors focus:outline-none hidden md:block"
                aria-label="Next poster"
              >
                <ChevronRightIcon size={18} />
              </button>

              {/* Tag / Category */}
              <span className="bg-white/15 border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full w-fit">
                {service.posters[lightboxIndex].tag}
              </span>

              {/* Text content */}
              <div className="flex flex-col gap-4">
                <h4 className="font-heading font-black text-3xl md:text-4xl leading-tight">
                  {service.posters[lightboxIndex].title}
                </h4>
                <p className="font-sans text-sm text-white/80 font-medium">
                  {service.posters[lightboxIndex].desc}
                </p>
              </div>

              {/* Watermark branding */}
              <div className="flex items-center gap-2 opacity-50 justify-between mt-6 pt-4 border-t border-white/10">
                <span className="font-sans text-xs font-semibold">Mock Layout Demo</span>
                <span className="font-heading font-black text-xs tracking-wider">DHANYA ENTERPRISES</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
