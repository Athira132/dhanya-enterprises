import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Dhanya Enterprises Pattambi Palakkad",
  description: "Get office directions or query a campaign quote. Contact Dhanya Enterprises digital marketing branch opposite Police Station, Pattambi, Kerala. Call +91 99619 92772.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
