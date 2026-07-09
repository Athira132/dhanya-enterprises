import type { Metadata } from "next";
import ServiceClient from "./ServiceClient";

// Fast dynamic titles mapping for all 11 services to optimize SEO indexing
const serviceMeta: Record<string, { title: string; desc: string }> = {
  "website-design-development": {
    title: "Website Design & Development Services in Pattambi, Kerala",
    desc: "Get custom Next.js, React, and WordPress sites optimized for extreme speed and search index rankings by Dhanya Enterprises.",
  },
  "ecommerce-website-development": {
    title: "E-commerce Website Development Company in Kerala",
    desc: "Build secure e-commerce storefronts with Razorpay payment gates, stock managers, and seamless checkouts with Dhanya Enterprises.",
  },
  "seo": {
    title: "Search Engine Optimization (SEO) Services in Kerala",
    desc: "Rank #1 on Google maps and searches. Advanced keyword mapping, on-page optimization, and high-authority link acquisitions.",
  },
  "mobile-app-marketing": {
    title: "Mobile App Marketing & ASO Company in Kerala",
    desc: "Multiply app installations with targeted App Store Optimization (ASO) and cost-effective acquisition ad campaigns.",
  },
  "meta-ads": {
    title: "Meta Ads Agency - Facebook & Instagram Advertising Kerala",
    desc: "Target high-intent customers. Setup Meta Pixels, Conversions API, and high-converting graphic ad layouts.",
  },
  "graphic-design": {
    title: "Professional Graphic Design Company in Pattambi",
    desc: "Premium visual branding catalogs, corporate brochures, social media marketing designs, and business logo layouts.",
  },
  "video-editing-motion-graphics": {
    title: "Video Editing & Motion Graphics Agency in Kerala",
    desc: "Capture customer attention with engaging Reels, text-animations, pro transitions, and color-graded media clips.",
  },
  "lead-generation-campaigns": {
    title: "Lead Generation Agency - Sales Funnel Builders Kerala",
    desc: "Acquire high-intent qualified buyer leads daily with premium landing pages, CRM automations, and custom query funnels.",
  },
  "local-seo-google-business-profile": {
    title: "Local SEO & Google Business Profile Optimization Kerala",
    desc: "Dominate local map searches and increase walking customers directly to your storefront opposite Police Station, Pattambi.",
  },
  "marketing-strategy-consulting": {
    title: "Marketing Strategy & Business Consulting Pattambi",
    desc: "Interactive strategy consult workshops, competitor auditing, and custom 12-month scaling roadmaps for start-ups.",
  },
  "marketplace-marketing": {
    title: "Marketplace Marketing Agency - Amazon & Flipkart Kerala",
    desc: "Scale product sales. Optimize listings search tags, design A+ content layouts, and run optimized marketplace ads.",
  },
};

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const meta = serviceMeta[id] || serviceMeta["website-design-development"];

  return {
    title: meta.title,
    description: meta.desc,
    alternates: {
      canonical: `/services/${id}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  return <ServiceClient params={params} />;
}
