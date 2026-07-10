import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Dhanya Enterprises Pattambi Palakkad",
  description: "Get directions or request a quote. Contact Dhanya Enterprises, the top digital agency opposite Police Station, Pattambi, Kerala. Call +91 99619 92772.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
