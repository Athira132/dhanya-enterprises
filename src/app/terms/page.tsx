import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Terms of Service | Dhanya Enterprises Pattambi",
  description: "Review the Terms of Service for using Dhanya Enterprises services and web platform.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-3xl md:text-4xl text-dark tracking-tight mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-red font-sans text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <p><strong>Effective Date:</strong> July 13, 2026</p>
            <p>
              Welcome to Dhanya Enterprises. By accessing or using our website and digital services, you agree to comply with and be bound by the following Terms of Service.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">1. Use of Services</h2>
            <p>
              You agree to use our website and services only for lawful purposes. You must not violate local or international laws, infringe on third-party intellectual property, or upload harmful code.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">2. Intellectual Property</h2>
            <p>
              All materials, code, visuals, and content displayed on this website are the property of Dhanya Enterprises or licensed partners and are protected by copyright and intellectual property laws.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">3. Limitation of Liability</h2>
            <p>
              Dhanya Enterprises will not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, websites, or marketing materials.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">4. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Kerala.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">5. Contact Information</h2>
            <p>
              For questions regarding these Terms of Service, please contact us at:<br />
              Email: <strong>dhanyaenterprisesptb@gmail.com</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
