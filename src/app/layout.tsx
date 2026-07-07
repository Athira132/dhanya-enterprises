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
  title: "Dhanya Enterprises - Digital Marketing Agency",
  description: "Grow your business with powerful digital marketing. We help businesses increase visibility, generate quality leads, build strong brands, and achieve measurable growth.",
  keywords: "digital marketing, SEO, Google Ads, social media marketing, branding, web development, content marketing, India agency",
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
        {children}
      </body>
    </html>
  );
}
