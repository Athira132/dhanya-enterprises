import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Services | Dhanya Enterprises Kerala",
  description: "Boost your online sales and conversions. We offer website development, SEO, graphic design, Google/Meta Ads, and local GBP maps optimizations in Pattambi.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
