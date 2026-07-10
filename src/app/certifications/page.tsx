import type { Metadata } from "next";
import CertificationsClient from "./CertificationsClient";

export const metadata: Metadata = {
  title: "Agency Certifications & Credentials | Dhanya Enterprises",
  description: "Check our verified partnerships. Dhanya Enterprises holds active Google Ads Search/Display certifications, Meta Certified status, and ISO standards.",
  alternates: {
    canonical: "/certifications",
  },
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
