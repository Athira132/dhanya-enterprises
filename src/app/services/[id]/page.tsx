"use client";

import { use, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon, Plus, Minus, ArrowLeft } from "lucide-react";

// Full data mapping for all 7 services
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
  "digital-business-card": {
    title: "Digital Business Card",
    subtitle: "Share your professional contact information instantly with premium NFC and QR visiting cards.",
    price: "₹999",
    image: "/images/portfolio_real_estate.jpg",
    about: "The Digital Business Card by Dhanya Enterprises is the modern way to network. Swap paper cards for a sleek, contact-free solution. Using NFC (Near Field Communication) and QR code technologies, you can share your portfolio, contact details, social links, and business hours with a single tap or scan. No apps required.",
    whoNeedsIt: [
      "Entrepreneurs & Startup Founders",
      "Sales Executives & Realtors",
      "Freelancers & Creative Professionals",
      "Corporate Teams & Agency Representatives"
    ],
    benefits: [
      "Instantly share contact details, links, and map location.",
      "Eco-friendly alternative to printing thousands of paper cards.",
      "Update your details anytime online without reprinting.",
      "Includes a premium QR code for devices without NFC compatibility."
    ],
    whyUs: "Dhanya Enterprises offers customized premium card designs matching your brand colors. We provide lifetime link hosting with zero monthly fees, fast 2-day delivery across India, and dedicated setup support.",
    packages: [
      {
        name: "Classic QR Card",
        price: "₹999",
        description: "Matte-finished PVC card with high-resolution custom QR code printing.",
        features: [
          "Custom QR Printing",
          "Dynamic Profile Dashboard",
          "Unlimited Profile Edits",
          "One-Click Save Contact button",
          "1 Year Dashboard Hosting"
        ]
      },
      {
        name: "Premium NFC Card",
        price: "₹1999",
        description: "Elegant matte-black PVC card embedded with premium NTAG213 NFC chip.",
        features: [
          "Tap-to-Share NFC Chip",
          "Custom Name Engraving",
          "Lifetime Profile Hosting",
          "NFC + QR Code Enabled",
          "Analytics Tracking Enabled",
          "Priority Customer Support"
        ],
        popular: true
      },
      {
        name: "Metal Edition",
        price: "₹3499",
        description: "Ultra-premium laser-engraved metal business card.",
        features: [
          "Solid Aerospace-Grade Metal Card",
          "Laser-Engraved Logo & Name",
          "Premium NFC + QR Features",
          "Custom Profile Themes",
          "Dedicated Account Manager",
          "Lifetime Replacement Warranty"
        ]
      }
    ],
    posters: [
      { title: "Tap to Connect", desc: "Share details in a single swipe", bg: "from-red-500 to-red-800", tag: "NFC Power" },
      { title: "Paperless Networking", desc: "Sleek. Modern. Eco-Friendly.", bg: "from-slate-800 to-slate-900", tag: "Eco Friendly" },
      { title: "Your Digital Portal", desc: "One link to present your portfolio", bg: "from-red-600 to-neutral-900", tag: "Dynamic QR" },
      { title: "Corporate Teams Pack", desc: "Cohesive designs for company staff", bg: "from-zinc-900 to-red-700", tag: "Corporate" },
      { title: "Metal Signature Series", desc: "Make an unforgettable impression", bg: "from-stone-900 to-yellow-600", tag: "Lux Premium" },
      { title: "Real Estate Special", desc: "Tap to view active home listings", bg: "from-red-500 to-slate-900", tag: "Real Estate" }
    ],
    faqs: [
      { q: "How does the NFC card work?", a: "Simply tap the card on the back of any modern smartphone. A browser window will automatically open showing your digital profile." },
      { q: "Do people need an app to read my card?", a: "No, they do not need any application or scanner. It uses native NFC technology built into smartphones." },
      { q: "What if a phone does not support NFC?", a: "Every card includes a high-definition custom QR code on the back. Users can simply scan it with their camera." },
      { q: "Can I update my details later?", a: "Yes, you can edit your profile links, contact info, and images at any time through our online dashboard." },
      { q: "Are there monthly subscription charges?", a: "No, our classic and premium packages include lifetime card usage with no ongoing monthly costs." },
      { q: "Is the metal card heavy?", a: "It weighs around 15g, which gives it a premium, sturdy, and executive feel compared to standard PVC." },
      { q: "Can I print my custom company logo?", a: "Yes, we accept logo uploads in high resolution vector formats and print them beautifully on the card." },
      { q: "How long does shipping take?", a: "We design and print within 24 hours. Transit takes 2-4 business days across India." },
      { q: "What analytics do I get?", a: "You can track profile views, tap counts, and which social/portfolio links were clicked the most." },
      { q: "Do you offer discounts for corporate teams?", a: "Yes, we offer special bulk pricing starting from 10+ cards. Reach out through our consultation form." }
    ]
  },
  "website-development": {
    title: "Website Development",
    subtitle: "High-performance, fully responsive websites designed to convert visitors into loyal clients.",
    price: "₹1999+",
    image: "/images/portfolio_ecommerce.jpg",
    about: "In the digital age, your website is your virtual storefront. At Dhanya Enterprises, we build modern Next.js, React, and WordPress sites optimized for extreme loading speeds, SEO, and visual excellence. We handle everything from design mocks to hosting configuration.",
    whoNeedsIt: [
      "Local Businesses & Retail Shops",
      "Corporate Agencies & Consulting Firms",
      "E-commerce Retail Brands",
      "Clinics, Schools, and Hospitals"
    ],
    benefits: [
      "Stunning custom UI layouts tailored to your industry branding.",
      "Mobile-first responsive grids that look perfect on all screens.",
      "Optimized code for high Core Web Vitals and top Google ranking.",
      "Admin panel integration for easy self-management of content."
    ],
    whyUs: "We focus on conversion rate optimization (CRO) rather than just templates. Our packages include high-quality copywriting, page speed tuning, custom contact forms, and 30 days of free post-launch support.",
    packages: [
      {
        name: "One-Page Landing",
        price: "₹1999",
        description: "Perfect for startups, portfolios, single product promotions, and event signups.",
        features: [
          "Premium One-Page Design",
          "Contact Form Integration",
          "Mobile Responsive Grid",
          "Basic SEO Optimization",
          "Free SSL Setup Assistance"
        ]
      },
      {
        name: "Business Website",
        price: "₹6999",
        description: "Complete corporate website with administrative control dashboard.",
        features: [
          "Up to 5 Pages (Home, About, Services, Blog, Contact)",
          "WordPress CMS / Custom React Setup",
          "Contact Form & Map Integration",
          "Google Analytics & SEO Enabled",
          "Dynamic Blog/News Section",
          "30 Days Support Retainer"
        ],
        popular: true
      },
      {
        name: "E-Commerce Suite",
        price: "₹14999+",
        description: "Powerful storefront packed with checkout, payment gateways, and inventories.",
        features: [
          "Unlimited Products listing",
          "Secure Payment Gateways (Razorpay/Paytm)",
          "Inventory Management Console",
          "Discount Codes & Coupon Engine",
          "SMS/Email Order Notifications",
          "60 Days Dedicated Support"
        ]
      }
    ],
    posters: [
      { title: "Ultra-Fast Load Speeds", desc: "No more waiting. Load under 1s.", bg: "from-red-600 to-neutral-900", tag: "Speed Tech" },
      { title: "Next.js Custom Code", desc: "Bespoke code for premium results.", bg: "from-slate-900 to-red-700", tag: "Web Architecture" },
      { title: "Shopify Storefronts", desc: "Turn visual visitors into buyers", bg: "from-red-500 to-red-800", tag: "E-commerce" },
      { title: "Hospital Portals", desc: "Online patient appointment systems", bg: "from-zinc-800 to-stone-900", tag: "Healthcare UI" },
      { title: "Creative Portfolios", desc: "Showcase your artistic work beautifully", bg: "from-stone-950 to-red-600", tag: "Art/Design" },
      { title: "SEO Foundation Built-In", desc: "Rank page 1 on Google search", bg: "from-red-800 to-slate-900", tag: "SEO Ready" }
    ],
    faqs: [
      { q: "Which technologies do you use?", a: "We specialize in Next.js, React, TailwindCSS, WordPress, Shopify, and Node.js depending on project needs." },
      { q: "How long does it take to develop a site?", a: "A single landing page takes 3-5 days. A standard business website takes 7-12 days, and e-commerce portals take 2-3 weeks." },
      { q: "Do I get email addresses for my domain?", a: "Yes, our packages include support for setting up professional business emails (e.g. info@yourcompany.com)." },
      { q: "Is domain name and hosting cost included?", a: "We assist you in purchase to ensure you have full ownership, and set it up for free. Hosting fees are paid directly to providers." },
      { q: "Will my site look good on mobile devices?", a: "Absolutely. 100% of our code is mobile-first responsive and tested across iOS, Android, and tablets." },
      { q: "Can I update the website content on my own?", a: "Yes, we provide user-friendly Content Management Systems (CMS) like WordPress or custom admin portals with video walkthroughs." },
      { q: "What security measures do you implement?", a: "We configure free SSL encryption, firewalls, secure admin access, and auto-backup schedules." },
      { q: "Do you integrate payment gateways?", a: "Yes, we configure payment processors like Razorpay, Stripe, Paytm, and PayPal for seamless checkouts." },
      { q: "Can you redesign my existing outdated website?", a: "Yes! We can import your current content while completely upgrading the design, speed, and mobile responsiveness." },
      { q: "What is your post-launch support policy?", a: "We offer 30-60 days of free support for bugs or text modifications. Post that, affordable monthly retention plans are available." }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "ROI-driven advertising campaigns and Google Ads that boost leads, phone calls, and sales.",
    price: "₹2999+",
    image: "/images/portfolio_education.jpg",
    about: "Build a predictable flow of leads with Dhanya Enterprises' digital marketing services. We combine advanced Google Ads, targeted Meta Ads (Facebook/Instagram), local SEO optimization, and audience remarketing to deliver high-quality conversions at the lowest cost-per-click.",
    whoNeedsIt: [
      "Local Businesses Seeking Calls",
      "Real Estate Developers & Brokers",
      "Professional Consultants & Doctors",
      "B2B Manufacturers & Wholesalers"
    ],
    benefits: [
      "Ad copy crafted by experienced conversion copywriters.",
      "Accurate targeting based on interests, location, and search intent.",
      "Clear analytics tracking calls, form submissions, and sales.",
      "Continual conversion optimization to lower your cost-per-lead."
    ],
    whyUs: "We prioritize ROI over vanity metrics. We run A/B testing on ad designs, build custom high-converting landing pages, and provide transparent dashboards so you always know where your budget is spent.",
    packages: [
      {
        name: "Local Visibility Plan",
        price: "₹2999",
        description: "Dominate search inquiries in your local geographic area.",
        features: [
          "Google Business Profile optimization",
          "Local Keyword Citation setups",
          "5 Custom Social Ads posts",
          "Basic Analytics Reporting",
          "Email support"
        ]
      },
      {
        name: "Lead Generation Booster",
        price: "₹7999",
        description: "Optimized pay-per-click lead campaigns on Meta & Google Ads.",
        features: [
          "Meta Ads setup & management",
          "Google Search Ads setup",
          "A/B Split testing on Copy",
          "Custom Landing Page build",
          "Lead Form integration",
          "Weekly Video Reporting"
        ],
        popular: true
      },
      {
        name: "Omnichannel Growth",
        price: "₹15999+",
        description: "Dominating SEO, search ads, and social media retargeting concurrently.",
        features: [
          "Advanced SEO Strategy",
          "Google + Meta + LinkedIn Ads",
          "Dynamic Retargeting Funnels",
          "Monthly Competitor Audits",
          "Graphic Ad Creatives designed",
          "24/7 Account Slack Access"
        ]
      }
    ],
    posters: [
      { title: "Google Ads Dominance", desc: "Appear top of page for buyer keywords", bg: "from-red-500 to-red-800", tag: "PPC Ads" },
      { title: "Facebook Lead Funnels", desc: "Capture phone numbers instantly", bg: "from-slate-900 to-red-700", tag: "Social Gen" },
      { title: "Instagram Brand Growth", desc: "Build engagement and viral outreach", bg: "from-red-600 to-neutral-900", tag: "Instagram" },
      { title: "Retargeting Magic", desc: "Bring back past website visitors", bg: "from-slate-800 to-slate-950", tag: "Remarketing" },
      { title: "High ROI Copy", desc: "Words that convince people to buy", bg: "from-red-700 to-zinc-900", tag: "Copywriting" },
      { title: "Local Maps Rank Boost", desc: "Be the number 1 clinic/shop nearby", bg: "from-red-800 to-stone-900", tag: "Local SEO" }
    ],
    faqs: [
      { q: "How much ad budget do I need?", a: "You pay ad networks directly. We recommend starting with a minimum of ₹500 to ₹1000 per day for testing." },
      { q: "How fast will I see leads?", a: "Paid ads on Google and Facebook show results within 24-48 hours of launch." },
      { q: "How long does SEO take?", a: "SEO is an organic strategy that generally takes 3 to 6 months to start ranking on page 1." },
      { q: "Do you create the ad graphics?", a: "Yes, our team designs all required images, banners, and copywriting copy for the campaigns." },
      { q: "Can you guarantee leads?", a: "We guarantee standard-compliant ad execution and top search placement. Lead volume depends on market demand and product pricing." },
      { q: "What reports do we receive?", a: "We send easy-to-read weekly reports detailing impressions, click-through rates, total leads, and cost-per-lead." },
      { q: "Are ad costs paid to you?", a: "No, you link your billing card directly to Google/Facebook. You only pay our agency setup and management fee." },
      { q: "Do you run Ads on YouTube?", a: "Yes, we build and run Video Action Campaigns on YouTube for high brand exposure." },
      { q: "What is retargeting?", a: "It displays customized ads specifically to users who previously visited your site, leading to high conversions." },
      { q: "How do we get started?", a: "Complete our enquiry form. We will call you for a free 15-minute consultation to review your business model." }
    ]
  },
  "sales-marketing-training": {
    title: "Sales & Marketing Training",
    subtitle: "Empower your startup team or sales force with proven conversion methodologies and marketing structures.",
    price: "₹3999+",
    image: "/images/hero_team.jpg",
    about: "Great products need great selling. At Dhanya Enterprises, we provide professional training workshops for startup founders, sales managers, and marketing executives. Learn practical negotiation, script structure, digital campaign architecture, and closing methods.",
    whoNeedsIt: [
      "Startup Founders & Co-founders",
      "Corporate B2B Sales Executives",
      "Aspiring Digital Marketers",
      "Business Management Students"
    ],
    benefits: [
      "Curriculum focused on real Indian market cases.",
      "Practical interactive pitch sessions and mock calls.",
      "Takeaway checklists, templates, and tracking spreadsheets.",
      "Professional course completion certificate signed by experts."
    ],
    whyUs: "Our coaches are active agency practitioners who handle multi-million campaigns daily. We teach what works today, not old textbook concepts from decades ago.",
    packages: [
      {
        name: "Individual Bootcamp",
        price: "₹3999",
        description: "Deep dive training covering core selling and online lead conversion.",
        features: [
          "2 Days Intensive Online Class",
          "Sales Negotiation Templates",
          "Script Structure Guides",
          "Digital Ads Basic Overview",
          "Q&A session with founder",
          "Certificate of Completion"
        ]
      },
      {
        name: "Team Training Masterclass",
        price: "₹9999",
        description: "Customized corporate workshop designed for marketing groups (up to 5 staff).",
        features: [
          "4 Days Training (Online/Hybrid)",
          "Bespoke Curriculum matching industry",
          "Mock Pitch Grading Sessions",
          "Google/Meta Ad account audit",
          "Sales Funnel Setup assistance",
          "15 Days post-class Slack support"
        ],
        popular: true
      },
      {
        name: "Enterprise Corporate",
        price: "₹19999",
        description: "Complete sales transformation program for large marketing teams (up to 15 staff).",
        features: [
          "1 Week Custom Workshop (On-Site/Online)",
          "Live Call practice sessions",
          "Automated Email CRM setups",
          "Sales Playbook Design",
          "Weekly Performance Audits (1 Month)",
          "3 Months Support Hotline access"
        ]
      }
    ],
    posters: [
      { title: "Perfect the Sales Call", desc: "Proven methods to handle client objections", bg: "from-red-600 to-neutral-900", tag: "Sales Pitch" },
      { title: "Lead Nurture Playbook", desc: "Turn raw leads into closed deals", bg: "from-slate-900 to-red-700", tag: "Closing Skills" },
      { title: "Facebook Ads Masterclass", desc: "Master campaign structures step by step", bg: "from-red-500 to-red-800", tag: "Ad Training" },
      { title: "Negotiation Secrets", desc: "Protect your margins during negotiations", bg: "from-zinc-800 to-slate-950", tag: "Negotiation" },
      { title: "B2B Sales Outreach", desc: "Cold emailing templates that get replies", bg: "from-stone-900 to-red-600", tag: "Cold Email" },
      { title: "Analytics Demystified", desc: "Learn to read marketing dashboards", bg: "from-red-800 to-neutral-800", tag: "Metrics" }
    ],
    faqs: [
      { q: "Are classes live or recorded?", a: "Our bootcamps and team masterclasses are conducted live (online or hybrid) to allow direct interaction and feedback." },
      { q: "Is there any study material provided?", a: "Yes, you receive PDF guides, script worksheets, template links, and Excel tracker spreadsheets." },
      { q: "Do you offer offline training?", a: "Yes, for corporate and enterprise teams, we can conduct offline workshops at your office premises." },
      { q: "What size are the class batches?", a: "We keep standard batches under 10-15 members to ensure personalized attention and mock call reviews." },
      { q: "Is a certificate provided?", a: "Yes, a physical and digital certificate of course completion is issued by Dhanya Enterprises." },
      { q: "Can I choose specific topics to learn?", a: "Yes, corporate and team packages can have their curriculums fully tailored to cover your industry." },
      { q: "Do we get hands-on project experience?", a: "We build and audit campaigns using actual live ad accounts during the training." },
      { q: "What if I miss a live class?", a: "Full high-quality recordings of all sessions are shared with participants for review." },
      { q: "Do you offer placement support?", a: "We share job openings from our network of clients with standout individual trainees." },
      { q: "How can my team sign up?", a: "Select your desired corporate package and complete the enquiry form. We will call you to align on scheduling." }
    ]
  },
  "logo-branding": {
    title: "Logo & Branding",
    subtitle: "Establish a premium brand identity that builds credibility and leaves a lasting impact.",
    price: "₹1499+",
    image: "/images/portfolio_fashion.jpg",
    about: "Branding is how your customers perceive you. At Dhanya Enterprises, we design custom vector logos, choose sleek typography palettes, and establish color guidelines that represent your business values. Build a consistent brand identity that stands out in the marketplace.",
    whoNeedsIt: [
      "New Startup Ventures",
      "Firms Redesigning Visuals",
      "Product-Based Brands",
      "Corporate Agencies"
    ],
    benefits: [
      "100% custom vector files that scale to billboards without pixelation.",
      "Deep study of color psychology matched to your industry vertical.",
      "Complete set of file formats (AI, SVG, PDF, PNG, JPG).",
      "Includes corporate business card designs and letterhead drafts."
    ],
    whyUs: "We don't buy clip-art templates. Every concept is hand-drafted. Our packages include an in-depth brand guidelines manual detailing correct logo usages, typography rules, and color palettes.",
    packages: [
      {
        name: "Startup Logo Concept",
        price: "₹1499",
        description: "Affordable premium vector logo concepts for new startups.",
        features: [
          "2 Custom Logo Concepts",
          "High Resolution Vector Formats",
          "3 Revision Cycles",
          "Color Palette Schemes",
          "2 Days Delivery"
        ]
      },
      {
        name: "Essential Brand Kit",
        price: "₹4999",
        description: "Complete visual kit covering professional business stationery.",
        features: [
          "4 Premium Logo Concepts",
          "Corporate Business Card Design",
          "Letterhead & Envelope Layouts",
          "Social Media Kit (Profile, Banner templates)",
          "Unlimited Revision cycles",
          "Dedicated graphic designer"
        ],
        popular: true
      },
      {
        name: "Complete Corporate Identity",
        price: "₹12999+",
        description: "The ultimate guidelines package for scaling enterprises.",
        features: [
          "6 Concept Ideas",
          "Full Brand Style Manual Book (PDF)",
          "Typography Scale guidelines",
          "Brochure & Flyer templates",
          "Corporate PPT Presentation layout",
          "Trademark Transfer ownership documentation"
        ]
      }
    ],
    posters: [
      { title: "Vector Scale Design", desc: "No blur. High scalability.", bg: "from-red-600 to-neutral-900", tag: "Logos" },
      { title: "Color Psychology Book", desc: "Finding shades that drive trust", bg: "from-slate-900 to-red-700", tag: "Brand Colors" },
      { title: "Sleek Letterheads", desc: "Professional documents matching logos", bg: "from-red-500 to-red-800", tag: "Stationery" },
      { title: "Social Cover Banners", desc: "Consistent branding on Facebook/LinkedIn", bg: "from-zinc-800 to-slate-950", tag: "Social Kits" },
      { title: "Brochures & Catalogs", desc: "Foldable prints for marketing teams", bg: "from-stone-900 to-red-600", tag: "Print Media" },
      { title: "Brand Guidelines Manual", desc: "Rules for corporate consistency", bg: "from-red-800 to-neutral-900", tag: "Rules Book" }
    ],
    faqs: [
      { q: "Who owns the copyright of the logo?", a: "Once final payments are done, complete copyrights are transferred to you. We do not reuse your concepts." },
      { q: "How many logo revisions do I get?", a: "Depending on your selected plan, we provide 3 to unlimited revisions until you are fully satisfied." },
      { q: "What format will I receive?", a: "We deliver source files (Adobe Illustrator .AI, vector .SVG, print-ready .PDF, and transparent .PNG)." },
      { q: "Can you redesign my old logo?", a: "Yes, we can modernize your old logo, clean up vectors, and optimize the color gradients." },
      { q: "How long does branding take?", a: "Startup logos take 2-4 days. Essential kits take 5-7 days, and complete corporate manual books take 10-14 days." },
      { q: "What is a Social Media Kit?", a: "It includes correctly sized cover templates, profile icons, and post banners for Instagram, Facebook, and LinkedIn." },
      { q: "Do you design custom packaging?", a: "Yes, we offer box packaging, tag, and wrapper design under custom enterprise additions." },
      { q: "What is the Brand Guidelines Manual?", a: "A detailed document specifying font styles, hex color codes, minimum sizes, and forbidden modifications for the logo." },
      { q: "Can I see concepts before final delivery?", a: "Yes, we present high-resolution mockups on realistic items (like shirts, cups, tablets) for your visual review." },
      { q: "What if I do not like the first drafts?", a: "We review your design feedback and work on fresh concepts until the logo matches your aesthetic." }
    ]
  },
  "social-media-management": {
    title: "Social Media Management",
    subtitle: "Grow your Instagram and Facebook footprint with consistent content curation and organic growth.",
    price: "₹2499+",
    image: "/images/portfolio_restaurant.jpg",
    about: "Building an audience takes consistency. At Dhanya Enterprises, we manage your daily posting, write engaging captions, design beautiful feeds, script Reels, and schedule posts. We keep your target audience engaged while you focus on business execution.",
    whoNeedsIt: [
      "Local Cafes & Restaurant Brands",
      "E-commerce Retail Outlets",
      "Realtors and Fitness Coaches",
      "Educational Academies & Colleges"
    ],
    benefits: [
      "Expert content calendar designed a month in advance.",
      "High-engagement Reels, Carousel, and Single Post templates.",
      "Niche hashtag research and geolocation tagging.",
      "Monthly growth analytics detailing reach and followers."
    ],
    whyUs: "We don't post stock images. We design bespoke brand templates matching your visual guidelines. We script engaging reels and manage direct queries to turn social traffic into leads.",
    packages: [
      {
        name: "Aesthetic Feed Plan",
        price: "₹2499",
        description: "Keep your profile updated with clean, professional posts.",
        features: [
          "8 Custom Posts / Month",
          "Caption & Hashtag Research",
          "Grid Layout curation",
          "Monthly Performance reports",
          "Email support"
        ]
      },
      {
        name: "Brand Growth Booster",
        price: "₹5999",
        description: "Optimal plan for active businesses targeting Reels and stories.",
        features: [
          "15 Custom Graphics + 4 Reels / Month",
          "Custom Reels Scripting",
          "Daily Posting & Scheduling",
          "Story Graphics & Interactive polls",
          "Competitor Audits",
          "Priority Chat support"
        ],
        popular: true
      },
      {
        name: "Social Dominance",
        price: "₹11999+",
        description: "Omnichannel community building and multi-platform content curation.",
        features: [
          "30 Custom Posts + 8 Reels / Month",
          "Full Video/Reel Editing & Music mixing",
          "Cross-Posting (Insta, FB, LinkedIn, Twitter)",
          "Direct Message & Comments replying",
          "Influencer Campaign outreach assistance",
          "Bi-weekly Strategy video syncs"
        ]
      }
    ],
    posters: [
      { title: "Content Calendar Setup", desc: "30 days of posts organized in advance", bg: "from-red-600 to-neutral-900", tag: "Planning" },
      { title: "Cohesive Instagram Grid", desc: "Layout templates that look gorgeous", bg: "from-slate-900 to-red-700", tag: "Curation" },
      { title: "High Retention Reels", desc: "Short video scripts that capture attention", bg: "from-red-500 to-red-800", tag: "Video Content" },
      { title: "Engagement Boosters", desc: "Stories and Q&As that drive clicks", bg: "from-zinc-800 to-slate-950", tag: "Interactive" },
      { title: "Hashtag Blueprint", desc: "Find small/medium hashtags that rank", bg: "from-stone-900 to-red-600", tag: "Hashtags" },
      { title: "Competitor Analysis Map", desc: "Track what graphics work in your niche", bg: "from-red-800 to-neutral-900", tag: "Competitors" }
    ],
    faqs: [
      { q: "Which social networks do you manage?", a: "We manage Instagram, Facebook, LinkedIn, YouTube, Pinterest, and Twitter (X) platforms." },
      { q: "Do you shoot raw video for Reels?", a: "We edit raw video files sent by your team. For local Bangalore clients, offline shoot assistance can be arranged." },
      { q: "Can I approve posts before they go live?", a: "Yes, we share the entire month's content calendar for your edits and approval before scheduling." },
      { q: "How do you schedule posts?", a: "We use professional dashboard tools like Meta Business Suite to schedule content at optimal engagement hours." },
      { q: "How do you increase followers?", a: "We use organic hashtags, reels optimization, shareable infographic templates, and interaction tactics." },
      { q: "Do you reply to customer comments?", a: "Yes, our higher-tier packages include checking and replying to comments and direct messages based on your FAQs." },
      { q: "Do you run paid social ads?", a: "This service covers organic management. Paid ads fall under our dynamic Digital Marketing service." },
      { q: "Can I cancel the plan anytime?", a: "Yes, our plans are monthly retainers with no lock-in contract periods. Cancel with a 7-day notice." },
      { q: "What tools do you use for graphics?", a: "We design custom layouts using Adobe Illustrator, Photoshop, Figma, and Canva Teams." },
      { q: "When will I see page growth?", a: "Organic growth is a steady process. Engagement boosts are visible in week 2, while follower increases show in weeks 4-6." }
    ]
  },
  "graphic-design": {
    title: "Graphic Design",
    subtitle: "On-demand premium graphic designs, posters, ads, and brochures for your business marketing.",
    price: "₹999+",
    image: "/images/portfolio_healthcare.jpg",
    about: "Capture your customers' attention with modern visual aesthetics. At Dhanya Enterprises, we design custom flyers, brochures, banners, product packaging, and social media ad creatives that match your brand identity and drive visual curiosity.",
    whoNeedsIt: [
      "Marketing and Event Coordinators",
      "E-commerce Retail Outlets",
      "Corporate HRs (Internal graphics)",
      "Local Showrooms & Shops"
    ],
    benefits: [
      "Bespoke designs constructed from scratch (no overused templates).",
      "Delivered in print-ready high DPI vector and raster formats.",
      "Access to premium high-resolution stock graphics library.",
      "Fast 24-48 hours turnaround time for urgent templates."
    ],
    whyUs: "Our design aesthetics are clean, minimal, and premium. We utilize bold typography, correct spacing, and modern color theory to ensure your marketing collateral commands attention.",
    packages: [
      {
        name: "Single Creative",
        price: "₹999",
        description: "One custom high-resolution design for digital or print media.",
        features: [
          "1 Custom Graphic Concept",
          "Digital & Print-Ready format",
          "2 Revision Cycles",
          "24-48 Hours Delivery",
          "Source File included"
        ]
      },
      {
        name: "Starter Creative Bundle",
        price: "₹2999",
        description: "Four custom matching designs for event or campaign promotions.",
        features: [
          "4 Custom Graphic Designs",
          "Consistent layout theme across posts",
          "4 Revision Cycles",
          "PNG, PDF, and Vector Source Files",
          "Priority Delivery schedule"
        ],
        popular: true
      },
      {
        name: "Monthly Designer Retainer",
        price: "₹8999+",
        description: "Your own dedicated graphic designer on demand (up to 15 creatives).",
        features: [
          "Up to 15 Custom Creatives / Month",
          "Includes flyers, social ads, banners",
          "Unlimited Revision cycles",
          "Dedicated designer communication",
          "Stock photography access",
          "24h Delivery for urgent edits"
        ]
      }
    ],
    posters: [
      { title: "Marketing Flyers", desc: "High-impact layouts for printing distribution", bg: "from-red-600 to-neutral-900", tag: "Flyers" },
      { title: "Event Banners", desc: "Large horizontal displays for booths/stalls", bg: "from-slate-900 to-red-700", tag: "Banners" },
      { title: "Digital Ad Creatives", desc: "High-click designs for Google/Meta ads", bg: "from-red-500 to-red-800", tag: "Ad Graphics" },
      { title: "Infographics Curation", desc: "Represent complex data visually and cleanly", bg: "from-zinc-800 to-slate-950", tag: "Data Design" },
      { title: "Corporate Brochures", desc: "Foldable booklets for sales representatives", bg: "from-stone-900 to-red-600", tag: "Brochures" },
      { title: "Social Post Templates", desc: "Aesthetic visuals for brand consistency", bg: "from-red-800 to-slate-900", tag: "Templates" }
    ],
    faqs: [
      { q: "What source files do you deliver?", a: "We deliver industry-standard vector files (Adobe Illustrator .AI or .EPS) and high DPI .PSD or .Figma files." },
      { q: "How fast can you deliver a design?", a: "A single poster creative is delivered within 24-48 hours. Retainer bundles are delivered based on content calendar dates." },
      { q: "Do you design for print?", a: "Yes, we structure layouts in CMYK color profiles with correct bleed lines so you can print instantly." },
      { q: "Who pays for stock images?", a: "Our packages include access to Shutterstock and Freepik premium databases, so you pay nothing extra." },
      { q: "Can I request custom illustrations?", a: "We offer vector icon drawings. Complex custom character drawings are priced as custom additions." },
      { q: "How many changes can I request?", a: "We offer 2-4 revision cycles depending on the package, and unlimited revisions on monthly retainer plans." },
      { q: "Do you design PowerPoint slides?", a: "Yes, we design premium presentation decks and slide templates matching corporate guidelines." },
      { q: "How does the retainer plan work?", a: "You pay a monthly fee, and submit design briefs weekly. Your dedicated designer executes them with fast turnaround times." },
      { q: "Can you match my existing corporate fonts?", a: "Yes, simply send us your typography files or names, and we will build layouts using them." },
      { q: "Do you write copy for the graphics?", a: "We write short marketing taglines. Long descriptive copywriting is optimized under custom request." }
    ]
  }
};

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Retrieve service data, fallback to digital business card if invalid slug
  const service = servicesData[id] || servicesData["digital-business-card"];

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
                  Key Benefits & Outcomes
                </h4>
                <ul className="flex flex-col gap-4">
                  {service.benefits.map((item, idx) => (
                    <li key={idx} className="flex gap-3.5 items-start">
                      <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✔</div>
                      <p className="font-sans text-sm text-text-secondary leading-normal">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Dhanya Enterprises for this */}
              <div className="bg-primary/5 border border-primary/10 rounded-[18px] p-6">
                <h4 className="font-heading font-bold text-base text-primary mb-3 uppercase tracking-wider">
                  Why Choose Dhanya Enterprises?
                </h4>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {service.whyUs}
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Poster Gallery Section */}
        <section className="py-24 bg-[#F8F8F8] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-primary mb-2.5 block">
                Portfolio Showcase
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-dark tracking-tight mb-4">
                Promotional Poster Gallery
              </h2>
              <p className="font-sans text-base text-text-secondary">
                Explore real marketing and design layouts crafted by our agency designers. Click to preview in fullscreen.
              </p>
            </div>

            {/* Poster Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.posters.map((poster, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  onClick={() => setLightboxIndex(index)}
                  className="bg-white rounded-[18px] overflow-hidden border border-border-light shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative group flex flex-col justify-between"
                >
                  {/* Styled Mock Poster Graphic */}
                  <div className={`relative w-full aspect-[4/5] bg-gradient-to-br ${poster.bg} p-8 flex flex-col justify-between text-white overflow-hidden`}>
                    {/* Corner decorative circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-110 transition-transform" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    
                    {/* Badge */}
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
                      {poster.tag}
                    </span>

                    {/* Bold Typography */}
                    <div className="flex flex-col gap-3 relative z-10">
                      <h4 className="font-heading font-black text-2xl md:text-3xl leading-snug tracking-tight">
                        {poster.title}
                      </h4>
                      <p className="font-sans text-xs text-white/80 font-medium">
                        {poster.desc}
                      </p>
                    </div>

                    {/* Logo mock corner */}
                    <div className="flex items-center gap-1.5 opacity-60 self-end mt-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-white" />
                      <span className="font-heading font-black text-[10px] tracking-widest">DHANYA</span>
                    </div>

                    {/* Lightbox Trigger hover overlay */}
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-dark font-sans font-bold text-xs px-4 py-2.5 rounded-full shadow-lg">Preview Poster</span>
                    </div>
                  </div>
                  
                  {/* Poster Meta */}
                  <div className="p-4 bg-white border-t border-border-light">
                    <h5 className="font-heading font-bold text-sm text-dark mb-0.5">{poster.title}</h5>
                    <p className="font-sans text-[11px] text-text-secondary">{poster.tag}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

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

        {/* Accordion FAQ Section (10 questions) */}
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
                          placeholder="+91 98401 23456"
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
                        href={`https://wa.me/919840123456?text=Hi,%20I%27m%20interested%20in%20a%20free%20consultation%20for%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 font-sans font-bold text-sm py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        Book Consultation (WhatsApp)
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                      ✔
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-dark">Request Sent!</h4>
                    <p className="font-sans text-sm text-text-secondary max-w-sm">
                      Thank you for contacting Dhanya Enterprises. Our service specialists will call you back within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-primary hover:text-primary-hover font-sans font-semibold text-sm mt-4 underline focus:outline-none cursor-pointer"
                    >
                      Submit another query
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
