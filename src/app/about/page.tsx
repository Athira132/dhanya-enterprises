import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Dhanya Enterprises Digital Marketing Pattambi",
  description: "Learn how Dhanya Enterprises in Pattambi, Kerala helps brands scale up using premium web development, SEO, Ads, and local digital marketing strategies.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
