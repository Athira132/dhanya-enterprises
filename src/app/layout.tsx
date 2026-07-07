import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dhanya Enterprises | Digital Marketing Agency",
  description: "We help businesses grow with smart digital marketing solutions, including social media management, SEO, website development, branding, and online advertising.",
  keywords: "digital marketing, SEO, Google Ads, social media marketing, branding, web development, content marketing, Pattambi, Kerala, India",
  openGraph: {
    title: "Dhanya Enterprises | Digital Marketing Agency",
    description: "We help businesses grow with smart digital marketing solutions, including social media management, SEO, website development, branding, and online advertising.",
    url: "https://dhanyaenterprises.com",
    siteName: "Dhanya Enterprises",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#1F2937]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dhanya Enterprises",
              "image": "https://dhanyaenterprises.vercel.app/images/logo.png",
              "@id": "https://dhanyaenterprises.vercel.app/#localbusiness",
              "url": "https://dhanyaenterprises.vercel.app",
              "telephone": "+919961992772",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hayath Complex, Opp. Police station",
                "addressLocality": "Pattambi",
                "addressRegion": "Kerala",
                "postalCode": "679303",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/dhanyaenterprisesptb",
                "https://www.instagram.com/dhanyaenterprisesptb/",
                "https://www.youtube.com/@dhanyaenterprises",
                "https://www.linkedin.com/company/dhanyaenterprises/",
                "https://x.com/dhanyaent"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
