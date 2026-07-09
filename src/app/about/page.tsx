import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Dhanya Enterprises Digital Marketing Pattambi",
  description: "Learn how Dhanya Enterprises helps startups and established brands in Pattambi, Kerala scale up using professional web development, search engine optimization, and brand strategies.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
