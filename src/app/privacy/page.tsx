import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Privacy Policy | Dhanya Enterprises Pattambi",
  description: "Read the Privacy Policy of Dhanya Enterprises. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-3xl md:text-4xl text-dark tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-red font-sans text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <p><strong>Effective Date:</strong> July 13, 2026</p>
            <p>
              At Dhanya Enterprises, we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose personal data when you visit our website or use our digital marketing services.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide to us directly through contact forms, newsletter sign-ups, or when requesting consultations. This may include your name, email address, phone number, and business details.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information to respond to inquiries, provide and optimize our marketing and web development services, send newsletters, and comply with legal requirements.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">3. Data Protection</h2>
            <p>
              We implement industry-standard administrative, physical, and electronic security measures to safeguard your personal data from unauthorized access, modification, or disclosure.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">4. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience, track traffic metrics, and improve performance. You can manage your cookie preferences through your web browser settings.
            </p>
            <h2 className="font-heading font-bold text-xl text-dark mt-4">5. Contact Details</h2>
            <p>
              For any questions regarding this Privacy Policy, please contact us at: <br />
              Email: <strong>dhanyaenterprisesptb@gmail.com</strong><br />
              Phone: <strong>+91 97451 08772</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
